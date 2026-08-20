import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Navigation, 
  Store as StoreIcon, 
  Star, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Plus, 
  Minus, 
  Crosshair, 
  Layers, 
  Check, 
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Store } from '../../types';
import { formatDistance } from '../../services/distanceService';

interface InteractiveMapProps {
  selectedStoreId?: string;
  onSelectStore?: (store: Store & { distanceKm: number }) => void;
  className?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedStoreId,
  onSelectStore,
  className = 'h-[600px]'
}) => {
  const { stores, location, setSearchRadius, categories } = useApp();
  const [activeStoreId, setActiveStoreId] = useState<string | null>(selectedStoreId || stores[0]?.id || null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedCatFilter, setSelectedCatFilter] = useState<string>('all');
  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite' | 'dark'>('streets');

  // Filter stores by category & radius
  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      if (store.distanceKm > location.radiusKm) return false;
      if (selectedCatFilter !== 'all' && !store.categoryIds.includes(selectedCatFilter)) {
        return false;
      }
      return true;
    });
  }, [stores, location.radiusKm, selectedCatFilter]);

  const activeStore = useMemo(() => {
    return stores.find(s => s.id === (activeStoreId || selectedStoreId));
  }, [stores, activeStoreId, selectedStoreId]);

  // Map coordinates projection scaling to SVG box
  const userLat = location.coordinates.lat;
  const userLng = location.coordinates.lng;

  // Scale map viewport based on radius
  const radiusDegrees = (location.radiusKm / 111) * 1.35; // approx conversion

  const getStorePos = (lat: number, lng: number) => {
    const deltaX = (lng - userLng) / radiusDegrees;
    const deltaY = (userLat - lat) / radiusDegrees;

    const x = 50 + deltaX * 42 * zoomLevel;
    const y = 50 + deltaY * 42 * zoomLevel;

    return { x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) };
  };

  const handleMarkerClick = (store: Store & { distanceKm: number }) => {
    setActiveStoreId(store.id);
    if (onSelectStore) onSelectStore(store);
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 ${className}`}>
      
      {/* Top Map Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        
        {/* Radius Pill Selector */}
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-2xl shadow-lg border border-slate-100 pointer-events-auto">
          <span className="px-2.5 text-xs font-bold text-slate-700">Radius:</span>
          {[1, 5, 10, 20].map((rad) => (
            <button
              key={rad}
              onClick={() => setSearchRadius(rad)}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                location.radiusKm === rad
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              {rad}km
            </button>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="hidden md:flex items-center gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-slate-100 pointer-events-auto overflow-x-auto max-w-lg">
          <button
            onClick={() => setSelectedCatFilter('all')}
            className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCatFilter === 'all'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Stores ({stores.length})
          </button>
          {categories.slice(0, 5).map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCatFilter(cat.id)}
              className={`px-2.5 py-1 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                selectedCatFilter === cat.id
                  ? 'bg-brand-600 text-white font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Map Type Switcher */}
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-2xl shadow-lg border border-slate-100 pointer-events-auto">
          <button
            onClick={() => setMapStyle('streets')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
              mapStyle === 'streets' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Vector
          </button>
          <button
            onClick={() => setMapStyle('dark')}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
              mapStyle === 'dark' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Night Radar
          </button>
        </div>

      </div>

      {/* Interactive Map Canvas Container */}
      <div className={`w-full h-full relative ${
        mapStyle === 'dark' 
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
          : 'bg-[#f4f7f6]'
      }`}>
        
        {/* Vector Grid & Radial Radar Lines */}
        <svg className="w-full h-full absolute inset-0 pointer-events-none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={mapStyle === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}
                strokeWidth="1"
              />
            </pattern>
            
            <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Radial Search Radius Circles */}
          <circle cx="50%" cy="50%" r="15%" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeDasharray="3 3" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(16, 185, 129, 0.25)" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="42%" fill="url(#radarGlow)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />

          {/* Radar Sweep Line */}
          {mapStyle === 'dark' && (
            <line
              x1="50%"
              y1="50%"
              x2="92%"
              y2="50%"
              stroke="rgba(52, 211, 153, 0.4)"
              strokeWidth="2"
              className="origin-center animate-radar-sweep"
            />
          )}

          {/* Connecting line to selected store */}
          {activeStore && (
            (() => {
              const pos = getStorePos(activeStore.coordinates.lat, activeStore.coordinates.lng);
              return (
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
              );
            })()
          )}
        </svg>

        {/* Center User Location Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute w-10 h-10 rounded-full bg-blue-500/30"></span>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/40 border-2 border-white flex items-center justify-center">
              <Navigation className="w-4 h-4" />
            </div>
          </div>
          <span className="mt-1 px-2 py-0.5 rounded-full bg-slate-900/90 text-white text-[10px] font-bold shadow-md whitespace-nowrap">
            You ({location.area.split(',')[0]})
          </span>
        </div>

        {/* Store Markers */}
        {filteredStores.map((store) => {
          const pos = getStorePos(store.coordinates.lat, store.coordinates.lng);
          const isSelected = store.id === activeStore?.id;

          return (
            <div
              key={store.id}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onClick={() => handleMarkerClick(store)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group transition-transform"
            >
              <div className={`relative flex flex-col items-center ${isSelected ? 'scale-125 z-30' : 'hover:scale-110'}`}>
                {/* Store Pin Icon */}
                <div className={`p-2 rounded-2xl shadow-lg border-2 transition-all flex items-center justify-center ${
                  isSelected
                    ? 'bg-brand-600 text-white border-white ring-4 ring-brand-500/30 shadow-brand-500/50'
                    : 'bg-white text-slate-800 border-slate-200 group-hover:border-brand-500 group-hover:text-brand-600'
                }`}>
                  <StoreIcon className="w-4 h-4" />
                </div>

                {/* Micro Label */}
                <span className={`mt-1 px-1.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-sm whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-900 text-brand-300'
                    : 'bg-white/90 text-slate-800 border border-slate-200'
                }`}>
                  {store.name.split(' ')[0]} • {formatDistance(store.distanceKm)}
                </span>
              </div>
            </div>
          );
        })}

      </div>

      {/* Zoom / Re-center Floating Controls */}
      <div className="absolute right-4 bottom-24 z-20 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-slate-100">
        <button
          onClick={() => setZoomLevel(prev => Math.min(2, prev + 0.2))}
          className="p-2 hover:bg-slate-100 rounded-xl text-slate-700 transition-colors"
          title="Zoom In"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.2))}
          className="p-2 hover:bg-slate-100 rounded-xl text-slate-700 transition-colors"
          title="Zoom Out"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoomLevel(1)}
          className="p-2 hover:bg-slate-100 rounded-xl text-brand-600 transition-colors"
          title="Re-center View"
        >
          <Crosshair className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Store Information Popup Card */}
      {activeStore && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-30 animate-in slide-in-from-bottom-4 duration-200">
          <div className="p-4 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-100 flex items-start gap-3.5">
            <img
              src={activeStore.image}
              alt={activeStore.name}
              className="w-16 h-16 rounded-2xl object-cover shrink-0 border border-slate-200"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80';
              }}
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <Link
                  to={`/store/${activeStore.id}`}
                  className="font-extrabold text-sm text-slate-900 hover:text-brand-600 truncate flex items-center gap-1.5"
                >
                  <span>{activeStore.name}</span>
                  {activeStore.verified && <ShieldCheck className="w-3.5 h-3.5 text-brand-600 fill-brand-100 shrink-0" />}
                </Link>
                <div className="flex items-center gap-0.5 text-amber-500 font-bold text-xs shrink-0">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{activeStore.rating}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 truncate mt-0.5">
                {activeStore.address}
              </p>

              <div className="flex items-center gap-3 mt-1.5 text-xs">
                <span className="font-bold text-brand-700 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-600" />
                  {formatDistance(activeStore.distanceKm)}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-700 font-medium">{activeStore.openingHours}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/${activeStore.whatsapp}?text=${encodeURIComponent(`Hi ${activeStore.name}, I am visiting from Dhoondo map.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${activeStore.coordinates.lat},${activeStore.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Directions</span>
                </a>

                <Link
                  to={`/store/${activeStore.id}`}
                  className="py-1.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                >
                  <span>Store</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
