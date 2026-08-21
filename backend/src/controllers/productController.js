const Product = require('../models/Product');
const Inventory = require('../models/Inventory');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get all products with strict filters & search
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const { category, categoryId, categorySlug, brand, q, subcategory, minPrice, maxPrice } = req.query;
    const targetCategory = categoryId || category || categorySlug;

    if (isDbConnected()) {
      let query = {};
      
      // Strict category filter
      if (targetCategory) {
        query.$or = [
          { categoryId: targetCategory },
          { categoryId: new RegExp(targetCategory.replace(/^cat-/, ''), 'i') }
        ];
      }
      
      if (subcategory) {
        query.subcategory = new RegExp(subcategory, 'i');
      }

      if (brand) {
        query.brand = new RegExp(brand, 'i');
      }

      if (minPrice || maxPrice) {
        query.basePrice = {};
        if (minPrice) query.basePrice.$gte = Number(minPrice);
        if (maxPrice) query.basePrice.$lte = Number(maxPrice);
      }

      if (q) {
        const regex = new RegExp(q.trim(), 'i');
        const textQuery = {
          $or: [
            { name: regex },
            { brand: regex },
            { subcategory: regex },
            { description: regex },
            { keywords: { $in: [regex] } },
            { tags: { $in: [regex] } }
          ]
        };
        
        if (query.$or) {
          query = { $and: [{ $or: query.$or }, textQuery] };
        } else {
          query = { ...query, ...textQuery };
        }
      }

      const products = await Product.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: products.length, data: products });
    }

    // In-memory fallback filtering
    let filtered = [...mockData.products];

    // 1. Strict Category filter
    if (targetCategory) {
      const catLower = targetCategory.toLowerCase();
      filtered = filtered.filter(p => 
        p.categoryId.toLowerCase() === catLower ||
        p.categoryId.toLowerCase().includes(catLower.replace(/^cat-/, ''))
      );
    }

    // 2. Subcategory filter
    if (subcategory) {
      filtered = filtered.filter(p => p.subcategory.toLowerCase() === subcategory.toLowerCase());
    }

    // 3. Brand filter
    if (brand) {
      filtered = filtered.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()));
    }

    // 4. Price filter
    if (minPrice) {
      filtered = filtered.filter(p => p.basePrice >= Number(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(p => p.basePrice <= Number(maxPrice));
    }

    // 5. Search Query filter (checks name, brand, keywords, description, tags, subcategory strictly)
    if (q && q.trim()) {
      const terms = q.toLowerCase().trim().split(/\s+/).filter(t => t.length > 0);
      filtered = filtered.filter(p => {
        const textPool = [
          p.name,
          p.brand,
          p.subcategory,
          p.description,
          ...(p.keywords || []),
          ...(p.tags || [])
        ].join(' ').toLowerCase();

        return terms.every(t => textPool.includes(t));
      });
    }

    return res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    return res.json({ success: true, count: mockData.products.length, data: mockData.products });
  }
};

// @desc    Get product by ID with live store inventories
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    if (isDbConnected()) {
      const product = await Product.findOne({
        $or: [{ id: req.params.id }, { _id: req.params.id }],
      });
      if (product) {
        const inventories = await Inventory.find({ productId: product.id });
        return res.json({
          success: true,
          data: { ...product.toObject(), inventories },
        });
      }
    }

    const product = mockData.products.find(p => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const inventories = mockData.inventory.filter(i => i.productId === product.id);
    res.json({ success: true, data: { ...product, inventories } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new product catalog item
// @route   POST /api/products
// @access  Private / Retailer / Admin
const createProduct = async (req, res) => {
  try {
    const {
      name,
      brand,
      categoryId,
      subcategory,
      description,
      specifications,
      image,
      basePrice,
      mrp,
      isMedicine,
      requiresPrescription,
      keywords,
      tags,
    } = req.body;

    const productId = `prod-${(brand || 'item').toLowerCase()}-${(name || 'p').toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Date.now()}`;

    const newProduct = {
      id: productId,
      name,
      brand: brand || 'Generic',
      categoryId: categoryId || 'cat-grocery',
      subcategory: subcategory || 'General',
      description: description || name,
      specifications: specifications || {},
      image: image || 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
      basePrice: Number(basePrice) || 99,
      mrp: Number(mrp) || Number(basePrice) || 99,
      isMedicine: isMedicine || false,
      requiresPrescription: requiresPrescription || false,
      keywords: keywords || [name.toLowerCase()],
      tags: tags || ['Local Stock'],
    };

    if (isDbConnected()) {
      const product = await Product.create(newProduct);
      return res.status(201).json({ success: true, data: product });
    }

    mockData.products.unshift(newProduct);
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get detailed comparison data for a product (Primary store comparison + Same-category alternatives)
// @route   GET /api/products/:id/compare
// @access  Public
const getProductComparison = async (req, res) => {
  try {
    const { id } = req.params;

    let product = null;
    let inventories = [];
    let alternatives = [];

    if (isDbConnected()) {
      product = await Product.findOne({ $or: [{ id }, { _id: id }] });
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }

      inventories = await Inventory.find({ productId: product.id });
      // Same subcategory/category alternatives strictly
      alternatives = await Product.find({
        categoryId: product.categoryId,
        id: { $ne: product.id }
      }).limit(6);
    } else {
      product = mockData.products.find(p => p.id === id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }

      inventories = mockData.inventory.filter(i => i.productId === product.id);
      
      // Strict same-category alternatives
      alternatives = mockData.products.filter(p => 
        p.categoryId === product.categoryId && 
        p.id !== product.id &&
        (p.subcategory === product.subcategory || true)
      ).slice(0, 6);
    }

    // Attach store metadata to each inventory item
    const storesMap = new Map((mockData.stores || []).map(s => [s.id, s]));
    const minPrice = inventories.length > 0 ? Math.min(...inventories.map(i => i.price)) : product.basePrice;

    const merchantBreakdown = inventories.map(inv => {
      const store = storesMap.get(inv.storeId) || {
        id: inv.storeId,
        name: 'Local Partner Store',
        area: 'Main Market Area',
        rating: 4.8,
        distanceKm: 0.4
      };

      return {
        id: inv.id,
        storeId: inv.storeId,
        storeName: store.name,
        storeArea: store.area,
        storeRating: store.rating,
        storeDistanceKm: store.distanceKm || 0.4,
        price: inv.price,
        mrp: inv.mrp || product.mrp,
        discountPercent: inv.discountPercent || Math.round(((inv.mrp - inv.price) / inv.mrp) * 100),
        stockQuantity: inv.stockQuantity,
        status: inv.status || (inv.stockQuantity > 0 ? 'in_stock' : 'out_of_stock'),
        isBestPrice: inv.price === minPrice,
        lastUpdated: inv.lastUpdated || '10 mins ago'
      };
    }).sort((a, b) => a.price - b.price);

    return res.json({
      success: true,
      data: {
        product,
        minPrice,
        merchantsCount: merchantBreakdown.length,
        merchants: merchantBreakdown,
        alternatives: alternatives.map(alt => ({
          id: alt.id,
          name: alt.name,
          brand: alt.brand,
          categoryId: alt.categoryId,
          subcategory: alt.subcategory,
          image: alt.image,
          basePrice: alt.basePrice,
          mrp: alt.mrp
        }))
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct, getProductComparison };
