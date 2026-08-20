const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    storeId: { type: String, required: true, index: true },
    productId: { type: String },
    customerName: { type: String, required: true },
    customerAvatar: { type: String },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    date: { type: String, default: () => new Date().toISOString().split('T')[0] },
    verifiedPurchase: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
