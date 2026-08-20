import React, { useState } from 'react';
import { Settings, Store, Clock, Phone, MapPin, CheckCircle2, ShieldCheck, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';
import { StoreLocationPicker } from '../../components/retailer/StoreLocationPicker';

export const StoreSettingsPage: React.FC = () => {
  const { user, stores, updateStoreProfile, logoutUser } = useApp();
  const currentStore = stores.find(s => s.id === (user.storeId || 'store-sharma-auto')) || stores[0];

  const [name, setName] = useState(currentStore.name);
  const [ownerName, setOwnerName] = useState(currentStore.ownerName);
  const [phone, setPhone] = useState(currentStore.phone);
  const [whatsapp, setWhatsapp] = useState(currentStore.whatsapp);
  const [openingHours, setOpeningHours] = useState(currentStore.openingHours);
  const [address, setAddress] = useState(currentStore.address);
  const [area, setArea] = useState(currentStore.area);
  const [city, setCity] = useState(currentStore.city);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>(currentStore.coordinates);
  const [about, setAbout] = useState(currentStore.about);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateStoreProfile(currentStore.id, {
      name,
      ownerName,
      phone,
      whatsapp,
      openingHours,
      address,
      area,
      city,
      coordinates,
      about
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <RetailerSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Settings className="w-7 h-7 text-slate-400" />
            <span>Store Profile & Operations Settings</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Update your public digital storefront information and merchant business details
          </p>
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSave} className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl max-w-3xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Store Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Proprietor / Owner Name *</label>
              <input
                type="text"
                required
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Phone Number *</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">WhatsApp Number (For Direct Orders) *</label>
              <input
                type="text"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Opening Hours *</label>
            <input
              type="text"
              required
              value={openingHours}
              onChange={(e) => setOpeningHours(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
            />
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-800">
            <label className="block text-xs font-bold text-slate-400">Store GPS Location & Address (Google Maps / Places)</label>
            <StoreLocationPicker
              initialLat={coordinates.lat}
              initialLng={coordinates.lng}
              initialAddress={address}
              onLocationSelect={(data) => {
                setAddress(data.address);
                setArea(data.area);
                setCity(data.city);
                setCoordinates({ lat: data.lat, lng: data.lng });
              }}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Store Description & About</label>
            <textarea
              rows={3}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-brand-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              Save Store Profile
            </button>

            {saved && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> Store Settings Updated
              </span>
            )}
          </div>

        </form>

        {/* 🔐 Account, Session & Logout Security Section */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4 shadow-xl max-w-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Account & Merchant Session</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Logged in as <strong>{user.name}</strong> ({user.email || 'Retailer Account'})
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                logoutUser();
                window.location.href = '/retailer/login';
              }}
              className="px-4 py-2.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 hover:text-rose-200 border border-rose-600/40 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>🚪 Sign Out (Log Out)</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};
