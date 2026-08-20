import { Review, NotificationItem } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-01',
    storeId: 'store-sharma-auto',
    productId: 'prod-honda-shine-brakepad',
    customerName: 'Rohit Chandran',
    rating: 5,
    comment: 'Found the exact OEM brake pad for my 2021 Honda Shine here within 10 minutes on Dhoondo. Sharma ji gave it at ₹420 whereas online e-commerce was taking 4 days and ₹520!',
    date: 'Yesterday',
    verifiedPurchase: true
  },
  {
    id: 'rev-02',
    storeId: 'store-sharma-auto',
    productId: 'prod-castrol-power1-oil',
    customerName: 'Anil Kumble',
    rating: 5,
    comment: 'Genuine Castrol QR code scanned perfectly. Great stock and friendly counter staff.',
    date: '3 days ago',
    verifiedPurchase: true
  },
  {
    id: 'rev-03',
    storeId: 'store-apollo-local',
    productId: 'prod-dolo-650',
    customerName: 'Megha Sharma',
    rating: 5,
    comment: 'Quickest response on WhatsApp and prompt home delivery. Always reliable in Koramangala.',
    date: '4 days ago',
    verifiedPurchase: true
  },
  {
    id: 'rev-04',
    storeId: 'store-kumar-motors',
    productId: 'prod-mrf-zapper-tyre',
    customerName: 'Prashanth Nair',
    rating: 4,
    comment: 'Good price for MRF tyres. They even recommended a nearby fitter who installed it in 15 mins.',
    date: '1 week ago',
    verifiedPurchase: true
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-01',
    type: 'stock_alert',
    title: 'Item In Stock Nearby!',
    message: 'Honda Shine Front Disc Brake Pad is now available at Sharma Auto Parts (0.8 km away) for ₹420.',
    link: '/product/prod-honda-shine-brakepad',
    timestamp: '10 mins ago',
    read: false,
    metadata: {
      productId: 'prod-honda-shine-brakepad',
      storeId: 'store-sharma-auto',
      newPrice: 420,
      distanceKm: 0.8
    }
  },
  {
    id: 'notif-02',
    type: 'price_drop',
    title: 'Price Dropped by 12%',
    message: 'Castrol POWER1 4T 10W-30 price dropped from ₹490 to ₹460 at Sharma Auto Parts.',
    link: '/product/prod-castrol-power1-oil',
    timestamp: '2 hours ago',
    read: false,
    metadata: {
      productId: 'prod-castrol-power1-oil',
      storeId: 'store-sharma-auto',
      oldPrice: 490,
      newPrice: 460
    }
  },
  {
    id: 'notif-03',
    type: 'demand_match',
    title: 'New Customer Demand Near You',
    message: '23 customers searched for Honda Shine Brake Pad within 5 km of your store.',
    link: '/retailer/demand-alerts',
    timestamp: '4 hours ago',
    read: false,
    metadata: {
      productId: 'prod-honda-shine-brakepad',
      demandId: 'dem-01-shine-brakepad'
    }
  },
  {
    id: 'notif-04',
    type: 'offer',
    title: 'Weekend Offer at Sharma Auto Parts',
    message: 'Weekend Bike Care Fest: Flat 15% OFF Castrol Synthetic Oil + Free Chain Lube Spray.',
    link: '/store/store-sharma-auto',
    timestamp: '1 day ago',
    read: true,
    metadata: {
      storeId: 'store-sharma-auto'
    }
  }
];
