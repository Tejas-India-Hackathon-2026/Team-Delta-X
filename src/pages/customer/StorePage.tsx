import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Store as StoreIcon, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Tag, 
  Package, 
  Info, 
  Heart,
  Share2,
  Calendar,
  Layers,
  ArrowLeft,
  Crown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../../components/customer/ProductCard';
import { QuickEnquiryModal } from '../../components/customer/QuickEnquiryModal';
import { AddReviewModal } from '../../components/customer/AddReviewModal';
import { StoreRouteEstimator } from '../../components/customer/StoreRouteEstimator';
import { GoogleMapView } from '../../components/map/GoogleMapView';
import { formatDistance } from '../../services/distanceService';
import { getGoogleMapsDirectionsUrl } from '../../services/geolocationService';

export const StorePage: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const { 
    getStoreById, 
    getStoreInventory, 
    offers, 
    reviews, 
    savedStores, 
    toggleSaveStore,
    enrichedProducts,
    location
  } = useApp();

  const [activeTab, setActiveTab] = useState<'products' | 'offers' | 'reviews' | 'about'>('products');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const store = getStoreById(storeId || '');

  if (!store) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-md">
          <h2 className="text-xl font-bold text-slate-900">Store Not Found</h2>
          <p className="text-xs text-slate-500">The store you are looking for may have updated its profile.</p>
          <Link to="/" className="inline-block py-2.5 px-6 rounded-xl bg-brand-600 text-white font-bold text-xs">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const isSaved = savedStores.includes(store.id);
  const storeInventory = getStoreInventory(store.id);
  const storeOffers = offers.filter(o => o.storeId === store.id);
  const storeReviews = reviews.filter(r => r.storeId === store.id);

  // Products available in this store
  const storeProductsEnriched = enrichedProducts.filter(item =>
    item.inventoryList.some(inv => inv.storeId === store.id)
  );

  const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I am contacting you from your Dhoondo Digital Storefront.`)}`;
  const mapsUrl = getGoogleMapsDirectionsUrl(
    location.coordinates.lat,
    location.coordinates.lng,
    store.coordinates.lat,
    store.coordinates.lng,
    store.name
  );

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Store Header Banner */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        
        {/* Cover Photo */}
        <div className="h-64 sm:h-80 w-full relative overflow-hidden">
          <img
            src={store.bannerImage}
            alt={store.name}
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        </div>

        {/* Store Profile Floating Header Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 border border-slate-200/80 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Store Avatar & Main Details */}
            <div className="flex items-start gap-4">
              <img
                src={store.image}
                alt={store.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-md shrink-0 bg-slate-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80';
                }}
              />

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                    {store.name}
                  </h1>
                  {store.subscription?.plan === 'pro' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[11px] font-black flex items-center gap-1 shadow-sm">
                      <Crown className="w-3.5 h-3.5 fill-slate-950" />
                      <span>PRO VERIFIED</span>
                    </span>
                  ) : store.verified ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 text-[11px] font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                      Verified Merchant
                    </span>
                  ) : null}
                </div>

                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-600" />
                  <span>{store.address}</span>
                  <span>•</span>
                  <strong className="text-brand-700">{formatDistance(store.distanceKm)}</strong>
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{store.rating} ({store.reviewCount} reviews)</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1 text-emerald-700 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{store.openingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${store.phone}`}
                className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>

              <button
                onClick={() => setReviewModalOpen(true)}
                className="py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Write Review</span>
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>Directions</span>
              </a>

              <button
                onClick={() => toggleSaveStore(store.id)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isSaved
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-rose-600'
                }`}
                title={isSaved ? 'Store Saved' : 'Save Store'}
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-600' : ''}`} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-sm flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'products'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>In-Stock Products ({storeProductsEnriched.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('offers')}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'offers'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Store Offers ({storeOffers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'reviews'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Customer Reviews ({storeReviews.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'about'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>About & Facilities</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* 1. Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-900 text-lg">
                Available Inventory at Counter
              </h3>
              <span className="text-xs text-slate-500">Live prices and stock levels</span>
            </div>

            {storeProductsEnriched.length === 0 ? (
              <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center">
                <p className="text-xs text-slate-500">No active products listed in this store currently.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {storeProductsEnriched.map((item) => (
                  <ProductCard key={item.product.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. Offers Tab */}
        {activeTab === 'offers' && (
          <div className="space-y-6">
            <h3 className="font-extrabold text-slate-900 text-lg">
              Special Offers by {store.name}
            </h3>

            {storeOffers.length === 0 ? (
              <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center">
                <p className="text-xs text-slate-500">No active promotional campaigns currently running.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {storeOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black">
                          {offer.discountPercent}% OFF
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          Valid till {offer.validUntil}
                        </span>
                      </div>

                      <h4 className="text-base font-extrabold text-slate-900 mt-2">
                        {offer.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {offer.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        Coupon: <strong className="text-brand-700 font-mono">{offer.couponCode}</strong>
                      </div>
                      <button
                        onClick={() => setEnquiryModalOpen(true)}
                        className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs"
                      >
                        Claim in Store
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-900 text-lg">
                Customer Ratings & Feedback
              </h3>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-extrabold text-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{store.rating} / 5.0</span>
              </div>
            </div>

            <div className="space-y-3">
              {storeReviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">{rev.customerName}</span>
                    <div className="flex items-center text-amber-400 text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            <StoreRouteEstimator store={store} userCoords={location.coordinates} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-extrabold text-slate-900 text-lg">About {store.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {store.about}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">Store Facilities & Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {store.facilities.map((fac, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Merchant Details Box */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h4 className="font-extrabold text-slate-900 text-sm">Merchant Information</h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400">Proprietor:</span>
                  <div className="font-bold text-slate-800">{store.ownerName}</div>
                </div>
                <div>
                  <span className="text-slate-400">GST Registration:</span>
                  <div className="font-mono font-bold text-slate-800">{store.gstNumber || '29ABCDE1234F1Z5'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Member on Dhoondo Since:</span>
                  <div className="font-bold text-slate-800">{store.joinedDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>

      {/* Quick Enquiry Modal */}
      {enquiryModalOpen && (
        <QuickEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          store={store}
        />
      )}

      {/* Verified Customer Review Modal */}
      <AddReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        store={store}
      />

    </div>
  );
};
