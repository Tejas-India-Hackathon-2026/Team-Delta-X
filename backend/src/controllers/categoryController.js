const Category = require('../models/Category');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    if (isDbConnected()) {
      const categories = await Category.find().sort({ name: 1 });
      return res.json({ success: true, count: categories.length, data: categories });
    }
    return res.json({ success: true, count: mockData.categories.length, data: mockData.categories });
  } catch (error) {
    return res.json({ success: true, count: mockData.categories.length, data: mockData.categories });
  }
};

// @desc    Create a category
// @route   POST /api/categories
// @access  Admin
const createCategory = async (req, res) => {
  try {
    const { name, slug, emoji, iconName, description, color, subcategories } = req.body;
    const categoryId = `cat-${(slug || name).toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;

    const newCat = {
      id: categoryId,
      name,
      slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
      emoji: emoji || '📦',
      iconName: iconName || 'Package',
      description: description || '',
      color: color || 'from-blue-500 to-indigo-600',
      subcategories: subcategories || [],
      isCustom: true,
    };

    if (isDbConnected()) {
      const category = await Category.create(newCat);
      return res.status(201).json({ success: true, data: category });
    }

    mockData.categories.push(newCat);
    res.status(201).json({ success: true, data: newCat });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getCategories, createCategory };
