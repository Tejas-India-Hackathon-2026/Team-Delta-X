import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Store, 
  Package, 
  Boxes, 
  Tag, 
  MessageSquare, 
  Radar, 
  BarChart3, 
  Bell, 
  Settings, 
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Crown,
  ArrowRight,
  LogOut
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RetailerSidebar: React.FC = () => {
  const { user, stores, demands, enquiries, getStoreSubscription, canAddProduct, openUpgradeModal, logoutUser } = useApp();
  const navigate = useNavigate();
  const currentStore = stores.find(s => s.id === user.storeId) || stores[0];
  const sub = getStoreSubscription(currentStore.id);
  const usage = canAddProduct(currentStore.id);
  const isPro = sub.plan === 'pro';

  const handleLogout = () => {
    logoutUser();
    navigate('/retailer/login');
  };

  const pendingDemandsCount = demands.filter(d => d.status === 'pending').length;
  const newEnquiriesCount = enquiries.filter(e => e.status === 'new').length;

  const links = [
    { to: '/retailer/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/retailer/inventory', label: 'Inventory & Stock', icon: Boxes, badge: `${usage.currentCount}/${isPro ? '∞' : '50'}` },
    { to: '/retailer/subscription', label: 'Subscription & Plans', icon: Crown, badge: isPro ? 'PRO 👑' : 'Free', highlight: !isPro },
    { to: '/retailer/demand-alerts', label: 'Demand Radar', icon: Radar, count: pendingDemandsCount, highlight: true },
    { to: '/retailer/offers', label: 'Promos & Offers', icon: Tag },
    { to: '/retailer/enquiries', label: 'Customer Enquiries', icon: MessageSquare, count: newEnquiriesCount },
    { to: '/retailer/analytics', label: 'Analytics & Trends', icon: BarChart3 },
    { to: '/retailer/register', label: '+ Register New Store', icon: Store },
    { to: '/retailer/settings', label: 'Store Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen p-4 flex flex-col justify-between border-r border-slate-800 shrink-0">
      
      {/* Top Store Header */}
      <div className="space-y-6">
        
        {/* Brand */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-500 text-slate-950 flex items-center justify-center font-black text-sm">
              Dh
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              Dhoondo <span className="text-brand-400 text-xs font-normal">Merchant</span>
            </span>
          </Link>

          <Link
            to="/"
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Switch back to Customer View"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Current Active Store Card */}
        <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <div className="font-bold text-white text-xs truncate flex items-center gap-1">
                <span>{currentStore.name}</span>
                {isPro ? (
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[9px] px-1.5 py-0.2 rounded-md font-black flex items-center gap-0.5 shrink-0">
                    <Crown className="w-2.5 h-2.5 fill-amber-300" />
                    <span>PRO</span>
                  </span>
                ) : currentStore.verified ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                ) : null}
              </div>
              <div className="text-[10px] text-slate-400 truncate">
                {currentStore.area}
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1 shrink-0"></span>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-700">
            <span>{isPro ? '👑 Pro Merchant' : 'Free Tier Store'}</span>
            <span className="font-bold text-brand-300">★ {currentStore.rating}</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 mb-2">
            Store Management
          </div>

          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${link.to === '/retailer/subscription' && !isPro ? 'text-amber-400' : ''}`} />
                  <span>{link.label}</span>
                </div>

                {link.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${
                    link.badge.includes('PRO') 
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' 
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {link.badge}
                  </span>
                )}

                {link.count !== undefined && link.count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    link.highlight
                      ? 'bg-orange-500 text-white animate-pulse'
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    {link.count}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

      </div>

      {/* Dynamic Subscription Usage Meter & Upgrade Prompt */}
      <div className="space-y-3 pt-4 border-t border-slate-800">
        
        {isPro ? (
          <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-950/80 to-slate-800 border border-purple-800/60 text-xs space-y-1.5">
            <div className="flex items-center justify-between text-amber-300 font-black text-[11px]">
              <span className="flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 fill-amber-300" />
                <span>Pro Plan Active</span>
              </span>
              <span className="text-[9px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-bold">
                Unlimited
              </span>
            </div>
            <p className="text-[10px] text-purple-300 leading-snug">
              Unlimited product listings & Pro Gold Badge.
            </p>
            <Link
              to="/retailer/subscription"
              className="block text-center py-1 bg-purple-900/60 hover:bg-purple-800 text-purple-200 rounded-lg text-[10px] font-bold transition-colors"
            >
              Billing Details ➔
            </Link>
          </div>
        ) : (
          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-white">
              <span>Catalog Usage</span>
              <span className="text-purple-400">{usage.currentCount} / {usage.maxCount}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  usage.percentage >= 100 ? 'bg-rose-500' : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                }`}
                style={{ width: `${usage.percentage}%` }}
              />
            </div>
            <button
              onClick={openUpgradeModal}
              className="w-full py-1.5 px-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-[11px] flex items-center justify-center gap-1 shadow-md shadow-purple-600/30 transition-all transform active:scale-95"
            >
              <Crown className="w-3 h-3 text-amber-300 fill-amber-300" />
              <span>Upgrade to Pro 👑</span>
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 text-xs">
          <Link
            to="/retailer/login"
            className="flex-1 py-1.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-bold text-center border border-slate-700 transition-colors"
          >
            Switch Store
          </Link>
          <Link
            to="/"
            className="py-1.5 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-[11px] transition-colors"
            title="Exit to Customer App"
          >
            Exit
          </Link>
        </div>

        {/* 🚪 Merchant Logout Action Button */}
        <button
          type="button"
          onClick={handleLogout}
          className="w-full py-2.5 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 text-xs font-black flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out (Merchant)</span>
        </button>
      </div>

    </aside>
  );
};

