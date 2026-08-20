import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Store as StoreIcon, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Crown
} from 'lucide-react';
import { Store } from '../../types';
import { formatDistance } from '../../services/distanceService';
import { getGoogleMapsDirectionsUrl } from '../../services/geolocationService';
import { useApp } from '../../context/AppContext';

interface StoreCardProps {
  store: Store & { distanceKm: number };
  productCount?: number;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store, productCount }) => {
  const { location } = useApp();
  const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I found your store on Dhoondo. Are you open right now?`)}`;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-brand-500/50 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden flex flex-col justify-between">
      
      {/* Banner & Profile Box */}
      <div>
        <div className="relative h-28 bg-slate-200 overflow-hidden">
          <img
            src={store.bannerImage}
            alt={store.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

          {/* Distance Badge */}
          <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1 shadow-sm">
            <MapPin className="w-3 h-3 text-brand-400" />
            <span>{formatDistance(store.distanceKm)}</span>
          </div>

          {/* Store Status */}
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
              Open Now
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <Link
                  to={`/store/${store.id}`}
                  className="font-bold text-slate-900 text-base hover:text-brand-600 transition-colors line-clamp-1"
                >
                  {store.name}
                </Link>
                {store.subscription?.plan === 'pro' ? (
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] px-1.5 py-0.2 rounded-md font-black flex items-center gap-0.5 shrink-0" title="Dhoondo Pro Verified Merchant">
                    <Crown className="w-3 h-3 fill-amber-500 text-amber-600" />
                    <span>PRO</span>
                  </span>
                ) : store.verified ? (
                  <span title="Verified Local Retailer">
                    <ShieldCheck className="w-4 h-4 text-brand-600 fill-brand-100 shrink-0" />
                  </span>
                ) : null}
              </div>
              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                {store.area}, {store.city}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold">{store.rating}</span>
              <span className="text-[10px] text-amber-700">({store.reviewCount})</span>
            </div>
          </div>

          {/* Facilities */}
          <div className="flex flex-wrap gap-1.5">
            {store.facilities.slice(0, 3).map((facility, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium flex items-center gap-1"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-brand-600" />
                <span>{facility}</span>
              </span>
            ))}
          </div>

          {/* Operating hours */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{store.openingHours}</span>
          </div>

        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 pt-0 border-t border-slate-100/80 mt-2 space-y-2">
        <div className="pt-3 flex items-center gap-2">
          <a
            href={getGoogleMapsDirectionsUrl(
              location.coordinates.lat,
              location.coordinates.lng,
              store.coordinates.lat,
              store.coordinates.lng,
              store.name
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
            title="Open Turn-by-Turn Driving / Walking Navigation in Google Maps"
          >
            <Navigation className="w-3.5 h-3.5 text-blue-200" />
            <span>Google Maps Directions ↗</span>
          </a>

          <Link
            to={`/store/${store.id}`}
            className="py-2 px-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-800 text-xs font-bold transition-colors"
          >
            View Shop
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 py-1.5 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3 h-3 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${store.phone}`}
            className="flex items-center justify-center gap-1 py-1.5 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
            title="Call Retailer"
          >
            <Phone className="w-3 h-3 text-slate-600" />
            <span>Call Store</span>
          </a>
        </div>
      </div>
    </div>
  );
};
