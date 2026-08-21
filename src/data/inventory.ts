import { StoreInventory } from '../types';

export const INITIAL_INVENTORY: StoreInventory[] = [
  // =========================================================================
  // 🚗 AUTOMOBILE & VEHICLE SPARES (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 1. Motul 7100 4T 10W-50 Synthetic Engine Oil 1L
  { id: 'inv-sharma-motul', storeId: 'store-sharma-auto', productId: 'prod-motul-7100-oil', price: 880, mrp: 1045, discountPercent: 16, stockQuantity: 24, status: 'in_stock', lastUpdated: '8 mins ago', isBestPrice: true },
  { id: 'inv-kumar-motul', storeId: 'store-kumar-motors', productId: 'prod-motul-7100-oil', price: 920, mrp: 1045, discountPercent: 12, stockQuantity: 14, status: 'in_stock', lastUpdated: '25 mins ago', isBestPrice: false },
  { id: 'inv-city-motul', storeId: 'store-city-auto', productId: 'prod-motul-7100-oil', price: 899, mrp: 1045, discountPercent: 14, stockQuantity: 18, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false },

  // 2. Honda CB Shine Brake Pad
  { id: 'inv-sharma-shine-bp', storeId: 'store-sharma-auto', productId: 'prod-honda-shine-brakepad', price: 399, mrp: 499, discountPercent: 20, stockQuantity: 18, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: false },
  { id: 'inv-kumar-shine-bp', storeId: 'store-kumar-motors', productId: 'prod-honda-shine-brakepad', price: 380, mrp: 499, discountPercent: 24, stockQuantity: 8, status: 'in_stock', lastUpdated: '35 mins ago', isBestPrice: true },
  { id: 'inv-city-shine-bp', storeId: 'store-city-auto', productId: 'prod-honda-shine-brakepad', price: 410, mrp: 499, discountPercent: 18, stockQuantity: 12, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false },

  // 3. Castrol Power1 Engine Oil 1L
  { id: 'inv-sharma-castrol', storeId: 'store-sharma-auto', productId: 'prod-castrol-power1-oil', price: 460, mrp: 535, discountPercent: 14, stockQuantity: 36, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: false },
  { id: 'inv-kumar-castrol', storeId: 'store-kumar-motors', productId: 'prod-castrol-power1-oil', price: 440, mrp: 535, discountPercent: 18, stockQuantity: 20, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: true },
  { id: 'inv-city-castrol', storeId: 'store-city-auto', productId: 'prod-castrol-power1-oil', price: 475, mrp: 535, discountPercent: 11, stockQuantity: 15, status: 'in_stock', lastUpdated: '2 hours ago', isBestPrice: false },

  // 4. Amaron 5Ah Bike Battery
  { id: 'inv-sharma-amaron', storeId: 'store-sharma-auto', productId: 'prod-amaron-bike-battery', price: 1250, mrp: 1450, discountPercent: 14, stockQuantity: 8, status: 'in_stock', lastUpdated: '25 mins ago', isBestPrice: false },
  { id: 'inv-kumar-amaron', storeId: 'store-kumar-motors', productId: 'prod-amaron-bike-battery', price: 1199, mrp: 1450, discountPercent: 17, stockQuantity: 10, status: 'in_stock', lastUpdated: '50 mins ago', isBestPrice: true },
  { id: 'inv-city-amaron', storeId: 'store-city-auto', productId: 'prod-amaron-bike-battery', price: 1280, mrp: 1450, discountPercent: 12, stockQuantity: 5, status: 'in_stock', lastUpdated: '3 hours ago', isBestPrice: false },

  // =========================================================================
  // 📱 ELECTRONICS & MOBILES (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 5. Apple iPhone 15 (128GB)
  { id: 'inv-kora-iphone', storeId: 'store-koramangala-gadgets', productId: 'prod-apple-iphone-15', price: 71999, mrp: 79900, discountPercent: 10, stockQuantity: 8, status: 'in_stock', lastUpdated: '5 mins ago', isBestPrice: true },
  { id: 'inv-digital-iphone', storeId: 'store-delhi-lajpat-electronics', productId: 'prod-apple-iphone-15', price: 72999, mrp: 79900, discountPercent: 9, stockQuantity: 5, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: false },

  // 6. boAt Rockerz 450
  { id: 'inv-kora-boat', storeId: 'store-koramangala-gadgets', productId: 'prod-boat-rockerz-450', price: 1199, mrp: 3990, discountPercent: 70, stockQuantity: 22, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-digital-boat', storeId: 'store-delhi-lajpat-electronics', productId: 'prod-boat-rockerz-450', price: 1249, mrp: 3990, discountPercent: 69, stockQuantity: 15, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: false },

  // 7. Xiaomi Mi 20000mAh Powerbank
  { id: 'inv-kora-powerbank', storeId: 'store-koramangala-gadgets', productId: 'prod-mi-20000-powerbank', price: 1899, mrp: 2499, discountPercent: 24, stockQuantity: 18, status: 'in_stock', lastUpdated: '12 mins ago', isBestPrice: true },
  { id: 'inv-digital-powerbank', storeId: 'store-delhi-lajpat-electronics', productId: 'prod-mi-20000-powerbank', price: 1950, mrp: 2499, discountPercent: 22, stockQuantity: 10, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false },

  // =========================================================================
  // 💊 PHARMACY & HEALTHCARE (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 8. Dr. Morepen Gluco One BG-03 with 50 Strips
  { id: 'inv-medplus-gluco', storeId: 'store-medplus-koramangala', productId: 'prod-dr-morepen-gluco-one', price: 999, mrp: 1490, discountPercent: 33, stockQuantity: 28, status: 'in_stock', lastUpdated: '7 mins ago', isBestPrice: true },
  { id: 'inv-apollo-gluco', storeId: 'store-delhi-karolbagh-chemists', productId: 'prod-dr-morepen-gluco-one', price: 1040, mrp: 1490, discountPercent: 30, stockQuantity: 15, status: 'in_stock', lastUpdated: '30 mins ago', isBestPrice: false },

  // 9. Dolo 650mg Paracetamol Tablets
  { id: 'inv-medplus-dolo', storeId: 'store-medplus-koramangala', productId: 'prod-dolo-650', price: 28, mrp: 35, discountPercent: 20, stockQuantity: 180, status: 'in_stock', lastUpdated: '5 mins ago', isBestPrice: true },
  { id: 'inv-apollo-dolo', storeId: 'store-delhi-karolbagh-chemists', productId: 'prod-dolo-650', price: 30, mrp: 35, discountPercent: 14, stockQuantity: 90, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: false },

  // 10. Omron BP Monitor HEM-7120
  { id: 'inv-medplus-omron', storeId: 'store-medplus-koramangala', productId: 'prod-omron-bp-monitor', price: 1980, mrp: 2450, discountPercent: 19, stockQuantity: 15, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-apollo-omron', storeId: 'store-delhi-karolbagh-chemists', productId: 'prod-omron-bp-monitor', price: 2050, mrp: 2450, discountPercent: 16, stockQuantity: 10, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false },

  // =========================================================================
  // 🛒 GROCERY & DAILY NEEDS (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 11. Fortune Biryani Special Basmati Rice 5kg
  { id: 'inv-krishna-fortune-rice', storeId: 'store-sri-krishna-kirana', productId: 'prod-fortune-biryani-rice', price: 549, mrp: 675, discountPercent: 19, stockQuantity: 35, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },

  // 12. Aashirvaad Atta 5kg
  { id: 'inv-krishna-atta', storeId: 'store-sri-krishna-kirana', productId: 'prod-aashirvaad-atta', price: 245, mrp: 275, discountPercent: 11, stockQuantity: 50, status: 'in_stock', lastUpdated: '12 mins ago', isBestPrice: true },

  // 13. Amul Gold Milk 500ml
  { id: 'inv-krishna-milk', storeId: 'store-sri-krishna-kirana', productId: 'prod-amul-gold-milk', price: 34, mrp: 34, discountPercent: 0, stockQuantity: 80, status: 'in_stock', lastUpdated: '5 mins ago', isBestPrice: true },

  // 14. Tata Tea Gold 500g
  { id: 'inv-krishna-tea', storeId: 'store-sri-krishna-kirana', productId: 'prod-tata-tea-gold', price: 285, mrp: 330, discountPercent: 14, stockQuantity: 40, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true },

  // =========================================================================
  // 🔧 HARDWARE & TOOLS (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 15. Stanley 12-Piece Screwdriver Set
  { id: 'inv-sharma-stanley', storeId: 'store-sharma-auto', productId: 'prod-stanley-screwdriver-set', price: 899, mrp: 1299, discountPercent: 31, stockQuantity: 16, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-city-stanley', storeId: 'store-city-auto', productId: 'prod-stanley-screwdriver-set', price: 949, mrp: 1299, discountPercent: 27, stockQuantity: 10, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: false },

  // 16. Bosch GSB 500W Impact Drill Kit
  { id: 'inv-sharma-drill', storeId: 'store-sharma-auto', productId: 'prod-bosch-drill-gsb500', price: 3450, mrp: 4200, discountPercent: 18, stockQuantity: 8, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true },
  { id: 'inv-city-drill', storeId: 'store-city-auto', productId: 'prod-bosch-drill-gsb500', price: 3590, mrp: 4200, discountPercent: 15, stockQuantity: 5, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false },

  // =========================================================================
  // 📚 STATIONERY & BOOKS
  // =========================================================================
  // 17. Classmate Long Notebooks
  { id: 'inv-vidya-notebook', storeId: 'store-delhi-cp-auto', productId: 'prod-classmate-notebook-bundle', price: 330, mrp: 420, discountPercent: 21, stockQuantity: 60, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: true }
];
