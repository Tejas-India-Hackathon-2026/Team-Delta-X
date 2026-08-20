import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { 
  Navigation, 
  MapPin, 
  Store as StoreIcon, 
  Star, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Plus, 
  Minus, 
  Compass, 
  Layers, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Info, 
  Globe2, 
  ChevronDown, 
  Route, 
  Share2, 
  Maximize2,
  X,
  Package,
  CheckCircle2,
  Clock,
  Heart
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Store } from '../../types';
import { formatDistance } from '../../services/distanceService';
import { getGoogleMapsDirectionsUrl, getGoogleMapsLocationUrl } from '../../services/geolocationService';

// Fix Leaflet Default Icon path issues in bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface GoogleMapViewProps {
  selectedStoreId?: string;
  onSelectStore?: (store: Store & { distanceKm: number }) => void;
  className?: string;
  highlightCategory?: string;
  showRadiusControls?: boolean;
}

// 2D Map Tile Providers
const TILE_PROVIDERS = {
  google_streets: {
    name: 'Google Roadmap (2D)',
    url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps'
  },
  google_satellite: {
    name: 'Google Satellite Hybrid',
    url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps'
  },
  google_terrain: {
    name: 'Google Terrain (2D)',
    url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps'
  },
  carto_voyager: {
    name: 'Voyager 2D',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; CARTO &copy; OpenStreetMap'
  }
};

