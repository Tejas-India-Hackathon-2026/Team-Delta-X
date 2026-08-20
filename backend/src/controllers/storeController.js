const Store = require('../models/Store');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get all stores with optional geo-proximity filtering
// @route   GET /api/stores
// @access  Public
const getStores = async (req, res) => {
  try {
    const { lat, lng, radiusKm, city, verified } = req.query;

    if (isDbConnected()) {
      let query = {};
      if (city) query.city = new RegExp(city, 'i');
      if (verified !== undefined) query.verified = verified === 'true';

      let stores;
      if (lat && lng) {
        const maxDistance = (parseFloat(radiusKm) || 30) * 1000;
        stores = await Store.find({
          ...query,
          location: {
            $nearSphere: {
              $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
              $maxDistance: maxDistance,
            },
          },
        });
      } else {
        stores = await Store.find(query).sort({ rating: -1 });
      }
      return res.json({ success: true, count: stores.length, data: stores });
    }

    let filtered = [...mockData.stores];
    if (city) filtered = filtered.filter(s => s.city.toLowerCase().includes(city.toLowerCase()));
    if (verified !== undefined) filtered = filtered.filter(s => s.verified === (verified === 'true'));

    return res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    return res.json({ success: true, count: mockData.stores.length, data: mockData.stores });
  }
};

// @desc    Get single store by ID
// @route   GET /api/stores/:id
// @access  Public
const getStoreById = async (req, res) => {
  try {
    if (isDbConnected()) {
      const store = await Store.findOne({
        $or: [{ id: req.params.id }, { _id: req.params.id }],
      });
      if (store) return res.json({ success: true, data: store });
    }

    const store = mockData.stores.find(s => s.id === req.params.id);
    if (!store) {
      return res.status(404).json({ success: false, message: 'Store not found' });
    }

    res.json({ success: true, data: store });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Register new store
// @route   POST /api/stores
// @access  Private / Retailer
const registerStore = async (req, res) => {
  try {
    const {
      name,
      ownerName,
      phone,
      whatsapp,
      email,
      categoryIds,
      address,
      area,
      city,
      pincode,
      coordinates,
      openingHours,
      facilities,
      about,
      gstNumber,
    } = req.body;

    const storeId = `store-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Date.now()}`;
    const lat = coordinates?.lat || 12.9352;
    const lng = coordinates?.lng || 77.6245;

    const newStore = {
      id: storeId,
      name,
      ownerName,
      phone,
      whatsapp: whatsapp || phone,
      email,
      categoryIds: categoryIds || [],
      address,
      area,
      city,
      pincode,
      coordinates: { lat, lng },
      location: { type: 'Point', coordinates: [lng, lat] },
      openingHours: openingHours || '9:00 AM - 9:00 PM',
      facilities: facilities || [],
      about: about || `${name} is a verified local retailer on Dhoondo.`,
      gstNumber,
      verified: true,
      rating: 5.0,
      reviewCount: 0,
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      subscription: { plan: 'free', billingCycle: 'monthly', status: 'active', maxProducts: 50, amount: 0 },
    };

    if (isDbConnected()) {
      const store = await Store.create(newStore);
      return res.status(201).json({ success: true, data: store });
    }

    mockData.stores.unshift(newStore);
    res.status(201).json({ success: true, data: newStore });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update store profile
// @route   PUT /api/stores/:id
// @access  Private / Store Owner
const updateStore = async (req, res) => {
  try {
    if (isDbConnected()) {
      const store = await Store.findOneAndUpdate(
        { $or: [{ id: req.params.id }, { _id: req.params.id }] },
        { $set: req.body },
        { new: true }
      );
      if (store) return res.json({ success: true, data: store });
    }

    const idx = mockData.stores.findIndex(s => s.id === req.params.id);
    if (idx !== -1) {
      mockData.stores[idx] = { ...mockData.stores[idx], ...req.body };
      return res.json({ success: true, data: mockData.stores[idx] });
    }

    res.status(404).json({ success: false, message: 'Store not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Toggle Store Verification
// @route   PATCH /api/stores/:id/verify
// @access  Private / Admin
const toggleStoreVerification = async (req, res) => {
  try {
    if (isDbConnected()) {
      const store = await Store.findOne({
        $or: [{ id: req.params.id }, { _id: req.params.id }],
      });
      if (store) {
        store.verified = !store.verified;
        await store.save();
        return res.json({ success: true, data: store });
      }
    }

    const store = mockData.stores.find(s => s.id === req.params.id);
    if (store) {
      store.verified = !store.verified;
      return res.json({ success: true, data: store });
    }

    res.status(404).json({ success: false, message: 'Store not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getStores,
  getStoreById,
  registerStore,
  updateStore,
  toggleStoreVerification,
};
