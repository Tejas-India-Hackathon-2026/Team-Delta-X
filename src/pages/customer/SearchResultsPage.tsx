import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Star, 
  Grid, 
  List as ListIcon, 
  Map as MapIcon, 
  X, 
  Check, 
  Bell, 
  Sparkles, 
  Filter,
  ArrowUpDown,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../../components/customer/ProductCard';
import { GoogleMapView } from '../../components/map/GoogleMapView';
import { LocationPermissionModal } from '../../components/common/LocationPermissionModal';
import { DemandModal } from '../../components/customer/DemandModal';
import { SortOption, StockStatus, Product, EnrichedProductResult } from '../../types';
import { formatDistance } from '../../services/distanceService';

export const SearchResultsPage: React.FC = () => {
  const sortOptionsList: { value: SortOption; label: string; icon: string }[] = [
    { value: 'relevance', label: 'Best Match', icon: '🎯' },
    { value: 'price_asc', label: 'Price: Low to High', icon: '💰' },
    { value: 'price_desc', label: 'Price: High to Low', icon: '💎' },
    { value: 'distance_asc', label: 'Nearest Store First', icon: '📍' },
    { value: 'rating_desc', label: 'Highest Rated Retailer', icon: '⭐' }
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || '';

  const { 
    categories, 
    searchProducts, 
    enrichedProducts, 
    location, 
    stores, 
    hasLocationPermission, 
    detectGPSLocation,
    isLocating 
  } = useApp();

  // Local filter states
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [maxDistanceKm, setMaxDistanceKm] = useState<number>(location.radiusKm);
  const [selectedStatuses, setSelectedStatuses] = useState<StockStatus[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortOption, setSortOption] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const [demandModalProduct, setDemandModalProduct] = useState<Product | undefined>(undefined);

  // Prompt for location on first search if permission not yet granted
  React.useEffect(() => {
    if (!hasLocationPermission) {
      const timer = setTimeout(() => setShowLocationModal(true), 600);
      return () => clearTimeout(timer);
    }
  }, [hasLocationPermission]);

  // Sync with searchParams
  React.useEffect(() => {
    setSearchQuery(queryParam);
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [queryParam, categoryParam]);

  // Execute search
  const results = useMemo(() => {
    return searchProducts(
      searchQuery,
      {
        categoryId: selectedCategory || undefined,
        subcategory: selectedSubcategory || undefined,
        maxDistanceKm: maxDistanceKm,
        status: inStockOnly ? ['in_stock' as StockStatus] : (selectedStatuses.length > 0 ? selectedStatuses : undefined),
        brand: selectedBrands.length > 0 ? selectedBrands : undefined,
        minRating: minRating > 0 ? minRating : undefined
      },
      sortOption
    );
  }, [
    searchProducts,
    searchQuery,
    selectedCategory,
    selectedSubcategory,
    maxDistanceKm,
    selectedStatuses,
    selectedBrands,
    minRating,
    sortOption
  ]);

  // Available brands in the current results
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    results.forEach(r => brandsSet.add(r.product.brand));
    return Array.from(brandsSet);
  }, [results]);

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setMaxDistanceKm(location.radiusKm);
    setSelectedStatuses([]);
    setSelectedBrands([]);
    setMinRating(0);
    setSortOption('relevance');
  };

  const activeCategoryObj = categories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Search Header Banner */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <Link to="/" className="hover:text-brand-600">Home</Link>
              <span>/</span>
              <span>Search Results</span>
              {selectedCategory && (
                <>
                  <span>/</span>
                  <span className="font-semibold text-brand-700">{activeCategoryObj?.name}</span>
                </>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              {searchQuery ? (
                <>
                  <span>Results for “{searchQuery}”</span>
                </>
              ) : selectedCategory ? (
                <span>{activeCategoryObj?.emoji} {activeCategoryObj?.name}</span>
              ) : (
                <span>All Nearby Products</span>
              )}
              <span className="text-sm font-semibold text-slate-400 font-sans">
                ({results.length} items found)
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span>Device Location: <strong>{location.area}, {location.city}</strong></span>
              </div>
              <button
                onClick={() => setShowLocationModal(true)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition-colors"
              >
                Change GPS / Radius ({location.radiusKm} km)
              </button>
            </div>
          </div>

          {/* View Modes & Sort Controls */}
          <div className="flex items-center gap-3">
            {/* Direct Compare Matrix Link */}
            {results.length > 0 && (
              <Link
                to={`/compare?product=${results[0].product.id}`}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-black transition-all shadow-sm"
              >
                <span>⚖️ Compare Store Prices</span>
              </Link>
            )}

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-2xl p-1 px-3 border border-slate-200">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-transparent text-xs font-bold text-slate-700 outline-none cursor-pointer py-1"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="price_asc">Lowest Price (₹)</option>
                <option value="distance_asc">Nearest Store (km)</option>
                <option value="rating_desc">Highest Rated (★)</option>
                <option value="availability">Best Availability</option>
              </select>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-100 rounded-2xl p-1 border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl text-xs transition-all ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl text-xs transition-all ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="List View"
              >
                <ListIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-2 rounded-xl text-xs transition-all ${
                  viewMode === 'map' ? 'bg-white shadow-sm text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Map Split View"
              >
                <MapIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden p-2 rounded-2xl bg-brand-600 text-white flex items-center gap-1 text-xs font-bold shadow-sm"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Results Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex gap-8">
          
          {/* 🎛️ FILTERS SIDEBAR (Desktop) */}
          <aside className="hidden md:block w-72 shrink-0 space-y-6">
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-6 sticky top-24">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-brand-600" />
                  <span className="font-extrabold text-slate-900 text-sm">Refine Search</span>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] font-semibold text-slate-400 hover:text-brand-600 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Distance Radius Filter */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Search Radius</span>
                  <span className="text-brand-600 font-black">
                    Within {maxDistanceKm < 1 ? `${Math.round(maxDistanceKm * 1000)} m` : `${maxDistanceKm} km`}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { val: 0.6, label: '600m' },
                    { val: 2, label: '2km' },
                    { val: 5, label: '5km' },
                    { val: 10, label: '10km' }
                  ].map((rad) => (
                    <button
                      key={rad.label}
                      onClick={() => setMaxDistanceKm(rad.val)}
                      className={`py-1.5 rounded-xl text-xs font-bold transition-all ${
                        maxDistanceKm === rad.val
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {rad.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Category
                </div>
                <div className="max-h-48 overflow-y-auto space-y-1 pr-1 text-xs">
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedSubcategory('');
                    }}
                    className={`w-full text-left p-2 rounded-xl transition-all ${
                      !selectedCategory ? 'bg-brand-50 text-brand-700 font-bold' : 'hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCategory(c.id);
                        setSelectedSubcategory('');
                      }}
                      className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between ${
                        selectedCategory === c.id
                          ? 'bg-brand-50 text-brand-700 font-bold'
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <span className="truncate">{c.emoji} {c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subcategories (if category selected) */}
              {activeCategoryObj && activeCategoryObj.subcategories.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subcategory
                  </div>
                  <div className="max-h-36 overflow-y-auto space-y-1 pr-1 text-xs">
                    {activeCategoryObj.subcategories.map((sub, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSubcategory(selectedSubcategory === sub ? '' : sub)}
                        className={`w-full text-left p-2 rounded-xl transition-all ${
                          selectedSubcategory === sub
                            ? 'bg-brand-600 text-white font-bold'
                            : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stock Status Filter */}
              <div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Availability
                </div>
                <div className="space-y-2 text-xs">
                  {[
                    { id: 'in_stock', label: '🟢 In Stock Now' },
                    { id: 'low_stock', label: '🟡 Low Stock' },
                    { id: 'on_order', label: '🔵 Available on Order' }
                  ].map(statusItem => (
                    <label key={statusItem.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStatuses.includes(statusItem.id as StockStatus)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedStatuses(prev => [...prev, statusItem.id as StockStatus]);
                          } else {
                            setSelectedStatuses(prev => prev.filter(s => s !== statusItem.id));
                          }
                        }}
                        className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                      />
                      <span className="text-slate-700 font-medium">{statusItem.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands Filter */}
              {availableBrands.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Brand
                  </div>
                  <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 text-xs">
                    {availableBrands.map((b) => (
                      <label key={b} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(b)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands(prev => [...prev, b]);
                            } else {
                              setSelectedBrands(prev => prev.filter(brand => brand !== b));
                            }
                          }}
                          className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                        />
                        <span className="text-slate-700 font-medium">{b}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Rating Filter */}
              <div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Store Rating
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs font-semibold">
                  {[4, 4.5, 4.8].map(star => (
                    <button
                      key={star}
                      onClick={() => setMinRating(minRating === star ? 0 : star)}
                      className={`py-1.5 px-2 rounded-xl flex items-center justify-center gap-1 transition-all ${
                        minRating === star
                          ? 'bg-amber-500 text-white font-bold shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      <span>{star}+</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* 🛍️ RESULTS CONTAINER */}
          <main className="flex-1 space-y-6">
            
            {/* Map Split Mode */}
            {viewMode === 'map' && (
              <div className="mb-6">
                <GoogleMapView className="h-[480px] shadow-xl" />
              </div>
            )}

            {results.length === 0 ? (
              <div className="p-12 bg-white rounded-3xl border border-slate-200 text-center space-y-5 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>

                <div className="max-w-md mx-auto space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    No Exact Match In Stock Within {maxDistanceKm} km
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We couldn't find <strong>“{searchQuery}”</strong> in stock in neighborhood stores right now. Don't worry, request it below and we'll alert nearby retailers!
                  </p>
                </div>

                {/* Hero Demand Request Trigger */}
                <button
                  onClick={() => setDemandModalProduct(enrichedProducts[0]?.product)}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-brand-600 hover:from-orange-700 hover:to-brand-700 text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 flex items-center gap-2 mx-auto transition-all"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notify Me When Available Nearby</span>
                </button>

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setMaxDistanceKm(25)}
                    className="px-4 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold border border-brand-200 transition-colors"
                  >
                    📍 Expand Search Radius to 25 km
                  </button>
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-semibold text-slate-500 hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* 🏪 NEARBY STORES & LIVE PRICE COMPARISON BANNER */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-brand-950 rounded-3xl p-5 text-white shadow-xl space-y-3 border border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-brand-500 text-slate-950 flex items-center justify-center font-bold">
                        🏪
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-white">
                          Verified Local Stores Near {location.area}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Live inventory & counter price comparison within {maxDistanceKm} km
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/compare?product=${results[0].product.id}`}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-transform hover:scale-105 flex items-center gap-1.5 self-start sm:self-auto shadow-md"
                    >
                      <span>⚖️ Side-by-Side Price Comparison</span>
                    </Link>
                  </div>

                  {/* Horizontal Scroll of Local Stores */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                    {Array.from(new Set(results.flatMap(r => r.inventoryList.map(inv => inv.store.id))))
                      .slice(0, 3)
                      .map(storeId => {
                        const store = stores.find(s => s.id === storeId);
                        const storeInvs = results.flatMap(r => r.inventoryList.filter(inv => inv.storeId === storeId));
                        if (!store) return null;
                        const minStorePrice = Math.min(...storeInvs.map(i => i.price));

                        return (
                          <div
                            key={store.id}
                            className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all space-y-2 flex flex-col justify-between"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <Link
                                  to={`/store/${store.id}`}
                                  className="font-bold text-xs text-white hover:text-brand-300 transition-colors line-clamp-1"
                                >
                                  {store.name}
                                </Link>
                                <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                                  <MapPin className="w-3 h-3 text-brand-400 shrink-0" />
                                  <span>{formatDistance(store.distanceKm)} ({store.area})</span>
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-black shrink-0">
                                ⭐ {store.rating}
                              </span>
                            </div>

                            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                              <div>
                                <span className="text-[10px] text-slate-400">Best Price: </span>
                                <strong className="text-brand-300 font-extrabold text-sm">₹{minStorePrice}</strong>
                              </div>
                              <Link
                                to={`/store/${store.id}`}
                                className="text-[11px] font-bold text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg transition-colors"
                              >
                                View Store →
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Product List/Grid */}
                <div className={
                  viewMode === 'list'
                    ? 'space-y-4'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
                }>
                  {results.map((item) => (
                    <ProductCard
                      key={item.product.id}
                      item={item}
                      onOpenDemandModal={(p) => setDemandModalProduct(p.product)}
                    />
                  ))}
                </div>

                {/* Bottom Out-Of-Stock / Demand Broadcast Banner */}
                <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="font-bold text-sm text-brand-300">
                      Can’t find the exact model or pack size?
                    </div>
                    <p className="text-xs text-slate-400">
                      Broadcast a demand alert to 20+ nearby verified stores in {location.area}.
                    </p>
                  </div>

                  <button
                    onClick={() => setDemandModalProduct(results[0]?.product)}
                    className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-md shadow-brand-500/20"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Create Demand Alert</span>
                  </button>
                </div>
              </>
            )}

          </main>

        </div>
      </div>

      {/* Demand Modal */}
      {demandModalProduct && (
        <DemandModal
          isOpen={!!demandModalProduct}
          onClose={() => setDemandModalProduct(undefined)}
          product={demandModalProduct}
        />
      )}

      {/* Location Permission & Proximity Calibration Modal */}
      <LocationPermissionModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        searchContextQuery={searchQuery}
      />

    </div>
  );
};
