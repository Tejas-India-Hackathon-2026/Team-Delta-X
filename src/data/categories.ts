import { Category } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat-grocery',
    name: 'Grocery & Daily Needs',
    slug: 'grocery-daily-needs',
    iconName: 'ShoppingCart',
    emoji: '🛒',
    description: 'Fresh groceries, staples, dairy, beverages, snacks & daily essentials from local kiranas.',
    color: 'from-emerald-500 to-green-600',
    subcategories: [
      'Rice', 'Wheat', 'Flour', 'Pulses', 'Oil', 'Spices', 'Snacks',
      'Biscuits', 'Beverages', 'Dairy', 'Packaged Food', 'Fruits & Vegetables',
      'Cleaning Products', 'Household Essentials'
    ]
  },
  {
    id: 'cat-pharmacy',
    name: 'Pharmacy & Healthcare',
    slug: 'pharmacy-healthcare',
    iconName: 'Pill',
    emoji: '💊',
    description: 'Medicines, wellness products, first-aid & baby care from verified local chemists.',
    color: 'from-rose-500 to-red-600',
    subcategories: [
      'OTC medicines', 'Prescription medicines', 'First-aid', 'Medical devices',
      'Personal care', 'Health products', 'Baby care'
    ]
  },
  {
    id: 'cat-automobile',
    name: 'Automobile',
    slug: 'automobile',
    iconName: 'Car',
    emoji: '🚗',
    description: 'Genuine OEM & aftermarket spare parts, tyres, lubricants & accessories for bikes & cars.',
    color: 'from-amber-500 to-orange-600',
    subcategories: [
      'Car parts', 'Bike parts', 'Motorcycle parts', 'Scooter parts', 'Engine parts',
      'Brake parts', 'Filters', 'Batteries', 'Tyres', 'Lubricants', 'Engine oil',
      'Car accessories', 'Bike accessories', 'Helmets', 'Lights', 'Electrical parts', 'Tools'
    ]
  },
  {
    id: 'cat-electronics',
    name: 'Electronics & Technology',
    slug: 'electronics-technology',
    iconName: 'Smartphone',
    emoji: '📱',
    description: 'Mobiles, chargers, audio, computer accessories & smart gadgets from trusted shops.',
    color: 'from-blue-500 to-indigo-600',
    subcategories: [
      'Mobile phones', 'Chargers', 'Earphones', 'Headphones', 'Power banks', 'Cables',
      'Speakers', 'TVs', 'Cameras', 'Computer accessories', 'Printers', 'Routers',
      'Smart devices', 'Batteries'
    ]
  },
  {
    id: 'cat-hardware',
    name: 'Hardware & Tools',
    slug: 'hardware-tools',
    iconName: 'Wrench',
    emoji: '🔧',
    description: 'Power tools, hand tools, fasteners, plumbing & workshop hardware from local suppliers.',
    color: 'from-slate-600 to-slate-800',
    subcategories: [
      'Hand tools', 'Power tools', 'Drills', 'Screws', 'Nuts & bolts', 'Pipes',
      'Plumbing items', 'Locks', 'Paint tools', 'Welding products', 'Safety equipment'
    ]
  },
  {
    id: 'cat-electrical',
    name: 'Electrical',
    slug: 'electrical',
    iconName: 'Zap',
    emoji: '⚡',
    description: 'Wires, switches, LED lights, fans, inverters & electrical fittings from nearby dealers.',
    color: 'from-yellow-500 to-amber-600',
    subcategories: [
      'Wires', 'Switches', 'Sockets', 'LED bulbs', 'Fans', 'MCB',
      'Distribution boards', 'Electrical accessories', 'Batteries', 'Inverters', 'Solar products'
    ]
  },
  {
    id: 'cat-home-kitchen',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    iconName: 'Home',
    emoji: '🏠',
    description: 'Cookware, utensils, home appliances, storage & decor from neighborhood stores.',
    color: 'from-teal-500 to-cyan-600',
    subcategories: [
      'Kitchen utensils', 'Cookware', 'Storage', 'Furniture', 'Home appliances',
      'Fans', 'Kitchen appliances', 'Water bottles', 'Cleaning items', 'Home decor'
    ]
  },
  {
    id: 'cat-fashion',
    name: 'Fashion',
    slug: 'fashion',
    iconName: 'Shirt',
    emoji: '👕',
    description: 'Apparel, ethnic wear, formal wear & casual collections from local boutiques.',
    color: 'from-pink-500 to-rose-600',
    subcategories: [
      "Men's clothing", "Women's clothing", "Kids' clothing", 'Sarees', 'Shirts',
      'T-shirts', 'Jeans', 'Traditional wear', 'Winter wear'
    ]
  },
  {
    id: 'cat-footwear',
    name: 'Footwear',
    slug: 'footwear',
    iconName: 'Footprints',
    emoji: '👟',
    description: 'Formal shoes, sports sneakers, ethnic sandals & slippers from local footwear shops.',
    color: 'from-violet-500 to-purple-600',
    subcategories: [
      'Shoes', 'Sandals', 'Slippers', 'Sports shoes', 'School shoes', 'Formal shoes'
    ]
  },
  {
    id: 'cat-beauty',
    name: 'Beauty & Personal Care',
    slug: 'beauty-personal-care',
    iconName: 'Sparkles',
    emoji: '💄',
    description: 'Skincare, cosmetics, haircare, perfumes & grooming kits from beauty stores.',
    color: 'from-fuchsia-500 to-pink-600',
    subcategories: [
      'Cosmetics', 'Skincare', 'Haircare', 'Perfumes', 'Grooming', 'Salon products', 'Personal hygiene'
    ]
  },
  {
    id: 'cat-stationery',
    name: 'Education & Stationery',
    slug: 'education-stationery',
    iconName: 'BookOpen',
    emoji: '📚',
    description: 'School books, art supplies, notebooks, pens & office stationery from neighborhood stores.',
    color: 'from-sky-500 to-blue-600',
    subcategories: [
      'Books', 'Notebooks', 'Pens', 'Pencils', 'Bags', 'School supplies',
      'Office stationery', 'Art supplies', 'Printing supplies'
    ]
  },
  {
    id: 'cat-agriculture',
    name: 'Agriculture',
    slug: 'agriculture',
    iconName: 'Sprout',
    emoji: '🌾',
    description: 'Seeds, organic fertilizers, farming tools, sprayers & animal feed from rural/semi-urban hubs.',
    color: 'from-lime-600 to-green-700',
    subcategories: [
      'Seeds', 'Fertilizers', 'Farming tools', 'Irrigation equipment',
      'Sprayers', 'Agricultural machinery', 'Animal feed', 'Gardening products'
    ]
  },
  {
    id: 'cat-construction',
    name: 'Construction & Building Materials',
    slug: 'construction-building',
    iconName: 'Building2',
    emoji: '🏗️',
    description: 'Cement, steel, tiles, sand, paints & heavy hardware from local building depots.',
    color: 'from-stone-600 to-stone-800',
    subcategories: [
      'Cement', 'Bricks', 'Sand', 'Steel', 'Tiles', 'Paint', 'Pipes',
      'Plumbing', 'Electrical construction items', 'Hardware'
    ]
  },
  {
    id: 'cat-sports',
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    iconName: 'Trophy',
    emoji: '🏋️',
    description: 'Cricket gear, footballs, badminton, gym fitness accessories & cycles from sports retailers.',
    color: 'from-red-500 to-orange-500',
    subcategories: [
      'Cricket equipment', 'Football', 'Badminton', 'Gym equipment',
      'Sports shoes', 'Fitness accessories', 'Cycles'
    ]
  },
  {
    id: 'cat-pets',
    name: 'Pet Supplies',
    slug: 'pet-supplies',
    iconName: 'Dog',
    emoji: '🐶',
    description: 'Pet food, treats, toys, leashes, grooming & health supplies from local pet stores.',
    color: 'from-amber-600 to-yellow-600',
    subcategories: [
      'Pet food', 'Pet accessories', 'Grooming products', 'Pet care products'
    ]
  },
  {
    id: 'cat-gifts',
    name: 'Gifts & Lifestyle',
    slug: 'gifts-lifestyle',
    iconName: 'Gift',
    emoji: '🎁',
    description: 'Watches, festival items, decorative pieces, novelty toys & custom gift hampers.',
    color: 'from-indigo-500 to-purple-600',
    subcategories: [
      'Gifts', 'Toys', 'Watches', 'Accessories', 'Decorative items', 'Festival products'
    ]
  },
  {
    id: 'cat-other',
    name: 'Other / Local Custom Products',
    slug: 'other-local-products',
    iconName: 'Layers',
    emoji: '🛠️',
    description: 'Custom local goods, handicrafts, and merchant-defined special categories.',
    color: 'from-zinc-500 to-zinc-700',
    subcategories: ['Handicrafts', 'Custom Fabrications', 'Seasonal Specials', 'Local Services'],
    isCustom: true
  }
];
