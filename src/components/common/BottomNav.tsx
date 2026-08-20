import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, MapPin, Heart, Store, Bell } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BottomNav: React.FC = () => {
  const { user, unreadNotificationsCount } = useApp();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive ? 'text-brand-600' : 'text-slate-500 hover:text-slate-800'
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive ? 'text-brand-600' : 'text-slate-500 hover:text-slate-800'
            }`
          }
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </NavLink>

        <NavLink
          to="/map"
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive ? 'text-brand-600' : 'text-slate-500 hover:text-slate-800'
            }`
          }
        >
          <MapPin className="w-5 h-5" />
          <span>Map</span>
        </NavLink>

        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive ? 'text-brand-600' : 'text-slate-500 hover:text-slate-800'
            }`
          }
        >
          <Heart className="w-5 h-5" />
          <span>Saved</span>
        </NavLink>

        {user.role === 'retailer' ? (
          <NavLink
            to="/retailer/dashboard"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[10px] font-semibold transition-colors ${
                isActive ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`
            }
          >
            <Store className="w-5 h-5 text-brand-600" />
            <span>Store Hub</span>
          </NavLink>
        ) : (
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[10px] font-semibold relative transition-colors ${
                isActive ? 'text-brand-600' : 'text-slate-500 hover:text-slate-800'
              }`
            }
          >
            <Bell className="w-5 h-5" />
            <span>Alerts</span>
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-0 right-3 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                {unreadNotificationsCount}
              </span>
            )}
          </NavLink>
        )}

      </div>
    </nav>
  );
};
