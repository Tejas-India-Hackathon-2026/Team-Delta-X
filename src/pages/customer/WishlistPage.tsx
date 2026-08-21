import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Store, ArrowLeft, Trash2, ShoppingBag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../../components/customer/ProductCard';
import { StoreCard } from '../../components/customer/StoreCard';

// LocalStorage persistent wishlist active
export const WishlistPage: React.FC = () => {
  const { wishlist, savedStores, enrichedProducts, stores } = useApp();
  const [activeTab, setActiveTab] = useState<'products' | 'stores'>('products');

  const wishlistedProducts = enrichedProducts.filter(p => wishlist.includes(p.product.id));
  const savedStoreItems = stores.filter(s => savedStores.includes(s.id));

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <Link to="/" className="hover:text-brand-600 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span>Saved Items</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
              <span>Saved Products & Stores</span>
            </h1>
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('products')}
              className={`py-1.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'products' ? 'bg-white shadow-sm text-brand-700' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Products ({wishlistedProducts.length})
            </button>
            <button
              onClick={() => setActiveTab('stores')}
              className={`py-1.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'stores' ? 'bg-white shadow-sm text-brand-700' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Favorite Stores ({savedStoreItems.length})
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'products' ? (
          wishlistedProducts.length === 0 ? (
            <div className="p-12 bg-white rounded-3xl border border-slate-200 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No Saved Products Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click the heart icon on any product to track live stock and price drops in nearby stores.
              </p>
              <Link
                to="/search"
                className="inline-block py-2.5 px-6 rounded-xl bg-brand-600 text-white font-bold text-xs"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {wishlistedProducts.map((item) => (
                <ProductCard key={item.product.id} item={item} />
              ))}
            </div>
          )
        ) : (
          savedStoreItems.length === 0 ? (
            <div className="p-12 bg-white rounded-3xl border border-slate-200 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mx-auto">
                <Store className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No Saved Stores Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Save your preferred local kiranas and auto spare shops for quick counter WhatsApp orders.
              </p>
              <Link
                to="/map"
                className="inline-block py-2.5 px-6 rounded-xl bg-brand-600 text-white font-bold text-xs"
              >
                Explore Nearby Stores
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedStoreItems.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          )
        )}
      </div>

    </div>
  );
};
