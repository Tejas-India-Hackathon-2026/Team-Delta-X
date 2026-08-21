import React from 'react';
import { Footprints, Car, Clock, Navigation } from 'lucide-react';
import { Store } from '../../types';
import { formatDistance, getEstimatedTravelTime } from '../../services/distanceService';

interface StoreRouteCardProps {
  store: Store & { distanceKm: number };
  onNavigate?: () => void;
}

export const StoreRouteCard: React.FC<StoreRouteCardProps> = ({ store, onNavigate }) => {
  const walkTime = getEstimatedTravelTime(store.distanceKm, 'walk');
  const driveTime = getEstimatedTravelTime(store.distanceKm, 'drive');

  return (
    <div className="bg-slate-800/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 text-white flex items-center justify-between gap-4 shadow-lg">
      <div>
        <h4 className="font-bold text-sm text-white line-clamp-1">{store.name}</h4>
        <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
          <span className="flex items-center gap-1 font-semibold text-emerald-400">
            <Footprints className="w-3.5 h-3.5" />
            <span>{walkTime}</span>
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-1 font-semibold text-blue-400">
            <Car className="w-3.5 h-3.5" />
            <span>{driveTime}</span>
          </span>
        </div>
      </div>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1 transition-all shrink-0"
      >
        <Navigation className="w-3.5 h-3.5" />
        <span>Navigate</span>
      </a>
    </div>
  );
};
