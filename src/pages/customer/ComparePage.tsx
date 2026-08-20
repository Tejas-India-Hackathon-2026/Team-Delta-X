import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Scale, Search, MapPin, ArrowLeft, Trophy, Compass, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CompareMatrix } from '../../components/customer/CompareMatrix';

export const ComparePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productIdParam = searchParams.get('product') || '';

  const { enrichedProducts, getProductById } = useApp();
  const [selectedProdId, setSelectedProdId] = useState(
    productIdParam || enrichedProducts[0]?.product.id || ''
  );

  const currentEnriched = getProductById(selectedProdId) || enrichedProducts[0];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <Link to="/" className="hover:text-brand-600 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span>Hyperlocal Price Comparison</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              <Scale className="w-7 h-7 text-brand-600" />
              <span>Multi-Store Price & Stock Comparison</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Compare counter prices, live stocks, distances and ratings across neighborhood stores
            </p>
          </div>

          {/* Product Switcher Dropdown */}
          <div className="w-full sm:w-80">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Select Product to Compare:
            </label>
            <select
              value={selectedProdId}
              onChange={(e) => setSelectedProdId(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
            >
              {enrichedProducts.map(p => (
                <option key={p.product.id} value={p.product.id}>
                  {p.product.name} ({p.totalStoresCount} stores)
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Selected Product Summary Card */}
        {currentEnriched && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={currentEnriched.product.image}
                alt={currentEnriched.product.name}
                className="w-20 h-20 rounded-2xl object-contain bg-slate-50 p-2 border border-slate-200"
              />
              <div>
                <span className="text-xs font-extrabold text-brand-700 uppercase">
                  {currentEnriched.product.brand} • {currentEnriched.category.name}
                </span>
                <h2 className="text-lg font-black text-slate-900 mt-0.5">
                  {currentEnriched.product.name}
                </h2>
                <div className="text-xs text-slate-500 mt-1">
                  SKU: {currentEnriched.product.sku}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to={`/product/${currentEnriched.product.id}`}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                View Full Product Page
              </Link>
            </div>
          </div>
        )}

        {/* Multi-Store Comparison Matrix */}
        {currentEnriched && (
          <CompareMatrix item={currentEnriched} />
        )}

      </div>
    </div>
  );
};
