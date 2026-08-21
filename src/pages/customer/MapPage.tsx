import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, ArrowLeft, Store, ShieldCheck, Compass, Sparkles, SlidersHorizontal, Globe2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { GoogleMapView } from '../../components/map/GoogleMapView';
import { StoreCard } from '../../components/customer/StoreCard';
import { CascadedLocationPicker } from '../../components/map/CascadedLocationPicker';

export const MapPage: React.FC = () => {
  const [isFullscreenMap, setIsFullscreenMap] = useState(false);
  const { location, stores, categories } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mapFilterOpenOnly, setMapFilterOpenOnly] = useState(false);
  const [mapFilterVerifiedOnly, setMapFilterVerifiedOnly] = useState(false);
  const [selectedStoreId, setSelectedStoreId] = useState<string | undefined>(undefined);
  const [showSearchThisArea, setShowSearchThisArea] = useState(false);

  const filteredStores = stores.filter(store => {
    if (selectedCategory !== 'all' && !store.categoryIds.includes(selectedCategory)) {
      return false;
    }
    return true;
  });

  
  const handleRecenterMap = () => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleSelectStoreFromCard = (storeId: string) => {
    setSelectedStoreId(storeId);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-20">
      
      {/* Top Map Header */}
      <div className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4 px-4 sm:px-6 lg:px-8 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-400" />
                <span>Explore Live Stores & Map (All India)</span>
              </h1>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                <span>
                  Showing verified stores in <strong className="text-white">{location.city}</strong> {location.state ? `(${location.state})` : ''} • Radius: {location.radiusKm} km
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Google Maps Integration</span>
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* 🌟 3-TIER CASCADED LOCATION PICKER: STATE ➔ DISTRICT ➔ LOCAL AREA */}
        <CascadedLocationPicker />

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-brand-500 text-slate-950 font-black shadow-lg shadow-brand-500/25'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            All Categories ({stores.length})
          </button>

          {categories.map(cat => {
            const count = stores.filter(s => s.categoryIds.includes(cat.id)).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-500 text-slate-950 font-black shadow-lg shadow-brand-500/25'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Interactive 2D Map Viewport with Functional Retailer Drawer */}
        <GoogleMapView 
          className="h-[540px] sm:h-[660px]" 
          highlightCategory={selectedCategory} 
          selectedStoreId={selectedStoreId}
          onSelectStore={(store) => setSelectedStoreId(store.id)}
        />

        {/* Nearby Stores Grid below Map */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Store className="w-5 h-5 text-brand-400" />
              <span>Verified Stores in {location.city} ({filteredStores.length})</span>
            </h2>
            <span className="text-xs text-slate-400">Sorted by walking / driving proximity</span>
          </div>

          {filteredStores.length === 0 ? (
            <div className="p-8 text-center bg-slate-950/60 rounded-3xl border border-slate-800">
              <Store className="w-10 h-10 text-slate-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-300">No stores found in this category nearby</p>
              <p className="text-xs text-slate-500 mt-1">Try expanding your search radius or choose "All Categories"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredStores.map(store => (
                <div 
                  key={store.id} 
                  onClick={() => handleSelectStoreFromCard(store.id)} 
                  className="cursor-pointer transition-transform hover:-translate-y-1"
                >
                  <StoreCard store={store} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
