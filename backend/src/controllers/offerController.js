const Offer = require('../models/Offer');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get all active promotional offers
// @route   GET /api/offers
// @access  Public
const getOffers = async (req, res) => {
  try {
    const { storeId } = req.query;

    if (isDbConnected()) {
      let query = {};
      if (storeId) query.storeId = storeId;
      const offers = await Offer.find(query).sort({ isFeatured: -1, createdAt: -1 });
      return res.json({ success: true, count: offers.length, data: offers });
    }

    let filtered = [...mockData.offers];
    if (storeId) filtered = filtered.filter(o => o.storeId === storeId);
    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.json({ success: true, count: mockData.offers.length, data: mockData.offers });
  }
};

// @desc    Create a new offer
// @route   POST /api/offers
// @access  Private / Retailer
const createOffer = async (req, res) => {
  try {
    const {
      storeId,
      storeName,
      storeArea,
      productId,
      productName,
      title,
      description,
      discountPercent,
      offerPrice,
      originalPrice,
      validUntil,
      couponCode,
      bannerImage,
      isFeatured,
    } = req.body;

    const offerId = `off-${Date.now()}`;

    const newOffer = {
      id: offerId,
      storeId,
      storeName: storeName || 'Verified Store',
      storeArea: storeArea || 'City Market',
      productId,
      productName,
      title,
      description,
      discountPercent: Number(discountPercent) || 10,
      offerPrice: offerPrice ? Number(offerPrice) : undefined,
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      validUntil: validUntil || new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      couponCode,
      bannerImage: bannerImage || 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80',
      isFeatured: Boolean(isFeatured),
    };

    if (isDbConnected()) {
      const offer = await Offer.create(newOffer);
      return res.status(201).json({ success: true, data: offer });
    }

    mockData.offers.unshift(newOffer);
    res.status(201).json({ success: true, data: newOffer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete an offer
// @route   DELETE /api/offers/:id
// @access  Private / Retailer
const deleteOffer = async (req, res) => {
  try {
    if (isDbConnected()) {
      await Offer.findOneAndDelete({
        $or: [{ id: req.params.id }, { _id: req.params.id }],
      });
    } else {
      mockData.offers = mockData.offers.filter(o => o.id !== req.params.id);
    }
    res.json({ success: true, message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getOffers, createOffer, deleteOffer };
