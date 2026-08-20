import React, { useState } from 'react';
import { Settings, Shield, Globe, Key, Save, Check, Database, RotateCcw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

export const AdminSettingsPage: React.FC = () => {
  const [googleMapsKey, setGoogleMapsKey] = useState('VITE_GOOGLE_MAPS_API_KEY_DEMO_AI');
  const [defaultRadius, setDefaultRadius] = useState('10');
  const [autoVerifyKyc, setAutoVerifyKyc] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Settings className="w-7 h-7 text-purple-400" />
            <span>Platform Configuration & System Variables</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage global search radius presets, Maps API integration, KYC automation, and security policies
          </p>
        </div>

        <form onSubmit={handleSave} className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl max-w-2xl">
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">
                Google Maps JavaScript API Key (VITE_GOOGLE_MAPS_API_KEY)
              </label>
              <input
                type="text"
                value={googleMapsKey}
                onChange={(e) => setGoogleMapsKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white font-mono focus:border-purple-500 outline-none"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                App provides high-fidelity interactive radar map fallback if API key is not configured.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">
                Default Discovery Radius Preset (Kilometers)
              </label>
              <select
                value={defaultRadius}
                onChange={(e) => setDefaultRadius(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-purple-500 outline-none"
              >
                <option value="1">1 km (Hyperlocal Walking Proximity)</option>
                <option value="5">5 km (Neighborhood Scooter/Bike)</option>
                <option value="10">10 km (Suburban City Radius)</option>
                <option value="20">20 km (Metropolitan Area)</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 border border-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoVerifyKyc}
                  onChange={(e) => setAutoVerifyKyc(e.target.checked)}
                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-slate-600"
                />
                <div>
                  <div className="font-bold text-white text-xs">Automated Store KYC Verification</div>
                  <div className="text-[11px] text-slate-400">Auto-verify stores with valid 15-digit GSTIN upon registration</div>
                </div>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-purple-600/30"
            >
              <Save className="w-4 h-4" />
              <span>Save System Settings</span>
            </button>

            {saved && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> Configuration Updated!
              </span>
            )}
          </div>

        </form>

      </main>
    </div>
  );
};
