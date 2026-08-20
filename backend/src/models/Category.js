const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    iconName: {
      type: String,
      default: 'Package',
    },
    emoji: {
      type: String,
      default: '📦',
    },
    description: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'from-blue-500 to-indigo-600',
    },
    subcategories: [{ type: String }],
    productCount: {
      type: Number,
      default: 0,
    },
    isCustom: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
