import React, { useState } from 'react';
import { Bell, Check, X, Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Product } from '../../types';

interface DemandModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
}

export const DemandModal: React.FC<DemandModalProps> = ({ isOpen, onClose, product }) => {
  const { user, location, submitDemandRequest } = useApp();
  const [phone, setPhone] = useState(user.phone || '+91 ');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitDemandRequest({
      productId: product.id,
      productName: product.name,
      brand: product.brand,
      categoryId: product.categoryId,
      customerPhone: phone,
      notes
    });
    setIsSubmitted(true);
  };

  const handleDone = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-600 via-orange-600 to-brand-600 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dhoondo Local Demand Aggregator</span>
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Can’t Find It In Stock Nearby?
          </h3>
          <p className="text-xs text-orange-100 mt-1">
            We alert all verified retailers in your {location.radiusKm} km area so they can stock it immediately.
          </p>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <Check className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              Demand Request Broadcasted!
            </h4>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              We have broadcasted your request for <strong>{product.name}</strong> to local retailers within {location.radiusKm} km of <strong>{location.area}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left space-y-2">
              <div className="flex items-center gap-2 text-brand-700 font-semibold">
                <Bell className="w-4 h-4" />
                <span>What happens next?</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                As soon as a retailer clicks “Stock This Product” on their merchant dashboard, you will receive an instant notification with live price and directions.
              </p>
            </div>

            <button
              onClick={handleDone}
              className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Product Summary */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-xl object-contain bg-white p-1 border border-slate-200"
              />
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-brand-700 uppercase">
                  {product.brand}
                </div>
                <div className="font-bold text-slate-900 text-xs line-clamp-1">
                  {product.name}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>Searching around {location.area} ({location.radiusKm} km)</span>
                </div>
              </div>
            </div>

            {/* Phone input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>WhatsApp / Mobile Number for Instant Alert</span>
              </label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98450 12345"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-medium focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
                <span>Special Instructions or Urgency (Optional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="e.g. Need urgent OEM model today, willing to pickup immediately..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-500 outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-brand-600 hover:from-orange-700 hover:to-brand-700 text-white font-extrabold text-sm shadow-lg shadow-orange-500/20 transition-all"
            >
              <Bell className="w-4 h-4" />
              <span>Notify Me When In Stock</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center">
              🔒 No spam. You will only receive a notification when a local store adds this item.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
