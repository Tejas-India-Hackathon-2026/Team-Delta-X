const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      default: '',
    },
    sku: {
      type: String,
      required: true,
    },
    modelNumber: {
      type: String,
    },
    description: {
      type: String,
      default: '',
    },
    specifications: {
      type: Map,
      of: String,
      default: {},
    },
    image: {
      type: String,
      required: true,
    },
    isMedicine: {
      type: Boolean,
      default: false,
    },
    requiresPrescription: {
      type: Boolean,
      default: false,
    },
    keywords: [{ type: String }],
    basePrice: {
      type: Number,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

// Full text index for fast search queries
productSchema.index({ name: 'text', brand: 'text', keywords: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
