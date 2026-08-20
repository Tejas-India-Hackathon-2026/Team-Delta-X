const Product = require('../models/Product');
const Inventory = require('../models/Inventory');

// @desc    Get all products with filters & search
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const { categoryId, brand, q, minPrice, maxPrice } = req.query;
    let query = {};

    if (categoryId) {
      query.categoryId = categoryId;
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
      query.$or = [
        { name: new RegExp(q, 'i') },
        { brand: new RegExp(q, 'i') },
        { keywords: { $in: [new RegExp(q, 'i')] } },
      ];
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get product by ID with live store inventories
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      $or: [{ id: req.params.id }, { _id: req.params.id }],
    });

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Fetch related inventory across stores
    const inventories = await Inventory.find({ productId: product.id });

    res.json({
      success: true,
      data: {
        ...product.toObject(),
        inventories,
      },
    });
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

    const product = await Product.create({
      id: productId,
      name,
      brand,
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
    });

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct };
