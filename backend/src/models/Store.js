const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  plan: {
    type: String,
    enum: ['free', 'pro'],
    default: 'free',
  },
  billingCycle: {
    type: String,
    enum: ['monthly', 'yearly'],
    default: 'monthly',
  },
  status: {
    type: String,
    enum: ['active', 'cancelled', 'past_due'],
    default: 'active',
  },
  startedAt: {
    type: String,
    default: () => new Date().toISOString(),
  },
  validUntil: {
    type: String,
    default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  maxProducts: {
    type: Number,
    default: 50,
  },
  amount: {
    type: Number,
    default: 0,
  },
  autoRenew: {
    type: Boolean,
    default: true,
  },
  invoices: [
    {
      id: String,
      date: String,
      amount: Number,
      plan: String,
      billingCycle: String,
      status: String,
      invoiceNumber: String,
      paymentMethod: String,
    },
  ],
});

const storeSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Store name is required'],
      trim: true,
    },
    ownerName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    categoryIds: [{ type: String }],
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    // GeoJSON Point for spatial queries
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
        default: [77.6245, 12.9352],
      },
    },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    openingHours: {
      type: String,
      default: '9:00 AM - 9:00 PM',
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
    },
    bannerImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    },
    facilities: [{ type: String }],
    about: {
      type: String,
      default: '',
    },
    gstNumber: {
      type: String,
    },
    joinedDate: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    enquiriesCount: {
      type: Number,
      default: 0,
    },
    subscription: {
      type: subscriptionSchema,
      default: () => ({}),
    },
  },
  { timestamps: true }
);

// 2dsphere index for geolocation proximity search
storeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Store', storeSchema);
