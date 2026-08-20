import { StoreInventory } from '../types';

export const INITIAL_INVENTORY: StoreInventory[] = [
  // 🚗 Honda Shine Brake Pad across 3+ nearby stores
  {
    id: 'inv-sharma-shine-bp',
    storeId: 'store-sharma-auto',
    productId: 'prod-honda-shine-brakepad',
    price: 420,
    mrp: 499,
    discountPercent: 16,
    stockQuantity: 12,
    status: 'in_stock',
    lastUpdated: '10 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-kumar-shine-bp',
    storeId: 'store-kumar-motors',
    productId: 'prod-honda-shine-brakepad',
    price: 450,
    mrp: 499,
    discountPercent: 10,
    stockQuantity: 6,
    status: 'in_stock',
    lastUpdated: '45 mins ago',
    isBestPrice: false
  },
  {
    id: 'inv-city-shine-bp',
    storeId: 'store-city-auto',
    productId: 'prod-honda-shine-brakepad',
    price: 480,
    mrp: 499,
    discountPercent: 4,
    stockQuantity: 2,
    status: 'low_stock',
    lastUpdated: '2 hours ago',
    isBestPrice: false
  },

  // Castrol Power1 Engine Oil
  {
    id: 'inv-sharma-castrol-oil',
    storeId: 'store-sharma-auto',
    productId: 'prod-castrol-power1-oil',
    price: 460,
    mrp: 535,
    discountPercent: 14,
    stockQuantity: 24,
    status: 'in_stock',
    lastUpdated: '15 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-kumar-castrol-oil',
    storeId: 'store-kumar-motors',
    productId: 'prod-castrol-power1-oil',
    price: 475,
    mrp: 535,
    discountPercent: 11,
    stockQuantity: 15,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: false
  },
  {
    id: 'inv-city-castrol-oil',
    storeId: 'store-city-auto',
    productId: 'prod-castrol-power1-oil',
    price: 490,
    mrp: 535,
    discountPercent: 8,
    stockQuantity: 4,
    status: 'low_stock',
    lastUpdated: '3 hours ago',
    isBestPrice: false
  },

  // Amaron Battery
  {
    id: 'inv-sharma-amaron',
    storeId: 'store-sharma-auto',
    productId: 'prod-amaron-bike-battery',
    price: 1250,
    mrp: 1450,
    discountPercent: 14,
    stockQuantity: 8,
    status: 'in_stock',
    lastUpdated: '30 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-city-amaron',
    storeId: 'store-city-auto',
    productId: 'prod-amaron-bike-battery',
    price: 1290,
    mrp: 1450,
    discountPercent: 11,
    stockQuantity: 3,
    status: 'in_stock',
    lastUpdated: '2 hours ago',
    isBestPrice: false
  },

  // MRF Tyre
  {
    id: 'inv-kumar-mrf-tyre',
    storeId: 'store-kumar-motors',
    productId: 'prod-mrf-zapper-tyre',
    price: 1850,
    mrp: 2150,
    discountPercent: 14,
    stockQuantity: 5,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },
  {
    id: 'inv-sharma-mrf-tyre',
    storeId: 'store-sharma-auto',
    productId: 'prod-mrf-zapper-tyre',
    price: 1920,
    mrp: 2150,
    discountPercent: 11,
    stockQuantity: 0,
    status: 'out_of_stock',
    lastUpdated: '4 hours ago',
    isBestPrice: false
  },

  // Studds Helmet
  {
    id: 'inv-kumar-studds-helmet',
    storeId: 'store-kumar-motors',
    productId: 'prod-studds-ninja-helmet',
    price: 1350,
    mrp: 1595,
    discountPercent: 15,
    stockQuantity: 9,
    status: 'in_stock',
    lastUpdated: '20 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-sharma-studds-helmet',
    storeId: 'store-sharma-auto',
    productId: 'prod-studds-ninja-helmet',
    price: 1399,
    mrp: 1595,
    discountPercent: 12,
    stockQuantity: 4,
    status: 'in_stock',
    lastUpdated: '1 day ago',
    isBestPrice: false
  },

  // 🛒 Grocery (Sri Krishna Super Store vs BTM Daily Fresh)
  {
    id: 'inv-krishna-aashirvaad',
    storeId: 'store-sri-krishna-kirana',
    productId: 'prod-aashirvaad-atta',
    price: 245,
    mrp: 275,
    discountPercent: 11,
    stockQuantity: 45,
    status: 'in_stock',
    lastUpdated: '5 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-btm-aashirvaad',
    storeId: 'store-btm-kirana-hub',
    productId: 'prod-aashirvaad-atta',
    price: 250,
    mrp: 275,
    discountPercent: 9,
    stockQuantity: 20,
    status: 'in_stock',
    lastUpdated: '15 mins ago',
    isBestPrice: false
  },
  {
    id: 'inv-krishna-amul-gold',
    storeId: 'store-sri-krishna-kirana',
    productId: 'prod-amul-gold-milk',
    price: 34,
    mrp: 34,
    discountPercent: 0,
    stockQuantity: 60,
    status: 'in_stock',
    lastUpdated: '2 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-btm-amul-gold',
    storeId: 'store-btm-kirana-hub',
    productId: 'prod-amul-gold-milk',
    price: 34,
    mrp: 34,
    discountPercent: 0,
    stockQuantity: 25,
    status: 'in_stock',
    lastUpdated: '10 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-krishna-daawat-rice',
    storeId: 'store-sri-krishna-kirana',
    productId: 'prod-daawat-basmati-rice',
    price: 399,
    mrp: 460,
    discountPercent: 13,
    stockQuantity: 18,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },
  {
    id: 'inv-btm-daawat-rice',
    storeId: 'store-btm-kirana-hub',
    productId: 'prod-daawat-basmati-rice',
    price: 410,
    mrp: 460,
    discountPercent: 11,
    stockQuantity: 10,
    status: 'in_stock',
    lastUpdated: '2 hours ago',
    isBestPrice: false
  },
  {
    id: 'inv-krishna-fortune-oil',
    storeId: 'store-sri-krishna-kirana',
    productId: 'prod-fortune-sunflower-oil',
    price: 132,
    mrp: 155,
    discountPercent: 15,
    stockQuantity: 32,
    status: 'in_stock',
    lastUpdated: '30 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-krishna-tata-tea',
    storeId: 'store-sri-krishna-kirana',
    productId: 'prod-tata-tea-gold',
    price: 285,
    mrp: 330,
    discountPercent: 14,
    stockQuantity: 24,
    status: 'in_stock',
    lastUpdated: '40 mins ago',
    isBestPrice: true
  },

  // 💊 Pharmacy (Sanjeevani Medicos vs Jayanagar Care Chemists)
  {
    id: 'inv-sanjeevani-dolo',
    storeId: 'store-apollo-local',
    productId: 'prod-dolo-650',
    price: 32,
    mrp: 35,
    discountPercent: 8,
    stockQuantity: 150,
    status: 'in_stock',
    lastUpdated: '8 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-jayanagar-dolo',
    storeId: 'store-apollo-jayanagar',
    productId: 'prod-dolo-650',
    price: 33,
    mrp: 35,
    discountPercent: 5,
    stockQuantity: 80,
    status: 'in_stock',
    lastUpdated: '25 mins ago',
    isBestPrice: false
  },
  {
    id: 'inv-sanjeevani-omron-bp',
    storeId: 'store-apollo-local',
    productId: 'prod-omron-bp-monitor',
    price: 1980,
    mrp: 2450,
    discountPercent: 19,
    stockQuantity: 7,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },
  {
    id: 'inv-jayanagar-omron-bp',
    storeId: 'store-apollo-jayanagar',
    productId: 'prod-omron-bp-monitor',
    price: 2050,
    mrp: 2450,
    discountPercent: 16,
    stockQuantity: 4,
    status: 'in_stock',
    lastUpdated: '3 hours ago',
    isBestPrice: false
  },
  {
    id: 'inv-sanjeevani-augmentin',
    storeId: 'store-apollo-local',
    productId: 'prod-augmentin-625',
    price: 195,
    mrp: 223,
    discountPercent: 12,
    stockQuantity: 28,
    status: 'in_stock',
    lastUpdated: '12 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-sanjeevani-dettol',
    storeId: 'store-apollo-local',
    productId: 'prod-dettol-antiseptic',
    price: 198,
    mrp: 220,
    discountPercent: 10,
    stockQuantity: 35,
    status: 'in_stock',
    lastUpdated: '30 mins ago',
    isBestPrice: true
  },

  // 📱 Electronics (Balaji Electronics)
  {
    id: 'inv-balaji-boat-450',
    storeId: 'store-croma-local',
    productId: 'prod-boat-rockerz-450',
    price: 1299,
    mrp: 3990,
    discountPercent: 67,
    stockQuantity: 14,
    status: 'in_stock',
    lastUpdated: '20 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-balaji-mi-powerbank',
    storeId: 'store-croma-local',
    productId: 'prod-mi-20000-powerbank',
    price: 1899,
    mrp: 2499,
    discountPercent: 24,
    stockQuantity: 11,
    status: 'in_stock',
    lastUpdated: '45 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-balaji-tplink-router',
    storeId: 'store-croma-local',
    productId: 'prod-tp-link-archer-router',
    price: 2399,
    mrp: 3299,
    discountPercent: 27,
    stockQuantity: 6,
    status: 'in_stock',
    lastUpdated: '2 hours ago',
    isBestPrice: true
  },

  // ⚡ Electrical (Bright Power Electricals)
  {
    id: 'inv-bright-havells-led',
    storeId: 'store-havells-dealer',
    productId: 'prod-havells-9w-led',
    price: 299,
    mrp: 420,
    discountPercent: 29,
    stockQuantity: 50,
    status: 'in_stock',
    lastUpdated: '15 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-bright-polycab-wire',
    storeId: 'store-havells-dealer',
    productId: 'prod-polycab-wire-15sqmm',
    price: 1780,
    mrp: 2150,
    discountPercent: 17,
    stockQuantity: 16,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },
  {
    id: 'inv-bright-anchor-switches',
    storeId: 'store-havells-dealer',
    productId: 'prod-anchor-roma-switch-pack',
    price: 280,
    mrp: 350,
    discountPercent: 20,
    stockQuantity: 40,
    status: 'in_stock',
    lastUpdated: '2 hours ago',
    isBestPrice: true
  },

  // 🔧 Hardware (National Hardware)
  {
    id: 'inv-national-bosch-drill',
    storeId: 'store-national-hardware',
    productId: 'prod-bosch-drill-gsb500',
    price: 3899,
    mrp: 5250,
    discountPercent: 26,
    stockQuantity: 8,
    status: 'in_stock',
    lastUpdated: '25 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-national-godrej-lock',
    storeId: 'store-national-hardware',
    productId: 'prod-godrej-navtal-lock',
    price: 485,
    mrp: 550,
    discountPercent: 12,
    stockQuantity: 22,
    status: 'in_stock',
    lastUpdated: '50 mins ago',
    isBestPrice: true
  },

  // 🏗️ Construction Materials (Balaji Building Depot)
  {
    id: 'inv-balaji-ultratech-cement',
    storeId: 'store-asian-paints-depot',
    productId: 'prod-ultratech-cement',
    price: 385,
    mrp: 420,
    discountPercent: 8,
    stockQuantity: 250,
    status: 'in_stock',
    lastUpdated: '10 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-balaji-asian-paints',
    storeId: 'store-asian-paints-depot',
    productId: 'prod-asian-paints-royale',
    price: 1890,
    mrp: 2200,
    discountPercent: 14,
    stockQuantity: 30,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },

  // 🏠 Home & Kitchen (Prestige Kitchen World)
  {
    id: 'inv-kitchen-prestige-cooker',
    storeId: 'store-kitchen-world',
    productId: 'prod-prestige-cooker-triply',
    price: 2450,
    mrp: 3100,
    discountPercent: 21,
    stockQuantity: 12,
    status: 'in_stock',
    lastUpdated: '35 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-kitchen-milton-flask',
    storeId: 'store-kitchen-world',
    productId: 'prod-milton-thermosteel-flask',
    price: 940,
    mrp: 1195,
    discountPercent: 21,
    stockQuantity: 18,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },

  // 🏋️ Sports (Chaitanya Sports)
  {
    id: 'inv-sports-ss-bat',
    storeId: 'store-chaitanya-sports',
    productId: 'prod-ss-cricket-bat',
    price: 6500,
    mrp: 8200,
    discountPercent: 21,
    stockQuantity: 4,
    status: 'in_stock',
    lastUpdated: '40 mins ago',
    isBestPrice: true
  },
  {
    id: 'inv-sports-yonex-racket',
    storeId: 'store-chaitanya-sports',
    productId: 'prod-yonex-nanoray-racket',
    price: 1999,
    mrp: 2990,
    discountPercent: 33,
    stockQuantity: 9,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },

  // 🐶 Pet Supplies (Happy Paws)
  {
    id: 'inv-paws-royal-canin',
    storeId: 'store-pet-paradise',
    productId: 'prod-royal-canin-dog-food',
    price: 2280,
    mrp: 2450,
    discountPercent: 7,
    stockQuantity: 15,
    status: 'in_stock',
    lastUpdated: '15 mins ago',
    isBestPrice: true
  },

  // 📚 Stationery (Sapna Book House)
  {
    id: 'inv-sapna-classmate',
    storeId: 'store-sapna-stationery',
    productId: 'prod-classmate-notebook-bundle',
    price: 360,
    mrp: 420,
    discountPercent: 14,
    stockQuantity: 50,
    status: 'in_stock',
    lastUpdated: '20 mins ago',
    isBestPrice: true
  },

  // 💄 Beauty (Glamour Beauty)
  {
    id: 'inv-beauty-cetaphil',
    storeId: 'store-beauty-lounge',
    productId: 'prod-cetaphil-cleanser',
    price: 540,
    mrp: 615,
    discountPercent: 12,
    stockQuantity: 20,
    status: 'in_stock',
    lastUpdated: '30 mins ago',
    isBestPrice: true
  },

  // 🌾 Agriculture (Annapurna Kisan Agri)
  {
    id: 'inv-agro-vermicompost',
    storeId: 'store-kisan-agro',
    productId: 'prod-organic-vermicompost-10kg',
    price: 320,
    mrp: 450,
    discountPercent: 29,
    stockQuantity: 60,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },

  // 👕 Fashion (FabIndia)
  {
    id: 'inv-fashion-kurta',
    storeId: 'store-trends-boutique',
    productId: 'prod-fabindia-cotton-kurta',
    price: 1290,
    mrp: 1690,
    discountPercent: 24,
    stockQuantity: 8,
    status: 'in_stock',
    lastUpdated: '2 hours ago',
    isBestPrice: true
  },

  // 👟 Footwear (Metro & Bata)
  {
    id: 'inv-footwear-bata-shoes',
    storeId: 'store-step-in-shoes',
    productId: 'prod-bata-leather-shoes',
    price: 1799,
    mrp: 2499,
    discountPercent: 28,
    stockQuantity: 7,
    status: 'in_stock',
    lastUpdated: '1 hour ago',
    isBestPrice: true
  },

  // 🎁 Gifts (Celebrations Gifts)
  {
    id: 'inv-gifts-fastrack-watch',
    storeId: 'store-archies-lifestyle',
    productId: 'prod-fastrack-analog-watch',
    price: 1395,
    mrp: 1895,
    discountPercent: 26,
    stockQuantity: 10,
    status: 'in_stock',
    lastUpdated: '45 mins ago',
    isBestPrice: true
  }
];
