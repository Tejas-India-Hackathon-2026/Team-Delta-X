const Demand = require('../models/Demand');
const { mockData, isDbConnected } = require('../utils/mockStore');

if (!mockData.demands) {
  mockData.demands = [
    {
      id: 'dem-01-shine-brakepad',
      productId: 'prod-automobile-1-honda-cb-shine-front-disc-brak',
      productName: 'Honda CB Shine Front Disc Brake Pad (Genuine OEM)',
      brand: 'Honda Genuine Spares',
      categoryId: 'cat-automobile',
      customerId: 'cust-demo-1',
      customerName: 'Aakash Verma',
      customerPhone: '+91 98450 99881',
      customerArea: 'Main Market / Gandhi Chowk',
      customerCoords: { lat: 24.9258, lng: 86.2232 },
      radiusKm: 2,
      searchesCount: 28,
      interestedCustomersCount: 9,
      createdAt: '2026-08-20 14:30',
      status: 'pending',
      notes: 'Urgent requirement for Honda Shine brake pad replacement.'
    },
    {
      id: 'dem-02-motul-oil',
      productId: 'prod-automobile-6-motul-7100-4t-10w-50-100-synt',
      productName: 'Motul 7100 4T 10W-50 100% Synthetic Ester Motorcycle Engine Oil (1L)',
      brand: 'Motul',
      categoryId: 'cat-automobile',
      customerId: 'cust-demo-2',
      customerName: 'Rahul Sundaram',
      customerPhone: '+91 97410 11223',
      customerArea: 'Station Road / Overbridge',
      customerCoords: { lat: 24.9233, lng: 86.2254 },
      radiusKm: 2,
      searchesCount: 34,
      interestedCustomersCount: 12,
      createdAt: '2026-08-20 18:15',
      status: 'pending',
      notes: 'Need 1L can of 10W-50 ester synthetic for Pulsar servicing.'
    },
    {
      id: 'dem-03-dolo-650',
      productId: 'prod-pharmacy-1-dolo-650mg-paracetamol-table',
      productName: 'Dolo 650mg Paracetamol Tablets (15 Tabs Strip)',
      brand: 'Micro Labs',
      categoryId: 'cat-pharmacy',
      customerId: 'cust-demo-3',
      customerName: 'Dr. Priya Nambiar',
      customerPhone: '+91 98800 33441',
      customerArea: 'Hospital Road / Sadar Hospital Area',
      customerCoords: { lat: 24.9276, lng: 86.2260 },
      radiusKm: 1.5,
      searchesCount: 42,
      interestedCustomersCount: 15,
      createdAt: '2026-08-21 07:40',
      status: 'pending',
      notes: 'Looking for 3 strips of genuine batch Dolo 650.'
    }
  ];
}

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
