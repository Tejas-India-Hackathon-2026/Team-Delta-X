import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Navigation, 
  X, 
  Search, 
  ShieldCheck, 
  Loader2, 
  Compass, 
  Building2, 
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { INDIAN_STATES_DATA, POPULAR_INDIAN_HUBS, IndianCityArea } from '../../data/indianLocations';

interface LocationPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchContextQuery?: string;
  onLocationResolved?: () => void;
}

export const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({
  // Added troubleshooting guide
  isOpen,
  onClose,
  searchContextQuery,
  onLocationResolved
}) => {
  const { detectGPSLocation, isLocating, location, setLocation, setSearchRadius, setHasLocationPermission } = useApp();
  
  const [activeTab, setActiveTab] = useState<'gps' | 'custom'>('gps');
  const [customInput, setCustomInput] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Flatten all available areas across India for instant fast autocomplete
  const allIndianAreas = useMemo(() => {
    const list: IndianCityArea[] = [];
    INDIAN_STATES_DATA.forEach(state => {
      state.districts.forEach(dist => {
        dist.areas.forEach(area => {
          list.push(area);
        });
      });
    });
    return list;
  }, []);

  // Filtered matching areas based on user query
  const filteredSuggestions = useMemo(() => {
    if (!customInput.trim()) return [];
    const query = customInput.toLowerCase().trim();
    return allIndianAreas
      .filter(item => 
        item.area.toLowerCase().includes(query) ||
        item.city.toLowerCase().includes(query) ||
        item.state.toLowerCase().includes(query) ||
        item.pincode.includes(query)
      )
      .slice(0, 10);
  }, [allIndianAreas, customInput]);

  if (!isOpen) return null;

  // 1. Handle Real GPS Device Location
  const handleAllowGPSLocation = async () => {
    setErrorMsg(null);
    const success = await detectGPSLocation();
    if (success) {
      onClose();
      if (onLocationResolved) onLocationResolved();
    } else {
      setErrorMsg('Device GPS permission was denied or timed out. Please enter or select any custom location below.');
      setActiveTab('custom');
    }
  };

  // 2. Handle Custom Selected Area from Suggestions
  const handleSelectArea = (item: IndianCityArea) => {
    setLocation({
      area: item.area,
      city: item.city,
      state: item.state,
      pincode: item.pincode,
      coordinates: { lat: item.lat, lng: item.lng },
      radiusKm: location.radiusKm || 10,
      isCustomLocation: true
    });
    setHasLocationPermission(true);
    onClose();
    if (onLocationResolved) onLocationResolved();
  };

  // 3. Handle Free-Form Random Location Input Submission (e.g. typing "Jamui" or "Patna" or any city)
  const handleCustomInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = customInput.trim();
    if (!query) return;

    // Check if there is a match in predefined locations
    const exactMatch = allIndianAreas.find(
      a => a.area.toLowerCase().includes(query.toLowerCase()) || 
           a.city.toLowerCase().includes(query.toLowerCase())
    );

    if (exactMatch) {
      handleSelectArea(exactMatch);
    } else {
      // Create random custom location on the fly
      setLocation({
        area: query,
        city: query.split(',')[0].trim(),
        state: 'India',
        pincode: '811307',
        coordinates: { lat: 24.9272, lng: 86.2238 }, // Default responsive coords
        radiusKm: location.radiusKm || 10,
        isCustomLocation: true
      });
      setHasLocationPermission(true);
      onClose();
      if (onLocationResolved) onLocationResolved();
    }
  };

  const topQuickPicks: IndianCityArea[] = [
    { area: 'Jamui Main Market / Maharajganj', city: 'Jamui', state: 'Bihar', pincode: '811307', lat: 24.9272, lng: 86.2238 },
    { area: 'Koramangala 4th Block', city: 'Bengaluru', state: 'Karnataka', pincode: '560034', lat: 12.9352, lng: 77.6245 },
    { area: 'Boring Road / Dak Bungalow', city: 'Patna', state: 'Bihar', pincode: '800001', lat: 25.6125, lng: 85.1275 },
    { area: 'HSR Layout Sector 1', city: 'Bengaluru', state: 'Karnataka', pincode: '560102', lat: 12.9121, lng: 77.6445 },
    { area: 'Connaught Place', city: 'New Delhi', state: 'Delhi', pincode: '110001', lat: 28.6304, lng: 77.2177 },
    { area: 'Andheri East / Station Road', city: 'Mumbai', state: 'Maharashtra', pincode: '400069', lat: 19.1136, lng: 72.8697 },
    { area: 'Indiranagar 100ft Road', city: 'Bengaluru', state: 'Karnataka', pincode: '560038', lat: 12.9719, lng: 77.6412 },
    { area: 'Whitefield ITPL Zone', city: 'Bengaluru', state: 'Karnataka', pincode: '560066', lat: 12.9855, lng: 77.7312 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-800 animate-in zoom-in-95 duration-200 p-5 sm:p-7 relative space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pt-1">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-brand-500 to-teal-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-brand-500/25 p-3">
            <Navigation className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              {searchContextQuery ? `Find "${searchContextQuery}" Nearby` : 'Set Search Location'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
              Enable your <strong>Device GPS</strong> or enter any <strong>Custom / Random Location</strong> to see local stores & compare live prices.
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-800 border border-slate-700 text-xs font-extrabold">
          <button
            type="button"
            onClick={() => setActiveTab('gps')}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'gps'
                ? 'bg-brand-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>📍 Auto-Detect GPS</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('custom')}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'custom'
                ? 'bg-brand-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>✍️ Random / Custom City</span>
          </button>
        </div>

        {/* TAB 1: GPS Auto-Detect Option */}
        {activeTab === 'gps' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <button
              type="button"
              onClick={handleAllowGPSLocation}
              disabled={isLocating}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-teal-400 to-emerald-400 hover:from-brand-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50"
            >
              {isLocating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Requesting Device GPS Permission...</span>
                </>
              ) : (
                <>
                  <Navigation className="w-5 h-5" />
                  <span>Allow Device GPS Location & Continue</span>
                </>
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setActiveTab('custom')}
                className="text-xs text-brand-300 hover:underline font-semibold"
              >
                Or type a custom city/area manually →
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Custom / Random Location Search Input */}
        {activeTab === 'custom' && (
          <div className="space-y-3 animate-in fade-in duration-150">
            <form onSubmit={handleCustomInputSubmit} className="relative">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Type ANY City, Area, or Pincode (e.g. Jamui, Patna, Koramangala, 811307)..."
                className="w-full pl-10 pr-24 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs sm:text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:ring-2 focus:ring-brand-500/50"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs rounded-xl shadow-sm transition-colors"
              >
                Set
              </button>
            </form>

            {/* Live Autocomplete Results */}
            {filteredSuggestions.length > 0 && (
              <div className="max-h-44 overflow-y-auto rounded-2xl bg-slate-800 border border-slate-700 divide-y divide-slate-700/50">
                {filteredSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectArea(item)}
                    className="w-full p-2.5 text-left text-xs hover:bg-slate-700/60 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-brand-300">
                        {item.area}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {item.city}, {item.state} • {item.pincode}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-brand-400" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Location Pills */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Popular Quick Picks:
              </div>
              <div className="grid grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
                {topQuickPicks.map((pick, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectArea(pick)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left text-xs transition-colors group"
                  >
                    <div className="font-bold text-white group-hover:text-brand-300 truncate">
                      📍 {pick.city}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{pick.area}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Proximity Radius Slider / Selector */}
        <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-brand-400" />
              <span>Search Distance Radius:</span>
            </span>
            <span className="font-black text-brand-300">{location.radiusKm} km</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            {[1, 5, 10, 20, 50].map((rad) => (
              <button
                key={rad}
                type="button"
                onClick={() => setSearchRadius(rad)}
                className={`py-1.5 rounded-xl text-[11px] font-extrabold transition-all ${
                  location.radiusKm === rad
                    ? 'bg-brand-500 text-slate-950 font-black scale-[1.02] shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {rad} km
              </button>
            ))}
          </div>
        </div>

        {/* Error message if any */}
        {errorMsg && (
          <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs leading-relaxed">
            {errorMsg}
          </div>
        )}

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Device location or random coordinates are used locally for real-time counter price comparison.</span>
        </div>

      </div>
    </div>
  );
};
