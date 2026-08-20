const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    storeId: { type: String, required: true, index: true },
    storeName: { type: String, required: true },
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerMessage: { type: String, required: true },
    productId: { type: String },
    productName: { type: String },
    productPrice: { type: Number },
    status: {
      type: String,
      enum: ['new', 'replied', 'converted', 'closed'],
      default: 'new',
    },
    replyMessage: { type: String },
    repliedAt: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enquiry', enquirySchema);
