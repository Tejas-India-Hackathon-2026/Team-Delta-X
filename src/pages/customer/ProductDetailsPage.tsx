import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Bell, 
  CheckCircle2, 
  Scale, 
  Clock, 
  ArrowLeft,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CompareMatrix } from '../../components/customer/CompareMatrix';
import { DemandModal } from '../../components/customer/DemandModal';
import { PrescriptionNotice } from '../../components/customer/PrescriptionNotice';
import { QuickEnquiryModal } from '../../components/customer/QuickEnquiryModal';
import { ProductCard } from '../../components/customer/ProductCard';
import { formatDistance } from '../../services/distanceService';
import { Store, StoreInventory } from '../../types';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { getProductById, enrichedProducts, wishlist, toggleWishlist, reviews, addReview } = useApp();
  const navigate = useNavigate();

  const [demandModalOpen, setDemandModalOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedEnquiryStore, setSelectedEnquiryStore] = useState<Store | null>(null);

  // Review form state
  const [ratingInput, setRatingInput] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const enriched = getProductById(productId || '');

  if (!enriched) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-md">
          <h2 className="text-xl font-bold text-slate-900">Product Not Found</h2>
          <p className="text-xs text-slate-500">The product you are looking for may have been removed or relocated.</p>
          <Link to="/" className="inline-block py-2.5 px-6 rounded-xl bg-brand-600 text-white font-bold text-xs">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { product, category, inventoryList, bestPrice, lowestDistanceKm } = enriched;
  const isWishlisted = wishlist.includes(product.id);
  const bestStore = inventoryList[0]?.store;

  // Filter reviews for this product/store
  const productReviews = reviews.filter(r => r.productId === product.id || r.storeId === bestStore?.id);

  // Similar products in same category
  const similarProducts = enrichedProducts
    .filter(p => p.product.categoryId === product.categoryId && p.product.id !== product.id)
    .slice(0, 4);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;
    addReview({
      storeId: bestStore?.id || 'store-sharma-auto',
      productId: product.id,
      rating: ratingInput,
      comment: reviewComment
    });
    setReviewComment('');
    setReviewSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-brand-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link to={`/search?category=${category.id}`} className="hover:text-brand-600">
            {category.name}
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-800 truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        
        {/* Main Product Hero Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Gallery / Image Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-80 sm:h-96 rounded-2xl bg-slate-100 flex items-center justify-center p-6 border border-slate-200/60 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80';
                }}
              />

              {product.requiresPrescription && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-rose-600 text-white font-extrabold text-xs shadow-md">
                  Rx Required (Doctor Slip)
                </span>
              )}

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all ${
                  isWishlisted
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                    : 'bg-white/80 hover:bg-white text-slate-600 hover:text-rose-500 shadow-sm'
                }`}
                title={isWishlisted ? 'Saved' : 'Save Product'}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Feature Tags */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Pickup Ready</div>
                <div className="font-extrabold text-slate-900 mt-0.5">&lt; 15 Mins</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Store Warranty</div>
                <div className="font-extrabold text-slate-900 mt-0.5">100% Genuine</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Local Stores</div>
                <div className="font-extrabold text-brand-700 mt-0.5">{inventoryList.length} Stocking</div>
              </div>
            </div>
          </div>

          {/* Details & Nearest Store Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              {/* Brand & SKU */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-brand-700 uppercase tracking-wider text-xs">
                  {product.brand}
                </span>
                <span className="font-mono text-slate-400 text-[11px]">
                  SKU: {product.sku} {product.modelNumber && `• Model: ${product.modelNumber}`}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {product.name}
              </h1>

              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium">Best Local Price</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      ₹{bestPrice.toLocaleString('en-IN')}
                    </span>
                    {product.mrp > bestPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        MRP ₹{product.mrp.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>In Stock Nearby</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Prescription Notice for medicines */}
              {product.requiresPrescription && (
                <PrescriptionNotice requiresPrescription={product.requiresPrescription} />
              )}

              {/* Nearest Store Card Summary */}
              {bestStore && (
                <div className="p-4 rounded-2xl bg-brand-50/50 border border-brand-200/80 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-brand-700 uppercase tracking-wider">
                        Nearest Verified Stockist
                      </div>
                      <Link
                        to={`/store/${bestStore.id}`}
                        className="font-extrabold text-sm text-slate-900 hover:text-brand-600 flex items-center gap-1.5 mt-0.5"
                      >
                        <span>{bestStore.name}</span>
                        {bestStore.verified && <ShieldCheck className="w-4 h-4 text-brand-600 fill-brand-100" />}
                      </Link>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {bestStore.address}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-brand-200 text-brand-800 font-bold text-xs">
                        <MapPin className="w-3 h-3 text-brand-600" />
                        <span>{formatDistance(bestStore.distanceKm)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-brand-200/60">
                    <a
                      href={`https://wa.me/${bestStore.whatsapp}?text=${encodeURIComponent(`Hi ${bestStore.name}, I want to purchase ${product.name} listed on Dhoondo at ₹${bestPrice}. Can you reserve it for pickup?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${bestStore.phone}`}
                      className="py-2.5 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Store</span>
                    </a>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${bestStore.coordinates.lat},${bestStore.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5 text-blue-600" />
                      <span>Directions</span>
                    </a>

                    <button
                      onClick={() => {
                        setSelectedEnquiryStore(bestStore);
                        setEnquiryModalOpen(true);
                      }}
                      className="py-2.5 px-2 rounded-xl bg-brand-100 hover:bg-brand-200 text-brand-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-brand-700" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Action Ribbon: Compare & Notify */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to={`/compare?product=${product.id}`}
                  className="py-3 px-5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md shadow-brand-500/25 flex items-center gap-2"
                >
                  <Scale className="w-4 h-4" />
                  <span>Compare All {inventoryList.length} Nearby Stores</span>
                </Link>

                <button
                  onClick={() => setDemandModalOpen(true)}
                  className="py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 transition-colors"
                >
                  <Bell className="w-4 h-4 text-orange-600" />
                  <span>Price Drop / Stock Alert</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* 📊 MULTI-STORE PRICE COMPARISON MATRIX TABLE */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Compare Prices Across Local Stores
            </h2>
            <span className="text-xs text-slate-500">Live prices from verified counters</span>
          </div>

          <CompareMatrix
            item={enriched}
            onEnquireClick={(store) => {
              setSelectedEnquiryStore(store);
              setEnquiryModalOpen(true);
            }}
          />
        </section>

        {/* ⚙️ SPECIFICATIONS & TECHNICAL DETAILS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-black text-slate-900">
            Product Specifications & Vehicle/Usage Compatibility
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-4">
                <span className="font-semibold text-slate-500">{key}</span>
                <span className="font-bold text-slate-900 text-right">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ REVIEWS & CUSTOMER RATINGS */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                Customer Reviews & Local Feedback
              </h3>
              <p className="text-xs text-slate-500">Verified reviews from neighborhood buyers</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-extrabold text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8 / 5.0</span>
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-3">
            {productReviews.length > 0 ? (
              productReviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900">{rev.customerName}</span>
                      {rev.verifiedPurchase && (
                        <span className="text-[10px] px-2 py-0.2 bg-emerald-100 text-emerald-800 rounded-md font-bold">
                          Verified Local Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-amber-400 text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">{rev.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-500 italic">No reviews yet for this product. Be the first to leave feedback!</p>
            )}
          </div>

          {/* Write a review */}
          <form onSubmit={handleReviewSubmit} className="pt-4 border-t border-slate-100 space-y-3">
            <h4 className="font-bold text-xs text-slate-800">Leave Your Local Experience</h4>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Your Rating:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRatingInput(star)}
                    className="p-1"
                  >
                    <Star className={`w-5 h-5 ${star <= ratingInput ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                required
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                placeholder="Share your store experience, availability, or pricing satisfaction..."
                className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm shrink-0"
              >
                Submit Review
              </button>
            </div>

            {reviewSubmitted && (
              <p className="text-xs text-emerald-600 font-bold">Thank you! Your verified review has been posted.</p>
            )}
          </form>
        </section>

        {/* 🔄 SIMILAR NEARBY PRODUCTS */}
        {similarProducts.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-900">
              Similar Products Available in {category.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {similarProducts.map((sim) => (
                <ProductCard key={sim.product.id} item={sim} />
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Demand Modal */}
      {demandModalOpen && (
        <DemandModal
          isOpen={demandModalOpen}
          onClose={() => setDemandModalOpen(false)}
          product={product}
        />
      )}

      {/* Quick Enquiry Modal */}
      {enquiryModalOpen && selectedEnquiryStore && (
        <QuickEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          store={selectedEnquiryStore}
          product={product}
          productPrice={bestPrice}
        />
      )}

    </div>
  );
};
