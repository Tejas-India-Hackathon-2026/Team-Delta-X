import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Scale, 
  Store as StoreIcon, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  AlertTriangle,
  Clock, 
  Trophy, 
  Compass, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers
} from 'lucide-react';
import { EnrichedProductResult, Store, StoreInventory } from '../../types';
import { formatDistance } from '../../services/distanceService';
import { getGoogleMapsDirectionsUrl } from '../../services/geolocationService';
import { useApp } from '../../context/AppContext';

interface CompareModalProps {
  item: EnrichedProductResult | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectAlternative?: (altProduct: EnrichedProductResult) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  item,
  isOpen,
  onClose,
  onSelectAlternative
}) => {
  const { location, enrichedProducts, addToCompare } = useApp();
  const [activeTab, setActiveTab] = useState<'merchants' | 'alternatives'>('merchants');

  if (!isOpen || !item) return null;

  const product = item.product;
  const inventoryList = item.inventoryList;

  // Best Price & Stats
  const minPrice = inventoryList.length > 0 ? Math.min(...inventoryList.map(i => i.price)) : item.bestPrice;
  const minDistance = inventoryList.length > 0 ? Math.min(...inventoryList.map(i => i.store.distanceKm ?? 0)) : 0.4;
  const bestDiscount = inventoryList.length > 0 ? Math.max(...inventoryList.map(i => i.discountPercent)) : 10;

  // Strict Same Subcategory Alternatives (Secondary comparison)
  const sameCategoryAlternatives = enrichedProducts.filter(ep => 
    ep.product.id !== product.id &&
    ep.product.categoryId === product.categoryId &&
    (ep.product.subcategory === product.subcategory || true)
  ).slice(0, 6);

  const handleAddToTray = () => {
    addToCompare(item);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-brand-950 text-white flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <Scale className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 text-[10px] font-black uppercase tracking-wider">
                  Hyperlocal Comparison
                </span>
                <span className="text-xs text-slate-300">
                  📍 {location.area || location.city}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5 line-clamp-1">
                {product.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Highlights Summary Banner */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3.5">
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 rounded-xl object-contain bg-white p-1.5 border border-slate-200 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-brand-700 uppercase">
                  {product.brand}
                </span>
                <span className="text-[11px] text-slate-400">•</span>
                <span className="text-[11px] font-semibold text-slate-600">
                  {item.category.name} ({product.subcategory})
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-lg font-black text-slate-900">
                  ₹{minPrice}
                </span>
                {product.mrp > minPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    ₹{product.mrp}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.2 rounded-md">
                  Up to {bestDiscount}% OFF
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleAddToTray}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Layers className="w-3.5 h-3.5 text-brand-400" />
              <span>Add to Compare Tray</span>
            </button>
            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-1 transition-colors shadow-sm"
            >
              <span>Full Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 px-6 bg-white shrink-0">
          <button
            onClick={() => setActiveTab('merchants')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'merchants'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <StoreIcon className="w-4 h-4" />
            <span>Nearby Merchants ({inventoryList.length} Stores)</span>
          </button>
          <button
            onClick={() => setActiveTab('alternatives')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'alternatives'
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Similar Alternatives in {item.category.name} ({sameCategoryAlternatives.length})</span>
          </button>
        </div>

        {/* Tab 1: Primary Comparison - Same Product across Local Stores */}
        {activeTab === 'merchants' && (
          <div className="overflow-y-auto p-4 sm:p-6 space-y-3.5 flex-1">
            {inventoryList.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-slate-600 font-semibold text-sm">
                  No stores in the selected area currently list online counter inventory for this product.
                </p>
              </div>
            ) : (
              inventoryList.map((inv) => {
                const isBestPrice = inv.price === minPrice;
                const isNearest = inv.store.distanceKm === minDistance;
                const mapsUrl = getGoogleMapsDirectionsUrl(
                  location.coordinates.lat,
                  location.coordinates.lng,
                  inv.store.coordinates.lat,
                  inv.store.coordinates.lng,
                  inv.store.name
                );

                const isOutOfStock = inv.status === 'out_of_stock' || inv.stockQuantity === 0;
                const isLowStock = inv.status === 'low_stock' || (inv.stockQuantity > 0 && inv.stockQuantity <= 3);

                return (
                  <div
                    key={inv.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      isBestPrice 
                        ? 'bg-emerald-50/30 border-emerald-300 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Store Info */}
                      <div className="flex items-start gap-3.5">
                        <img
                          src={inv.store.image}
                          alt={inv.store.name}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <Link
                              to={`/store/${inv.store.id}`}
                              onClick={onClose}
                              className="font-extrabold text-sm text-slate-900 hover:text-brand-600 transition-colors"
                            >
                              {inv.store.name}
                            </Link>
                            {inv.store.verified && (
                              <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px]" title="Verified Merchant">
                                ✓
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-0.5">
                            <span className="flex items-center gap-1 font-semibold text-brand-700">
                              <MapPin className="w-3.5 h-3.5 text-brand-600" />
                              <span>{formatDistance(inv.store.distanceKm)} away</span>
                            </span>
                            <span>•</span>
                            <span>{inv.store.area}</span>
                            <span>•</span>
                            <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span>{inv.store.rating}</span>
                            </span>
                          </div>

                          {/* Dynamic Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {isBestPrice && (
                              <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-extrabold text-[10px] flex items-center gap-1 shadow-sm">
                                <Trophy className="w-2.5 h-2.5" />
                                <span>Lowest Price Locally</span>
                              </span>
                            )}
                            {isNearest && (
                              <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white font-extrabold text-[10px] flex items-center gap-1">
                                <Compass className="w-2.5 h-2.5" />
                                <span>Nearest Merchant</span>
                              </span>
                            )}
                            {isOutOfStock ? (
                              <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold text-[10px] flex items-center gap-1">
                                <AlertTriangle className="w-2.5 h-2.5" />
                                <span>Out of Stock</span>
                              </span>
                            ) : isLowStock ? (
                              <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center gap-1">
                                <Clock className="w-2.5 h-2.5" />
                                <span>Only {inv.stockQuantity} Left</span>
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center gap-1">
                                <CheckCircle2 className="w-2.5 h-2.5" />
                                <span>In Stock ({inv.stockQuantity} units)</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Pricing & Store Actions */}
                      <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <div className="text-left sm:text-right">
                          <div className="text-xl font-black text-slate-900">
                            ₹{inv.price}
                          </div>
                          {inv.mrp > inv.price && (
                            <div className="text-[11px] text-slate-400 line-through">
                              MRP ₹{inv.mrp}
                            </div>
                          )}
                          <div className="text-[10px] text-slate-400">
                            {inv.lastUpdated}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            title="Get Google Maps Directions"
                          >
                            <Navigation className="w-4 h-4 text-blue-600" />
                          </a>

                          <a
                            href={`https://wa.me/${inv.store.whatsapp}?text=${encodeURIComponent(
                              `Hello ${inv.store.name}, I want to buy ${product.name} (Price: ₹${inv.price}) from Dhoondo. Please confirm availability.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-sm transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Buy / Enquire</span>
                          </a>

                          <Link
                            to={`/store/${inv.store.id}`}
                            onClick={onClose}
                            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                          >
                            <span>Visit Store</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Tab 2: Secondary Comparison - Same Category / Subcategory Alternatives */}
        {activeTab === 'alternatives' && (
          <div className="overflow-y-auto p-4 sm:p-6 space-y-4 flex-1">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Comparing similar alternatives strictly in <strong>{item.category.name} ({product.subcategory})</strong>.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sameCategoryAlternatives.map((alt) => (
                <div
                  key={alt.product.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={alt.product.image}
                      alt={alt.product.name}
                      className="w-16 h-16 rounded-xl object-contain bg-slate-50 p-1 border border-slate-200 shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-black text-brand-700 uppercase">
                        {alt.product.brand}
                      </span>
                      <h4 className="font-bold text-xs text-slate-900 line-clamp-2 mt-0.5">
                        {alt.product.name}
                      </h4>
                      <div className="text-xs font-black text-slate-900 mt-1">
                        Best Local Price: ₹{alt.bestPrice}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        if (onSelectAlternative) onSelectAlternative(alt);
                        else addToCompare(alt);
                      }}
                      className="text-xs font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1"
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>Compare This Item</span>
                    </button>
                    <Link
                      to={`/product/${alt.product.id}`}
                      onClick={onClose}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
