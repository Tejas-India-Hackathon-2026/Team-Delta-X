const Demand = require('../models/Demand');

// @desc    Get all customer demands (filtered by category or area)
// @route   GET /api/demands
// @access  Public / Retailer
const getDemands = async (req, res) => {
  try {
    const { categoryId, status } = req.query;
    let query = {};
    if (categoryId) query.categoryId = categoryId;
    if (status) query.status = status;

    const demands = await Demand.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: demands.length, data: demands });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Post a new customer demand
// @route   POST /api/demands
// @access  Public / Customer
const createDemand = async (req, res) => {
  try {
    const {
      productId,
      productName,
      brand,
      categoryId,
      customerId,
      customerName,
      customerPhone,
      customerArea,
      customerCoords,
      notes,
    } = req.body;

    const demandId = `dem-${Date.now()}`;

    const demand = await Demand.create({
      id: demandId,
      productId: productId || `custom-${Date.now()}`,
      productName,
      brand: brand || 'Generic',
      categoryId: categoryId || 'cat-general',
      customerId: customerId || 'guest-shopper',
      customerName: customerName || 'Shopper',
      customerPhone: customerPhone || '+91 9876543210',
      customerArea: customerArea || 'Local Area',
      customerCoords: customerCoords || { lat: 12.9352, lng: 77.6245 },
      notes: notes || '',
    });

    res.status(201).json({ success: true, data: demand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Fulfill customer demand item by merchant
// @route   PATCH /api/demands/:id/fulfill
// @access  Private / Retailer
const fulfillDemand = async (req, res) => {
  try {
    const { storeId } = req.body;
    const demand = await Demand.findOneAndUpdate(
      { $or: [{ id: req.params.id }, { _id: req.params.id }] },
      {
        status: 'fulfilled',
        fulfilledByStoreId: storeId,
        fulfilledAt: new Date().toISOString(),
      },
      { new: true }
    );

    if (!demand) {
      return res.status(404).json({ success: false, message: 'Demand not found' });
    }

    res.json({ success: true, data: demand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getDemands, createDemand, fulfillDemand };
