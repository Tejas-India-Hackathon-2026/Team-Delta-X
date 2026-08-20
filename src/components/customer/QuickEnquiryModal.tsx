import React, { useState } from 'react';
import { Send, X, Store, MessageSquare, Phone, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Store as StoreType, Product } from '../../types';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  store: StoreType;
  product?: Product;
  productPrice?: number;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  store,
  product,
  productPrice
}) => {
  const { user, sendCustomerEnquiry } = useApp();
  const [message, setMessage] = useState(
    product 
      ? `Hi ${store.name}, I am interested in ${product.name}. Is this in stock for counter pickup today?`
      : `Hi ${store.name}, I have an inquiry about your store offerings.`
  );
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendCustomerEnquiry({
      storeId: store.id,
      productId: product?.id,
      productName: product?.name,
      productPrice: productPrice || product?.basePrice,
      message
    });
    setIsSent(true);
  };

  const handleDone = () => {
    setIsSent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-brand-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Send Retailer Enquiry</h3>
              <p className="text-xs text-slate-300">{store.name}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSent ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-lg text-slate-900">Enquiry Delivered!</h4>
            <p className="text-xs text-slate-600">
              Your inquiry has been sent directly to {store.ownerName} at {store.name}. You will be notified when they reply.
            </p>
            <button
              onClick={handleDone}
              className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {product && (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                <span className="font-semibold text-slate-800 truncate max-w-[220px]">
                  {product.name}
                </span>
                {productPrice && (
                  <span className="font-black text-brand-700">₹{productPrice}</span>
                )}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Message / Question
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none resize-none"
              ></textarea>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>Replies will be sent to: {user.phone} ({user.name})</span>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Enquiry</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
