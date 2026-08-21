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
  ArrowRight,
  MessageCircle,
  Phone,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';

export const DemandAlertsPage: React.FC = () => {
  const { user, stores, demands, categories, fulfillDemandItem } = useApp();
  const currentStore = stores.find(s => s.id === (user.storeId || 'store-jamui-sharma-auto')) || stores[0];

  const [activeFilter, setActiveFilter] = useState<'pending' | 'fulfilled' | 'all'>('pending');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDemands = demands.filter(d => {
    if (activeFilter === 'pending' && d.status !== 'pending') return false;
    if (activeFilter === 'fulfilled' && d.status !== 'fulfilled') return false;
    if (selectedCategory !== 'all' && d.categoryId !== selectedCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        d.productName.toLowerCase().includes(q) ||
        d.brand.toLowerCase().includes(q) ||
        d.customerArea.toLowerCase().includes(q)
      );
    }
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
              Live product requests and stock shortages submitted by shoppers in your neighborhood
            </p>
          </div>

          <div className="flex items-center bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs shrink-0">
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
              Fulfilled ({demands.filter(d => d.status === 'fulfilled').length})
            </button>
            <button
              onClick={() => setActiveFilter('all')}
              className={`py-1.5 px-4 rounded-xl font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({demands.length})
            </button>
          </div>
        </div>

        {/* Search & Category Filter Ribbon */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search demand requests by product, brand, or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-white placeholder-slate-500 focus:border-brand-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === c.id
                    ? 'bg-brand-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c.name}
              </button>
            ))}
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
              When shoppers can't find an item nearby, they submit a demand request. When you click <strong>“Stock This Product”</strong>, your store inventory is updated and an automatic alert is dispatched to all waiting customers!
            </p>
          </div>
        </div>

        {/* Demands Grid */}
        {filteredDemands.length === 0 ? (
          <div className="p-12 text-center bg-slate-900/50 rounded-3xl border border-slate-800 space-y-3">
            <Radar className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No Customer Demands Found</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              No demand requests matching your current filters. Clear filters to view all incoming local shopper requests.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDemands.map((demand) => {
              const whatsappUrl = `https://wa.me/${demand.customerPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hello ${demand.customerName}, we saw your stock request on Dhoondo for "${demand.productName}". We now have this available at ${currentStore.name}!`
              )}`;

              return (
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
                        <span>{demand.interestedCustomersCount} Shoppers waiting</span>
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

                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    {demand.status === 'fulfilled' ? (
                      <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Stocked by your store! Notification sent to customers.</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-800 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-400 border border-slate-700 transition-colors"
                            title="Contact Customer via WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                          <a
                            href={`tel:${demand.customerPhone}`}
                            className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600/30 text-slate-300 hover:text-blue-400 border border-slate-700 transition-colors"
                            title="Call Customer"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>

                        <button
                          onClick={() => fulfillDemandItem(demand.id, currentStore.id, 10)}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-brand-500 hover:from-orange-400 hover:to-brand-400 text-slate-950 font-black text-xs shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5 transition-all"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Stock This Product (Qty: 10)</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </main>
    </div>
  );
};
