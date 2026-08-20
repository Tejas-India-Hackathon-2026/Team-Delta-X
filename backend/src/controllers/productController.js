const Product = require('../models/Product');
const Inventory = require('../models/Inventory');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get all products with filters & search
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const { categoryId, brand, q, minPrice, maxPrice } = req.query;

    if (isDbConnected()) {
      let query = {};
      if (categoryId) query.categoryId = categoryId;
      if (brand) query.brand = new RegExp(brand, 'i');
      if (minPrice || maxPrice) {
        query.basePrice = {};
        if (minPrice) query.basePrice.$gte = Number(minPrice);
        if (maxPrice) query.basePrice.$lte = Number(maxPrice);
      }
      if (q) {
        query.$or = [
          { name: new RegExp(q, 'i') },
          { brand: new RegExp(q, 'i') },
          { keywords: { $in: [new RegExp(q, 'i')] } },
        ];
      }
      const products = await Product.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: products.length, data: products });
    }

    let filtered = [...mockData.products];
    if (categoryId) filtered = filtered.filter(p => p.categoryId === categoryId);
    if (brand) filtered = filtered.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()));
    if (q) {
      const lower = q.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower) ||
        p.keywords?.some(k => k.toLowerCase().includes(lower))
      );
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
    const sku = `SKU-${Date.now().toString().slice(-6)}`;

    const newProd = {
      id: productId,
      name,
      brand: brand || 'Generic',
      categoryId: categoryId || 'cat-general',
      subcategory: subcategory || '',
      sku,
      description: description || '',
      specifications: specifications || {},
      image: image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      basePrice: Number(basePrice) || 100,
      mrp: Number(mrp) || Number(basePrice) * 1.2,
      isMedicine: Boolean(isMedicine),
      requiresPrescription: Boolean(requiresPrescription),
      keywords: keywords || [name, brand],
      tags: tags || [],
    };

    if (isDbConnected()) {
      const product = await Product.create(newProd);
      return res.status(201).json({ success: true, data: product });
    }

    mockData.products.unshift(newProd);
    res.status(201).json({ success: true, data: newProd });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct };
