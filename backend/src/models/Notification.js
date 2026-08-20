const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    userId: { type: String, index: true },
    type: {
      type: String,
      enum: ['stock_alert', 'price_drop', 'demand_match', 'offer', 'enquiry', 'system'],
      default: 'system',
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    link: { type: String },
    timestamp: { type: String, default: () => new Date().toISOString() },
    read: { type: Boolean, default: false },
    metadata: {
      productId: String,
      storeId: String,
      demandId: String,
      oldPrice: Number,
      newPrice: Number,
      distanceKm: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
