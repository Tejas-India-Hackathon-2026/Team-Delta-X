import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Mic, 
  Radio, 
  Store as StoreIcon, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Clock, 
  Tag, 
  ChevronRight, 
  Bell, 
  CheckCircle2,
  TrendingUp,
  Award,
  KeyRound
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../../components/customer/ProductCard';
import { StoreCard } from '../../components/customer/StoreCard';
import { DemandModal } from '../../components/customer/DemandModal';
import { LocationPermissionModal } from '../../components/common/LocationPermissionModal';
import { Product, EnrichedProductResult } from '../../types';

interface HomePageProps {
  onOpenVoiceModal: () => void;
  onOpenLocationModal: () => void;
}

// Generate location-aware example search queries from real nearby products
const buildLocationSearchExamples = (products: any[], location: any): string[] => {
  const cityContext = location.city || 'your area';
  const sortedByDistance = [...products].sort((a, b) => a.lowestDistanceKm - b.lowestDistanceKm);
  
  // Pick representative products across categories
  const seen = new Set<string>();
  const examples: string[] = [];
  
  for (const item of sortedByDistance) {
    const p = item.product;
    // Use brand + short product name for natural search queries
    const shortName = p.name.split(' ').slice(0, 4).join(' ');
    const query = p.brand && p.brand !== p.name.split(' ')[0] 
      ? `${p.brand} ${p.subcategory || shortName}` 
      : shortName;
    if (!seen.has(p.categoryId)) {
      seen.add(p.categoryId);
      examples.push(query);
    }
    if (examples.length >= 6) break;
  }
  
  // Fallback to universal examples if no products loaded
  if (examples.length < 3) {
    return [
      'Charger near me',
      'Bike parts nearby',
      'Dolo 650',
      'Engine oil',
      'LED bulb',
      'School notebook'
    ];
  }
  return examples;
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenVoiceModal, onOpenLocationModal }) => {
  const { 
    categories, 
    stores, 
    enrichedProducts, 
    location, 
    offers, 
    demands, 
    wishlist,
    hasLocationPermission
  } = useApp();

  const searchExamples = React.useMemo(
    () => buildLocationSearchExamples(enrichedProducts, location),
    [enrichedProducts, location]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [pendingSearchQuery, setPendingSearchQuery] = useState('');
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);
  const [demandModalProduct, setDemandModalProduct] = useState<Product | undefined>(undefined);
  const navigate = useNavigate();

  const executeSearch = (query: string) => {
    const q = query.trim();
    if (!q) return;

    // Prompt user for location access (GPS or Custom Location) first
    setPendingSearchQuery(q);
    setShowLocationPrompt(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      executeSearch(searchQuery);
    }
  };

  const handleLocationResolved = () => {
    setShowLocationPrompt(false);
    const targetQuery = pendingSearchQuery || searchQuery || 'all';
    navigate(`/search?q=${encodeURIComponent(targetQuery.trim())}`);
  };

  const trendingProducts = enrichedProducts.slice(0, 8);
  const topStores = stores.slice(0, 6);
  const activeOffers = offers.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* 🌟 HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-brand-950 text-white pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          
          {/* Main Hero Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Find Nearby. Compare Prices. <br />
            <span className="bg-gradient-to-r from-brand-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
              Buy Locally in Minutes.
            </span>
          </h1>

          {/* 🔍 Hero Search Input Box */}
          <div className="max-w-2xl mx-auto pt-2">
            <form
              onSubmit={handleSearch}
              className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 flex items-center gap-2 transition-all focus-within:ring-4 focus-within:ring-brand-500/30 text-slate-900"
            >
              <div className="pl-3 text-slate-400">
                <Search className="w-5 h-5" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search products near ${location.area || location.city || 'you'}… e.g. charger, bike parts, Dolo`}
                className="flex-1 py-2 sm:py-3 bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium outline-none"
              />

              <button
                type="button"
                onClick={onOpenVoiceModal}
                className="p-2 sm:p-2.5 text-slate-500 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
                title="Voice Search"
              >
                <Mic className="w-5 h-5 text-brand-600" />
              </button>

              <button
                type="submit"
                className="px-5 sm:px-7 py-3 rounded-xl sm:rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-brand-600/30 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Dhoondo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Dynamic Location-Aware Example Search Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                📍 Near {location.area?.split('/')[0].trim() || location.city || 'you'}:
              </span>
              {searchExamples.map((pill, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSearchQuery(pill);
                    executeSearch(pill);
                  }}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors text-xs font-medium"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-xl font-extrabold text-brand-300">20+ Stores</div>
              <div className="text-xs text-slate-400">Verified nearby</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-xl font-extrabold text-teal-300">100% Live</div>
              <div className="text-xs text-slate-400">Inventory synced</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-xl font-extrabold text-amber-300">₹ Best Price</div>
              <div className="text-xs text-slate-400">Instant comparison</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-xl font-extrabold text-rose-300">&lt; 15 Mins</div>
              <div className="text-xs text-slate-400">Counter pickup</div>
            </div>
          </div>

        </div>
      </section>

      {/* 🏪 RETAILER ONBOARDING BANNER (TAKE YOUR LOCAL STORE ONLINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-8 relative z-30">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-brand-950 border-2 border-brand-500/40 p-6 sm:p-8 text-white shadow-2xl shadow-brand-950/50">
          
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-black uppercase tracking-wider">
                <StoreIcon className="w-3.5 h-3.5 text-brand-400" />
                <span>Retailer Empowerment • Dukaan Onboarding</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Take Your Local Store Online with <span className="bg-gradient-to-r from-brand-400 to-teal-300 bg-clip-text text-transparent">Dhoondo</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                List your counter stock in 2 minutes, get direct WhatsApp customer orders, see nearby product demand, and connect with thousands of local shoppers.
              </p>

              {/* Feature Highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free Digital Storefront</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct WhatsApp Orders</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Local Customer Demand Radar</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Commission on Walk-ins</span>
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <Link
                to="/retailer/register"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-teal-400 hover:from-brand-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <StoreIcon className="w-4 h-4" />
                <span>Register Store (Sign Up)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/retailer/login"
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <KeyRound className="w-3.5 h-3.5 text-brand-400" />
                <span>Retailer Sign In</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 📦 16 PRODUCT CATEGORIES SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🗂️</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Explore by Product Category
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                16 comprehensive local categories with 100+ subcategories
              </p>
            </div>

            <Link
              to="/categories"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <span>View All 16</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/search?category=${cat.id}`}
                className="group p-3 rounded-2xl bg-slate-50 hover:bg-gradient-to-b hover:from-brand-50/80 hover:to-emerald-50/80 border border-slate-100 hover:border-brand-300/80 transition-all flex flex-col items-center text-center space-y-2 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-brand-800 line-clamp-2 leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🔔 CORE DEMAND RESTOCK LOOP HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dhoondo Demand Aggregator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Can’t find a specific product nearby?
            </h3>
            <p className="text-orange-100 text-xs sm:text-sm leading-relaxed">
              Submit your request! We aggregate local customer demand and alert verified nearby merchants in real-time. Over <strong>{demands.length * 8}</strong> local customers got their requested items restocked this week.
            </p>
          </div>

          <button
            onClick={() => setDemandModalProduct(enrichedProducts[0]?.product)}
            className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm shadow-xl hover:scale-105 transition-all shrink-0 flex items-center gap-2"
          >
            <Bell className="w-4 h-4 text-orange-600" />
            <span>Notify Me When In Stock</span>
          </button>
        </div>
      </section>

      {/* 🏷️ TRENDING PRODUCTS NEARBY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-rose-100 text-rose-600">
                <Flame className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Trending In Stock Near You
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Top searched items with verified inventory in {location.area}
            </p>
          </div>

          <Link
            to="/search"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <span>Explore All Products</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {trendingProducts.map((item) => (
            <ProductCard
              key={item.product.id}
              item={item}
              onOpenDemandModal={(p) => setDemandModalProduct(p.product)}
            />
          ))}
        </div>
      </section>

      {/* 🏪 TOP NEARBY LOCAL STORES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-brand-100 text-brand-600">
                <StoreIcon className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Verified Neighborhood Stores
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Rated 4.0+ with verified GST and digital storefronts
            </p>
          </div>

          <Link
            to="/map"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            <span>View on Interactive Map</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </section>

      {/* 🏷️ SPECIAL OFFERS & DEALS */}
      {activeOffers.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-amber-100 text-amber-600">
                  <Tag className="w-4 h-4" />
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Nearby Retailer Deals & Offers
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Exclusive discounts posted by local shop owners
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {activeOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative h-40 bg-slate-200 overflow-hidden">
                  <img
                    src={offer.bannerImage}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-rose-600 text-white font-black text-xs shadow-md">
                    {offer.discountPercent}% OFF
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                    {offer.storeName}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                      {offer.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {offer.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500">
                      Code: <strong className="text-brand-700 font-mono">{offer.couponCode}</strong>
                    </div>

                    <Link
                      to={`/store/${offer.storeId}`}
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                    >
                      <span>Claim Deal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Demand Modal */}
      {demandModalProduct && (
        <DemandModal
          isOpen={!!demandModalProduct}
          onClose={() => setDemandModalProduct(undefined)}
          product={demandModalProduct}
        />
      )}

      {/* Location Permission Prompt Modal for Search */}
      <LocationPermissionModal
        isOpen={showLocationPrompt}
        onClose={() => setShowLocationPrompt(false)}
        searchContextQuery={pendingSearchQuery || searchQuery}
        onLocationResolved={handleLocationResolved}
      />

    </div>
  );
};
