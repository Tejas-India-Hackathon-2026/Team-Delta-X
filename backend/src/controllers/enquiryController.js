const Enquiry = require('../models/Enquiry');

// @desc    Get enquiries for a store
// @route   GET /api/enquiries/store/:storeId
// @access  Private / Retailer
const getStoreEnquiries = async (req, res) => {
  try {
    const { storeId } = req.params;
    const enquiries = await Enquiry.find({ storeId }).sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Send customer enquiry to store
// @route   POST /api/enquiries
// @access  Public / Customer
const createEnquiry = async (req, res) => {
  try {
    const {
      storeId,
      storeName,
      customerId,
      customerName,
      customerPhone,
      customerMessage,
      productId,
      productName,
      productPrice,
    } = req.body;

    const enquiryId = `enq-${Date.now()}`;

    const enquiry = await Enquiry.create({
      id: enquiryId,
      storeId,
      storeName: storeName || 'Neighborhood Store',
      customerId: customerId || 'guest-user',
      customerName: customerName || 'Shopper',
      customerPhone: customerPhone || '+91 9876543210',
      customerMessage,
      productId,
      productName,
      productPrice,
    });

    res.status(201).json({ success: true, data: enquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Reply to customer enquiry (Retailer action)
// @route   PATCH /api/enquiries/:id/reply
// @access  Private / Retailer
const replyEnquiry = async (req, res) => {
  try {
    const { replyMessage } = req.body;
    const enquiry = await Enquiry.findOneAndUpdate(
      { $or: [{ id: req.params.id }, { _id: req.params.id }] },
      {
        replyMessage,
        status: 'replied',
        repliedAt: new Date().toISOString(),
      },
      { new: true }
    );

    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    res.json({ success: true, data: enquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getStoreEnquiries, createEnquiry, replyEnquiry };
