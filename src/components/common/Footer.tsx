import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Store, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  TrendingUp,
  Search,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { categories, stores } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-md">
                <Radio className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">
                Dhoondo
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Hyperlocal product discovery and local-store empowerment platform. Find nearby, compare prices, verify live stock, and support neighborhood merchants.
            </p>
            
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>Hyperlocal Operations across 500+ Pin codes</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>Retailer Helpline: 1800-DHOONDO (Toll Free)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Top Categories */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/search?category=${cat.id}`}
                    className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Categories */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              More Sectors
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.slice(7, 14).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/search?category=${cat.id}`}
                    className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Platform & Retailer Hub */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Merchant & Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/retailer/register" className="text-slate-400 hover:text-white transition-colors">
                  Digital Store Registration
                </Link>
              </li>
              <li>
                <Link to="/retailer/dashboard" className="text-slate-400 hover:text-white transition-colors">
                  Merchant Dashboard
                </Link>
              </li>
              <li>
                <Link to="/retailer/demand-alerts" className="text-slate-400 hover:text-white transition-colors">
                  Customer Demand Radar
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-slate-400 hover:text-white transition-colors">
                  Interactive Store Map
                </Link>
              </li>
              <li>
                <Link to="/admin/dashboard" className="text-slate-400 hover:text-white transition-colors">
                  Admin Verification Hub
                </Link>
              </li>
              <li>
                <Link to="/landing" className="text-slate-400 hover:text-white transition-colors">
                  Platform Vision & Tour
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Dhoondo Technologies India Pvt. Ltd.</span>
            <span>•</span>
            <span className="text-brand-400 font-medium">Find Nearby. Compare. Buy Locally.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Indian Local Kiranas & Stores
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
