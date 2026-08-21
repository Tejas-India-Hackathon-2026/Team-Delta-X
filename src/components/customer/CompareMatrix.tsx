import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Store as StoreIcon, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  Clock, 
  Trophy, 
  Compass, 
  Award,
  Sparkles,
  ArrowRight,
  FileText
} from 'lucide-react';
import { EnrichedProductResult, StoreInventory, Store } from '../../types';
import { formatDistance } from '../../services/distanceService';
import { getGoogleMapsDirectionsUrl } from '../../services/geolocationService';
import { useApp } from '../../context/AppContext';
import { QuotationModal } from './QuotationModal';

interface CompareMatrixProps {
  item: EnrichedProductResult;
  onEnquireClick?: (store: Store, inv: StoreInventory) => void;
}

export const CompareMatrix: React.FC<CompareMatrixProps> = ({ item, onEnquireClick }) => {
  const { location } = useApp();
  const [quotationModalOpen, setQuotationModalOpen] = React.useState(false);
  const [selectedInvForQuote, setSelectedInvForQuote] = React.useState<(StoreInventory & { store: Store }) | null>(null);

  const inventoryList = item.inventoryList;

  if (inventoryList.length === 0) {
    return (
      <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
        <p className="text-slate-600 font-semibold text-sm">
          No nearby stores currently list this product in their online inventory.
        </p>
      </div>
    );
  }

  // Determine highlight winners
  const minPrice = Math.min(...inventoryList.map(i => i.price));
  const minDistance = Math.min(...inventoryList.map(i => i.store.distanceKm ?? 0));
  const maxRating = Math.max(...inventoryList.map(i => i.store.rating));

  const handleOpenQuote = (inv?: StoreInventory & { store: Store }) => {
    setSelectedInvForQuote(inv || inventoryList[0]);
    setQuotationModalOpen(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
      
      {/* Matrix Header */}
      <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-brand-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider">
              Hyperlocal Comparison Matrix
            </span>
            <span className="text-xs text-slate-300">
              {inventoryList.length} local {inventoryList.length === 1 ? 'store has' : 'stores have'} this item
            </span>
          </div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{item.product.name}</span>
          </h3>
        </div>

        {/* Quick Summary Winner Tags & Quotation Action */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleOpenQuote()}
            className="px-3.5 py-1 rounded-full bg-brand-500 hover:bg-brand-400 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Generate Quote Slip</span>
          </button>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            <span>Best Price: ₹{minPrice}</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Nearest: {formatDistance(minDistance)}</span>
          </span>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
              <th className="py-4 px-4 sm:px-6">Store & Location</th>
              <th className="py-4 px-3 text-center">Distance</th>
              <th className="py-4 px-3 text-center">Price</th>
              <th className="py-4 px-3 text-center">Availability</th>
              <th className="py-4 px-3 text-center">Rating</th>
              <th className="py-4 px-3 text-center">Last Updated</th>
              <th className="py-4 px-4 sm:px-6 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {inventoryList.map((inv) => {
              const isBestPrice = inv.price === minPrice;
              const isNearest = inv.store.distanceKm === minDistance;
              const isBestRated = inv.store.rating === maxRating;

              const whatsappUrl = `https://wa.me/${inv.store.whatsapp}?text=${encodeURIComponent(
                `Hi ${inv.store.name}, I found ${item.product.name} listed on Dhoondo at ₹${inv.price}. Is this available for pickup right now?`
              )}`;

              const mapsUrl = getGoogleMapsDirectionsUrl(
                location.coordinates.lat,
                location.coordinates.lng,
                inv.store.coordinates.lat,
                inv.store.coordinates.lng,
                inv.store.name
              );

              return (
                <tr
                  key={inv.id}
                  className={`hover:bg-brand-50/30 transition-colors ${
                    isBestPrice ? 'bg-emerald-50/20' : ''
                  }`}
                >
                  {/* Store Name & Badges */}
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-start gap-3">
                      <img
                        src={inv.store.image}
                        alt={inv.store.name}
                        className="w-10 h-10 rounded-xl object-cover shrink-0 hidden sm:block border border-slate-200"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/store/${inv.store.id}`}
                            className="font-bold text-slate-900 hover:text-brand-600 transition-colors"
                          >
                            {inv.store.name}
                          </Link>
                          {inv.store.verified && (
                            <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px]" title="Verified Merchant">
                              ✓
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500">
                          {inv.store.area}
                        </div>

                        {/* Winner Highlights Badges */}
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {isBestPrice && (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-extrabold text-[10px] flex items-center gap-1 shadow-sm">
                              <Trophy className="w-2.5 h-2.5" />
                              Best Price
                            </span>
                          )}
                          {isNearest && (
                            <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white font-extrabold text-[10px] flex items-center gap-1 shadow-sm">
                              <Compass className="w-2.5 h-2.5" />
                              Nearest Store
                            </span>
                          )}
                          {isBestRated && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-500 text-white font-extrabold text-[10px] flex items-center gap-1 shadow-sm">
                              <Award className="w-2.5 h-2.5" />
                              Top Rated
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Distance */}
                  <td className="py-4 px-3 text-center">
                    <span className="inline-flex items-center gap-1 font-bold text-slate-700 text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5 text-brand-600" />
                      {formatDistance(inv.store.distanceKm)}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-3 text-center">
                    <div>
                      <div className="text-base sm:text-lg font-black text-slate-900">
                        ₹{inv.price.toLocaleString('en-IN')}
                      </div>
                      {inv.mrp > inv.price && (
                        <div className="text-[11px] text-slate-400 line-through">
                          MRP ₹{inv.mrp}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Availability */}
                  <td className="py-4 px-3 text-center">
                    {inv.status === 'in_stock' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                        In Stock ({inv.stockQuantity})
                      </span>
                    ) : inv.status === 'low_stock' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                        <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                        Low Stock ({inv.stockQuantity})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold text-xs">
                        <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                        Out of Stock
                      </span>
                    )}
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-3 text-center">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{inv.store.rating}</span>
                    </div>
                  </td>

                  {/* Last updated */}
                  <td className="py-4 px-3 text-center text-xs text-slate-500">
                    <div className="flex items-center justify-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{inv.lastUpdated}</span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenQuote(inv)}
                        className="p-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-800 transition-colors"
                        title="Generate Price Quotation Slip for this Store"
                      >
                        <FileText className="w-4 h-4 text-brand-700" />
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                        title="Direct WhatsApp Enquiry"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>

                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        title="Get Google Maps Driving Directions"
                      >
                        <Navigation className="w-4 h-4" />
                      </a>

                      <Link
                        to={`/store/${inv.store.id}`}
                        className="py-1.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1"
                      >
                        <span>Store</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Quotation Slip Modal */}
      <QuotationModal
        isOpen={quotationModalOpen}
        onClose={() => setQuotationModalOpen(false)}
        item={item}
        selectedStoreInv={selectedInvForQuote}
      />

    </div>
  );
};
