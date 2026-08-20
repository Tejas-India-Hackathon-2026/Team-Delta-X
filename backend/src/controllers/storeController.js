const Store = require('../models/Store');
const Inventory = require('../models/Inventory');

// @desc    Get all stores with optional geo-proximity filtering
// @route   GET /api/stores
// @access  Public
const getStores = async (req, res) => {
  try {
    const { lat, lng, radiusKm, city, verified } = req.query;
    let query = {};

    if (city) {
      query.city = new RegExp(city, 'i');
    }

    if (verified !== undefined) {
      query.verified = verified === 'true';
    }

    let stores;

    // Geospatial search if coordinates are passed
    if (lat && lng) {
      const maxDistance = (parseFloat(radiusKm) || 30) * 1000; // meters
      stores = await Store.find({
        ...query,
        location: {
          $nearSphere: {
            $geometry: {
              type: 'Point',
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            $maxDistance: maxDistance,
          },
        },
      });
    } else {
      stores = await Store.find(query).sort({ rating: -1 });
    }

    res.json({ success: true, count: stores.length, data: stores });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single store by ID
// @route   GET /api/stores/:id
// @access  Public
const getStoreById = async (req, res) => {
  try {
    const store = await Store.findOne({
      $or: [{ id: req.params.id }, { _id: req.params.id }],
    });

    if (!store) {
      return res.status(404).json({ success: false, message: 'Store not found' });
    }

    res.json({ success: true, data: store });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Register new store (Merchant Onboarding)
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

    const store = await Store.create({
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
      location: {
        type: 'Point',
        coordinates: [lng, lat],
      },
      openingHours: openingHours || '9:00 AM - 9:00 PM',
      facilities: facilities || [],
      about: about || `${name} is a verified local retailer on Dhoondo.`,
      gstNumber,
      verified: true, // auto-verified on registration
    });

    res.status(201).json({ success: true, data: store });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update store profile
// @route   PUT /api/stores/:id
// @access  Private / Store Owner
const updateStore = async (req, res) => {
  try {
    const store = await Store.findOneAndUpdate(
      { $or: [{ id: req.params.id }, { _id: req.params.id }] },
      { $set: req.body },
      { new: true }
    );

    if (!store) {
      return res.status(404).json({ success: false, message: 'Store not found' });
    }

    res.json({ success: true, data: store });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Toggle Store Verification (Admin KYC)
// @route   PATCH /api/stores/:id/verify
// @access  Private / Admin
const toggleStoreVerification = async (req, res) => {
  try {
    const store = await Store.findOne({
      $or: [{ id: req.params.id }, { _id: req.params.id }],
    });

    if (!store) {
      return res.status(404).json({ success: false, message: 'Store not found' });
    }

    store.verified = !store.verified;
    await store.save();

    res.json({ success: true, data: store });
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
