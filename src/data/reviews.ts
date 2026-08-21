import { Review, NotificationItem } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-01',
    storeId: 'store-jamui-sharma-auto',
    productId: 'prod-automobile-1-honda-cb-shine-front-disc-brak',
    customerName: 'Rohit Chandran',
    rating: 5,
    comment: 'Found the exact OEM brake pad for my 2021 Honda Shine here within 10 minutes on Dhoondo. Sharma ji gave it at ₹424 whereas online e-commerce was taking 4 days and ₹520!',
    date: 'Yesterday',
    verifiedPurchase: true
  },
  {
    id: 'rev-02',
    storeId: 'store-jamui-sharma-auto',
    productId: 'prod-automobile-6-motul-7100-4t-10w-50-100-synt',
    customerName: 'Anil Kumble',
    rating: 5,
    comment: 'Genuine Motul QR code scanned and verified on counter. Great counter pricing (₹857) and friendly staff.',
    date: '3 days ago',
    verifiedPurchase: true
  },
  {
    id: 'rev-03',
    storeId: 'store-jamui-city-pharmacy',
    productId: 'prod-pharmacy-1-dolo-650mg-paracetamol-table',
    customerName: 'Megha Sharma',
    rating: 5,
    comment: 'Quickest response on WhatsApp and 24x7 open counter. Always reliable in Hospital Road area.',
    date: '4 days ago',
    verifiedPurchase: true
  },
  {
    id: 'rev-04',
    storeId: 'store-jamui-gadget-point',
    productId: 'prod-electronics-1-apple-iphone-15-128gb-black-d',
    customerName: 'Vikash Barnwal',
    rating: 5,
    comment: 'Sealed pack Indian retail unit with official Apple warranty and GST invoice. Best local price in Jamui!',
    date: '5 days ago',
    verifiedPurchase: true
  },
  {
    id: 'rev-05',
    storeId: 'store-jamui-krishna-kirana',
    productId: 'prod-grocery-1-fortune-biryani-special-super-pr',
    customerName: 'Meera Devi',
    rating: 5,
    comment: 'Fresh stock Fortune Biryani Rice at wholesale counter price. Free home delivery within 20 minutes.',
    date: '1 week ago',
    verifiedPurchase: true
  },
  {
    id: 'rev-06',
    storeId: 'store-jamui-stationery-books',
    productId: 'prod-stationery-41-lucent-s-general-knowledge-sam',
    customerName: 'Santosh Kumar',
    rating: 5,
    comment: 'Got latest 2026 edition of Lucent GK and Classmate registers. Best student bookstore near KKM college.',
    date: '1 week ago',
    verifiedPurchase: true
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-01',
    type: 'stock_alert',
    title: 'Item In Stock Nearby!',
    message: 'Honda CB Shine Front Disc Brake Pad is now available at Sharma Auto Spares (160m away) for ₹424.',
    link: '/product/prod-automobile-1-honda-cb-shine-front-disc-brak',
    timestamp: '10 mins ago',
    read: false,
    metadata: {
      productId: 'prod-automobile-1-honda-cb-shine-front-disc-brak',
      storeId: 'store-jamui-sharma-auto',
      newPrice: 424,
      distanceKm: 0.16
    }
  },
  {
    id: 'notif-02',
    type: 'price_drop',
    title: 'Special Counter Deal in Jamui',
    message: 'Motul 7100 4T 10W-50 Engine Oil dropped to ₹857 (18% OFF) at Sharma Auto Clinic.',
    link: '/product/prod-automobile-6-motul-7100-4t-10w-50-100-synt',
    timestamp: '1 hour ago',
    read: false,
    metadata: {
      productId: 'prod-automobile-6-motul-7100-4t-10w-50-100-synt',
      storeId: 'store-jamui-sharma-auto',
      newPrice: 857
    }
  },
  {
    id: 'notif-03',
    type: 'demand_match',
    title: 'Dolo 650 Counter Stock Confirmed',
    message: 'Care 24x7 Chemist on Hospital Road has confirmed 15+ units in stock.',
    link: '/product/prod-pharmacy-1-dolo-650mg-paracetamol-table',
    timestamp: '3 hours ago',
    read: true,
    metadata: {
      productId: 'prod-pharmacy-1-dolo-650mg-paracetamol-table',
      storeId: 'store-jamui-city-pharmacy'
    }
  }
];
