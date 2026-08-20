import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Loader2, 
  ArrowRight,
  Compass,
  Store
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { POPULAR_INDIAN_HUBS, IndianCityArea } from '../../data/indianLocations';

interface LocationPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchContextQuery?: string;
  onLocationResolved?: () => void;
}

export const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({
  isOpen,
  onClose,
  searchContextQuery,
  onLocationResolved
}) => {
  const { detectGPSLocation, isLocating, location, setLocation, setSearchRadius } = useApp();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showManualPicker, setShowManualPicker] = useState(false);

  if (!isOpen) return null;

  const popularAreas = POPULAR_INDIAN_HUBS.slice(0, 8);

  const handleAllowLocation = async () => {
    setErrorMsg(null);
    const success = await detectGPSLocation();
    if (success) {
      onClose();
      if (onLocationResolved) onLocationResolved();
    } else {
      setErrorMsg('Unable to retrieve exact GPS location. Please select your area manually below or check browser permissions.');
      setShowManualPicker(true);
    }
  };

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
    onClose();
    if (onLocationResolved) onLocationResolved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-800 animate-in zoom-in-95 duration-200 space-y-6 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-500 to-teal-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-brand-500/25">
            <Navigation className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {searchContextQuery ? `Find "${searchContextQuery}" Nearby` : 'Allow Location Access'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
              Dhoondo uses your device GPS to calculate exact store walking distances, live stock availability & nearby prices.
            </p>
          </div>
        </div>

        {/* Radius Selector */}
        <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-brand-400" />
              <span>Search Proximity Radius:</span>
            </span>
            <span className="font-black text-brand-300">{location.radiusKm} km</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[1, 5, 10, 20].map((rad) => (
              <button
                key={rad}
                type="button"
                onClick={() => setSearchRadius(rad)}
                className={`py-2 rounded-xl text-xs font-extrabold transition-all ${
                  location.radiusKm === rad
                    ? 'bg-brand-500 text-slate-950 shadow-md font-black scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {rad} km
              </button>
            ))}
          </div>
        </div>

        {/* Error message if any */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs leading-relaxed">
            {errorMsg}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleAllowLocation}
            disabled={isLocating}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-teal-400 hover:from-brand-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50"
          >
            {isLocating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Locating Exact Device GPS...</span>
              </>
            ) : (
              <>
                <Navigation className="w-5 h-5" />
                <span>Allow Real Device Location (GPS)</span>
              </>
            )}
          </button>

          {!showManualPicker ? (
            <button
              type="button"
              onClick={() => setShowManualPicker(true)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 transition-colors"
            >
              Select Neighborhood Manually
            </button>
          ) : (
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Choose Bengaluru Neighborhood:
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                {popularAreas.map((item) => (
                  <button
                    key={item.area}
                    type="button"
                    onClick={() => handleSelectArea(item)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left text-xs transition-colors group"
                  >
                    <div className="font-bold text-white group-hover:text-brand-300 truncate">
                      {item.area.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{item.area}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Your precise GPS coordinates are only used locally for distance calculations.</span>
        </div>

      </div>
    </div>
  );
};
