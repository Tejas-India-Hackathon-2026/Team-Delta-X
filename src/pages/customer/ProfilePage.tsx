import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, MapPin, Phone, Mail, Shield, Bell, Heart, Store, ArrowLeft, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProfilePage: React.FC = () => {
  const { user, updateUserProfile, location, setUserRole } = useApp();
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ name, phone, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Link to="/" className="hover:text-brand-600 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span>Customer Profile</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Account & Discovery Preferences
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-brand-500 shadow-md"
            />
            <div>
              <h2 className="text-lg font-bold text-slate-900">{user.name}</h2>
              <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Default Area: {location.area} ({location.radiusKm} km radius)</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium focus:bg-white focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium focus:bg-white focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md"
              >
                Save Changes
              </button>

              {saved && (
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> Profile Updated
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Quick Link Navigation Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/wishlist"
            className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-brand-500 transition-all flex items-center gap-3.5 shadow-sm"
          >
            <div className="p-3 rounded-2xl bg-rose-50 text-rose-600">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Saved Wishlist</div>
              <div className="text-xs text-slate-500">Track price drops</div>
            </div>
          </Link>

          <Link
            to="/notifications"
            className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-brand-500 transition-all flex items-center gap-3.5 shadow-sm"
          >
            <div className="p-3 rounded-2xl bg-brand-50 text-brand-600">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Notifications</div>
              <div className="text-xs text-slate-500">Stock alert history</div>
            </div>
          </Link>

          <Link
            to="/retailer/register"
            className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-brand-500 transition-all flex items-center gap-3.5 shadow-sm"
          >
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Are you a Retailer?</div>
              <div className="text-xs text-slate-500">Take your store online</div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};
