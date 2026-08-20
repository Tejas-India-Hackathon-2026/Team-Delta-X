export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock' | 'on_order';

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  emoji: string;
  description: string;
  color: string;
  subcategories: string[];
  productCount?: number;
  isCustom?: boolean;
}

export interface StoreFacility {
  id: string;
  label: string;
  icon: string;
}

export type SubscriptionPlan = 'free' | 'pro';
export type BillingCycle = 'monthly' | 'yearly';
export type SubscriptionStatus = 'active' | 'cancelled' | 'past_due';

export interface SubscriptionInvoice {
  id: string;
  date: string;
  amount: number;
  plan: string;
  billingCycle: BillingCycle;
  status: 'paid' | 'failed' | 'refunded';
  invoiceNumber: string;
  paymentMethod: string;
}

export interface RetailerSubscription {
  plan: SubscriptionPlan;
  billingCycle: BillingCycle;
  status: SubscriptionStatus;
  startedAt: string;
  validUntil: string;
  maxProducts: number; // 50 for free, Infinity for pro
  amount: number;
  autoRenew: boolean;
  invoices: SubscriptionInvoice[];
}

export interface Store {
  id: string;
  name: string;
  ownerName: string;
  phone: string;
  whatsapp: string;
  email: string;
  categoryIds: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  address: string;
  area: string;
  city: string;
  pincode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceKm?: number;
  openingHours: string;
  isOpen: boolean;
  image: string;
  bannerImage: string;
  facilities: string[];
  about: string;
  gstNumber?: string;
  joinedDate: string;
  viewsCount?: number;
  enquiriesCount?: number;
  subscription?: RetailerSubscription;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  categoryId: string;
  subcategory: string;
  sku: string;
  modelNumber?: string;
  description: string;
  specifications: Record<string, string>;
  image: string;
  isMedicine?: boolean;
  requiresPrescription?: boolean;
  keywords: string[];
  basePrice: number;
  mrp: number;
  tags?: string[];
}

export interface StoreInventory {
  id: string;
  storeId: string;
  productId: string;
  price: number;
  mrp: number;
  discountPercent: number;
  stockQuantity: number;
  status: StockStatus;
  lastUpdated: string;
  isBestPrice?: boolean;
}

export type DemandStatus = 'pending' | 'viewed' | 'fulfilled' | 'cancelled';

export interface CustomerDemand {
  id: string;
  productId: string;
  productName: string;
  brand: string;
  categoryId: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  customerArea: string;
  customerCoords: {
    lat: number;
    lng: number;
  };
  radiusKm: number;
  searchesCount: number;
  interestedCustomersCount: number;
  createdAt: string;
  status: DemandStatus;
  fulfilledByStoreId?: string;
  fulfilledAt?: string;
  notes?: string;
}

export interface Offer {
  id: string;
  storeId: string;
  storeName: string;
  storeArea: string;
  productId?: string;
  productName?: string;
  title: string;
  description: string;
  discountPercent: number;
  offerPrice?: number;
  originalPrice?: number;
  validUntil: string;
  couponCode?: string;
  bannerImage: string;
  isFeatured?: boolean;
}

export type EnquiryStatus = 'new' | 'replied' | 'converted' | 'closed';

export interface Enquiry {
  id: string;
  storeId: string;
  storeName: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerMessage: string;
  productId?: string;
  productName?: string;
  productPrice?: number;
  createdAt: string;
  status: EnquiryStatus;
  replyMessage?: string;
  repliedAt?: string;
}

export interface Review {
  id: string;
  storeId: string;
  productId?: string;
  customerName: string;
  customerAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

export type NotificationType = 
  | 'stock_alert' 
  | 'price_drop' 
  | 'demand_match' 
  | 'offer' 
  | 'enquiry' 
  | 'system';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  timestamp: string;
  read: boolean;
  metadata?: {
    productId?: string;
    storeId?: string;
    demandId?: string;
    oldPrice?: number;
    newPrice?: number;
    distanceKm?: number;
  };
}

export type UserRole = 'customer' | 'retailer' | 'admin';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  storeId?: string; // If role === 'retailer'
  avatar?: string;
}

export interface LocationState {
  area: string;
  city: string;
  state?: string;
  pincode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  radiusKm: number;
  isCustomLocation: boolean;
}

export type SortOption = 
  | 'relevance' 
  | 'price_asc' 
  | 'price_desc' 
  | 'distance_asc' 
  | 'rating_desc' 
  | 'availability';

export interface SearchFilters {
  categoryId?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  maxDistanceKm?: number;
  status?: StockStatus[];
  brand?: string[];
  minRating?: number;
  storeId?: string;
  hasOffers?: boolean;
}

export interface EnrichedProductResult {
  product: Product;
  category: Category;
  inventoryList: (StoreInventory & { store: Store })[];
  bestPrice: number;
  lowestDistanceKm: number;
  availableStoresCount: number;
  totalStoresCount: number;
  bestStore: Store;
}
