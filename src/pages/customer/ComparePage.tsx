import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Scale, 
  Search, 
  MapPin, 
  ArrowLeft, 
  Trophy, 
  Compass, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CompareMatrix } from '../../components/customer/CompareMatrix';
import { EnrichedProductResult } from '../../types';

export const ComparePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productIdParam = searchParams.get('product') || '';

  const { enrichedProducts, getProductById, compareItems, addToCompare, location } = useApp();
  const [selectedProdId, setSelectedProdId] = useState(
    productIdParam || compareItems[0]?.product.id || enrichedProducts[0]?.product.id || ''
  );

  useEffect(() => {
    if (productIdParam) {
      setSelectedProdId(productIdParam);
    }
  }, [productIdParam]);

  const currentEnriched = getProductById(selectedProdId) || enrichedProducts[0];

  // Secondary comparison: similar alternatives in same category
  const similarAlternatives = currentEnriched
    ? enrichedProducts.filter(
        ep =>
          ep.product.id !== currentEnriched.product.id &&
          ep.product.categoryId === currentEnriched.product.categoryId
      ).slice(0, 4)
    : [];

  const handleSelectProduct = (id: string) => {
    setSelectedProdId(id);
    setSearchParams({ product: id });
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <Link to="/" className="hover:text-brand-600 flex items-center gap-1 font-semibold">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span>Product Comparison</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              <Scale className="w-7 h-7 text-brand-600" />
              <span>Hyperlocal Product & Price Comparison</span>
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Compare counter prices, live stocks, distances and ratings across neighborhood stores in <strong>{location.area || location.city}</strong>
            </p>
          </div>

          {/* Product Switcher Dropdown */}
          <div className="w-full md:w-80">
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Select Product to Compare:
            </label>
            <select
              value={selectedProdId}
              onChange={(e) => handleSelectProduct(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:border-brand-500 outline-none shadow-sm"
            >
              {enrichedProducts.map(p => (
                <option key={p.product.id} value={p.product.id}>
                  {p.product.name} ({p.inventoryList.length} local stores)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Compare Tray Quick Switch Tabs */}
        {compareItems.length > 0 && (
          <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-brand-600" />
              <span>Compare Tray:</span>
            </span>
            {compareItems.map(item => (
              <button
                key={item.product.id}
                onClick={() => handleSelectProduct(item.product.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 border ${
                  item.product.id === selectedProdId
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-4 h-4 rounded object-contain bg-white"
                />
                <span className="max-w-[120px] truncate">{item.product.name}</span>
              </button>
            ))}
          </div>
        )}
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
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                  <span>Subcategory: <strong>{currentEnriched.product.subcategory}</strong></span>
                  <span>•</span>
                  <span>SKU: {currentEnriched.product.sku}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to={`/product/${currentEnriched.product.id}`}
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                View Full Product Page
              </Link>
            </div>
          </div>
        )}

        {/* Section 1: Primary Comparison - Multi-Store Comparison Matrix */}
        {currentEnriched && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span>📍 Nearby Stores Selling This Product ({currentEnriched.inventoryList.length})</span>
              </h3>
            </div>
            <CompareMatrix item={currentEnriched} />
          </div>
        )}

        {/* Section 2: Secondary Comparison - Similar Alternatives in Same Category */}
        {currentEnriched && similarAlternatives.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>Similar Alternatives in {currentEnriched.category.name}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Strictly showing similar products in the same domain for direct comparison
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {similarAlternatives.map((alt) => (
                <div
                  key={alt.product.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <img
                      src={alt.product.image}
                      alt={alt.product.name}
                      className="w-full h-32 rounded-xl object-contain bg-slate-50 p-2"
                    />
                    <div>
                      <span className="text-[10px] font-black text-brand-700 uppercase">
                        {alt.product.brand}
                      </span>
                      <h4 className="font-bold text-xs text-slate-900 line-clamp-2 mt-0.5">
                        {alt.product.name}
                      </h4>
                      <div className="text-sm font-black text-slate-900 mt-2">
                        ₹{alt.bestPrice}
                        {alt.product.mrp > alt.bestPrice && (
                          <span className="text-xs font-normal text-slate-400 line-through ml-1.5">
                            ₹{alt.product.mrp}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleSelectProduct(alt.product.id)}
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>Compare This</span>
                    </button>
                    <Link
                      to={`/product/${alt.product.id}`}
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
