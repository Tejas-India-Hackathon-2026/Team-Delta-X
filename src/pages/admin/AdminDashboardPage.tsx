import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Store, 
  Package, 
  Search, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Radar,
  ArrowRight,
  CheckSquare,
  Flag,
  Bell,
  BarChart3,
  Settings,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

export const AdminDashboardPage: React.FC = () => {
  const { stores, products, categories, demands, toggleStoreVerification } = useApp();

  const verifiedStores = stores.filter(s => s.verified).length;
  const unverifiedStores = stores.filter(s => !s.verified);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Top Header & Admin Auth Strip */}
        <div className="space-y-4 pb-6 border-b border-slate-800">
          
          {/* Top Auth Options Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-slate-400">Master Session:</span>
              <strong className="text-white flex items-center gap-1 font-bold">
                Super Administrator (Root Access)
                <span className="text-purple-300 text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20">2FA Active</span>
              </strong>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/admin/login"
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-sm transition-colors"
              >
                Admin Sign In
              </Link>

              <Link
                to="/admin/forgot-password"
                className="px-2.5 py-1.5 text-slate-400 hover:text-purple-300 font-medium text-xs transition-colors"
              >
                Forgot Password?
              </Link>

              <Link
                to="/retailer/login"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-300 font-bold text-xs border border-slate-700 transition-colors"
              >
                Retailer Counter Login
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Super Administrator Operations</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Platform Governance & Operations Center
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Live oversight across shoppers, retail store onboarding, KYC verifications, catalog taxonomy, and safety
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <span>Back to Customer App</span>
              </Link>

              <Link
                to="/retailer/dashboard"
                className="px-4 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-brand-500/20 transition-all flex items-center gap-1.5"
              >
                <span>Retailer SaaS View</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Pending KYC Alert Banner (if any) */}
        {unverifiedStores.length > 0 && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 to-slate-900 border border-amber-500/40 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">
                  {unverifiedStores.length} Retailer {unverifiedStores.length === 1 ? 'Store Requires' : 'Stores Require'} KYC Verification
                </h4>
                <p className="text-xs text-slate-300">
                  New local merchants have submitted shop and GST certificates for approval.
                </p>
              </div>
            </div>

            <Link
              to="/admin/verification"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shrink-0 transition-colors"
            >
              Review Queue →
            </Link>
          </div>
        )}

        {/* 📊 6 Executive KPI Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          
          <Link
            to="/admin/retailers"
            className="p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all space-y-1 block"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Retailers</div>
            <div className="text-2xl font-black text-white">{stores.length}</div>
            <div className="text-[10px] text-purple-300">{verifiedStores} verified</div>
          </Link>

          <Link
            to="/admin/users"
            className="p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all space-y-1 block"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Active Users</div>
            <div className="text-2xl font-black text-blue-400">1,248</div>
            <div className="text-[10px] text-slate-400">+18% this month</div>
          </Link>

          <Link
            to="/admin/products"
            className="p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all space-y-1 block"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Master Catalog</div>
            <div className="text-2xl font-black text-emerald-400">{products.length}</div>
            <div className="text-[10px] text-slate-400">16 sectors</div>
          </Link>

          <Link
            to="/admin/categories"
            className="p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all space-y-1 block"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Categories</div>
            <div className="text-2xl font-black text-amber-400">{categories.length}</div>
            <div className="text-[10px] text-slate-400">100+ subcategories</div>
          </Link>

          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400">Demand Queries</div>
            <div className="text-2xl font-black text-rose-400">{demands.length}</div>
            <div className="text-[10px] text-slate-400">Aggregated alerts</div>
          </div>

          <Link
            to="/admin/analytics"
            className="p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all space-y-1 block"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-400">Platform GMV</div>
            <div className="text-2xl font-black text-teal-400">₹14.8L</div>
            <div className="text-[10px] text-slate-400">Direct local trade</div>
          </Link>

        </div>

        {/* 🚀 Admin Fast Action Tiles (9 Core Modules) */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-base font-extrabold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-400" />
            <span>Administrator Operational Modules</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <Link
              to="/admin/users"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Users Management</div>
                  <div className="text-[11px] text-slate-400">Inspect activity, demands & accounts</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/retailers"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Retailers & Stores</div>
                  <div className="text-[11px] text-slate-400">{stores.length} merchant stores listed</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/verification"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Store KYC Approvals</div>
                  <div className="text-[11px] text-slate-400">Review GST & grant verified badges</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/products"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-400">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Master Product Catalog</div>
                  <div className="text-[11px] text-slate-400">Global SKUs & prescription flags</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/categories"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Category Taxonomy</div>
                  <div className="text-[11px] text-slate-400">16 sectors & custom category builder</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/reports"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
                  <Flag className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Safety & Price Disputes</div>
                  <div className="text-[11px] text-slate-400">Consumer pricing flag resolution</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/analytics"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Macro City Heatmap</div>
                  <div className="text-[11px] text-slate-400">Demand velocity & search volumes</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/notifications"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">Broadcast Announcements</div>
                  <div className="text-[11px] text-slate-400">Push updates to all users/stores</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

            <Link
              to="/admin/settings"
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-700 text-slate-300">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">System Configuration</div>
                  <div className="text-[11px] text-slate-400">Radius presets & API parameters</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>

          </div>
        </div>

        {/* Live Store KYC Verification Quick List */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                <Store className="w-5 h-5 text-purple-400" />
                <span>Recent Store Registrations & Verification Queue</span>
              </h3>
              <p className="text-xs text-slate-400">
                1-click approval for neighborhood merchants
              </p>
            </div>

            <Link
              to="/admin/verification"
              className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              <span>Full Verification List</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stores.slice(0, 4).map((s) => (
              <div
                key={s.id}
                className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="font-bold text-white text-sm">{s.name}</div>
                  <div className="text-xs text-slate-400">{s.ownerName} • {s.area}</div>
                  <div className="text-[10px] text-purple-300 font-mono mt-0.5">GST: {s.gstNumber || '29ABCDE1234F1Z5'}</div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {s.verified ? (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                      ✓ Verified
                    </span>
                  ) : (
                    <button
                      onClick={() => toggleStoreVerification(s.id)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      Approve KYC
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};
