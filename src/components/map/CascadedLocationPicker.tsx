import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, 
  Building2, 
  Map, 
  Search, 
  Navigation, 
  Sparkles, 
  ChevronRight,
  SlidersHorizontal,
  Compass,
  Edit3
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  getAllIndianStates, 
  getDistrictsForState, 
  getAreasForDistrict, 
  IndianCityArea,
  IndianDistrict
} from '../../data/indianLocations';

interface CascadedLocationPickerProps {
  onLocationSelected?: (loc: IndianCityArea) => void;
  className?: string;
  compact?: boolean;
}

export const CascadedLocationPicker: React.FC<CascadedLocationPickerProps> = ({
  onLocationSelected,
  className = '',
  compact = false
}) => {
  const { location, setLocation, setSearchRadius } = useApp();

  const allStates = useMemo(() => getAllIndianStates(), []);

  // 1. Selected State
  const [selectedState, setSelectedState] = useState<string>(location.state || 'Bihar');

  // 2. Available Districts for selected State
  const districts = useMemo(() => {
    return getDistrictsForState(selectedState);
  }, [selectedState]);

  // 3. Selected District
  const [selectedDistrict, setSelectedDistrict] = useState<string>(() => {
    if (location.city && districts.some(d => d.name.toLowerCase() === location.city.toLowerCase())) {
      return location.city;
    }
    return districts[0]?.name || 'Jamui';
  });

  // Keep selected district in sync when state changes
  useEffect(() => {
    if (districts.length > 0) {
      const match = districts.find(d => d.name.toLowerCase() === selectedDistrict.toLowerCase());
      if (!match) {
        setSelectedDistrict(districts[0].name);
      }
    }
  }, [districts]);

  // 4. Available Local Areas for selected District
  const availableAreas = useMemo(() => {
    return getAreasForDistrict(selectedState, selectedDistrict);
  }, [selectedState, selectedDistrict]);

  // 5. Selected / Custom Local Area
  const [selectedArea, setSelectedArea] = useState<string>(() => {
    return location.area || availableAreas[0]?.area || 'Jamui Main Market / Maharajganj';
  });

  const [isCustomInputMode, setIsCustomInputMode] = useState<boolean>(false);
  const [customAreaInput, setCustomAreaInput] = useState<string>('');

  useEffect(() => {
    if (availableAreas.length > 0) {
      setSelectedArea(availableAreas[0].area);
    } else {
      setSelectedArea(`Central ${selectedDistrict}`);
    }
  }, [availableAreas, selectedDistrict]);

  // Search & Apply Handler
  const handleApplySearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const currentDist = districts.find(d => d.name.toLowerCase() === selectedDistrict.toLowerCase()) || districts[0];
    const finalAreaName = isCustomInputMode && customAreaInput.trim() 
      ? customAreaInput.trim() 
      : (selectedArea || `Main ${selectedDistrict}`);

    // Check if matched in presets for precise coordinates
    const matchedArea = availableAreas.find(a => a.area.toLowerCase() === finalAreaName.toLowerCase());

    const lat = matchedArea ? matchedArea.lat : (currentDist?.centerCoordinates.lat || 24.9272);
    const lng = matchedArea ? matchedArea.lng : (currentDist?.centerCoordinates.lng || 86.2238);
    const pincode = matchedArea ? matchedArea.pincode : (currentDist?.pincode || '811307');

    const resolvedLocation: IndianCityArea = {
      area: finalAreaName,
      city: selectedDistrict,
      state: selectedState,
      pincode: pincode,
      lat: lat,
      lng: lng,
      isPopular: true
    };

    setLocation({
      area: resolvedLocation.area,
      city: resolvedLocation.city,
      state: resolvedLocation.state,
      pincode: resolvedLocation.pincode,
      coordinates: { lat: resolvedLocation.lat, lng: resolvedLocation.lng },
      radiusKm: location.radiusKm || 10,
      isCustomLocation: true
    });

    if (onLocationSelected) {
      onLocationSelected(resolvedLocation);
    }
  };

  return (
    <div className={`bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-2xl ${className}`}>
      
      {/* Title Header */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-teal-500 text-white flex items-center justify-center shadow-md">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm sm:text-base flex items-center gap-2">
              <span>All India Hierarchical Location Search</span>
              <span className="text-[10px] bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded-full font-bold">
                State ➔ District ➔ Local Area
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              Select any Indian State (e.g. Bihar), District (all 38 in Bihar, 75 in UP, etc.), and Local Market / Village
            </p>
          </div>
        </div>

        {/* Active badge */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs text-brand-400 font-bold">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location.city}, {location.state || 'Bihar'}</span>
        </div>
      </div>

      <form onSubmit={handleApplySearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
        
        {/* 1. STATE SELECTOR (All 28 States & 8 UTs) */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
              <span>State / UT ({allStates.length})</span>
            </span>
          </label>
          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full pl-3 pr-8 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white font-medium focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none appearance-none cursor-pointer transition-all"
            >
              {allStates.map((st) => (
                <option key={st.code} value={st.name} className="bg-slate-900 text-white">
                  {st.name} {st.code === 'BR' ? '⭐ (Bihar - 38 Districts)' : ''}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-3 text-slate-400 pointer-events-none text-xs">▼</div>
          </div>
        </div>

        {/* 2. DISTRICT SELECTOR (All Districts for chosen State) */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
              <span>District ({districts.length})</span>
            </span>
          </label>
          <div className="relative">
            <select
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setIsCustomInputMode(false);
                setCustomAreaInput('');
              }}
              className="w-full pl-3 pr-8 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white font-bold focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none appearance-none cursor-pointer transition-all"
            >
              {districts.map((d) => (
                <option key={d.name} value={d.name} className="bg-slate-900 text-white">
                  {d.name} {d.name === 'Jamui' ? '📍 (Jamui District)' : ''}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-3 text-slate-400 pointer-events-none text-xs">▼</div>
          </div>
        </div>

        {/* 3. LOCAL AREA / MARKET SELECTOR */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
              <span>Local Area / Bazaar</span>
            </label>
            <button
              type="button"
              onClick={() => setIsCustomInputMode(!isCustomInputMode)}
              className="text-[10px] text-brand-400 hover:text-brand-300 underline font-semibold flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>{isCustomInputMode ? 'Choose from list' : 'Type custom area'}</span>
            </button>
          </div>
          
          <div className="relative">
            {!isCustomInputMode && availableAreas.length > 0 ? (
              <>
                <select
                  value={selectedArea}
                  onChange={(e) => {
                    setSelectedArea(e.target.value);
                  }}
                  className="w-full pl-3 pr-8 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white font-medium focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none appearance-none cursor-pointer transition-all"
                >
                  {availableAreas.map((area, idx) => (
                    <option key={idx} value={area.area} className="bg-slate-900 text-white">
                      {area.area} ({area.pincode})
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-3 text-slate-400 pointer-events-none text-xs">▼</div>
              </>
            ) : (
              <input
                type="text"
                value={customAreaInput}
                onChange={(e) => setCustomAreaInput(e.target.value)}
                placeholder={`Type local area/village in ${selectedDistrict}...`}
                className="w-full px-3 py-2.5 bg-slate-950 border border-brand-500/60 rounded-xl text-xs sm:text-sm text-white font-medium focus:border-brand-500 outline-none placeholder:text-slate-500 ring-2 ring-brand-500/10"
                autoFocus={isCustomInputMode}
              />
            )}
          </div>
        </div>

        {/* 4. SUBMIT / EXPLORE BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="submit"
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-500/30 flex items-center justify-center gap-1.5 transition-all transform active:scale-95 group"
          >
            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Search & Explore</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const currentDist = districts.find(d => d.name.toLowerCase() === selectedDistrict.toLowerCase()) || districts[0];
              const finalAreaName = isCustomInputMode && customAreaInput.trim() 
                ? customAreaInput.trim() 
                : (selectedArea || `Main ${selectedDistrict}`);
              const matchedArea = availableAreas.find(a => a.area.toLowerCase() === finalAreaName.toLowerCase());
              const lat = matchedArea ? matchedArea.lat : (currentDist?.centerCoordinates.lat || 24.9272);
              const lng = matchedArea ? matchedArea.lng : (currentDist?.centerCoordinates.lng || 86.2238);
              const googleMapsQuery = encodeURIComponent(`${finalAreaName}, ${selectedDistrict}, ${selectedState}`);
              window.open(`https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}+(${lat},${lng})`, '_blank', 'noopener,noreferrer');
            }}
            className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-1.5 transition-all transform active:scale-95 whitespace-nowrap"
            title="Redirect directly to Google Maps App / Website"
          >
            <Map className="w-4 h-4 text-blue-200" />
            <span>Google Maps</span>
          </button>
        </div>

      </form>

      {/* Quick Chips for Top Jamui & Bihar Markets */}
      {selectedState === 'Bihar' && (
        <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[11px] font-bold text-slate-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-brand-400" />
            <span>Quick Select Bihar Hubs:</span>
          </span>

          {[
            { district: 'Jamui', area: 'Jamui Main Market / Maharajganj' },
            { district: 'Jamui', area: 'Jhajha Main Market / Bus Stand' },
            { district: 'Jamui', area: 'Bodhban Talab / Station Road' },
            { district: 'Jamui', area: 'Gidhaur Town / Raj Darbar Area' },
            { district: 'Patna', area: 'Boring Road Chauraha' },
            { district: 'Gaya', area: 'GB Road / Tower Chowk' },
            { district: 'Muzaffarpur', area: 'Motijheel Market / Saraiyaganj' },
            { district: 'Bhagalpur', area: 'Khalifabag Chowk / Station Rd' },
            { district: 'Lakhisarai', area: 'Purani Bazaar Main Market' },
            { district: 'Munger', area: 'Rajiv Gandhi Chowk / Sadar Bazaar' },
            { district: 'Begusarai', area: 'Traffic Chowk / Main Market' }
          ].map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSelectedDistrict(preset.district);
                setSelectedArea(preset.area);
                setIsCustomInputMode(false);
                const matched = getAreasForDistrict('Bihar', preset.district).find(a => a.area === preset.area);
                if (matched) {
                  setLocation({
                    area: matched.area,
                    city: matched.city,
                    state: matched.state,
                    pincode: matched.pincode,
                    coordinates: { lat: matched.lat, lng: matched.lng },
                    radiusKm: location.radiusKm || 10,
                    isCustomLocation: true
                  });
                }
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-brand-600 hover:text-white text-slate-300 border border-slate-700 text-[11px] font-semibold transition-all"
            >
              {preset.district === 'Jamui' ? '📍 ' : ''}{preset.area.split('/')[0]} ({preset.district})
            </button>
          ))}
        </div>
      )}

    </div>
  );
};
