import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Navigation, 
  Check, 
  X, 
  Search, 
  Globe2, 
  ChevronRight, 
  Building2, 
  Sparkles,
  Layers,
  Compass,
  SlidersHorizontal
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  getAllIndianStates, 
  POPULAR_INDIAN_HUBS, 
  searchIndianLocations, 
  getCitiesByState, 
  IndianCityArea, 
  IndianState 
} from '../../data/indianLocations';
import { CascadedLocationPicker } from '../map/CascadedLocationPicker';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'cascaded' | 'states' | 'popular' | 'search';

// Location modal debounced search active
export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const { location, setLocation, setSearchRadius, detectGPSLocation } = useApp();
  const [isDetecting, setIsDetecting] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('cascaded');
  const [customSearch, setCustomSearch] = useState('');
  const [selectedRadius, setSelectedRadius] = useState(location.radiusKm || 10);
  const [selectedStateName, setSelectedStateName] = useState<string>(location.state || 'Bihar');

  const allStates = useMemo(() => getAllIndianStates(), []);
  const currentSelectedState = useMemo(() => {
    return allStates.find(s => s.name.toLowerCase() === selectedStateName.toLowerCase()) || allStates[0];
  }, [allStates, selectedStateName]);

  const searchResults = useMemo(() => {
    if (!customSearch.trim()) return [];
    return searchIndianLocations(customSearch);
  }, [customSearch]);

  if (!isOpen) return null;

  const handleGPSClick = async () => {
    setIsDetecting(true);
    const success = await detectGPSLocation();
    setIsDetecting(false);
    if (success) {
      onClose();
    }
  };

  const handleSelectCityArea = (loc: IndianCityArea) => {
    setLocation({
      area: loc.area,
      city: loc.city,
      state: loc.state,
      pincode: loc.pincode,
      coordinates: { lat: loc.lat, lng: loc.lng },
      radiusKm: selectedRadius,
      isCustomLocation: true
    });
    onClose();
  };

  const handleRadiusChange = (rad: number) => {
    setSelectedRadius(rad);
    setSearchRadius(rad);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-800 to-brand-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Globe2 className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base sm:text-lg">Select Location (All India)</h3>
                <span className="text-[10px] bg-brand-500/30 border border-brand-400/40 text-brand-200 font-bold px-2 py-0.5 rounded-full">
                  State ➔ District ➔ Area
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Explore local verified merchants and real-time inventory anywhere in India
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
          
          {/* GPS Auto-Detect Button */}
          <button
            onClick={handleGPSClick}
            disabled={isDetecting}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-brand-500/25 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Navigation className={`w-4 h-4 ${isDetecting ? 'animate-spin' : 'group-hover:scale-110 transition-transform'}`} />
              </div>
              <div className="text-left">
                <div className="font-bold">{isDetecting ? 'Detecting GPS Location across India...' : 'Use Current Device GPS Location'}</div>
                <div className="text-[11px] text-brand-100 font-normal">Auto-detect state, city & neighborhood accurately</div>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">Auto-Detect</span>
          </button>

          {/* Discovery Radius Selector */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-600" />
              <label className="text-xs font-bold text-slate-800">
                Discovery Proximity Radius:
              </label>
              <span className="text-xs font-black text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                Within {selectedRadius} km
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto">
              {[1, 5, 10, 20, 50].map((radius) => (
                <button
                  key={radius}
                  type="button"
                  onClick={() => handleRadiusChange(radius)}
                  className={`py-1 px-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedRadius === radius
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {radius}km
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={customSearch}
              onChange={(e) => {
                setCustomSearch(e.target.value);
                if (e.target.value.trim().length > 0) {
                  setActiveTab('search');
                }
              }}
              placeholder="Search State, District, Local Area (e.g. Jamui, Jhajha, Patna, 811307)..."
              className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
            />
            {customSearch && (
              <button 
                onClick={() => { setCustomSearch(''); setActiveTab('cascaded'); }}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center border-b border-slate-100 gap-2 overflow-x-auto custom-scrollbar pb-1">
            <button
              onClick={() => { setActiveTab('cascaded'); setCustomSearch(''); }}
              className={`pb-2 px-3 text-xs font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'cascaded'
                  ? 'border-brand-600 text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>3-Step Search (State ➔ District ➔ Area)</span>
            </button>

            <button
              onClick={() => { setActiveTab('states'); setCustomSearch(''); }}
              className={`pb-2 px-3 text-xs font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'states'
                  ? 'border-brand-600 text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>All 28 States & UTs</span>
            </button>

            <button
              onClick={() => { setActiveTab('popular'); setCustomSearch(''); }}
              className={`pb-2 px-3 text-xs font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'popular'
                  ? 'border-brand-600 text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Top Hubs</span>
            </button>

            {customSearch.trim() && (
              <button
                onClick={() => setActiveTab('search')}
                className={`pb-2 px-3 text-xs font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === 'search'
                    ? 'border-brand-600 text-brand-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Matches ({searchResults.length})</span>
              </button>
            )}
          </div>

          {/* TAB 0: CASCADED 3-STEP PICKER */}
          {activeTab === 'cascaded' && (
            <div className="pt-1">
              <CascadedLocationPicker onLocationSelected={() => onClose()} />
            </div>
          )}

          {/* TAB 1: ALL 28 STATES & 8 UTS */}
          {activeTab === 'states' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
              
              {/* Left Column: States & UTs List */}
              <div className="md:col-span-5 max-h-60 sm:max-h-72 overflow-y-auto border border-slate-100 rounded-2xl p-1 space-y-1 bg-slate-50/50">
                <div className="px-2 py-1 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Select State or UT
                </div>
                {allStates.map((st) => {
                  const isCurrent = currentSelectedState.name === st.name;
                  return (
                    <button
                      key={st.code}
                      onClick={() => setSelectedStateName(st.name)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                        isCurrent
                          ? 'bg-brand-600 text-white font-bold shadow-md shadow-brand-500/20'
                          : 'hover:bg-slate-200/70 text-slate-700 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${isCurrent ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                          {st.code}
                        </span>
                        <span className="truncate">{st.name}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Cities in Selected State */}
              <div className="md:col-span-7 border border-slate-100 rounded-2xl p-2 bg-white max-h-60 sm:max-h-72 overflow-y-auto">
                <div className="px-2 py-1 flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                  <div className="text-xs font-bold text-slate-900">
                    Districts & Hubs in <span className="text-brand-600">{currentSelectedState.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                    Capital: {currentSelectedState.capital}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {currentSelectedState.cities.map((cityArea, idx) => {
                    const isSelected = location.area === cityArea.area && location.city === cityArea.city;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectCityArea(cityArea)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-brand-50 border border-brand-300 text-brand-900 font-bold'
                            : 'hover:bg-slate-50 border border-slate-100 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{cityArea.area}</div>
                            <div className="text-[11px] text-slate-500">
                              {cityArea.city}, {cityArea.state} • <span className="font-mono">{cityArea.pincode}</span>
                            </div>
                          </div>
                        </div>

                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: POPULAR METROS & STATE CAPITALS */}
          {activeTab === 'popular' && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Fast Select Hubs (Jamui, Patna, Delhi, Mumbai...)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 sm:max-h-72 overflow-y-auto pr-1">
                {POPULAR_INDIAN_HUBS.map((hub, idx) => {
                  const isSelected = location.city === hub.city && location.area === hub.area;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectCityArea(hub)}
                      className={`p-3 rounded-2xl text-left text-xs border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-brand-50 border-brand-300 text-brand-900 font-bold'
                          : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-700 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-brand-600'}`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{hub.city}</div>
                          <div className="text-[11px] text-slate-500 truncate max-w-[160px]">{hub.area}</div>
                          <div className="text-[10px] text-brand-600 font-medium">{hub.state}</div>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: SEARCH RESULTS */}
          {activeTab === 'search' && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Matching Indian Locations for "{customSearch}"
              </div>
              {searchResults.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <MapPin className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-600">No exact area found for "{customSearch}"</p>
                  <p className="text-[11px] text-slate-400 mt-1">Try searching by district name (e.g. Jamui, Patna, Lucknow) or state</p>
                </div>
              ) : (
                <div className="space-y-1.5 max-h-64 sm:max-h-72 overflow-y-auto pr-1">
                  {searchResults.map((res, idx) => {
                    const isSelected = location.area === res.area && location.city === res.city;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectCityArea(res)}
                        className={`w-full text-left p-3 rounded-xl text-xs flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-brand-50 border border-brand-300 text-brand-900 font-bold'
                            : 'hover:bg-slate-50 border border-slate-100 text-slate-700 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className={`w-4 h-4 ${isSelected ? 'text-brand-600' : 'text-slate-400'}`} />
                          <div>
                            <div className="font-semibold text-slate-900">{res.area}</div>
                            <div className="text-[11px] text-slate-500">
                              {res.city}, <strong className="text-slate-700">{res.state}</strong> • PIN: {res.pincode}
                            </div>
                          </div>
                        </div>

                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Current Active Location Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-bold text-slate-800">Current Location:</span>
            <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-brand-700 font-semibold truncate max-w-[220px]">
              {location.area}, {location.city} {location.state ? `(${location.state})` : ''}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
