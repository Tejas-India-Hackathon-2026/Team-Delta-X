import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Search, 
  MapPin, 
  Store, 
  Scale, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Radar, 
  Zap, 
  Users,
  Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LandingPage: React.FC = () => {
  const { setUserRole } = useApp();

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-brand-500 selection:text-slate-950 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-extrabold tracking-wider uppercase">
            <Radio className="w-4 h-4 text-brand-400" />
            <span>Hyperlocal Discovery & Merchant Empowerment</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Find Nearby. Compare Prices. <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Check Availability. Buy Locally.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Dhoondo connects customers with nearby local retailers in real-time. Compare prices, verify counter stock, get directions, and empower neighborhood stores.
          </p>

          {/* Action Pathways */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-teal-400 hover:from-brand-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center justify-center gap-2 hover:scale-105"
            >
              <span>Start Exploring Nearby</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/retailer/register"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Store className="w-4 h-4 text-brand-400" />
              <span>For Retailers: Take Store Online</span>
            </Link>
          </div>

          {/* Highlight Example Card: "Honda Shine Brake Pad" */}
          <div className="pt-10 max-w-2xl mx-auto">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl text-left space-y-4">
              <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
                <span className="font-bold text-slate-400">SEARCH DEMO:</span>
                <span className="text-emerald-400 font-mono font-bold">“Shine brake pad” → 3 Local Stores Found</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-brand-500/40 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <span>Sharma Auto Parts</span>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Best Price 🏆</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">0.8 km • ⭐ 4.8 Rating</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-emerald-400 text-sm">₹420</div>
                    <div className="text-[10px] text-emerald-300">🟢 In Stock (12)</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-800/50 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Kumar Motors</div>
                    <div className="text-slate-400 text-[11px]">1.4 km • ⭐ 4.5 Rating</div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-white text-sm">₹450</div>
                    <div className="text-[10px] text-emerald-300">🟢 In Stock (6)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Pillars for Customers and Retailers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Hyperlocal Discovery</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Detects your live location and searches stores within 1 km, 5 km, 10 km or 20 km radius for instant walk-in availability.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Transparent Price Matrix</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Side-by-side comparison across neighboring shops highlighting Best Price, Nearest Store, and Top Customer Ratings.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Radar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Demand Radar Loop</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Can't find a product nearby? Request stock and nearby merchants are alerted. When they stock it, you get notified instantly!
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
