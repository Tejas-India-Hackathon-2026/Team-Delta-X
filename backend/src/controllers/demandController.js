const Demand = require('../models/Demand');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get all customer demands (filtered by category or area)
// @route   GET /api/demands
// @access  Public / Retailer
const getDemands = async (req, res) => {
  try {
    const { categoryId, status } = req.query;

    if (isDbConnected()) {
      let query = {};
      if (categoryId) query.categoryId = categoryId;
      if (status) query.status = status;

      const demands = await Demand.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: demands.length, data: demands });
    }

    let filtered = [...mockData.demands];
    if (categoryId) filtered = filtered.filter(d => d.categoryId === categoryId);
    if (status) filtered = filtered.filter(d => d.status === status);

    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.json({ success: true, count: mockData.demands.length, data: mockData.demands });
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

    const newDemand = {
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
      status: 'pending',
      searchesCount: 1,
      interestedCustomersCount: 1,
      createdAt: 'Just now',
    };

    if (isDbConnected()) {
      const demand = await Demand.create(newDemand);
      return res.status(201).json({ success: true, data: demand });
    }

    mockData.demands.unshift(newDemand);
    res.status(201).json({ success: true, data: newDemand });
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

    if (isDbConnected()) {
      const demand = await Demand.findOneAndUpdate(
        { $or: [{ id: req.params.id }, { _id: req.params.id }] },
        {
          status: 'fulfilled',
          fulfilledByStoreId: storeId,
          fulfilledAt: new Date().toISOString(),
        },
        { new: true }
      );

      if (demand) return res.json({ success: true, data: demand });
    }

    const demand = mockData.demands.find(d => d.id === req.params.id);
    if (demand) {
      demand.status = 'fulfilled';
      demand.fulfilledByStoreId = storeId;
      demand.fulfilledAt = 'Just now';
      return res.json({ success: true, data: demand });
    }

    res.status(404).json({ success: false, message: 'Demand not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getDemands, createDemand, fulfillDemand };
