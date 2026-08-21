// Retailer session persistence layer
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  Category,
  Store,
  Product,
  StoreInventory,
  CustomerDemand,
  Offer,
  Enquiry,
  Review,
  NotificationItem,
  UserSession,
  LocationState,
  UserRole,
  EnrichedProductResult,
  SearchFilters,
  SortOption,
  StockStatus,
  RetailerSubscription,
  SubscriptionPlan,
  BillingCycle,
  SubscriptionInvoice
} from '../types';
import { INITIAL_CATEGORIES } from '../data/categories';
import { INITIAL_STORES, generateStoresForCity, generateInventoryForStores, getDefaultSubscription } from '../data/stores';
import { INITIAL_PRODUCTS } from '../data/products';
import { INITIAL_INVENTORY } from '../data/inventory';
import { INITIAL_OFFERS } from '../data/offers';
import { INITIAL_DEMANDS } from '../data/demands';
import { INITIAL_ENQUIRIES } from '../data/enquiries';
import { INITIAL_REVIEWS, INITIAL_NOTIFICATIONS } from '../data/reviews';
import { calculateDistanceKm } from '../services/distanceService';
import { soundEffects } from '../services/audioService';
import { getExactDeviceCoordinates, reverseGeocodeCoordinates } from '../services/geolocationService';
import { api } from '../services/apiService';

interface AppContextType {
  // User & Auth
  user: UserSession;
  setUserRole: (role: UserRole, storeId?: string) => void;
  updateUserProfile: (updates: Partial<UserSession>) => void;
  logoutUser: () => void;

  // Location & Geolocation
  location: LocationState;
  setLocation: (loc: LocationState) => void;
  setSearchRadius: (radiusKm: number) => void;
  detectGPSLocation: () => Promise<boolean>;
  isLocating: boolean;
  hasLocationPermission: boolean;
  setHasLocationPermission: (allowed: boolean) => void;

  // Data Collections
  categories: Category[];
  stores: (Store & { distanceKm: number })[];
  products: Product[];
  inventory: StoreInventory[];
  demands: CustomerDemand[];
  offers: Offer[];
  enquiries: Enquiry[];
  reviews: Review[];
  notifications: NotificationItem[];
  wishlist: string[];
  savedStores: string[];
  searchHistory: string[];

  // Computed & Discovery
  unreadNotificationsCount: number;
  enrichedProducts: EnrichedProductResult[];
  searchProducts: (query: string, filters?: SearchFilters, sort?: SortOption) => EnrichedProductResult[];
  getProductById: (id: string) => EnrichedProductResult | undefined;
  getStoreById: (id: string) => (Store & { distanceKm: number }) | undefined;
  getStoreInventory: (storeId: string) => (StoreInventory & { product: Product })[];
  getStoreDemands: (storeId: string) => CustomerDemand[];

  // Mutations
  toggleWishlist: (productId: string) => void;
  toggleSaveStore: (storeId: string) => void;
  addSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;
  removeSearchHistoryItem: (query: string) => void;
  
  // Notification actions
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  deleteNotification: (id: string) => void;
  addNotification: (item: Omit<NotificationItem, 'id' | 'timestamp' | 'read'>) => void;

  // Customer Actions
  submitDemandRequest: (data: {
    productId: string;
    productName: string;
    brand: string;
    categoryId: string;
    customerPhone: string;
    notes?: string;
  }) => void;
  sendCustomerEnquiry: (data: {
    storeId: string;
    productId?: string;
    productName?: string;
    productPrice?: number;
    message: string;
  }) => void;
  addReview: (data: {
    storeId: string;
    productId?: string;
    rating: number;
    comment: string;
  }) => void;

  // Retailer Subscription & SaaS Limits
  isUpgradeModalOpen: boolean;
  openUpgradeModal: () => void;
  closeUpgradeModal: () => void;
  getStoreSubscription: (storeId: string) => RetailerSubscription;
  canAddProduct: (storeId: string) => { allowed: boolean; currentCount: number; maxCount: number; plan: SubscriptionPlan; percentage: number };
  upgradeToPro: (storeId: string, billingCycle: BillingCycle) => void;
  cancelSubscription: (storeId: string) => void;
  reactivateSubscription: (storeId: string) => void;

  // Retailer Actions
  updateStock: (storeId: string, productId: string, delta: number) => void;
  setExactStock: (storeId: string, productId: string, qty: number, price?: number) => void;
  addProductToStore: (productData: Partial<Product>, initialStock: number, price: number) => void;
  updateProductDetails: (productId: string, updates: Partial<Product>) => void;
  deleteProductFromStore: (storeId: string, productId: string) => void;
  createOffer: (offerData: Omit<Offer, 'id'>) => void;
  deleteOffer: (offerId: string) => void;
  replyToEnquiry: (enquiryId: string, replyMessage: string) => void;
  updateStoreProfile: (storeId: string, updates: Partial<Store>) => void;
  fulfillDemandItem: (demandId: string, storeId: string, initialStock?: number) => void;

