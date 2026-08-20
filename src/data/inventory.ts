import { StoreInventory } from '../types';

export const INITIAL_INVENTORY: StoreInventory[] = [
  // =========================================================================
  // 🚗 AUTOMOBILE & SPARES (3-Tier Distance Price Comparison)
  // =========================================================================
  // 1. Honda CB Shine Brake Pad
  { id: 'inv-sharma-shine-bp', storeId: 'store-sharma-auto', productId: 'prod-honda-shine-brakepad', price: 399, mrp: 499, discountPercent: 20, stockQuantity: 18, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: false }, // < 1 km (0.3 km)
  { id: 'inv-kumar-shine-bp', storeId: 'store-kumar-motors', productId: 'prod-honda-shine-brakepad', price: 380, mrp: 499, discountPercent: 24, stockQuantity: 8, status: 'in_stock', lastUpdated: '35 mins ago', isBestPrice: true },  // 1 - 2 km (1.2 km) - BEST PRICE!
  { id: 'inv-mahalaxmi-shine-bp', storeId: 'store-mahalaxmi-hardware', productId: 'prod-honda-shine-brakepad', price: 420, mrp: 499, discountPercent: 16, stockQuantity: 12, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false }, // 2 - 5 km (3.1 km)

  // 2. Castrol Power1 Engine Oil 1L
  { id: 'inv-sharma-castrol', storeId: 'store-sharma-auto', productId: 'prod-castrol-power1-oil', price: 460, mrp: 535, discountPercent: 14, stockQuantity: 36, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: false }, // < 1 km
  { id: 'inv-kumar-castrol', storeId: 'store-kumar-motors', productId: 'prod-castrol-power1-oil', price: 440, mrp: 535, discountPercent: 18, stockQuantity: 20, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: true },  // 1 - 2 km - BEST PRICE!
  { id: 'inv-mahalaxmi-castrol', storeId: 'store-mahalaxmi-hardware', productId: 'prod-castrol-power1-oil', price: 475, mrp: 535, discountPercent: 11, stockQuantity: 15, status: 'in_stock', lastUpdated: '2 hours ago', isBestPrice: false }, // 2 - 5 km

  // 3. Amaron 5Ah Bike Battery
  { id: 'inv-sharma-amaron', storeId: 'store-sharma-auto', productId: 'prod-amaron-bike-battery', price: 1250, mrp: 1450, discountPercent: 14, stockQuantity: 8, status: 'in_stock', lastUpdated: '25 mins ago', isBestPrice: false }, // < 1 km
  { id: 'inv-kumar-amaron', storeId: 'store-kumar-motors', productId: 'prod-amaron-bike-battery', price: 1199, mrp: 1450, discountPercent: 17, stockQuantity: 10, status: 'in_stock', lastUpdated: '50 mins ago', isBestPrice: true }, // 1 - 2 km - BEST PRICE!
  { id: 'inv-mahalaxmi-amaron', storeId: 'store-mahalaxmi-hardware', productId: 'prod-amaron-bike-battery', price: 1280, mrp: 1450, discountPercent: 12, stockQuantity: 5, status: 'in_stock', lastUpdated: '3 hours ago', isBestPrice: false }, // 2 - 5 km

  // =========================================================================
  // 💊 PHARMACY & HEALTH (3-Tier Distance Price Comparison)
  // =========================================================================
  // 4. Dolo 650mg Paracetamol Tablets
  { id: 'inv-apollo-dolo', storeId: 'store-apollo-meds', productId: 'prod-dolo-650', price: 30, mrp: 34, discountPercent: 12, stockQuantity: 180, status: 'in_stock', lastUpdated: '5 mins ago', isBestPrice: false }, // < 1 km (0.6 km)
  { id: 'inv-medplus-dolo', storeId: 'store-medplus-quick', productId: 'prod-dolo-650', price: 28, mrp: 34, discountPercent: 18, stockQuantity: 120, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: true }, // 1 - 2 km (1.5 km) - BEST PRICE!
  { id: 'inv-krishna-dolo', storeId: 'store-krishna-kirana', productId: 'prod-dolo-650', price: 32, mrp: 34, discountPercent: 6, stockQuantity: 50, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false }, // 2 - 5 km (2.5 km)

  // 5. Accu-Chek Active Glucometer Kit
  { id: 'inv-apollo-accu', storeId: 'store-apollo-meds', productId: 'prod-accuchek-active', price: 1350, mrp: 1699, discountPercent: 20, stockQuantity: 15, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: false }, // < 1 km
  { id: 'inv-medplus-accu', storeId: 'store-medplus-quick', productId: 'prod-accuchek-active', price: 1299, mrp: 1699, discountPercent: 24, stockQuantity: 10, status: 'in_stock', lastUpdated: '30 mins ago', isBestPrice: true }, // 1 - 2 km - BEST PRICE!
  { id: 'inv-digital-accu', storeId: 'store-digital-world', productId: 'prod-accuchek-active', price: 1399, mrp: 1699, discountPercent: 18, stockQuantity: 6, status: 'in_stock', lastUpdated: '2 hours ago', isBestPrice: false }, // 2 - 5 km

  // 6. Volini Pain Relief Spray 100g
  { id: 'inv-apollo-volini', storeId: 'store-apollo-meds', productId: 'prod-volini-spray', price: 235, mrp: 290, discountPercent: 19, stockQuantity: 45, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: false }, // < 1 km
  { id: 'inv-medplus-volini', storeId: 'store-medplus-quick', productId: 'prod-volini-spray', price: 230, mrp: 290, discountPercent: 21, stockQuantity: 30, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: true }, // 1 - 2 km - BEST PRICE!
  { id: 'inv-krishna-volini', storeId: 'store-krishna-kirana', productId: 'prod-volini-spray', price: 245, mrp: 290, discountPercent: 15, stockQuantity: 20, status: 'in_stock', lastUpdated: '3 hours ago', isBestPrice: false }, // 2 - 5 km

  // =========================================================================
  // 🛒 KIRANA & DAILY NEEDS (3-Tier Distance Price Comparison)
  // =========================================================================
  // 7. Aashirvaad Chakki Atta 10kg
  { id: 'inv-daily-atta', storeId: 'store-local-quick-kirana', productId: 'prod-aashirvaad-atta-10kg', price: 410, mrp: 460, discountPercent: 11, stockQuantity: 35, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: true }, // < 1 km (0.4 km) - BEST PRICE!
  { id: 'inv-apollo-atta', storeId: 'store-medplus-quick', productId: 'prod-aashirvaad-atta-10kg', price: 420, mrp: 460, discountPercent: 9, stockQuantity: 15, status: 'in_stock', lastUpdated: '35 mins ago', isBestPrice: false }, // 1 - 2 km (1.5 km)
  { id: 'inv-krishna-atta', storeId: 'store-krishna-kirana', productId: 'prod-aashirvaad-atta-10kg', price: 425, mrp: 460, discountPercent: 8, stockQuantity: 60, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: false }, // 2 - 5 km (2.5 km)

  // 8. Amul Pure Cow Ghee 1L
  { id: 'inv-daily-ghee', storeId: 'store-local-quick-kirana', productId: 'prod-amul-cow-ghee-1l', price: 599, mrp: 660, discountPercent: 9, stockQuantity: 25, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true }, // < 1 km - BEST PRICE!
  { id: 'inv-kumar-ghee', storeId: 'store-kumar-motors', productId: 'prod-amul-cow-ghee-1l', price: 610, mrp: 660, discountPercent: 8, stockQuantity: 12, status: 'in_stock', lastUpdated: '40 mins ago', isBestPrice: false }, // 1 - 2 km
  { id: 'inv-krishna-ghee', storeId: 'store-krishna-kirana', productId: 'prod-amul-cow-ghee-1l', price: 620, mrp: 660, discountPercent: 6, stockQuantity: 40, status: 'in_stock', lastUpdated: '2 hours ago', isBestPrice: false }, // 2 - 5 km

  // =========================================================================
  // 📱 ELECTRONICS & MOBILES (3-Tier Distance Price Comparison)
  // =========================================================================
  // 9. boAt Rockerz 450 Bluetooth Headphones
  { id: 'inv-gadget-boat', storeId: 'store-koramangala-gadgets', productId: 'prod-boat-rockerz-450', price: 1249, mrp: 3990, discountPercent: 68, stockQuantity: 22, status: 'in_stock', lastUpdated: '10 mins ago', isBestPrice: false }, // < 1 km (0.5 km)
  { id: 'inv-kumar-boat', storeId: 'store-kumar-motors', productId: 'prod-boat-rockerz-450', price: 1280, mrp: 3990, discountPercent: 67, stockQuantity: 8, status: 'in_stock', lastUpdated: '35 mins ago', isBestPrice: false }, // 1 - 2 km (1.2 km)
  { id: 'inv-digital-boat', storeId: 'store-digital-world', productId: 'prod-boat-rockerz-450', price: 1199, mrp: 3990, discountPercent: 70, stockQuantity: 45, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: true }, // 2 - 5 km (4.2 km) - BEST PRICE!

  // 10. Anker 20W Fast Charger Adapter
  { id: 'inv-gadget-anker', storeId: 'store-koramangala-gadgets', productId: 'prod-anker-20w-charger', price: 899, mrp: 1499, discountPercent: 40, stockQuantity: 16, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: true }, // < 1 km - BEST PRICE!
  { id: 'inv-kumar-anker', storeId: 'store-kumar-motors', productId: 'prod-anker-20w-charger', price: 920, mrp: 1499, discountPercent: 39, stockQuantity: 10, status: 'in_stock', lastUpdated: '50 mins ago', isBestPrice: false }, // 1 - 2 km
  { id: 'inv-digital-anker', storeId: 'store-digital-world', productId: 'prod-anker-20w-charger', price: 950, mrp: 1499, discountPercent: 37, stockQuantity: 25, status: 'in_stock', lastUpdated: '2 hours ago', isBestPrice: false }, // 2 - 5 km

  // =========================================================================
  // 🔧 HARDWARE & TOOLS (3-Tier Distance Price Comparison)
  // =========================================================================
  // 11. Bosch GSB 500W Impact Drill Kit
  { id: 'inv-sharma-drill', storeId: 'store-sharma-auto', productId: 'prod-bosch-drill-kit', price: 3450, mrp: 4200, discountPercent: 18, stockQuantity: 6, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: false }, // < 1 km (0.3 km)
  { id: 'inv-kumar-drill', storeId: 'store-kumar-motors', productId: 'prod-bosch-drill-kit', price: 3390, mrp: 4200, discountPercent: 19, stockQuantity: 4, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false }, // 1 - 2 km (1.2 km)
  { id: 'inv-mahalaxmi-drill', storeId: 'store-mahalaxmi-hardware', productId: 'prod-bosch-drill-kit', price: 3299, mrp: 4200, discountPercent: 21, stockQuantity: 14, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: true }, // 2 - 5 km (3.1 km) - BEST PRICE!

  // =========================================================================
  // 📚 STATIONERY & BOOKS (3-Tier Distance Price Comparison)
  // =========================================================================
  // 12. Classmate Long Ruled Notebooks Pack of 6
  { id: 'inv-daily-notebook', storeId: 'store-local-quick-kirana', productId: 'prod-classmate-notebook-pack', price: 360, mrp: 420, discountPercent: 14, stockQuantity: 40, status: 'in_stock', lastUpdated: '15 mins ago', isBestPrice: false }, // < 1 km (0.4 km)
  { id: 'inv-medplus-notebook', storeId: 'store-medplus-quick', productId: 'prod-classmate-notebook-pack', price: 350, mrp: 420, discountPercent: 16, stockQuantity: 25, status: 'in_stock', lastUpdated: '30 mins ago', isBestPrice: false }, // 1 - 2 km (1.5 km)
  { id: 'inv-vidya-notebook', storeId: 'store-vidya-sagar-books', productId: 'prod-classmate-notebook-pack', price: 330, mrp: 420, discountPercent: 21, stockQuantity: 90, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: true }, // 2 - 5 km (4.8 km) - BEST PRICE!

  // 13. Parker Vector Fountain Pen
  { id: 'inv-gadget-parker', storeId: 'store-koramangala-gadgets', productId: 'prod-parker-vector-pen', price: 550, mrp: 650, discountPercent: 15, stockQuantity: 12, status: 'in_stock', lastUpdated: '20 mins ago', isBestPrice: false }, // < 1 km (0.5 km)
  { id: 'inv-kumar-parker', storeId: 'store-kumar-motors', productId: 'prod-parker-vector-pen', price: 530, mrp: 650, discountPercent: 18, stockQuantity: 8, status: 'in_stock', lastUpdated: '45 mins ago', isBestPrice: false }, // 1 - 2 km (1.2 km)
  { id: 'inv-vidya-parker', storeId: 'store-vidya-sagar-books', productId: 'prod-parker-vector-pen', price: 499, mrp: 650, discountPercent: 23, stockQuantity: 35, status: 'in_stock', lastUpdated: '1 hour ago', isBestPrice: true }, // 2 - 5 km (4.8 km) - BEST PRICE!
];
