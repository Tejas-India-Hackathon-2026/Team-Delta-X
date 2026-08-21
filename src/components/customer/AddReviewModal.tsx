import React, { useState } from 'react';
import { X, Star, MessageSquare, ShieldCheck, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Store, Product } from '../../types';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  store: Store;
  product?: Product | null;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  isOpen,
  onClose,
  store,
  product
}) => {
  const { user, addReview } = useApp();
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      addReview({
        storeId: store.id,
        productId: product?.id,
        rating,
        comment: comment.trim()
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setComment('');
        onClose();
      }, 1500);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-950 to-slate-900 text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">
                Rate & Review Retailer
              </h3>
              <p className="text-xs text-slate-300">
                {store.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-slate-900">Thank You for Your Feedback!</h4>
            <p className="text-xs text-slate-500">
              Your verified rating has been added to {store.name} and helps fellow neighborhood shoppers.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {product && (
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded-xl object-contain bg-white p-1 border border-slate-200"
                />
                <div className="text-xs">
                  <span className="font-black text-brand-700 uppercase">{product.brand}</span>
                  <h5 className="font-bold text-slate-900 line-clamp-1">{product.name}</h5>
                </div>
              </div>
            )}

            {/* Star Rating Picker */}
            <div className="text-center space-y-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Select Your Rating
              </label>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 hover:scale-110 transition-transform focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs font-black text-amber-600 block">
                {rating === 5 ? '⭐⭐⭐⭐⭐ Exceptional Service' :
                 rating === 4 ? '⭐⭐⭐⭐ Very Good Experience' :
                 rating === 3 ? '⭐⭐⭐ Average Counter Service' :
                 rating === 2 ? '⭐⭐ Below Expectations' : '⭐ Poor Experience'}
              </span>
            </div>

            {/* Comment Area */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Your Review & Counter Experience:
              </label>
              <textarea
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience: Was the item in stock? Was the price genuine? How was the retailer support?..."
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>

            {/* Reviewer Notice */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-[11px] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Posting as <strong>{user.name}</strong> • Marked as <strong>Verified Local Shopper</strong>.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !comment.trim()}
              className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-500/20 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Submitting Review...' : 'Submit Verified Review'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
