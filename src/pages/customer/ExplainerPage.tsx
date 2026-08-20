import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Compass, Store, Search, Play } from 'lucide-react';
import { AntiGravityMotionExplainer } from '../../components/motion/AntiGravityMotionExplainer';

export const ExplainerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-extrabold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>2D Motion Explainer • Odoo Style</span>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
          Dhoondo Platform Explainer
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          A weightless, anti-gravity 2D flat-design software animation demonstrating hyperlocal search, 2D map discovery, and verified neighborhood retail inventory.
        </p>
      </div>

      {/* 🎬 2D Motion Graphics Animation Stage (16:9 Widescreen) */}
      <div className="max-w-5xl mx-auto">
        <AntiGravityMotionExplainer />
      </div>

      {/* Feature Highlights Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <Compass className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">2D Google Maps & 1km Radius</h3>
          <p className="text-xs text-slate-400">
            Real streets, live shop markers, and dynamic 2D radius circles for Jamui, Bihar, and all Indian districts.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <Store className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">Verified Local Retailers</h3>
          <p className="text-xs text-slate-400">
            Real-time counter prices, live in-stock quantities, and 1-click WhatsApp and direct phone calling.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <Search className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">Turn-by-Turn Navigation</h3>
          <p className="text-xs text-slate-400">
            1-click redirection to official Google Maps walking and driving routes with live ETA.
          </p>
        </div>
      </div>

    </div>
  );
};
