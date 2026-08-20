const mongoose = require('mongoose');

const demandSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    brand: { type: String, required: true },
    categoryId: { type: String, required: true },
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerEmail: { type: String },
    customerArea: { type: String, required: true },
    customerCoords: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    radiusKm: { type: Number, default: 10 },
    searchesCount: { type: Number, default: 1 },
    interestedCustomersCount: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ['pending', 'viewed', 'fulfilled', 'cancelled'],
      default: 'pending',
    },
    fulfilledByStoreId: { type: String },
    fulfilledAt: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Demand', demandSchema);
