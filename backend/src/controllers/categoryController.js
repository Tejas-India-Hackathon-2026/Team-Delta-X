const Category = require('../models/Category');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a category
// @route   POST /api/categories
// @access  Admin
const createCategory = async (req, res) => {
  try {
    const { name, slug, emoji, iconName, description, color, subcategories } = req.body;
    const categoryId = `cat-${(slug || name).toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;

    const category = await Category.create({
      id: categoryId,
      name,
      slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
      emoji: emoji || '📦',
      iconName: iconName || 'Package',
      description: description || '',
      color: color || 'from-blue-500 to-indigo-600',
      subcategories: subcategories || [],
      isCustom: true,
    });

    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getCategories, createCategory };