export const GoogleMapView: React.FC<GoogleMapViewProps> = ({
  selectedStoreId,
  onSelectStore,
  className = 'h-[540px] sm:h-[640px]',
  highlightCategory = 'all',
  showRadiusControls = true
}) => {
  const { 
    stores, 
    location, 
    setLocation, 
    setSearchRadius, 
    categories, 
    detectGPSLocation,
    getStoreInventory,
    wishlist,
    toggleWishlist
  } = useApp();
  
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const circleLayerRef = useRef<L.Circle | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const storeMarkersGroupRef = useRef<L.LayerGroup | null>(null);

  const [activeStoreId, setActiveStoreId] = useState<string | null>(selectedStoreId || stores[0]?.id || null);
  const [selectedLayer, setSelectedLayer] = useState<keyof typeof TILE_PROVIDERS>('google_streets');
  const [isLayerMenuOpen, setIsLayerMenuOpen] = useState(false);
  const [isLocatingGPS, setIsLocatingGPS] = useState(false);
  const [isStoreDrawerOpen, setIsStoreDrawerOpen] = useState(false);

  // Filter stores within active radius & category
  const visibleStores = useMemo(() => {
    return stores.filter(store => {
      if (store.distanceKm > (location.radiusKm || 10)) return false;
      if (highlightCategory !== 'all' && !store.categoryIds.includes(highlightCategory)) {
        return false;
      }
      return true;
    });
  }, [stores, location.radiusKm, highlightCategory]);

  const activeStore = useMemo(() => {
    return stores.find(s => s.id === (activeStoreId || selectedStoreId)) || visibleStores[0] || stores[0];
  }, [stores, visibleStores, activeStoreId, selectedStoreId]);

  // In-Stock Inventory for Active Store
  const storeInventory = useMemo(() => {
    if (!activeStore) return [];
    return getStoreInventory(activeStore.id);
  }, [activeStore, getStoreInventory]);

  // Google Maps Direct Web URL
  const googleMapsWebUrl = useMemo(() => {
    const q = `${location.area}, ${location.city}${location.state ? `, ${location.state}` : ''}`;
    return getGoogleMapsLocationUrl(location.coordinates.lat, location.coordinates.lng, q);
  }, [location]);

  // 1. Initialize Leaflet 2D Map Instance
  useEffect(() => {
    if (!mapContainerRef.current || leafletMapRef.current) return;

    const lat = location.coordinates.lat || 24.9272;
    const lng = location.coordinates.lng || 86.2238;

    // Calculate optimal zoom level based on radius
    const initialZoom = location.radiusKm <= 1 ? 16 : location.radiusKm <= 5 ? 14 : location.radiusKm <= 10 ? 13 : 11;

    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: initialZoom,
      zoomControl: false,
      attributionControl: false
    });

    // Add Base Tile Layer (Google 2D Roadmap)
    const provider = TILE_PROVIDERS[selectedLayer];
    const tileLayer = L.tileLayer(provider.url, {
      maxZoom: 20,
      subdomains: ['a', 'b', 'c', 'd'],
      attribution: provider.attribution
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Store Markers Group
    const markersGroup = L.layerGroup().addTo(map);
    storeMarkersGroupRef.current = markersGroup;

    leafletMapRef.current = map;

    return () => {
      map.remove();
      leafletMapRef.current = null;
    };
  }, []);

  // 2. Handle Layer Switching (Google Streets, Satellite, Terrain)
  useEffect(() => {
    if (!leafletMapRef.current) return;

    if (tileLayerRef.current) {
      leafletMapRef.current.removeLayer(tileLayerRef.current);
    }

    const provider = TILE_PROVIDERS[selectedLayer];
    const newTileLayer = L.tileLayer(provider.url, {
      maxZoom: 20,
      subdomains: ['a', 'b', 'c', 'd'],
      attribution: provider.attribution
    }).addTo(leafletMapRef.current);

    tileLayerRef.current = newTileLayer;
  }, [selectedLayer]);

  // 3. Update User Location Pin & 2D Radius Circle
  useEffect(() => {
    const map = leafletMapRef.current;
    if (!map) return;

    const lat = location.coordinates.lat || 24.9272;
    const lng = location.coordinates.lng || 86.2238;
    const radiusMeters = (location.radiusKm || 1) * 1000;

    // Smooth Pan to new coordinates
    const targetZoom = location.radiusKm <= 1 ? 16 : location.radiusKm <= 5 ? 14 : location.radiusKm <= 10 ? 13 : 11;
    map.flyTo([lat, lng], targetZoom, { duration: 1.2 });

    // Update / Draw 2D Radius Circle
    if (circleLayerRef.current) {
      map.removeLayer(circleLayerRef.current);
    }

    const radiusCircle = L.circle([lat, lng], {
      radius: radiusMeters,
      color: '#2563eb', // Blue border
      weight: 2.5,
      dashArray: '6, 6',
      fillColor: '#3b82f6', // Light blue fill
      fillOpacity: 0.14
    }).addTo(map);

    circleLayerRef.current = radiusCircle;

    // Update / Draw User Location Pin
    if (userMarkerRef.current) {
      map.removeLayer(userMarkerRef.current);
    }

    const userIcon = L.divIcon({
      className: 'custom-user-marker',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px;">
          <div style="position: absolute; width: 36px; height: 36px; border-radius: 50%; background: rgba(59, 130, 246, 0.4); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="position: relative; width: 22px; height: 22px; border-radius: 50%; background: #2563eb; border: 3px solid #ffffff; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.5); display: flex; align-items: center; justify-content: center;">
            <div style="width: 6px; height: 6px; border-radius: 50%; background: #ffffff;"></div>
          </div>
          <div style="position: absolute; top: -22px; background: rgba(15, 23, 42, 0.95); color: #ffffff; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2); white-space: nowrap; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
            📍 You (${location.radiusKm}km Radius)
          </div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });

    const userMarker = L.marker([lat, lng], { icon: userIcon, zIndexOffset: 1000 }).addTo(map);
    userMarkerRef.current = userMarker;

  }, [location.coordinates, location.radiusKm, location.area]);

  // 4. Update Store Markers on Real 2D Map
  useEffect(() => {
    const map = leafletMapRef.current;
    const markersGroup = storeMarkersGroupRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    visibleStores.forEach((store) => {
      const isSelected = store.id === (activeStoreId || selectedStoreId);
      const isAuto = store.categoryIds.includes('cat-automobile');
      const isPharma = store.categoryIds.includes('cat-pharmacy');
      const isGrocery = store.categoryIds.includes('cat-grocery');
      const isTech = store.categoryIds.includes('cat-electronics');

      const emoji = isAuto ? '🛵' : isPharma ? '💊' : isGrocery ? '🛒' : isTech ? '📱' : '🏪';
      const bgColor = isSelected ? '#ea580c' : isAuto ? '#0284c7' : isPharma ? '#059669' : isGrocery ? '#d97706' : '#7c3aed';

      const storeIcon = L.divIcon({
        className: 'custom-store-marker',
        html: `
          <div style="position: relative; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
            <div style="
              width: ${isSelected ? '40px' : '34px'};
              height: ${isSelected ? '40px' : '34px'};
              border-radius: 12px;
              background: ${bgColor};
              border: 2.5px solid #ffffff;
              box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: ${isSelected ? '19px' : '16px'};
            ">
              ${emoji}
            </div>
            <div style="
              position: absolute;
              bottom: -18px;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(15, 23, 42, 0.95);
              color: #ffffff;
              font-size: 9px;
              font-weight: 800;
              padding: 1px 6px;
              border-radius: 6px;
              white-space: nowrap;
              border: 1px solid rgba(255,255,255,0.15);
              box-shadow: 0 2px 6px rgba(0,0,0,0.25);
            ">
              ${store.name.split(' ')[0]} • ${formatDistance(store.distanceKm)}
            </div>
          </div>
        `,
        iconSize: [40, 50],
        iconAnchor: [20, 25]
      });

      const marker = L.marker([store.coordinates.lat, store.coordinates.lng], { icon: storeIcon });

      marker.on('click', () => {
        setActiveStoreId(store.id);
        setIsStoreDrawerOpen(true);
        if (onSelectStore) {
          onSelectStore(store);
        }
        map.flyTo([store.coordinates.lat, store.coordinates.lng], 16, { duration: 0.8 });
      });

      markersGroup.addLayer(marker);
    });

  }, [visibleStores, activeStoreId, selectedStoreId, location.coordinates, onSelectStore]);

  // Map Controls Helpers
  const handleZoomIn = () => leafletMapRef.current?.zoomIn();
  const handleZoomOut = () => leafletMapRef.current?.zoomOut();
  const handleRecenter = () => {
    leafletMapRef.current?.flyTo(
      [location.coordinates.lat, location.coordinates.lng], 
      location.radiusKm <= 1 ? 16 : 14
    );
  };

  const handleGPSDetect = async () => {
    setIsLocatingGPS(true);
    await detectGPSLocation();
    setIsLocatingGPS(false);
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 flex flex-col ${className}`}>
      
      {/* ------------------------------------------------------------- */}
      {/* TOP CONTROLS BAR: 2D MAP CONTROLS & GOOGLE MAPS REDIRECT */}
      {/* ------------------------------------------------------------- */}
      <div className="p-3 sm:p-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex flex-wrap items-center justify-between gap-2.5 z-20">
        
        {/* Left: Active Location & 2D Radius Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-bold text-white truncate max-w-[170px] sm:max-w-[240px]">
              {location.area}, {location.city}
            </span>
            <span className="bg-blue-600/30 text-blue-300 border border-blue-500/40 text-[10px] px-2 py-0.5 rounded-full font-extrabold">
              {location.radiusKm} km 2D Radius
            </span>
          </div>

          {/* GPS Auto-Detect */}
          <button
            onClick={handleGPSDetect}
            disabled={isLocatingGPS}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-brand-400 text-xs font-bold transition-all"
            title="Auto-detect current GPS coordinates"
          >
            <Navigation className={`w-3.5 h-3.5 ${isLocatingGPS ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">{isLocatingGPS ? 'Locating...' : 'GPS'}</span>
          </button>
        </div>

        {/* Center: Discovery Radius Pills */}
        {showRadiusControls && (
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <span className="px-1.5 text-[10px] font-bold text-slate-400">Radius:</span>
            {[1, 5, 10, 20, 50].map((rad) => (
              <button
                key={rad}
                type="button"
                onClick={() => setSearchRadius(rad)}
                className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${
                  location.radiusKm === rad
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {rad}km
              </button>
            ))}
          </div>
        )}

        {/* Right: Map Layers & Google Maps Redirect */}
        <div className="flex items-center gap-2">
          
          {/* Layer Selector Dropdown (Streets / Satellite / Terrain) */}
          <div className="relative">
            <button
              onClick={() => setIsLayerMenuOpen(!isLayerMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-all"
            >
              <Layers className="w-3.5 h-3.5 text-brand-400" />
              <span className="hidden md:inline">{TILE_PROVIDERS[selectedLayer].name}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isLayerMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-2xl p-1.5 shadow-2xl z-50 space-y-1">
                {(Object.keys(TILE_PROVIDERS) as Array<keyof typeof TILE_PROVIDERS>).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedLayer(key);
                      setIsLayerMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                      selectedLayer === key
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{TILE_PROVIDERS[key].name}</span>
                    {selectedLayer === key && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 🗺️ Direct Google Maps Redirect Button */}
          <a
            href={googleMapsWebUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-extrabold transition-all shadow-md shadow-blue-500/25 active:scale-95"
            title="Redirect and open this exact 2D location in official Google Maps app/website"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Open in Google Maps ↗</span>
          </a>

        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2D MAP CANVAS + INTERACTIVE REGISTERED RETAILER DRAWER */}
      {/* ------------------------------------------------------------- */}
      <div className="relative flex-1 w-full h-full min-h-[440px] overflow-hidden">
        
        {/* Leaflet 2D Map Container */}
        <div ref={mapContainerRef} className="w-full h-full min-h-[440px] z-10" />

        {/* Floating Map Zoom & Recenter Controls (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2 shadow-2xl">
          <button
            onClick={handleRecenter}
            className="p-2.5 bg-slate-900/90 hover:bg-slate-800 text-white rounded-xl border border-slate-700 backdrop-blur-md shadow-lg transition-all active:scale-95"
            title="Recenter to your location"
          >
            <Navigation className="w-4 h-4 text-blue-400" />
          </button>
          
          <div className="flex flex-col bg-slate-900/90 rounded-xl border border-slate-700 backdrop-blur-md overflow-hidden shadow-lg">
            <button
              onClick={handleZoomIn}
              className="p-2.5 text-white hover:bg-slate-800 border-b border-slate-800 transition-colors"
              title="Zoom In"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2.5 text-white hover:bg-slate-800 transition-colors"
              title="Zoom Out"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Left: Live Stores Count & 2D Radius Legend */}
        {!isStoreDrawerOpen && (
          <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 pointer-events-none animate-in fade-in duration-300">
            <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-800 text-xs text-white shadow-2xl pointer-events-auto flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></span>
              <span>
                <strong>{visibleStores.length} Verified Stores</strong> within <span className="text-blue-400 font-bold">{location.radiusKm} km radius circle</span>
              </span>
            </div>

            {activeStore && (
              <button
                onClick={() => setIsStoreDrawerOpen(true)}
                className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-3 py-2 rounded-2xl shadow-xl pointer-events-auto flex items-center gap-1.5 transition-all"
              >
                <StoreIcon className="w-3.5 h-3.5" />
                <span>View {activeStore.name.split(' ')[0]} Details</span>
              </button>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 🏪 FULL FUNCTIONAL RETAILER DETAILS DRAWER (OVER MAP) */}
        {/* ------------------------------------------------------------- */}
        {isStoreDrawerOpen && activeStore && (
          <div className="absolute top-0 right-0 w-full sm:w-[380px] lg:w-[420px] h-full bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl z-30 flex flex-col animate-in slide-in-from-right duration-300 text-white">
            
            {/* Drawer Header */}
            <div className="relative h-32 w-full bg-slate-800 overflow-hidden shrink-0">
              <img
                src={activeStore.bannerImage || activeStore.image}
                alt={activeStore.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
              
              <button
                onClick={() => setIsStoreDrawerOpen(false)}
                className="absolute top-3 right-3 p-1.5 bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors"
                title="Close shop details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <img
                  src={activeStore.image}
                  alt={activeStore.name}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-brand-500 shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] bg-brand-500 text-slate-950 font-black px-2 py-0.2 rounded-full">
                      Verified Merchant
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded font-bold">
                      {activeStore.isOpen ? '🟢 Open Now' : '🔴 Closed'}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm text-white leading-snug line-clamp-1 mt-0.5">
                    {activeStore.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-xs">
              
              {/* Meta & Ratings Bar */}
              <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{activeStore.rating}</span>
                  <span className="text-slate-400 font-normal text-[11px]">({activeStore.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-center gap-1 text-brand-400 font-bold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{formatDistance(activeStore.distanceKm)}</span>
                </div>

                <div className="text-[11px] text-slate-400 font-medium">
                  {activeStore.city}
                </div>
              </div>

              {/* Address & Operating Hours */}
              <div className="space-y-1.5 bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80">
                <div className="flex items-start gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span>{activeStore.address}, {activeStore.area}, {activeStore.city} (PIN: {activeStore.pincode})</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Timing: <strong className="text-slate-200">{activeStore.openingHours}</strong></span>
                </div>
                {activeStore.ownerName && (
                  <div className="text-[11px] text-slate-400 pt-0.5">
                    Owner: <strong className="text-slate-200">{activeStore.ownerName}</strong>
                  </div>
                )}
              </div>

              {/* Action Buttons: Direct Call, WhatsApp & Google Maps Route */}
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={`tel:${activeStore.phone}`}
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold transition-all active:scale-95"
                  title="Call Merchant Directly"
                >
                  <Phone className="w-4 h-4 text-emerald-400 mb-1" />
                  <span className="text-[11px]">Call</span>
                </a>

                <a
                  href={`https://wa.me/${activeStore.whatsapp}?text=${encodeURIComponent(`Hi ${activeStore.name}, I found your shop on Dhoondo and want to enquire about product availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-700/60 text-emerald-200 font-bold transition-all active:scale-95"
                  title="Chat on WhatsApp with Merchant"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 mb-1" />
                  <span className="text-[11px]">WhatsApp</span>
                </a>

                <a
                  href={getGoogleMapsDirectionsUrl(
                    location.coordinates.lat,
                    location.coordinates.lng,
                    activeStore.coordinates.lat,
                    activeStore.coordinates.lng,
                    activeStore.name
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-950/80 hover:bg-blue-900/80 border border-blue-700/60 text-blue-200 font-bold transition-all active:scale-95"
                  title="Google Maps Turn-by-Turn Route"
                >
                  <Navigation className="w-4 h-4 text-blue-400 mb-1" />
                  <span className="text-[11px]">Directions</span>
                </a>
              </div>

              {/* Store Facilities Badges */}
              {activeStore.facilities && activeStore.facilities.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Shop Features:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStore.facilities.map((fac, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-slate-800 text-slate-300 text-[10px] font-medium flex items-center gap-1 border border-slate-700"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-brand-400" />
                        <span>{fac}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 📦 LIVE IN-STOCK INVENTORY AT THIS SHOP */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-white text-xs flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-brand-400" />
                    <span>In-Stock Products at this Shop ({storeInventory.length})</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">Live Inventory</span>
                </div>

                {storeInventory.length === 0 ? (
                  <div className="p-4 text-center bg-slate-950 rounded-xl text-slate-400 text-xs">
                    Loading shop inventory...
                  </div>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {storeInventory.map((item) => {
                      const isWishlisted = wishlist.includes(item.product.id);
                      return (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-10 h-10 rounded-lg object-cover bg-slate-900 shrink-0 border border-slate-800"
                            />
                            <div>
                              <div className="font-bold text-white text-xs line-clamp-1">
                                {item.product.name}
                              </div>
                              <div className="text-[11px] text-brand-400 font-extrabold flex items-center gap-2">
                                <span>₹{item.price.toLocaleString('en-IN')}</span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                                  item.status === 'in_stock' 
                                    ? 'bg-emerald-500/20 text-emerald-300' 
                                    : 'bg-amber-500/20 text-amber-300'
                                }`}>
                                  {item.stockQuantity} in stock
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => toggleWishlist(item.product.id)}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                isWishlisted 
                                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-400' 
                                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                              }`}
                              title="Save to wishlist"
                            >
                              <Heart className="w-3.5 h-3.5" fill={isWishlisted ? 'currentColor' : 'none'} />
                            </button>

                            <Link
                              to={`/product/${item.product.id}`}
                              className="px-2 py-1 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-[10px] font-bold"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* Drawer Footer: Dedicated Store Profile Link */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <Link
                to={`/store/${activeStore.id}`}
                className="flex-1 py-2.5 px-4 bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-500 hover:to-teal-500 text-white text-xs font-black rounded-xl text-center shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Visit Full Shop Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
