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
        status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
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

            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>Showing stores within {maxDistanceKm} km of <strong>{location.area}</strong></span>
            </div>
          </div>

          {/* View Modes & Sort Controls */}
          <div className="flex items-center gap-3">
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
                  <span className="text-brand-600 font-black">Within {maxDistanceKm} km</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 5, 10, 20].map((rad) => (
                    <button
                      key={rad}
                      onClick={() => setMaxDistanceKm(rad)}
                      className={`py-1.5 rounded-xl text-xs font-bold transition-all ${
                        maxDistanceKm === rad
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {rad}km
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

                <div className="pt-4">
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-semibold text-brand-600 hover:underline"
                  >
                    Clear all filters & broaden radius
                  </button>
                </div>
              </div>
            ) : (
              <>
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
