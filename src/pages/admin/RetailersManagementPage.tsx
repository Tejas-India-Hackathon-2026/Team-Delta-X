import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Search, 
  ShieldCheck, 
  MapPin, 
  Star, 
  Phone, 
  Eye, 
  Boxes, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

export const RetailersManagementPage: React.FC = () => {
  const { stores, inventory, toggleStoreVerification } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVerified, setFilterVerified] = useState<'all' | 'verified' | 'pending'>('all');

  const filteredStores = stores.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.phone.includes(searchQuery);

    if (!matchesSearch) return false;
    if (filterVerified === 'verified' && !s.verified) return false;
    if (filterVerified === 'pending' && s.verified) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Store className="w-7 h-7 text-purple-400" />
              <span>Retailer Directory & Store Control</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Inspect physical store locations, verify merchants, and track digital catalog adoption
            </p>
          </div>

          <Link
            to="/retailer/register"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30"
          >
            + Onboard New Merchant
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <div className="w-full sm:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search store name, owner, area..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-purple-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setFilterVerified('all')}
              className={`py-1.5 px-3.5 rounded-xl font-bold transition-all ${
                filterVerified === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Stores ({stores.length})
            </button>
            <button
              onClick={() => setFilterVerified('verified')}
              className={`py-1.5 px-3.5 rounded-xl font-bold transition-all ${
                filterVerified === 'verified' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Verified ({stores.filter(s => s.verified).length})
            </button>
            <button
              onClick={() => setFilterVerified('pending')}
              className={`py-1.5 px-3.5 rounded-xl font-bold transition-all ${
                filterVerified === 'pending' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Pending ({stores.filter(s => !s.verified).length})
            </button>
          </div>
        </div>

        {/* Stores Table */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950/60 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                  <th className="py-4 px-4 sm:px-6">Store & Proprietor</th>
                  <th className="py-4 px-3">Location</th>
                  <th className="py-4 px-3 text-center">Listed Products</th>
                  <th className="py-4 px-3 text-center">Rating</th>
                  <th className="py-4 px-3 text-center">Footfall Views</th>
                  <th className="py-4 px-3 text-center">Status</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80">
                {filteredStores.map((store) => {
                  const prodCount = inventory.filter(i => i.storeId === store.id).length;

                  return (
                    <tr key={store.id} className="hover:bg-slate-800/40 transition-colors">
                      
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={store.image}
                            alt={store.name}
                            className="w-10 h-10 rounded-xl object-cover border border-slate-700 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-white text-sm flex items-center gap-1.5">
                              <span>{store.name}</span>
                              {store.verified && <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />}
                            </div>
                            <div className="text-slate-400 text-[11px]">{store.ownerName} • {store.phone}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-3 text-slate-300">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{store.area}</span>
                        </div>
                      </td>

                      <td className="py-4 px-3 text-center font-bold text-white">
                        {prodCount} items
                      </td>

                      <td className="py-4 px-3 text-center">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-[11px]">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{store.rating}</span>
                        </div>
                      </td>

                      <td className="py-4 px-3 text-center font-mono text-purple-300 font-bold">
                        {store.viewsCount || 890}
                      </td>

                      <td className="py-4 px-3 text-center">
                        {store.verified ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                            Verified
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                            Unverified
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => toggleStoreVerification(store.id)}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                              store.verified
                                ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30'
                                : 'bg-emerald-600 text-white hover:bg-emerald-500'
                            }`}
                          >
                            {store.verified ? 'Revoke' : 'Verify'}
                          </button>

                          <Link
                            to={`/store/${store.id}`}
                            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                            title="View Public Storefront"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};
