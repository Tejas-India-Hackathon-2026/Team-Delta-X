import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Search, 
  Mic, 
  Heart, 
  Bell, 
  Store as StoreIcon, 
  ShieldCheck, 
  ChevronDown,
  SlidersHorizontal,
  Sparkles,
  Menu,
  X,
  Radio,
  KeyRound,
  User,
  LogOut
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LocationPermissionModal } from './LocationPermissionModal';

interface HeaderProps {
  onOpenLocationModal: () => void;
  onOpenVoiceModal: () => void;
  onOpenAuthModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLocationModal,
  onOpenVoiceModal,
  onOpenAuthModal
}) => {
  const { 
    user, 
    setUserRole, 
    updateUserProfile,
    logoutUser,
    location, 
    unreadNotificationsCount,
    searchHistory,
    hasLocationPermission
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);
  const [pendingQuery, setPendingQuery] = useState('');
  const navigate = useNavigate();
  const routerLocation = useLocation();

  const executeHeaderSearch = (query: string) => {
    const q = query.trim();
    if (!q) return;

    // Always prompt location modal first
    setPendingQuery(q);
    setShowLocationPrompt(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      executeHeaderSearch(searchQuery);
    }
  };

  const handleSuggestionClick = (query: string) => {
    setSearchQuery(query);
    executeHeaderSearch(query);
  };

  const handleLocationResolved = () => {
    setShowLocationPrompt(false);
    const target = pendingQuery || searchQuery || 'all';
    navigate(`/search?q=${encodeURIComponent(target.trim())}`);
    setIsSearchFocused(false);
  };

  const isRetailerRoute = routerLocation.pathname.startsWith('/retailer');
  const isAdminRoute = routerLocation.pathname.startsWith('/admin');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-teal-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-slate-900 via-brand-900 to-brand-700 bg-clip-text text-transparent">
                  Dhoondo
                </span>
                <span className="text-[10px] font-semibold text-brand-600 tracking-wider uppercase -mt-1 hidden sm:block">
                  Find Nearby • Buy Local
                </span>
              </div>
            </Link>

            {/* Location Selector Button */}
            <button
              onClick={onOpenLocationModal}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 text-slate-700 text-xs font-medium transition-all group"
              title="Change search location across all Indian states & radius"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-600 group-hover:animate-bounce" />
              <span className="max-w-[150px] truncate font-semibold">
                {location.city || location.area}
                <span className="font-normal text-slate-400 ml-1">({location.area})</span>
              </span>
              <span className="bg-brand-100 text-brand-800 text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                {location.radiusKm} km
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>

          {/* Search Bar with Autocomplete & Voice */}
          <div className="flex-1 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <div className="absolute left-3.5 text-slate-400">
                <Search className="w-4 h-4" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                placeholder="What are you looking for? (e.g. Honda Shine brake pad, Dolo 650, Atta 5kg)..."
                className="w-full pl-10 pr-24 py-2.5 bg-slate-50 hover:bg-white focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm rounded-full border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 shadow-inner transition-all outline-none"
              />

              <div className="absolute right-2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={onOpenVoiceModal}
                  className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors"
                  title="Voice Search"
                >
                  <Mic className="w-4 h-4 text-brand-600" />
                </button>
                <button
                  type="submit"
                  className="bg-brand-600 hover:bg-brand-700 text-white p-1.5 rounded-full transition-colors shadow-sm"
                  title="Search"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Search Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-4 z-50">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span>POPULAR NEAR YOU</span>
                  <span className="text-[11px] text-brand-600">⚡ Trending Near You</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    'Honda Shine brake pad',
                    'Castrol Power1 10W-30',
                    'Dolo 650',
                    'Amul Gold Milk',
                    'Havells 9W LED Bulb',
                    'UltraTech Cement 50kg'
                  ].map((pill, i) => (
                    <button
                      key={i}
                      type="button"
                      onMouseDown={() => handleSuggestionClick(pill)}
                      className="px-3 py-1 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 border border-slate-200 text-slate-700 rounded-full text-xs font-medium transition-colors"
                    >
                      {pill}
                    </button>
                  ))}
                </div>

                {searchHistory.length > 0 && (
                  <>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 pt-2 border-t border-slate-100">
                      Recent Searches
                    </div>
                    <div className="space-y-1">
                      {searchHistory.slice(0, 3).map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onMouseDown={() => handleSuggestionClick(item)}
                          className="w-full text-left px-2 py-1 text-xs text-slate-600 hover:bg-slate-50 hover:text-brand-600 rounded-lg flex items-center gap-2"
                        >
                          <Search className="w-3 h-3 text-slate-400" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/map"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <MapPin className="w-4 h-4 text-brand-600" />
              <span>Explore Map</span>
            </Link>

            <Link
              to="/categories"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-slate-500" />
              <span>Categories</span>
            </Link>

            <Link
              to="/wishlist"
              className="relative p-2 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
              title="Saved Products"
            >
              <Heart className="w-5 h-5" />
            </Link>

            <Link
              to="/notifications"
              className="relative p-2 text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white animate-pulse">
                  {unreadNotificationsCount}
                </span>
              )}
            </Link>

            {/* Admin Command Link */}
            <Link
              to="/admin/login"
              className="flex items-center gap-1 bg-purple-950 hover:bg-purple-900 border border-purple-800 text-purple-200 text-xs font-bold px-3 py-2 rounded-xl transition-all"
              title="Open Admin Sign In & Command Center"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden xl:inline">Admin</span>
            </Link>

            {/* Right Side Sign In & Account Controls */}
            {user.role === 'retailer' ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/retailer/dashboard"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition-all"
                  title="Open Merchant Dashboard"
                >
                  <StoreIcon className="w-3.5 h-3.5" />
                  <span>Merchant Hub</span>
                </Link>

                <button
                  onClick={logoutUser}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold transition-all"
                  title="Sign Out from Retailer Account"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Link
                  to="/retailer/login"
                  className="hidden xl:flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs border border-slate-700 transition-colors"
                  title="Retailer Merchant Portal"
                >
                  <StoreIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Retailer Login</span>
                </Link>

                <button
                  onClick={onOpenAuthModal}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-200"
                  title="Account / Switch Portal"
                >
                  <User className="w-4 h-4 text-slate-600" />
                  <span>Sign In</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenLocationModal}
              className="p-2 text-brand-600 hover:bg-slate-100 rounded-lg"
              title="Change Location"
            >
              <MapPin className="w-5 h-5" />
            </button>

            <Link
              to="/notifications"
              className="relative p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              <Bell className="w-5 h-5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {unreadNotificationsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <span className="text-slate-500">Location: {location.area}</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocationModal();
              }}
              className="text-brand-600 font-semibold"
            >
              Change ({location.radiusKm} km)
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 font-medium text-slate-700 hover:bg-brand-50"
            >
              🏠 Home
            </Link>
            <Link
              to="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 font-medium text-slate-700 hover:bg-brand-50"
            >
              🗂️ Categories
            </Link>
            <Link
              to="/map"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 font-medium text-slate-700 hover:bg-brand-50"
            >
              🗺️ Map View
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 font-medium text-slate-700 hover:bg-brand-50"
            >
              ❤️ Saved Products
            </Link>
            <Link
              to="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-purple-50 font-bold text-purple-700 hover:bg-purple-100 col-span-2 flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>🛡️ Super Admin Sign In</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            {user.role === 'retailer' ? (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/retailer/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 py-2.5 rounded-xl text-xs font-black shadow-sm"
                >
                  <StoreIcon className="w-4 h-4" />
                  <span>Merchant Hub</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logoutUser();
                  }}
                  className="flex items-center justify-center gap-1.5 bg-rose-50 border border-rose-200 text-rose-700 py-2.5 rounded-xl text-xs font-bold shadow-sm"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/retailer/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-xs font-semibold shadow-sm"
                >
                  <KeyRound className="w-4 h-4 text-brand-400" />
                  <span>Merchant Sign In</span>
                </Link>

                <Link
                  to="/retailer/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 bg-brand-500 hover:bg-brand-400 text-slate-950 py-2.5 rounded-xl text-xs font-extrabold shadow-sm"
                >
                  <StoreIcon className="w-4 h-4" />
                  <span>Register Store (Sign Up)</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header Search Location Permission Modal */}
      <LocationPermissionModal
        isOpen={showLocationPrompt}
        onClose={() => setShowLocationPrompt(false)}
        searchContextQuery={pendingQuery || searchQuery}
        onLocationResolved={handleLocationResolved}
      />
    </header>
  );
};
