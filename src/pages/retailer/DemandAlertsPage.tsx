import React, { useState } from 'react';
import { 
  Radar, 
  Plus, 
  MapPin, 
  Search, 
  Check, 
  Users, 
  Flame, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';

export const DemandAlertsPage: React.FC = () => {
  const { user, stores, demands, fulfillDemandItem } = useApp();
  const currentStore = stores.find(s => s.id === (user.storeId || 'store-sharma-auto')) || stores[0];

  const [activeFilter, setActiveFilter] = useState<'pending' | 'fulfilled' | 'all'>('pending');

  const filteredDemands = demands.filter(d => {
    if (activeFilter === 'pending') return d.status === 'pending';
    if (activeFilter === 'fulfilled') return d.status === 'fulfilled';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <RetailerSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold mb-1">
              <Radar className="w-3.5 h-3.5 animate-spin" />
              <span>Hyperlocal Customer Radar</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Customer Demand Near You
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Products searched by nearby shoppers within 5 km that had low or zero stock
            </p>
          </div>

          <div className="flex items-center bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveFilter('pending')}
              className={`py-1.5 px-4 rounded-xl font-bold transition-all ${
                activeFilter === 'pending'
                  ? 'bg-orange-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Unmet Demands ({demands.filter(d => d.status === 'pending').length})
            </button>
            <button
              onClick={() => setActiveFilter('fulfilled')}
              className={`py-1.5 px-4 rounded-xl font-bold transition-all ${
                activeFilter === 'fulfilled'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fulfilled Stock ({demands.filter(d => d.status === 'fulfilled').length})
            </button>
          </div>
        </div>

        {/* Demand Info Banner */}
        <div className="p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-brand-950 border border-brand-500/30 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>How Dhoondo Demand Radar Empowers Your Counter:</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
              When shoppers can't find an item nearby, they submit a demand request. When you click <strong>“Stock This Product”</strong>, your store inventory is updated and an automatic notification is immediately sent to all waiting customers!
            </p>
          </div>
        </div>

        {/* Demands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredDemands.map((demand) => (
            <div
              key={demand.id}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-4 ${
                demand.status === 'fulfilled'
                  ? 'bg-slate-900/60 border-emerald-500/30'
                  : 'bg-slate-900 border-slate-800 hover:border-orange-500/50 shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 font-extrabold text-xs">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    <span>{demand.searchesCount} Searches</span>
                  </span>

                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    <span>{demand.interestedCustomersCount} Customers within 5 km</span>
                  </span>
                </div>

                <div className="text-xs text-brand-400 font-bold uppercase tracking-wider">
                  {demand.brand}
                </div>

                <h3 className="text-base font-extrabold text-white mt-0.5">
                  {demand.productName}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Requested around {demand.customerArea}</span>
                  <span>•</span>
                  <span>{demand.createdAt}</span>
                </div>

                {demand.notes && (
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 mt-3 italic">
                    “{demand.notes}”
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                {demand.status === 'fulfilled' ? (
                  <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Stocked by your store! Notification sent to customers.</span>
                  </div>
                ) : (
                  <>
                    <span className="text-xs text-slate-400">
                      Add to inventory to capture demand
                    </span>

                    <button
                      onClick={() => fulfillDemandItem(demand.id, currentStore.id, 10)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-brand-500 hover:from-orange-400 hover:to-brand-400 text-slate-950 font-black text-xs shadow-md shadow-orange-500/20 flex items-center gap-1.5 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Stock This Product (Qty: 10)</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};
