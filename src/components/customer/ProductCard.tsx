import { HighlightText } from '../common/HighlightText';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, MapPin, Star, ArrowRight, ShieldCheck, Scale, AlertCircle } from 'lucide-react';
import { EnrichedProductResult } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatDistance } from '../../services/distanceService';

interface ProductCardProps {
  item: EnrichedProductResult;
  onOpenDemandModal?: (product: EnrichedProductResult) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onOpenDemandModal }) => {
  const { wishlist, toggleWishlist } = useApp();
  const navigate = useNavigate();
  const isWishlisted = wishlist.includes(item.product.id);
  const calculatedSavings = item.product.mrp > item.bestPrice ? item.product.mrp - item.bestPrice : 0;
  const calculatedDiscountPercent = item.product.mrp > 0 && calculatedSavings > 0 
    ? Math.round((calculatedSavings / item.product.mrp) * 100) 
    : 0;


  const bestInventory = item.inventoryList[0];
  // Stock badge enhancer
  const isOutOfStockEverywhere = item.availableStoresCount === 0;

  // Stock status pill color
  const getStockBadge = () => {
    if (isOutOfStockEverywhere) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[11px] font-bold border border-rose-200">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
          Out of Stock Nearby
        </span>
      );
    }

    if (bestInventory?.status === 'in_stock') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          In Stock ({bestInventory.stockQuantity} available)
        </span>
      );
    }

    if (bestInventory?.status === 'low_stock') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[11px] font-bold border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
          Low Stock (Only {bestInventory.stockQuantity} left)
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
        Available on Order
      </span>
    );
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-brand-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden relative">
      
      {/* Product Image Box */}
      <div className="relative h-48 bg-slate-100 overflow-hidden flex items-center justify-center p-4">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80';
          }}
        />

        {/* Prescription Badge for Medicines */}
        {item.product.requiresPrescription && (
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-rose-600 text-white font-extrabold text-[10px] shadow-sm">
            Rx Required
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(item.product.id);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all ${
            isWishlisted
              ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
              : 'bg-white/80 hover:bg-white text-slate-600 hover:text-rose-500 shadow-sm'
          }`}
          title={isWishlisted ? 'Remove from Saved' : 'Save to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Best Price Discount Ribbon */}
        {bestInventory && bestInventory.discountPercent > 0 && (
          <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-brand-300 font-extrabold text-[10px]">
            {bestInventory.discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold text-brand-700 tracking-wide uppercase text-[11px]">
              {item.product.brand}
            </span>
            <span className="text-[11px] text-slate-400">
              {item.category.emoji} {item.product.subcategory}
            </span>
          </div>

          {/* Product Name */}
          <Link
            to={`/product/${item.product.id}`}
            className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 hover:text-brand-600 transition-colors"
          >
            {item.product.name}
          </Link>
        </div>

        {/* Stock Status Badge */}
        <div>{getStockBadge()}</div>

        {/* Price & Store Highlights */}
        <div className="pt-2 border-t border-slate-100 flex items-end justify-between">
          <div>
            <div className="text-[10px] text-slate-400 font-medium">Starting from</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-slate-900">
                ₹{item.bestPrice.toLocaleString('en-IN')}
              </span>
              {item.product.mrp > item.bestPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{item.product.mrp.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          {/* Available stores count */}
          <div className="text-right">
            <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">
              {item.totalStoresCount} {item.totalStoresCount === 1 ? 'Store' : 'Stores'}
            </span>
          </div>
        </div>

        {/* Nearest Store Snippet */}
        {bestInventory && (
          <div className="bg-slate-50 p-2.5 rounded-xl text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 truncate max-w-[130px]">
                {bestInventory.store.name}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-[11px]">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{bestInventory.store.rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-brand-700 font-medium">
                <MapPin className="w-3 h-3 text-brand-600 shrink-0" />
                {formatDistance(bestInventory.store.distanceKm)}
              </span>
              <span className="text-slate-400 truncate max-w-[100px]">
                {bestInventory.lastUpdated}
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            to={`/compare?product=${item.product.id}`}
            className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Compare</span>
          </Link>

          <Link
            to={`/product/${item.product.id}`}
            className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-sm transition-colors"
          >
            <span>View Stores</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
};
