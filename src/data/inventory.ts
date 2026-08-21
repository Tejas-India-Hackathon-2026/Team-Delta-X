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

  // 5. MRF Zapper Tyre
  { id: 'inv-sharma-mrf', storeId: 'store-sharma-auto', productId: 'prod-mrf-zapper-tyre', price: 1850, mrp: 2150, discountPercent: 14, stockQuantity: 6, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: true },
  { id: 'inv-kumar-mrf', storeId: 'store-kumar-motors', productId: 'prod-mrf-zapper-tyre', price: 1899, mrp: 2150, discountPercent: 12, stockQuantity: 4, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false },

  // 6. Studds Ninja Helmet
  { id: 'inv-sharma-helmet', storeId: 'store-sharma-auto', productId: 'prod-studds-ninja-helmet', price: 1350, mrp: 1595, discountPercent: 15, stockQuantity: 12, status: 'in_stock', lastUpdated: '30 mins ago', isBestPrice: true },
  { id: 'inv-city-helmet', storeId: 'store-city-auto', productId: 'prod-studds-ninja-helmet', price: 1399, mrp: 1595, discountPercent: 12, stockQuantity: 8, status: 'in_stock', lastUpdated: '2 hours ago', isBestPrice: false },

  // =========================================================================
  // 📱 ELECTRONICS & MOBILES (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 7. Apple iPhone 15 (128GB)
  { id: 'inv-kora-iphone', storeId: 'store-koramangala-gadgets', productId: 'prod-apple-iphone-15', price: 71999, mrp: 79900, discountPercent: 10, stockQuantity: 8, status: 'in_stock', lastUpdated: '5 mins ago', isBestPrice: true },
  { id: 'inv-kumar-iphone', storeId: 'store-kumar-motors', productId: 'prod-apple-iphone-15', price: 73500, mrp: 79900, discountPercent: 8, stockQuantity: 4, status: 'in_stock', lastUpdated: '30 mins ago', isBestPrice: false },
  { id: 'inv-sharma-iphone', storeId: 'store-sharma-auto', productId: 'prod-apple-iphone-15', price: 72800, mrp: 79900, discountPercent: 9, stockQuantity: 3, status: 'low_stock', lastUpdated: '1 hour ago', isBestPrice: false },

  // 8. boAt Rockerz 450
  { id: 'inv-kora-boat', storeId: 'store-koramangala-gadgets', productId: 'prod-boat-rockerz-450', price: 1199, mrp: 3990, discountPercent: 70, stockQuantity: 22, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-sharma-boat', storeId: 'store-sharma-auto', productId: 'prod-boat-rockerz-450', price: 1249, mrp: 3990, discountPercent: 69, stockQuantity: 15, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: false },

  // 9. Xiaomi Mi 20000mAh Powerbank
  { id: 'inv-kora-powerbank', storeId: 'store-koramangala-gadgets', productId: 'prod-mi-20000-powerbank', price: 1899, mrp: 2499, discountPercent: 24, stockQuantity: 18, status: 'in_stock', lastUpdated: '12 mins ago', isBestPrice: true },
  { id: 'inv-city-powerbank', storeId: 'store-city-auto', productId: 'prod-mi-20000-powerbank', price: 1950, mrp: 2499, discountPercent: 22, stockQuantity: 10, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false },

  // 10. TP-Link Archer Router
  { id: 'inv-kora-router', storeId: 'store-koramangala-gadgets', productId: 'prod-tp-link-archer-router', price: 2399, mrp: 3299, discountPercent: 27, stockQuantity: 14, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true },
  { id: 'inv-sharma-router', storeId: 'store-sharma-auto', productId: 'prod-tp-link-archer-router', price: 2490, mrp: 3299, discountPercent: 25, stockQuantity: 6, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false },

  // =========================================================================
  // 💊 PHARMACY & HEALTHCARE (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 11. Dr. Morepen Gluco One BG-03 with 50 Strips
  { id: 'inv-medplus-gluco', storeId: 'store-medplus-koramangala', productId: 'prod-dr-morepen-gluco-one', price: 999, mrp: 1490, discountPercent: 33, stockQuantity: 28, status: 'in_stock', lastUpdated: '7 mins ago', isBestPrice: true },
  { id: 'inv-krishna-gluco', storeId: 'store-sri-krishna-kirana', productId: 'prod-dr-morepen-gluco-one', price: 1050, mrp: 1490, discountPercent: 30, stockQuantity: 12, status: 'in_stock', lastUpdated: '35 mins ago', isBestPrice: false },
  { id: 'inv-sharma-gluco', storeId: 'store-sharma-auto', productId: 'prod-dr-morepen-gluco-one', price: 1099, mrp: 1490, discountPercent: 26, stockQuantity: 8, status: 'in_stock', lastUpdated: '2 hours ago', isBestPrice: false },

  // 12. Dolo 650mg Paracetamol Tablets
  { id: 'inv-medplus-dolo', storeId: 'store-medplus-koramangala', productId: 'prod-dolo-650', price: 28, mrp: 35, discountPercent: 20, stockQuantity: 180, status: 'in_stock', lastUpdated: '5 mins ago', isBestPrice: true },
  { id: 'inv-krishna-dolo', storeId: 'store-sri-krishna-kirana', productId: 'prod-dolo-650', price: 32, mrp: 35, discountPercent: 9, stockQuantity: 60, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: false },
  { id: 'inv-sharma-dolo', storeId: 'store-sharma-auto', productId: 'prod-dolo-650', price: 30, mrp: 35, discountPercent: 14, stockQuantity: 40, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false },

  // 13. Omron BP Monitor HEM-7120
  { id: 'inv-medplus-omron', storeId: 'store-medplus-koramangala', productId: 'prod-omron-bp-monitor', price: 1980, mrp: 2450, discountPercent: 19, stockQuantity: 15, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-kora-omron', storeId: 'store-koramangala-gadgets', productId: 'prod-omron-bp-monitor', price: 2050, mrp: 2450, discountPercent: 16, stockQuantity: 7, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false },

  // 14. Dettol Antiseptic Liquid 550ml
  { id: 'inv-medplus-dettol', storeId: 'store-medplus-koramangala', productId: 'prod-dettol-antiseptic', price: 198, mrp: 220, discountPercent: 10, stockQuantity: 45, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true },
  { id: 'inv-krishna-dettol', storeId: 'store-sri-krishna-kirana', productId: 'prod-dettol-antiseptic', price: 205, mrp: 220, discountPercent: 7, stockQuantity: 30, status: 'in_stock', lastUpdated: '30 mins ago', isBestPrice: false },

  // =========================================================================
  // 🛒 GROCERY & DAILY NEEDS (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 15. Fortune Biryani Special Basmati Rice 5kg
  { id: 'inv-krishna-fortune-rice', storeId: 'store-sri-krishna-kirana', productId: 'prod-fortune-biryani-rice', price: 549, mrp: 675, discountPercent: 19, stockQuantity: 35, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-sharma-fortune-rice', storeId: 'store-sharma-auto', productId: 'prod-fortune-biryani-rice', price: 580, mrp: 675, discountPercent: 14, stockQuantity: 15, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: false },
  { id: 'inv-kumar-fortune-rice', storeId: 'store-kumar-motors', productId: 'prod-fortune-biryani-rice', price: 565, mrp: 675, discountPercent: 16, stockQuantity: 20, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false },

  // 16. Aashirvaad Atta 5kg
  { id: 'inv-krishna-atta', storeId: 'store-sri-krishna-kirana', productId: 'prod-aashirvaad-atta', price: 245, mrp: 275, discountPercent: 11, stockQuantity: 50, status: 'in_stock', lastUpdated: '12 mins ago', isBestPrice: true },
  { id: 'inv-sharma-atta', storeId: 'store-sharma-auto', productId: 'prod-aashirvaad-atta', price: 255, mrp: 275, discountPercent: 7, stockQuantity: 25, status: 'in_stock', lastUpdated: '35 mins ago', isBestPrice: false },

  // 17. Amul Gold Milk 500ml
  { id: 'inv-krishna-milk', storeId: 'store-sri-krishna-kirana', productId: 'prod-amul-gold-milk', price: 34, mrp: 34, discountPercent: 0, stockQuantity: 80, status: 'in_stock', lastUpdated: '5 mins ago', isBestPrice: true },
  { id: 'inv-medplus-milk', storeId: 'store-medplus-koramangala', productId: 'prod-amul-gold-milk', price: 34, mrp: 34, discountPercent: 0, stockQuantity: 40, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: true },

  // 18. Tata Tea Gold 500g
  { id: 'inv-krishna-tea', storeId: 'store-sri-krishna-kirana', productId: 'prod-tata-tea-gold', price: 285, mrp: 330, discountPercent: 14, stockQuantity: 40, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true },
  { id: 'inv-kumar-tea', storeId: 'store-kumar-motors', productId: 'prod-tata-tea-gold', price: 295, mrp: 330, discountPercent: 11, stockQuantity: 18, status: 'in_stock', lastUpdated: '50 mins ago', isBestPrice: false },

  // =========================================================================
  // 🔧 HARDWARE & TOOLS (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 19. Stanley 12-Piece Screwdriver Set
  { id: 'inv-sharma-stanley', storeId: 'store-sharma-auto', productId: 'prod-stanley-screwdriver-set', price: 899, mrp: 1299, discountPercent: 31, stockQuantity: 16, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-city-stanley', storeId: 'store-city-auto', productId: 'prod-stanley-screwdriver-set', price: 949, mrp: 1299, discountPercent: 27, stockQuantity: 10, status: 'in_stock', lastUpdated: '35 mins ago', isBestPrice: false },
  { id: 'inv-kora-stanley', storeId: 'store-koramangala-gadgets', productId: 'prod-stanley-screwdriver-set', price: 920, mrp: 1299, discountPercent: 29, stockQuantity: 8, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false },

  // 20. Bosch GSB 500W Impact Drill
  { id: 'inv-sharma-drill', storeId: 'store-sharma-auto', productId: 'prod-bosch-drill-gsb500', price: 3450, mrp: 4200, discountPercent: 18, stockQuantity: 8, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: true },
  { id: 'inv-city-drill', storeId: 'store-city-auto', productId: 'prod-bosch-drill-gsb500', price: 3590, mrp: 4200, discountPercent: 15, stockQuantity: 5, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false },

  // 21. Godrej Navtal Brass Lock
  { id: 'inv-sharma-lock', storeId: 'store-sharma-auto', productId: 'prod-godrej-navtal-lock', price: 485, mrp: 550, discountPercent: 12, stockQuantity: 30, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true },
  { id: 'inv-krishna-lock', storeId: 'store-sri-krishna-kirana', productId: 'prod-godrej-navtal-lock', price: 499, mrp: 550, discountPercent: 9, stockQuantity: 15, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: false },

  // =========================================================================
  // 📚 STATIONERY & EDUCATION (Multi-Store Counter Comparison <2km)
  // =========================================================================
  // 22. Classmate Long Notebook Bundle Pack of 6
  { id: 'inv-krishna-notebook', storeId: 'store-sri-krishna-kirana', productId: 'prod-classmate-notebook-bundle', price: 330, mrp: 420, discountPercent: 21, stockQuantity: 60, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true },
  { id: 'inv-kora-notebook', storeId: 'store-koramangala-gadgets', productId: 'prod-classmate-notebook-bundle', price: 350, mrp: 420, discountPercent: 17, stockQuantity: 30, status: 'in_stock', lastUpdated: '30 mins ago', isBestPrice: false },
  { id: 'inv-sharma-notebook', storeId: 'store-sharma-auto', productId: 'prod-classmate-notebook-bundle', price: 360, mrp: 420, discountPercent: 14, stockQuantity: 20, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false }
];