  // Admin Actions
  addCategory: (cat: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  toggleStoreVerification: (storeId: string) => void;
  registerNewStore: (storeData: Omit<Store, 'id' | 'rating' | 'reviewCount' | 'joinedDate'>) => string;
}

const DEFAULT_USER: UserSession = {
  id: 'usr-customer-1',
  name: 'Aakash Kumar',
  email: 'aakash@dhoondo.local',
  phone: '+91 98450 12345',
  role: 'customer',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
};

const DEFAULT_LOCATION: LocationState = {
  area: 'Koramangala 4th Block',
  city: 'Bengaluru',
  pincode: '560034',
  coordinates: {
    lat: 12.9352,
    lng: 77.6245
  },
  radiusKm: 10,
  isCustomLocation: false
};

// Safe LocalStorage getter with robust JSON parsing fallback
function safeGetLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return fallback;
    return JSON.parse(saved);
  } catch {
    return fallback;
  }
}

// Safe LocalStorage setter
function safeSetLocalStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Gracefully ignore storage quota errors
  }
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial states with localStorage persistence
  const [user, setUser] = useState<UserSession>(() => safeGetLocalStorage('dhoondo_user', DEFAULT_USER));
  const [location, setLocationState] = useState<LocationState>(() => safeGetLocalStorage('dhoondo_location', DEFAULT_LOCATION));
  const [categories, setCategories] = useState<Category[]>(() => safeGetLocalStorage('dhoondo_categories', INITIAL_CATEGORIES));
  const [stores, setStores] = useState<Store[]>(() => {
    const raw = safeGetLocalStorage<Store[]>('dhoondo_stores', INITIAL_STORES);
    return raw.map((s, idx) => ({
      ...s,
      subscription: s.subscription || getDefaultSubscription(idx === 0 || s.id === 'store-maa-ambe-jamui')
    }));
  });
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(() => safeGetLocalStorage('dhoondo_products', INITIAL_PRODUCTS));
  const [inventory, setInventory] = useState<StoreInventory[]>(() => safeGetLocalStorage('dhoondo_inventory', INITIAL_INVENTORY));
  const [demands, setDemands] = useState<CustomerDemand[]>(() => safeGetLocalStorage('dhoondo_demands', INITIAL_DEMANDS));
  const [offers, setOffers] = useState<Offer[]>(() => safeGetLocalStorage('dhoondo_offers', INITIAL_OFFERS));
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => safeGetLocalStorage('dhoondo_enquiries', INITIAL_ENQUIRIES));
  const [reviews, setReviews] = useState<Review[]>(() => safeGetLocalStorage('dhoondo_reviews', INITIAL_REVIEWS));
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => safeGetLocalStorage('dhoondo_notifications', INITIAL_NOTIFICATIONS));
  const [wishlist, setWishlist] = useState<string[]>(() => safeGetLocalStorage('dhoondo_wishlist', ['prod-honda-shine-brakepad', 'prod-boat-rockerz-450']));
  const [savedStores, setSavedStores] = useState<string[]>(() => safeGetLocalStorage('dhoondo_saved_stores', ['store-sharma-auto']));
  const [searchHistory, setSearchHistory] = useState<string[]>(() => safeGetLocalStorage('dhoondo_search_history', ['Honda Shine brake pad', 'Dolo 650', 'Amul Milk', 'Castrol 10W30']));

  // Sync back to LocalStorage safely
  useEffect(() => { safeSetLocalStorage('dhoondo_user', user); }, [user]);
  useEffect(() => { safeSetLocalStorage('dhoondo_location', location); }, [location]);
  useEffect(() => { safeSetLocalStorage('dhoondo_categories', categories); }, [categories]);
  useEffect(() => { safeSetLocalStorage('dhoondo_stores', stores); }, [stores]);
  useEffect(() => { safeSetLocalStorage('dhoondo_products', products); }, [products]);
  useEffect(() => { safeSetLocalStorage('dhoondo_inventory', inventory); }, [inventory]);
  useEffect(() => { safeSetLocalStorage('dhoondo_demands', demands); }, [demands]);
  useEffect(() => { safeSetLocalStorage('dhoondo_offers', offers); }, [offers]);
  useEffect(() => { safeSetLocalStorage('dhoondo_enquiries', enquiries); }, [enquiries]);
  useEffect(() => { safeSetLocalStorage('dhoondo_reviews', reviews); }, [reviews]);
  useEffect(() => { safeSetLocalStorage('dhoondo_notifications', notifications); }, [notifications]);
  useEffect(() => { safeSetLocalStorage('dhoondo_wishlist', wishlist); }, [wishlist]);
  useEffect(() => { safeSetLocalStorage('dhoondo_saved_stores', savedStores); }, [savedStores]);
  useEffect(() => { safeSetLocalStorage('dhoondo_search_history', searchHistory); }, [searchHistory]);

  // Initial Sync from Backend REST API (with silent fallback)
  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const [apiCats, apiStores, apiProds, apiInventory, apiOffers, apiDemands] = await Promise.allSettled([
          api.getCategories(),
          api.getStores(),
          api.getProducts(),
          api.getInventory(),
          api.getOffers(),
          api.getDemands(),
        ]);

        if (apiCats.status === 'fulfilled' && apiCats.value && apiCats.value.length > 0) {
          setCategories(apiCats.value);
        }
        if (apiStores.status === 'fulfilled' && apiStores.value && apiStores.value.length > 0) {
          setStores(apiStores.value);
        }
        if (apiProds.status === 'fulfilled' && apiProds.value && apiProds.value.length > 0) {
          setProducts(apiProds.value);
        }
        if (apiInventory.status === 'fulfilled' && apiInventory.value && apiInventory.value.length > 0) {
          setInventory(apiInventory.value);
        }
        if (apiOffers.status === 'fulfilled' && apiOffers.value && apiOffers.value.length > 0) {
          setOffers(apiOffers.value);
        }
        if (apiDemands.status === 'fulfilled' && apiDemands.value && apiDemands.value.length > 0) {
          setDemands(apiDemands.value);
        }
      } catch (err) {
        // Fallback store active
      }
    };
    fetchBackendData();
  }, []);


  // Enriched stores with live calculated distances from user coordinates
  const enrichedStores = useMemo(() => {
    return stores.map(store => {
      const distance = calculateDistanceKm(
        location.coordinates.lat,
        location.coordinates.lng,
        store.coordinates.lat,
        store.coordinates.lng
      );
      return {
        ...store,
        distanceKm: distance
      };
    }).sort((a, b) => a.distanceKm - b.distanceKm);
  }, [stores, location.coordinates]);

  // Enriched products aggregated with inventory and strictly nearby stores (< 2km)
  const enrichedProducts = useMemo<EnrichedProductResult[]>(() => {
    // ONLY consider stores that are within the current local search proximity (<= 2.0 km)
    const localStores = enrichedStores.filter(s => s.distanceKm <= Math.max(2.0, Math.min(location.radiusKm || 2.0, 5.0)));
    const activeStoresList = localStores.length > 0 ? localStores : enrichedStores.slice(0, 8);
    const storeMap = new Map<string, Store & { distanceKm: number }>();
    activeStoresList.forEach(s => storeMap.set(s.id, s));

    const categoryMap = new Map<string, Category>();
    categories.forEach(c => categoryMap.set(c.id, c));

    return products.map(product => {
      const category = categoryMap.get(product.categoryId) || {
        id: 'cat-other',
        name: 'General',
        slug: 'general',
        iconName: 'Package',
        emoji: '📦',
        description: '',
        color: 'from-slate-500 to-slate-700',
        subcategories: []
      };

      // ONLY include inventory from stores strictly located within the local neighborhood (100m - 1.5km)!
      const productInventory = inventory
        .filter(inv => inv.productId === product.id && storeMap.has(inv.storeId))
        .map(inv => {
          const store = storeMap.get(inv.storeId)!;
          return {
            ...inv,
            store
          };
        })
        .sort((a, b) => a.price - b.price);

      const bestPrice = productInventory.length > 0
        ? Math.min(...productInventory.map(i => i.price))
        : product.basePrice;

      const lowestDistanceKm = productInventory.length > 0
        ? Math.min(...productInventory.map(i => i.store.distanceKm))
        : (activeStoresList[0]?.distanceKm || 0.25);

      const availableStores = productInventory.filter(
        i => i.status === 'in_stock' || i.status === 'low_stock'
      );

      const bestStore = productInventory[0]?.store || activeStoresList[0] || enrichedStores[0];

      return {
        product,
        category,
        inventoryList: productInventory,
        bestPrice,
        lowestDistanceKm,
        availableStoresCount: availableStores.length,
        totalStoresCount: productInventory.length,
        bestStore
      };
    });
  }, [products, inventory, enrichedStores, categories, location.radiusKm]);

  // Unread notifications count
  const unreadNotificationsCount = useMemo(() => {
    return notifications.filter(n => !n.read).length;
  }, [notifications]);

  // Auth role switcher
  const setUserRole = useCallback((role: UserRole, storeId?: string) => {
    soundEffects.playPop();
    if (role === 'retailer') {
      const targetStoreId = storeId || 'store-sharma-auto';
      const store = stores.find(s => s.id === targetStoreId);
      setUser({
        id: 'usr-retailer-sharma',
        name: store?.ownerName || 'Rajesh Sharma',
        email: store?.email || 'sharma.autoparts@gmail.com',
        phone: store?.phone || '+91 98450 12345',
        role: 'retailer',
        storeId: targetStoreId,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
      });
    } else if (role === 'admin') {
      setUser({
        id: 'usr-admin-master',
        name: 'Dhoondo Operations Team',
        email: 'admin@dhoondo.in',
        phone: '+91 80 4000 8000',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      });
    } else {
      setUser(DEFAULT_USER);
    }
  }, [stores]);

  const updateUserProfile = useCallback((updates: Partial<UserSession>) => {
    setUser(prev => ({ ...prev, ...updates }));
  }, []);

  const logoutUser = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dhoondo_auth_token');
    }
    setUser({
      id: `usr-guest-${Date.now()}`,
      name: 'Guest Shopper',
      email: 'guest@dhoondo.local',
      phone: '',
      role: 'customer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    });
    soundEffects.playPop();
  }, []);

  // Location helpers
  const setLocation = useCallback((loc: LocationState) => {
    soundEffects.playPop();
    setLocationState(loc);

    // Ensure local stores exist for this location strictly within 2km
    setStores(prevStores => {
      const hasNearbyStore = prevStores.some(s => {
        const d = calculateDistanceKm(
          loc.coordinates.lat,
          loc.coordinates.lng,
          s.coordinates.lat,
          s.coordinates.lng
        );
        return d <= 2.0;
      });

      if (!hasNearbyStore) {
        const newCityStores = generateStoresForCity(
          loc.city,
          loc.state || 'India',
          loc.coordinates.lat,
          loc.coordinates.lng,
          loc.pincode
        );
        const newCityInventory = generateInventoryForStores(newCityStores, products);
        setInventory(prevInv => [...prevInv, ...newCityInventory]);
        return [...prevStores, ...newCityStores];
      }
      return prevStores;
    });
  }, [products]);

  const setSearchRadius = useCallback((radiusKm: number) => {
    setLocationState(prev => ({ ...prev, radiusKm }));
  }, []);

  const [isLocating, setIsLocating] = useState(false);
  const [hasLocationPermission, setHasLocationPermission] = useState<boolean>(false);

  const detectGPSLocation = useCallback(async (): Promise<boolean> => {
    setIsLocating(true);
    try {
      const coords = await getExactDeviceCoordinates();
      const geocoded = await reverseGeocodeCoordinates(coords.lat, coords.lng);

      const newLoc: LocationState = {
        area: geocoded.area || 'Current Location',
        city: geocoded.city || 'Your City',
        state: geocoded.state,
        pincode: geocoded.pincode || '110001',
        coordinates: {
          lat: coords.lat,
          lng: coords.lng
        },
        radiusKm: location.radiusKm || 2.0,
        isCustomLocation: false
      };

      setLocationState(newLoc);

      // Fulfill stores if needed strictly within 2km
      setStores(prevStores => {
        const hasNearbyStore = prevStores.some(s => {
          const d = calculateDistanceKm(
            coords.lat,
            coords.lng,
            s.coordinates.lat,
            s.coordinates.lng
          );
          return d <= 2.0;
        });

        if (!hasNearbyStore) {
          const newCityStores = generateStoresForCity(
            newLoc.city,
            newLoc.state || 'India',
            coords.lat,
            coords.lng,
            newLoc.pincode
          );
          const newCityInventory = generateInventoryForStores(newCityStores, products);
          setInventory(prevInv => [...prevInv, ...newCityInventory]);
          return [...prevStores, ...newCityStores];
        }
        return prevStores;
      });

      setHasLocationPermission(true);
      safeSetLocalStorage('dhoondo_has_gps', true);
      soundEffects.playSuccessChime();
      return true;
    } catch (err) {
      console.warn('GPS Detection error:', err);
      soundEffects.playPop();
      return false;
    } finally {
      setIsLocating(false);
    }
  }, [location.radiusKm, products]);

  // Fuzzy Search Engine
  const searchProducts = useCallback((
    query: string,
    filters?: SearchFilters,
    sort: SortOption = 'relevance'
  ): EnrichedProductResult[] => {
    // Alias map: common shorthand → expanded keywords that match real product data
    const SEARCH_ALIASES: Record<string, string[]> = {
      'charger': ['charger', 'fast charge', 'usb', 'power adapter', 'anker', 'charging'],
      'bike parts': ['automobile', 'brake', 'tyre', 'engine oil', 'battery', 'chain', 'sprocket', 'helmet'],
      'bike': ['automobile', 'brake', 'engine oil', 'tyre', 'chain'],
      'medicine': ['pharmacy', 'tablet', 'capsule', 'syrup', 'dolo', 'paracetamol', 'antibiotic'],
      'dawa': ['pharmacy', 'tablet', 'capsule', 'syrup', 'dolo', 'paracetamol'],
      'grocery': ['grocery', 'atta', 'rice', 'dal', 'ghee', 'oil', 'milk', 'sugar'],
      'kirana': ['grocery', 'atta', 'rice', 'dal', 'ghee', 'oil', 'milk', 'aashirvaad'],
      'bulb': ['led', 'bulb', 'havells', 'philips', 'light'],
      'pen': ['pen', 'parker', 'stationery', 'notebook', 'writing'],
      'notebook': ['notebook', 'register', 'classmate', 'stationery'],
      'drill': ['drill', 'bosch', 'hardware', 'power tool'],
      'wire': ['wire', 'cable', 'copper', 'havells', 'electrical'],
      'helmet': ['helmet', 'studds', 'automobile', 'riding'],
      'oil': ['engine oil', 'castrol', 'oil', 'lubricant'],
      'battery': ['battery', 'amaron', 'exide', 'automobile'],
    };

    const q = query.trim().toLowerCase();
    // Expand query with aliases
    const aliasExpansions: string[] = [q];
    for (const [alias, expansions] of Object.entries(SEARCH_ALIASES)) {
      if (q.includes(alias)) {
        aliasExpansions.push(...expansions);
      }
    }
    const queryTokens = q.split(/\s+/).filter(t => t.length > 1);

    let results = enrichedProducts.filter(item => {
      const p = item.product;

      // Text query match - check against original tokens OR any expansion
      if (queryTokens.length > 0 || q.length > 0) {
        const textTarget = [
          p.name,
          p.brand,
          p.subcategory,
          p.modelNumber || '',
          p.sku || '',
          p.description,
          item.category.name,
          item.category.slug || '',
          ...(p.keywords || []),
          ...(p.tags || [])
        ].join(' ').toLowerCase();

        // Match if ALL original query tokens match OR any alias expansion matches
        const originalMatch = queryTokens.length === 0 || queryTokens.every(tok => textTarget.includes(tok));
        const aliasMatch = aliasExpansions.some(exp => exp.length > 2 && textTarget.includes(exp));
        
        if (!originalMatch && !aliasMatch) return false;
      }

      // Filter by category
      if (filters?.categoryId && p.categoryId !== filters.categoryId) {
        return false;
      }

      // Filter by subcategory
      if (filters?.subcategory && p.subcategory.toLowerCase() !== filters.subcategory.toLowerCase()) {
        return false;
      }

      // Filter by price range
      if (filters?.minPrice !== undefined && item.bestPrice < filters.minPrice) {
        return false;
      }
      if (filters?.maxPrice !== undefined && item.bestPrice > filters.maxPrice) {
        return false;
      }

      // Filter by maximum distance
      if (filters?.maxDistanceKm !== undefined && item.lowestDistanceKm > filters.maxDistanceKm) {
        return false;
      }

      // Filter by brand
      if (filters?.brand && filters.brand.length > 0) {
        if (!filters.brand.some(b => p.brand.toLowerCase() === b.toLowerCase())) {
          return false;
        }
      }

      // Filter by stock status
      if (filters?.status && filters.status.length > 0) {
        const hasMatchingStatus = item.inventoryList.some(inv => 
          filters.status!.includes(inv.status)
        );
        if (!hasMatchingStatus) return false;
      }

      // Filter by rating
      if (filters?.minRating !== undefined) {
        const hasGoodRating = item.inventoryList.some(inv => 
          inv.store.rating >= filters.minRating!
        );
        if (!hasGoodRating) return false;
      }

      // Filter by storeId
      if (filters?.storeId) {
        const inStore = item.inventoryList.some(inv => inv.storeId === filters.storeId);
        if (!inStore) return false;
      }

      return true;
    });

    // Sorting
    results.sort((a, b) => {
      switch (sort) {
        case 'price_asc':
          return a.bestPrice - b.bestPrice;
        case 'price_desc':
          return b.bestPrice - a.bestPrice;
        case 'distance_asc':
          return a.lowestDistanceKm - b.lowestDistanceKm;
        case 'rating_desc':
          return (b.bestStore?.rating || 0) - (a.bestStore?.rating || 0);
        case 'availability':
          return b.availableStoresCount - a.availableStoresCount;
        case 'relevance':
        default: {
          // Score = (text match weight) + (inverse distance bonus)
          // Products very close get a strong proximity boost
          const distanceBoostA = a.lowestDistanceKm < 1 ? 3 : a.lowestDistanceKm < 3 ? 1.5 : 0;
          const distanceBoostB = b.lowestDistanceKm < 1 ? 3 : b.lowestDistanceKm < 3 ? 1.5 : 0;
          const stockBoostA = a.availableStoresCount > 0 ? 1 : 0;
          const stockBoostB = b.availableStoresCount > 0 ? 1 : 0;
          const scoreA = distanceBoostA + stockBoostA;
          const scoreB = distanceBoostB + stockBoostB;
          if (scoreB !== scoreA) return scoreB - scoreA;
          // Fallback: sort by distance ascending
          return a.lowestDistanceKm - b.lowestDistanceKm;
        }
      }
    });

    return results;
  }, [enrichedProducts]);

  const getProductById = useCallback((id: string) => {
    return enrichedProducts.find(p => p.product.id === id);
  }, [enrichedProducts]);

  const getStoreById = useCallback((id: string) => {
    return enrichedStores.find(s => s.id === id);
  }, [enrichedStores]);

  const getStoreInventory = useCallback((storeId: string) => {
    const storeInvs = inventory.filter(inv => inv.storeId === storeId);
    return storeInvs.map(inv => {
      const prod = products.find(p => p.id === inv.productId) || INITIAL_PRODUCTS[0];
      return {
        ...inv,
        product: prod
      };
    });
  }, [inventory, products]);

  const getStoreDemands = useCallback((storeId: string) => {
    const store = stores.find(s => s.id === storeId);
    if (!store) return demands;
    // Demands in the store's categories
    return demands.filter(d => 
      store.categoryIds.includes(d.categoryId) || store.categoryIds.includes('cat-automobile')
    );
  }, [demands, stores]);

  // Wishlist & Saved Stores
  const toggleWishlist = useCallback((productId: string) => {
    soundEffects.playPop();
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  }, []);

  const toggleSaveStore = useCallback((storeId: string) => {
    soundEffects.playPop();
    setSavedStores(prev => 
      prev.includes(storeId) ? prev.filter(id => id !== storeId) : [...prev, storeId]
    );
  }, []);

  const addSearchHistory = useCallback((query: string) => {
    if (!query.trim()) return;
    setSearchHistory(prev => {
      const filtered = prev.filter(q => q.toLowerCase() !== query.toLowerCase());
      return [query, ...filtered].slice(0, 10);
    });
  }, []);

  const removeSearchHistoryItem = useCallback((itemToRemove: string) => {
    setSearchHistory(prev => prev.filter(item => item !== itemToRemove));
  }, []);

  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
  }, []);

  // Notifications
  const markNotificationAsRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  const markAllNotificationsAsRead = useCallback(() => {
    soundEffects.playPop();
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const deleteNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback((item: Omit<NotificationItem, 'id' | 'timestamp' | 'read'>) => {
    const newNotif: NotificationItem = {
      ...item,
      id: `notif-${Date.now()}`,
      timestamp: 'Just now',
      read: false
    };
    soundEffects.playNotification();
    setNotifications(prev => [newNotif, ...prev]);
  }, []);

  // Core Demand Restocking Loop (Customer -> Retailer -> Customer)
  const submitDemandRequest = useCallback((data: {
    productId: string;
    productName: string;
    brand: string;
    categoryId: string;
    customerPhone: string;
    notes?: string;
  }) => {
    const newDemand: CustomerDemand = {
      id: `dem-${Date.now()}`,
      productId: data.productId,
      productName: data.productName,
      brand: data.brand,
      categoryId: data.categoryId,
      customerId: user.id,
      customerName: user.name,
      customerPhone: data.customerPhone,
      customerArea: location.area,
      customerCoords: location.coordinates,
      radiusKm: location.radiusKm,
      searchesCount: 24,
      interestedCustomersCount: 9,
      createdAt: 'Just now',
      status: 'pending',
      notes: data.notes
    };

    setDemands(prev => [newDemand, ...prev]);
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.createDemand(newDemand).catch(() => {});

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Notify retailer
    addNotification({
      type: 'demand_match',
      title: 'Customer Requested Stock Near You!',
      message: `A customer in ${location.area} requested stock alert for "${data.productName}".`,
      link: '/retailer/demand-alerts',
      metadata: {
        productId: data.productId,
        demandId: newDemand.id
      }
    });
  }, [user, location, addNotification]);

  // Send Customer Enquiry
  const sendCustomerEnquiry = useCallback((data: {
    storeId: string;
    productId?: string;
    productName?: string;
    productPrice?: number;
    message: string;
  }) => {
    const store = stores.find(s => s.id === data.storeId);
    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      storeId: data.storeId,
      storeName: store?.name || 'Local Retailer',
      customerId: user.id,
      customerName: user.name,
      customerPhone: user.phone,
      customerMessage: data.message,
      productId: data.productId,
      productName: data.productName,
      productPrice: data.productPrice,
      createdAt: 'Just now',
      status: 'new'
    };

    setEnquiries(prev => [newEnquiry, ...prev]);
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.createEnquiry(newEnquiry).catch(() => {});

    addNotification({
      type: 'enquiry',
      title: 'New Customer Enquiry',
      message: `${user.name} sent an enquiry for "${data.productName || store?.name}".`,
      link: '/retailer/enquiries'
    });
  }, [user, stores, addNotification]);

  // Add Review
  const addReview = useCallback((data: {
    storeId: string;
    productId?: string;
    rating: number;
    comment: string;
  }) => {
    const newReview: Review = {
      id: `rev-${Date.now()}`,
      storeId: data.storeId,
      productId: data.productId,
      customerName: user.name,
      rating: data.rating,
      comment: data.comment,
      date: 'Just now',
      verifiedPurchase: true
    };
    setReviews(prev => [newReview, ...prev]);
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.createReview(newReview).catch(() => {});
  }, [user]);

  // Retailer Inventory Stock Stepper with Live Restock Trigger
  const updateStock = useCallback((storeId: string, productId: string, delta: number) => {
    soundEffects.playPop();
    setInventory(prev => {
      return prev.map(inv => {
        if (inv.storeId === storeId && inv.productId === productId) {
          const newQty = Math.max(0, inv.stockQuantity + delta);
          let newStatus: StockStatus = 'out_of_stock';
          if (newQty > 5) newStatus = 'in_stock';
          else if (newQty > 0) newStatus = 'low_stock';

          // If was 0 and now > 0, notify customers!
          if (inv.stockQuantity === 0 && newQty > 0) {
            const product = products.find(p => p.id === productId);
            const store = stores.find(s => s.id === storeId);
            if (product && store) {
              soundEffects.playSuccessChime();
              addNotification({
                type: 'stock_alert',
                title: `${product.name} is Back In Stock!`,
                message: `${store.name} just updated stock to ${newQty} units. Available nearby!`,
                link: `/product/${productId}`,
                metadata: {
                  productId,
                  storeId,
                  newPrice: inv.price
                }
              });
            }
          }

          return {
            ...inv,
            stockQuantity: newQty,
            status: newStatus,
            lastUpdated: 'Just now'
          };
        }
        return inv;
      });
    });
  }, [products, stores, addNotification]);

  const setExactStock = useCallback((storeId: string, productId: string, qty: number, price?: number) => {
    soundEffects.playPop();
    setInventory(prev => {
      const existing = prev.find(inv => inv.storeId === storeId && inv.productId === productId);
      const newStatus: StockStatus = qty > 5 ? 'in_stock' : qty > 0 ? 'low_stock' : 'out_of_stock';

      if (existing) {
        return prev.map(inv => {
          if (inv.storeId === storeId && inv.productId === productId) {
            return {
              ...inv,
              stockQuantity: qty,
              status: newStatus,
              price: price !== undefined ? price : inv.price,
              lastUpdated: 'Just now'
            };
          }
          return inv;
        });
      } else {
        const prod = products.find(p => p.id === productId);
        const newInv: StoreInventory = {
          id: `inv-${storeId}-${productId}`,
          storeId,
          productId,
          price: price || prod?.basePrice || 100,
          mrp: prod?.mrp || 120,
          discountPercent: 10,
          stockQuantity: qty,
          status: newStatus,
          lastUpdated: 'Just now',
          isBestPrice: true
        };
        return [...prev, newInv];
      }
    });
  }, [products]);

  // Fulfill Customer Demand Action (Retailer clicks "Stock This Item")
  const fulfillDemandItem = useCallback((demandId: string, storeId: string, initialStock = 10) => {
    const demand = demands.find(d => d.id === demandId);
    if (!demand) return;

    // 1. Mark demand fulfilled
    setDemands(prev => prev.map(d => d.id === demandId ? {
      ...d,
      status: 'fulfilled',
      fulfilledByStoreId: storeId,
      fulfilledAt: 'Just now'
    } : d));

    // 2. Add or update inventory
    setExactStock(storeId, demand.productId, initialStock);

    // Sync demand fulfillment to Backend API
    api.fulfillDemand(demandId, storeId).catch(() => {});

    // 3. Play confetti & chime
    soundEffects.playSuccessChime();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    // 4. Send high-priority notification to customer
    const store = stores.find(s => s.id === storeId);
    addNotification({
      type: 'stock_alert',
      title: `${demand.productName} Restocked Near You!`,
      message: `${store?.name || 'Local Store'} just added ${initialStock} units of your requested item!`,
      link: `/product/${demand.productId}`,
      metadata: {
        productId: demand.productId,
        storeId,
        demandId
      }
    });
  }, [demands, stores, setExactStock, addNotification]);

  // Subscription Handlers & SaaS Limits
  const openUpgradeModal = useCallback(() => setIsUpgradeModalOpen(true), []);
  const closeUpgradeModal = useCallback(() => setIsUpgradeModalOpen(false), []);

  const getStoreSubscription = useCallback((storeId: string): RetailerSubscription => {
    const store = stores.find(s => s.id === storeId);
    return store?.subscription || getDefaultSubscription(false);
  }, [stores]);

  const canAddProduct = useCallback((storeId: string) => {
    const store = stores.find(s => s.id === storeId);
    const sub = store?.subscription || getDefaultSubscription(false);
    const storeInvs = inventory.filter(inv => inv.storeId === storeId);
    const currentCount = storeInvs.length;
    const maxCount = sub.plan === 'pro' ? 999999 : 50;
    const allowed = sub.plan === 'pro' || currentCount < maxCount;
    const percentage = sub.plan === 'pro' ? 100 : Math.min(100, Math.round((currentCount / maxCount) * 100));

    return {
      allowed,
      currentCount,
      maxCount,
      plan: sub.plan,
      percentage
    };
  }, [stores, inventory]);

  const upgradeToPro = useCallback((storeId: string, billingCycle: BillingCycle) => {
    const amount = billingCycle === 'yearly' ? 999 : 99;
    const validUntilDate = new Date();
    if (billingCycle === 'yearly') {
      validUntilDate.setFullYear(validUntilDate.getFullYear() + 1);
    } else {
      validUntilDate.setMonth(validUntilDate.getMonth() + 1);
    }

    const newInvoice: SubscriptionInvoice = {
      id: `inv-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      amount,
      plan: `Pro Plan (${billingCycle === 'yearly' ? 'Yearly' : 'Monthly'})`,
      billingCycle,
      status: 'paid',
      invoiceNumber: `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      paymentMethod: 'Card / NetBanking'
    };

    setStores(prev => prev.map(s => {
      if (s.id === storeId) {
        const existingInvoices = s.subscription?.invoices || [];
        return {
          ...s,
          subscription: {
            plan: 'pro',
            billingCycle,
            status: 'active',
            startedAt: new Date().toISOString().split('T')[0],
            validUntil: validUntilDate.toISOString().split('T')[0],
            maxProducts: 999999,
            amount,
            autoRenew: true,
            invoices: [newInvoice, ...existingInvoices]
          }
        };
      }
      return s;
    }));

    soundEffects.playSuccessChime();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 }
    });

    addNotification({
      type: 'system',
      title: '👑 Pro Subscription Activated!',
      message: 'Your store is now upgraded to Dhoondo Pro! Unlimited products and Pro Gold Badge are unlocked.',
      link: '/retailer/subscription'
    });
  }, [addNotification]);

  const cancelSubscription = useCallback((storeId: string) => {
    setStores(prev => prev.map(s => {
      if (s.id === storeId && s.subscription) {
        return {
          ...s,
          subscription: {
            ...s.subscription,
            status: 'cancelled',
            autoRenew: false
          }
        };
      }
      return s;
    }));

    soundEffects.playPop();
    addNotification({
      type: 'system',
      title: 'Subscription Cancelled',
      message: 'Your Pro subscription auto-renewal was turned off. You will retain Pro features until your current billing period ends.',
      link: '/retailer/subscription'
    });
  }, [addNotification]);

  const reactivateSubscription = useCallback((storeId: string) => {
    setStores(prev => prev.map(s => {
      if (s.id === storeId && s.subscription) {
        return {
          ...s,
          subscription: {
            ...s.subscription,
            status: 'active',
            autoRenew: true
          }
        };
      }
      return s;
    }));

    soundEffects.playSuccessChime();
    addNotification({
      type: 'system',
      title: 'Subscription Reactivated',
      message: 'Your Pro subscription has been reactivated with auto-renewal enabled.',
      link: '/retailer/subscription'
    });
  }, [addNotification]);

  // Add Product to Store Catalog
  const addProductToStore = useCallback((productData: Partial<Product>, initialStock: number, price: number) => {
    const activeStoreId = user.storeId || 'store-sharma-auto';
    const limitCheck = canAddProduct(activeStoreId);

    if (!limitCheck.allowed) {
      soundEffects.playPop();
      setIsUpgradeModalOpen(true);
      return;
    }

    const newProdId = `prod-custom-${Date.now()}`;
    const newProduct: Product = {
      id: newProdId,
      name: productData.name || 'New Custom Product',
      brand: productData.brand || 'Local Brand',
      categoryId: productData.categoryId || 'cat-other',
      subcategory: productData.subcategory || 'General',
      sku: productData.sku || `SKU-${Date.now().toString().slice(-5)}`,
      modelNumber: productData.modelNumber,
      description: productData.description || 'Quality product available at local store.',
      specifications: productData.specifications || {},
      image: productData.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      keywords: productData.keywords || [(productData.name || '').toLowerCase()],
      basePrice: price,
      mrp: productData.mrp || Math.round(price * 1.2),
      tags: ['Local Stock']
    };

    setProducts(prev => [newProduct, ...prev]);
    setExactStock(activeStoreId, newProdId, initialStock, price);
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.createProduct(newProduct).catch(() => {});
    api.upsertInventory({
      storeId: activeStoreId,
      productId: newProdId,
      price,
      mrp: newProduct.mrp,
      stockQuantity: initialStock,
      status: initialStock > 5 ? 'in_stock' : initialStock > 0 ? 'low_stock' : 'out_of_stock'
    }).catch(() => {});
  }, [user.storeId, canAddProduct, setExactStock]);

  const updateProductDetails = useCallback((productId: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === productId ? { ...p, ...updates } : p));
  }, []);

  const deleteProductFromStore = useCallback((storeId: string, productId: string) => {
    setInventory(prev => prev.filter(inv => !(inv.storeId === storeId && inv.productId === productId)));
    // Sync to Backend API
    api.deleteInventoryItem(storeId, productId).catch(() => {});
  }, []);

  // Offers
  const createOffer = useCallback((offerData: Omit<Offer, 'id'>) => {
    const newOffer: Offer = {
      ...offerData,
      id: `off-${Date.now()}`
    };
    setOffers(prev => [newOffer, ...prev]);
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.createOffer(newOffer).catch(() => {});

    addNotification({
      type: 'offer',
      title: `New Offer: ${newOffer.title}`,
      message: `${newOffer.storeName} posted a special deal!`,
      link: `/store/${newOffer.storeId}`
    });
  }, [addNotification]);

  const deleteOffer = useCallback((offerId: string) => {
    setOffers(prev => prev.filter(o => o.id !== offerId));
    // Sync to Backend API
    api.deleteOffer(offerId).catch(() => {});
  }, []);

  // Reply to Customer Enquiry
  const replyToEnquiry = useCallback((enquiryId: string, replyMessage: string) => {
    setEnquiries(prev => prev.map(enq => {
      if (enq.id === enquiryId) {
        return {
          ...enq,
          status: 'replied',
          replyMessage,
          repliedAt: 'Just now'
        };
      }
      return enq;
    }));
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.replyEnquiry(enquiryId, replyMessage).catch(() => {});

    addNotification({
      type: 'enquiry',
      title: 'Store Replied to Your Enquiry',
      message: `Reply: "${replyMessage}"`,
      link: '/retailer/enquiries'
    });
  }, [addNotification]);

  const updateStoreProfile = useCallback((storeId: string, updates: Partial<Store>) => {
    setStores(prev => prev.map(s => s.id === storeId ? { ...s, ...updates } : s));
    // Sync to Backend API
    api.updateStore(storeId, updates).catch(() => {});
  }, []);

  // Admin Actions
  const addCategory = useCallback((cat: Omit<Category, 'id'>) => {
    const newCat: Category = {
      ...cat,
      id: `cat-custom-${Date.now()}`,
      isCustom: true
    };
    setCategories(prev => [...prev, newCat]);
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.createCategory(newCat).catch(() => {});
  }, []);

  const updateCategory = useCallback((id: string, updates: Partial<Category>) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  const toggleStoreVerification = useCallback((storeId: string) => {
    setStores(prev => prev.map(s => {
      if (s.id === storeId) {
        return { ...s, verified: !s.verified };
      }
      return s;
    }));
    soundEffects.playSuccessChime();
  }, []);

  const registerNewStore = useCallback((storeData: Omit<Store, 'id' | 'rating' | 'reviewCount' | 'joinedDate'>) => {
    const newStoreId = `store-${Date.now()}`;
    const newStore: Store = {
      ...storeData,
      id: newStoreId,
      rating: 5.0,
      reviewCount: 1,
      joinedDate: '2026-08-19'
    };
    setStores(prev => [newStore, ...prev]);
    soundEffects.playSuccessChime();

    // Sync to Backend API
    api.registerStore(newStore).catch(() => {});

    return newStoreId;
  }, []);

  const value: AppContextType = {
    user,
    setUserRole,
    updateUserProfile,
    logoutUser,
    location,
    setLocation,
    setSearchRadius,
    detectGPSLocation,
    isLocating,
    hasLocationPermission,
    setHasLocationPermission,
    categories,
    stores: enrichedStores,
    products,
    inventory,
    demands,
    offers,
    enquiries,
    reviews,
    notifications,
    wishlist,
    savedStores,
    searchHistory,
    unreadNotificationsCount,
    enrichedProducts,
    searchProducts,
    getProductById,
    getStoreById,
    getStoreInventory,
    getStoreDemands,
    toggleWishlist,
    toggleSaveStore,
    addSearchHistory,
    clearSearchHistory,
    removeSearchHistoryItem,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    deleteNotification,
    addNotification,
    submitDemandRequest,
    sendCustomerEnquiry,
    addReview,
    updateStock,
    setExactStock,
    addProductToStore,
    updateProductDetails,
    deleteProductFromStore,
    createOffer,
    deleteOffer,
    replyToEnquiry,
    updateStoreProfile,
    fulfillDemandItem,
    addCategory,
    updateCategory,
    toggleStoreVerification,
    registerNewStore,
    isUpgradeModalOpen,
    openUpgradeModal,
    closeUpgradeModal,
    getStoreSubscription,
    canAddProduct,
    upgradeToPro,
    cancelSubscription,
    reactivateSubscription
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
