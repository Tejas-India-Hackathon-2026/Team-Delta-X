import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  Store as StoreIcon, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  MessageCircle, 
  Share2,
  CheckCircle2
} from 'lucide-react';
import { EnrichedProductResult, Store, StoreInventory } from '../../types';
import { formatDistance } from '../../services/distanceService';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: EnrichedProductResult | null;
  selectedStoreInv?: (StoreInventory & { store: Store }) | null;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  item,
  selectedStoreInv
}) => {
  if (!isOpen || !item) return null;

  const inv = selectedStoreInv || item.inventoryList[0];
  if (!inv) return null;

  const store = inv.store;
  const product = item.product;
  const savings = Math.max(0, inv.mrp - inv.price);
  const quoteDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const quoteRef = `QUO-${store.id.toUpperCase().slice(-4)}-${Date.now().toString().slice(-5)}`;

  const handlePrint = () => {
    window.print();
  };

  const whatsappQuoteUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(
    `Hello ${store.name}, I am holding Quote #${quoteRef} from Dhoondo for ${product.name} (Quoted Price: ₹${inv.price}). Please reserve stock for counter pickup today.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Ribbon */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between gap-4 shrink-0 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-500 text-slate-950 flex items-center justify-center font-black">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">
                Official Counter Price Quotation
              </h3>
              <p className="text-[11px] text-slate-400">
                Verified price guarantee at local partner counter
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Quotation Receipt */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-slate-900 bg-white font-sans">
          
          {/* Header & Merchant Details */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b-2 border-slate-900">
            <div>
              <div className="text-xl font-black text-brand-700 tracking-tight flex items-center gap-1.5">
                <span>DHOONDO</span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-brand-100 text-brand-800 font-bold uppercase">
                  Hyperlocal
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Neighborhood Price Intelligence & Stock Reservation Slip
              </div>
            </div>

            <div className="text-left sm:text-right text-xs space-y-0.5">
              <div className="font-black text-slate-900">Quote Ref: {quoteRef}</div>
              <div className="text-slate-500">Date: {quoteDate}</div>
              <div className="text-slate-500">Valid For: <strong>24 Hours</strong></div>
            </div>
          </div>

          {/* Store & Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                Quoted By Retailer:
              </span>
              <div className="font-extrabold text-sm text-slate-900">{store.name}</div>
              <div className="text-slate-600 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-600 shrink-0" />
                <span>{store.address} ({formatDistance(store.distanceKm)} away)</span>
              </div>
              <div className="text-slate-600">Contact: {store.phone}</div>
              {store.gstNumber && (
                <div className="text-slate-500 font-mono text-[11px]">
                  GSTIN: {store.gstNumber}
                </div>
              )}
            </div>

            <div className="space-y-1 sm:text-right">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                Availability & Verification:
              </span>
              <div className="font-bold text-emerald-700 flex sm:justify-end items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Counter Stock Verified</span>
              </div>
              <div className="text-slate-500">Stock Status: <strong>{inv.stockQuantity > 0 ? `${inv.stockQuantity} Units In Stock` : 'Pre-order on Request'}</strong></div>
              <div className="text-slate-500">Timings: {store.openingHours}</div>
            </div>
          </div>

          {/* Product Items Table */}
          <div>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                  <th className="py-2.5">Item Description</th>
                  <th className="py-2.5 text-center">Category</th>
                  <th className="py-2.5 text-center">MRP</th>
                  <th className="py-2.5 text-center">Discount</th>
                  <th className="py-2.5 text-right">Counter Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr>
                  <td className="py-3">
                    <div className="font-bold text-slate-900">{product.name}</div>
                    <div className="text-[11px] text-slate-500">Brand: {product.brand} • SKU: {product.sku}</div>
                  </td>
                  <td className="py-3 text-center text-slate-600">{item.category.name}</td>
                  <td className="py-3 text-center text-slate-400 line-through">₹{inv.mrp}</td>
                  <td className="py-3 text-center text-emerald-600 font-bold">{inv.discountPercent}% OFF</td>
                  <td className="py-3 text-right font-black text-slate-900 text-sm">₹{inv.price}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary Calculation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t-2 border-slate-200">
            <div className="space-y-1 text-xs text-slate-500 max-w-sm">
              <div className="flex items-center gap-1.5 font-bold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Price Lock & Authenticity Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Show this quote at {store.name} counter for instant billing at quoted ₹{inv.price}. Genuine OEM warranty applicable.
              </p>
            </div>

            <div className="w-full sm:w-60 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Total MRP:</span>
                <span>₹{inv.mrp}</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Counter Discount:</span>
                <span>- ₹{savings}</span>
              </div>
              <div className="flex justify-between text-slate-900 font-black text-base pt-1.5 border-t border-slate-200">
                <span>Final Price:</span>
                <span>₹{inv.price}</span>
              </div>
            </div>
          </div>

          {/* Actions for Customer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 print:hidden">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reserve via WhatsApp</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Quotation Slip</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
