const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    storeId: {
      type: String,
      required: true,
      index: true,
    },
    productId: {
      type: String,
      required: true,
      index: true,
    },
    price: {
      type: Number,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    discountPercent: {
      type: Number,
      default: 0,
    },
    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ['in_stock', 'low_stock', 'out_of_stock', 'on_order'],
      default: 'in_stock',
    },
    lastUpdated: {
      type: String,
      default: () => new Date().toISOString(),
    },
    isBestPrice: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Compound index for unique store-product inventory pairs
inventorySchema.index({ storeId: 1, productId: 1 }, { unique: true });

module.exports = mongoose.model('Inventory', inventorySchema);
