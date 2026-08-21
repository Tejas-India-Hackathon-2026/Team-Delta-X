import React, { useState } from 'react';
import { Tag, Plus, Trash2, Calendar, Percent, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';
import { CreateOfferModal } from '../../components/retailer/CreateOfferModal';

export const OffersPage: React.FC = () => {
  const [offersTabFilter, setOffersTabFilter] = useState<'active' | 'expired' | 'all'>('active');
  const { user, stores, offers, deleteOffer } = useApp();
  const [createOfferModalOpen, setCreateOfferModalOpen] = useState(false);

  const currentStore = stores.find(s => s.id === (user.storeId || 'store-sharma-auto')) || stores[0];
  const storeOffers = offers.filter(o => o.storeId === currentStore.id);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <RetailerSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Tag className="w-7 h-7 text-amber-400" />
              <span>Promotional Offers & Discounts</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Create and manage special offers visible to shoppers within your local radius
            </p>
          </div>

          <button
            onClick={() => setCreateOfferModalOpen(true)}
            className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Offer</span>
          </button>
        </div>

        {/* Offers Grid */}
        {storeOffers.length === 0 ? (
          <div className="p-12 bg-slate-900 rounded-3xl border border-slate-800 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
              <Tag className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-white">No Active Offers Running</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Attract more walk-in shoppers by posting festive or clearance discounts on Dhoondo.
            </p>
            <button
              onClick={() => setCreateOfferModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-bold text-xs"
            >
              Launch First Deal
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {storeOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-44 bg-slate-800 overflow-hidden">
                  <img
                    src={offer.bannerImage}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-rose-600 text-white font-black text-xs shadow-md">
                    {offer.discountPercent}% OFF
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="flex items-center gap-1 font-mono text-brand-400 font-bold">
                        Coupon: {offer.couponCode}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        Valid till {offer.validUntil}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-white text-base leading-snug">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Live in {currentStore.area}
                    </span>

                    <button
                      onClick={() => deleteOffer(offer.id)}
                      className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Delete offer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      {createOfferModalOpen && (
        <CreateOfferModal
          isOpen={createOfferModalOpen}
          onClose={() => setCreateOfferModalOpen(false)}
        />
      )}
    </div>
  );
};
