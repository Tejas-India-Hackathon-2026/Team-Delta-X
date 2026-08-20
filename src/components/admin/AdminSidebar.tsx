import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Store, 
  Layers, 
  BarChart2, 
  Users, 
  CheckSquare, 
  ArrowLeft,
  Settings,
  Bell,
  Package,
  Flag,
  Radio,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminSidebar: React.FC = () => {
  const { stores, categories, products } = useApp();
  const unverifiedStores = stores.filter(s => !s.verified);

  const links = [
    { to: '/admin/dashboard', label: 'Platform Overview', icon: BarChart2 },
    { to: '/admin/users', label: 'User Management', icon: Users },
    { to: '/admin/retailers', label: 'Retailers & Stores', icon: Store, count: stores.length },
    { to: '/admin/products', label: 'Master Catalog', icon: Package, count: products.length },
    { to: '/admin/verification', label: 'Store Verification', icon: CheckSquare, count: unverifiedStores.length, highlight: unverifiedStores.length > 0 },
    { to: '/admin/categories', label: 'Category Master', icon: Layers, count: categories.length },
    { to: '/admin/reports', label: 'Reports & Safety', icon: Flag },
    { to: '/admin/analytics', label: 'Platform Analytics', icon: ShieldCheck },
    { to: '/admin/notifications', label: 'Broadcast Alerts', icon: Bell },
    { to: '/admin/settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-950 text-slate-300 min-h-screen p-4 flex flex-col justify-between border-r border-slate-800 shrink-0">
      
      <div className="space-y-6">
        
        {/* Brand */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              Dhoondo <span className="text-purple-400 text-xs font-normal">Admin Hub</span>
            </span>
          </Link>

          <Link
            to="/"
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Back to Customer App"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 mb-2">
            Admin Master Controls
          </div>

          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </div>

                {link.count !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    link.highlight
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {link.count}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

      </div>

      {/* Admin Token Footer & Auth Action */}
      <div className="space-y-2 pt-2">
        <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
          <div className="text-white font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Super Admin Operations</span>
          </div>
          <div className="text-[10px]">Operations & Trust Compliance Active</div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Link
            to="/admin/login"
            className="flex-1 py-2 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-white text-[11px] font-bold text-center border border-purple-500/30 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/admin/signup"
            className="flex-1 py-2 px-2 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-white text-[11px] font-bold text-center border border-purple-500/40 transition-colors"
          >
            + Create Admin
          </Link>
          <Link
            to="/"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-[11px] transition-colors"
            title="Exit to Customer App"
          >
            Exit
          </Link>
        </div>
      </div>

    </aside>
  );
};
