const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    storeId: { type: String, required: true, index: true },
    storeName: { type: String, required: true },
    storeArea: { type: String, required: true },
    productId: { type: String },
    productName: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    discountPercent: { type: Number, required: true },
    offerPrice: { type: Number },
    originalPrice: { type: Number },
    validUntil: { type: String, required: true },
    couponCode: { type: String },
    bannerImage: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Offer', offerSchema);
