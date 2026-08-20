import React from 'react';
import { ShieldCheck, Check, X, Store, MapPin, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

export const StoreVerificationPage: React.FC = () => {
  const { stores, toggleStoreVerification } = useApp();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <ShieldCheck className="w-7 h-7 text-purple-400" />
            <span>Store KYC & Verification Approvals</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Review GST documentation, physical address verification, and grant verified merchant badges
          </p>
        </div>

        {/* Store Verification Table */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950/60 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                  <th className="py-4 px-4 sm:px-6">Store & Proprietor</th>
                  <th className="py-4 px-3">Location</th>
                  <th className="py-4 px-3">GSTIN Certificate</th>
                  <th className="py-4 px-3">Contact</th>
                  <th className="py-4 px-3 text-center">Status</th>
                  <th className="py-4 px-4 text-right">KYC Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80">
                {stores.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-800/40 transition-colors">
                    
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-white text-sm">{s.name}</div>
                      <div className="text-slate-400 text-[11px]">Owner: {s.ownerName}</div>
                    </td>

                    <td className="py-4 px-3 text-slate-300">
                      {s.area}, {s.city}
                    </td>

                    <td className="py-4 px-3 font-mono text-purple-300 font-bold">
                      {s.gstNumber || '29ABCDE1234F1Z5'}
                    </td>

                    <td className="py-4 px-3 text-slate-300">
                      {s.phone}
                    </td>

                    <td className="py-4 px-3 text-center">
                      {s.verified ? (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                          ✓ Verified Merchant
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                          Pending Approval
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => toggleStoreVerification(s.id)}
                        className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-colors ${
                          s.verified
                            ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30'
                            : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-md'
                        }`}
                      >
                        {s.verified ? 'Revoke Badge' : 'Approve & Verify'}
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};
