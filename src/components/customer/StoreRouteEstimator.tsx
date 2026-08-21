import React, { useState } from 'react';
import { 
  Navigation, 
  MapPin, 
  Footprints, 
  Bike, 
  Car, 
  Clock, 
  Compass, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { Store } from '../../types';
import { calculateDistanceKm, formatDistance, estimateTravelTimeMinutes } from '../../services/distanceService';
import { getGoogleMapsDirectionsUrl } from '../../services/geolocationService';

interface StoreRouteEstimatorProps {
  store: Store;
  userCoords: { lat: number; lng: number };
}

export const StoreRouteEstimator: React.FC<StoreRouteEstimatorProps> = ({
  store,
  userCoords
}) => {
  const [copied, setCopied] = useState(false);
  const distanceKm = store.distanceKm ?? calculateDistanceKm(
    userCoords.lat,
    userCoords.lng,
    store.coordinates.lat,
    store.coordinates.lng
  );

  const walkingMins = estimateTravelTimeMinutes(distanceKm, 'walking');
  const twoWheelerMins = estimateTravelTimeMinutes(distanceKm, 'two_wheeler');
  const drivingMins = estimateTravelTimeMinutes(distanceKm, 'driving');

  const mapsUrl = getGoogleMapsDirectionsUrl(
    userCoords.lat,
    userCoords.lng,
    store.coordinates.lat,
    store.coordinates.lng,
    store.name
  );

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(`${store.coordinates.lat}, ${store.coordinates.lng}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-black text-sm text-slate-900">Hyperlocal Route & Travel Time</h4>
            <p className="text-[11px] text-slate-500">Live GPS distance from your current location</p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs">
          {formatDistance(distanceKm)} away
        </span>
      </div>

      {/* 3 Travel Modes Grid */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {/* Walking */}
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <Footprints className="w-3.5 h-3.5" />
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase">Walking</div>
          <div className="text-xs sm:text-sm font-black text-slate-900">{walkingMins} mins</div>
        </div>

        {/* 2-Wheeler */}
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
          <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
            <Bike className="w-3.5 h-3.5" />
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase">2-Wheeler</div>
          <div className="text-xs sm:text-sm font-black text-slate-900">{twoWheelerMins} mins</div>
        </div>

        {/* Driving */}
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
          <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <Car className="w-3.5 h-3.5" />
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase">Driving</div>
          <div className="text-xs sm:text-sm font-black text-slate-900">{drivingMins} mins</div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-100">
        <button
          onClick={handleCopyCoords}
          className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          title="Copy GPS Lat/Lng"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600">Coordinates Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Coordinates</span>
            </>
          )}
        </button>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Turn-by-Turn GPS Navigation</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>
    </div>
  );
};
