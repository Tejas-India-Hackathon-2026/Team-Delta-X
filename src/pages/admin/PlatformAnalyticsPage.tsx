import React from 'react';
import { BarChart3, TrendingUp, Users, Store, Search, Compass, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

export const PlatformAnalyticsPage: React.FC = () => {
  const { stores, products, demands } = useApp();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-purple-400" />
            <span>Platform Macro Analytics & Demand Heatmap</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Aggregated search volume, unmet demand vs local merchant supply metrics across Bengaluru sectors
          </p>
        </div>

        {/* Big KPI Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Gross Product Searches</div>
            <div className="text-3xl font-black text-purple-400">28,490</div>
            <div className="text-[11px] text-emerald-400 font-semibold">↑ +42% MoM growth</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Avg Proximity Search Radius</div>
            <div className="text-3xl font-black text-teal-400">4.2 km</div>
            <div className="text-[11px] text-slate-400">High local density</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Demand Fulfillment Rate</div>
            <div className="text-3xl font-black text-emerald-400">78.4%</div>
            <div className="text-[11px] text-emerald-400 font-semibold">Restocked within 24h</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Est. Retailer GMV Generated</div>
            <div className="text-3xl font-black text-amber-400">₹14.8L</div>
            <div className="text-[11px] text-slate-400">Direct counter sales</div>
          </div>
        </div>

        {/* Sector Demand vs Supply Heatmap */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="font-extrabold text-white text-base flex items-center gap-2">
            <Compass className="w-5 h-5 text-purple-400" />
            <span>Top Demand Sectors by City Hub (Bengaluru)</span>
          </h3>

          <div className="space-y-3">
            {[
              { sector: 'Automobile & Spares', searches: 9400, retailers: 6, fillRate: 92 },
              { sector: 'Grocery & Staples', searches: 8200, retailers: 5, fillRate: 95 },
              { sector: 'Pharmacy & Medical Devices', searches: 5100, retailers: 3, fillRate: 88 },
              { sector: 'Electrical & Lighting', searches: 3400, retailers: 2, fillRate: 74 },
              { sector: 'Hardware & Tools', searches: 2390, retailers: 2, fillRate: 68 }
            ].map((row, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white text-sm">{row.sector}</span>
                  <span className="font-mono text-purple-300 font-bold">{row.searches.toLocaleString()} searches ({row.retailers} verified stores)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-700 overflow-hidden">
                  <div
                    style={{ width: `${row.fillRate}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-brand-400"
                  ></div>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Stock Availability Fill Rate: <strong className="text-emerald-400">{row.fillRate}%</strong></span>
                  <span className="text-slate-400">High merchant responsiveness</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};
