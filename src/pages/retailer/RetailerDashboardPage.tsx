import React, { useState } from 'react';
import { SubscriptionLimitBanner } from '../../components/retailer/SubscriptionLimitBanner';
import { Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Boxes, 
  Search, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Plus, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Radar, 
  ChevronRight,
  Store,
  DollarSign
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';
import { AddProductModal } from '../../components/retailer/AddProductModal';
import { RetailerAuthModal } from '../../components/retailer/RetailerAuthModal';
import { formatDistance } from '../../services/distanceService';

export const RetailerDashboardPage: React.FC = () => {
  const { 
    user, 
    stores, 
    inventory, 
    products, 
    demands, 
    enquiries, 
    updateStock, 
    fulfillDemandItem,
    logoutUser
  } = useApp();

  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const currentStore = stores.find(s => s.id === (user.storeId || 'store-sharma-auto')) || stores[0];

  // Store inventory items
  const storeInvs = inventory.filter(inv => inv.storeId === currentStore.id);
  const inStockCount = storeInvs.filter(i => i.status === 'in_stock').length;
  const lowStockCount = storeInvs.filter(i => i.status === 'low_stock').length;
  const outOfStockCount = storeInvs.filter(i => i.status === 'out_of_stock').length;

  // Pending customer demands in this store's category
  const storeDemands = demands.filter(d => d.status === 'pending');
  const recentEnquiries = enquiries.filter(e => e.storeId === currentStore.id).slice(0, 3);

  // Top fast moving products
  const storeProductsList = storeInvs.map(inv => {
    const prod = products.find(p => p.id === inv.productId) || products[0];
    return { ...inv, product: prod };
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup' | 'forgot'>('signin');

  const openAuth = (mode: 'signin' | 'signup' | 'forgot') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <RetailerSidebar />

      {/* Main Dashboard Area */}
      <main className="flex-1 p-4 sm:p-8 space-y-8 overflow-y-auto max-h-screen">
        
        {/* Top Header & Auth Options Bar */}
        <div className="space-y-4 pb-6 border-b border-slate-800">
          
          {/* Top Auth Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400">Signed In As:</span>
              <strong className="text-white flex items-center gap-1 font-bold">
                {currentStore.name}
                {currentStore.verified && <span className="text-brand-400 text-[10px]">✓ Verified</span>}
              </strong>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => openAuth('signin')}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs border border-slate-700 transition-colors"
              >
                Switch Merchant
              </button>

              <button
                onClick={() => openAuth('signup')}
                className="px-3 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs shadow-sm transition-colors"
              >
                + Register Store
              </button>

              <button
                type="button"
                onClick={() => {
                  logoutUser();
                  window.location.href = '/retailer/login';
                }}
                className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 hover:text-rose-200 border border-rose-500/40 font-bold text-xs transition-colors flex items-center gap-1"
              >
                <span>🚪 Log Out</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-brand-400 font-semibold mb-1">
                <span>{currentStore.name}</span>
                <span>•</span>
                <span>{currentStore.area}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span>Merchant Operations Dashboard</span>
                {currentStore.subscription?.plan === 'pro' && (
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs px-2.5 py-0.5 rounded-full font-black flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 fill-amber-300" />
                    <span>PRO</span>
                  </span>
                )}
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Live counter stock, customer search radar & footfall analytics
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setAddProductModalOpen(true)}
                className="px-4 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-brand-500/20 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Product</span>
              </button>

              <Link
                to={`/store/${currentStore.id}`}
                className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700 transition-all"
              >
                <Store className="w-4 h-4 text-brand-400" />
                <span>View Storefront</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 👑 SaaS Subscription & Catalog Usage Meter */}
        <SubscriptionLimitBanner />

        {/* 📊 6 KEY PERFORMANCE METRIC CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          
          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Listed</div>
            <div className="text-2xl font-black text-white">{storeInvs.length}</div>
            <div className="text-[10px] text-brand-400">Active in Catalog</div>
          </div>

          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">In Stock</div>
            <div className="text-2xl font-black text-emerald-400">{inStockCount}</div>
            <div className="text-[10px] text-slate-400">Ready for Counter</div>
          </div>

          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Low Stock</div>
            <div className="text-2xl font-black text-amber-400">{lowStockCount}</div>
            <div className="text-[10px] text-slate-400">&le; 5 units left</div>
          </div>

          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400">Customer Searches</div>
            <div className="text-2xl font-black text-purple-400">342</div>
            <div className="text-[10px] text-slate-400">This week near you</div>
          </div>

          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Store Views</div>
            <div className="text-2xl font-black text-blue-400">{currentStore.viewsCount || 1420}</div>
            <div className="text-[10px] text-slate-400">Footfall intent</div>
          </div>

          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400">Potential Revenue</div>
            <div className="text-2xl font-black text-rose-400">₹45.2K</div>
            <div className="text-[10px] text-slate-400">Unmet local demand</div>
          </div>

        </div>

        {/* 📈 INTERACTIVE SEARCHES & FOOTFALL TRENDS CHART */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-400" />
                <span>Hyperlocal Customer Search & Footfall Velocity</span>
              </h2>
              <p className="text-xs text-slate-400">
                Number of customers searching for items within 5 km of {currentStore.area}
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 font-bold">
              +28% vs last week
            </span>
          </div>

          {/* Canvas SVG Bar Chart */}
          <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2">
            {[
              { day: 'Mon', searches: 42, views: 24 },
              { day: 'Tue', searches: 58, views: 35 },
              { day: 'Wed', searches: 64, views: 40 },
              { day: 'Thu', searches: 72, views: 48 },
              { day: 'Fri', searches: 94, views: 65 },
              { day: 'Sat', searches: 130, views: 92 },
              { day: 'Sun (Today)', searches: 156, views: 110 }
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full flex items-end justify-center gap-1 h-32">
                  <div
                    style={{ height: `${(bar.searches / 160) * 100}%` }}
                    className="w-full max-w-[20px] rounded-t-lg bg-gradient-to-t from-brand-700 to-brand-400 group-hover:brightness-125 transition-all relative"
                  >
                    <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] text-brand-300 px-1 rounded whitespace-nowrap">
                      {bar.searches} srch
                    </span>
                  </div>
                  <div
                    style={{ height: `${(bar.views / 160) * 100}%` }}
                    className="w-full max-w-[20px] rounded-t-lg bg-gradient-to-t from-teal-800 to-teal-400 group-hover:brightness-125 transition-all"
                  ></div>
                </div>
                <span className="text-[11px] text-slate-400 font-bold">{bar.day}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-brand-400"></span>
              <span>Nearby Product Searches</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-teal-400"></span>
              <span>Direct Store Views</span>
            </div>
          </div>
        </div>

        {/* 🔥 CUSTOMER DEMAND RADAR NEAR YOU (HERO FEATURE) */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-orange-950/60 border border-orange-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400">
                <Radar className="w-5 h-5 animate-spin" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-white">
                  Customer Demand Radar Near You
                </h2>
                <p className="text-xs text-slate-400">
                  Customers actively searching for items within 5 km of your counter
                </p>
              </div>
            </div>

            <Link
              to="/retailer/demand-alerts"
              className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              <span>View All ({storeDemands.length})</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {storeDemands.slice(0, 2).map((demand) => (
              <div
                key={demand.id}
                className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-300 text-[10px] font-extrabold">
                    🔥 {demand.searchesCount} Searches • {demand.interestedCustomersCount} Customers Waiting
                  </div>
                  <h4 className="font-bold text-sm text-white">
                    {demand.productName}
                  </h4>
                  <div className="text-xs text-slate-400">
                    Requested in {demand.customerArea} ({demand.radiusKm} km radius)
                  </div>
                </div>

                <button
                  onClick={() => fulfillDemandItem(demand.id, currentStore.id, 10)}
                  className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-black text-xs shrink-0 shadow-md shadow-orange-500/20 transition-all flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Stock This</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 📦 FAST INVENTORY LIVE STOCK STEPPER TABLE */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                <Boxes className="w-4 h-4 text-brand-400" />
                <span>Live Counter Inventory & Stock Stepper</span>
              </h2>
              <p className="text-xs text-slate-400">
                Click + or − to immediately update stock seen by nearby shoppers
              </p>
            </div>

            <Link
              to="/retailer/inventory"
              className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1"
            >
              <span>Full Inventory Table</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-3">Product Name</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3 text-center">Counter Price</th>
                  <th className="py-3 px-3 text-center">Status</th>
                  <th className="py-3 px-3 text-center">Live Stock Stepper</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {storeProductsList.slice(0, 6).map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={inv.product.image}
                          alt={inv.product.name}
                          className="w-9 h-9 rounded-xl object-contain bg-slate-800 p-1 border border-slate-700"
                        />
                        <div>
                          <div className="font-bold text-white text-xs">{inv.product.name}</div>
                          <div className="text-[10px] text-slate-400">{inv.product.brand}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-slate-400">
                      {inv.product.subcategory}
                    </td>

                    <td className="py-3 px-3 text-center font-bold text-white">
                      ₹{inv.price}
                    </td>

                    <td className="py-3 px-3 text-center">
                      {inv.status === 'in_stock' ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                          🟢 In Stock
                        </span>
                      ) : inv.status === 'low_stock' ? (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                          🟡 Low Stock
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold text-[10px]">
                          🔴 Out of Stock
                        </span>
                      )}
                    </td>

                    {/* Stock Stepper (- 1 +) */}
                    <td className="py-3 px-3 text-center">
                      <div className="inline-flex items-center bg-slate-800 rounded-xl p-1 border border-slate-700">
                        <button
                          onClick={() => updateStock(currentStore.id, inv.productId, -1)}
                          className="w-6 h-6 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold flex items-center justify-center text-xs"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-bold text-white text-xs">
                          {inv.stockQuantity}
                        </span>
                        <button
                          onClick={() => updateStock(currentStore.id, inv.productId, 1)}
                          className="w-6 h-6 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-bold flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-right">
                      <Link
                        to={`/product/${inv.productId}`}
                        className="text-brand-400 hover:underline text-xs font-semibold"
                      >
                        View Live Listing
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Add Product Modal */}
      {addProductModalOpen && (
        <AddProductModal
          isOpen={addProductModalOpen}
          onClose={() => setAddProductModalOpen(false)}
        />
      )}

      {/* Retailer Auth Modal (Sign In / Sign Up / Forgot Password) */}
      <RetailerAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />

    </div>
  );
};
