const Enquiry = require('../models/Enquiry');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get enquiries for a store
// @route   GET /api/enquiries/store/:storeId
// @access  Private / Retailer
const getStoreEnquiries = async (req, res) => {
  try {
    const { storeId } = req.params;

    if (isDbConnected()) {
      const enquiries = await Enquiry.find({ storeId }).sort({ createdAt: -1 });
      return res.json({ success: true, count: enquiries.length, data: enquiries });
    }

    const filtered = mockData.enquiries.filter(e => e.storeId === storeId);
    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.json({ success: true, count: 0, data: [] });
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

    const newEnquiry = {
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
      status: 'new',
      createdAt: 'Just now',
    };

    if (isDbConnected()) {
      const enquiry = await Enquiry.create(newEnquiry);
      return res.status(201).json({ success: true, data: enquiry });
    }

    mockData.enquiries.unshift(newEnquiry);
    res.status(201).json({ success: true, data: newEnquiry });
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

    if (isDbConnected()) {
      const enquiry = await Enquiry.findOneAndUpdate(
        { $or: [{ id: req.params.id }, { _id: req.params.id }] },
        {
          replyMessage,
          status: 'replied',
          repliedAt: new Date().toISOString(),
        },
        { new: true }
      );

      if (enquiry) return res.json({ success: true, data: enquiry });
    }

    const enquiry = mockData.enquiries.find(e => e.id === req.params.id);
    if (enquiry) {
      enquiry.replyMessage = replyMessage;
      enquiry.status = 'replied';
      enquiry.repliedAt = 'Just now';
      return res.json({ success: true, data: enquiry });
    }

    res.status(404).json({ success: false, message: 'Enquiry not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getStoreEnquiries, createEnquiry, replyEnquiry };
