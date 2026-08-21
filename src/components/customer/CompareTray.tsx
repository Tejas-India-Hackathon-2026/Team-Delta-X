import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, X, ArrowRight, Trash2, Layers, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CompareTray: React.FC = () => {
  const { compareItems, removeFromCompare, clearCompare, compareToast, dismissCompareToast } = useApp();
  const navigate = useNavigate();

  if (compareItems.length === 0 && !compareToast) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-3xl animate-slideUp">
      
      {/* Toast Alert Banner if Cross-Category Item Added */}
      {compareToast && (
        <div className="mb-2 p-3 rounded-2xl bg-rose-600 text-white shadow-xl flex items-center justify-between gap-3 text-xs font-bold animate-fadeIn">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-white" />
            <span>{compareToast}</span>
          </div>
          <button 
            onClick={dismissCompareToast}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Compare Tray */}
      {compareItems.length > 0 && (
        <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Header & Product Badges */}
          <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-brand-500 text-slate-950 flex items-center justify-center font-black">
                <Scale className="w-5 h-5" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-extrabold text-white">Compare Tray</div>
                <div className="text-[10px] text-slate-400">
                  {compareItems.length}/4 Items ({compareItems[0]?.category.name})
                </div>
              </div>
            </div>

            {/* Thumbnail items in tray */}
            <div className="flex items-center gap-2">
              {compareItems.map((item) => (
                <div
                  key={item.product.id}
                  className="relative group bg-slate-800 rounded-xl p-1.5 border border-slate-700 flex items-center gap-2 pr-6"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-8 h-8 rounded-lg object-contain bg-white p-0.5"
                  />
                  <div className="max-w-[100px] truncate text-[11px] font-bold text-slate-200">
                    {item.product.name}
                  </div>
                  <button
                    onClick={() => removeFromCompare(item.product.id)}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-700 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={clearCompare}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 text-xs font-bold transition-colors"
              title="Clear all"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <Link
              to={`/compare?product=${compareItems[0]?.product.id}`}
              className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-brand-500/20 transition-all"
            >
              <span>Compare Now ({compareItems.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      )}

    </div>
  );
};
