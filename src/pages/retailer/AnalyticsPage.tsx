import React from 'react';
import { BarChart3, TrendingUp, Search, Eye, MapPin, Sparkles, Users } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';

export const AnalyticsPage: React.FC = () => {
  const { user, stores } = useApp();
  const currentStore = stores.find(s => s.id === (user.storeId || 'store-sharma-auto')) || stores[0];

  const topSearchedKeywords = [
    { query: 'Honda Shine brake pad', count: 184, conversion: '82%' },
    { query: 'Castrol Power1 10W-30', count: 142, conversion: '76%' },
    { query: 'Amaron Pro Rider Battery', count: 96, conversion: '68%' },
    { query: 'Studds Ninja Helmet', count: 74, conversion: '59%' },
    { query: 'MRF Zapper FX Tyre', count: 52, conversion: '45%' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <RetailerSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-brand-400" />
            <span>Hyperlocal Footfall & Demand Analytics</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Understand local customer intent, top demanded keywords, and search conversion in {currentStore.area}
          </p>
        </div>

        {/* Analytics KPI Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Weekly Search Impressions</div>
            <div className="text-3xl font-black text-brand-400">1,840</div>
            <div className="text-[11px] text-emerald-400 font-semibold">↑ +34% from last week</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Counter Directions Requested</div>
            <div className="text-3xl font-black text-teal-400">294</div>
            <div className="text-[11px] text-emerald-400 font-semibold">High in-store walk-in intent</div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Avg Price Competitiveness</div>
            <div className="text-3xl font-black text-purple-400">Top 5%</div>
            <div className="text-[11px] text-purple-300 font-semibold">Ranked #1 Best Price in Area</div>
          </div>
        </div>

        {/* Top Searched Queries Table */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <Search className="w-4 h-4 text-brand-400" />
            <span>Top Searched Products by Local Shoppers (Within 5 km)</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-3">Search Query</th>
                  <th className="py-3 px-3 text-center">Search Volume (30D)</th>
                  <th className="py-3 px-3 text-center">Store Conversion</th>
                  <th className="py-3 px-3 text-right">Status in Your Inventory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {topSearchedKeywords.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40">
                    <td className="py-3.5 px-3 font-bold text-white">
                      “{item.query}”
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono text-brand-300 font-bold">
                      {item.count} searches
                    </td>
                    <td className="py-3.5 px-3 text-center font-bold text-emerald-400">
                      {item.conversion}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                        ✓ In Stock & Listed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};
