import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CategoriesPage: React.FC = () => {
  const { categories } = useApp();
  const [filterText, setFilterText] = useState('');

  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(filterText.toLowerCase()) ||
    c.subcategories.some(s => s.toLowerCase().includes(filterText.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <Link to="/" className="hover:text-brand-600 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span>Category Directory</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Product Categories ({categories.length})
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Discover verified local inventory grouped by sector and sub-categories
            </p>
          </div>

          {/* Filter search */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Search category or subcategory..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl shadow-inner">
                      {cat.emoji}
                    </div>
                    <div>
                      <h2 className="font-extrabold text-slate-900 text-base">
                        {cat.name}
                      </h2>
                      <span className="text-[11px] text-brand-700 font-semibold">
                        {cat.subcategories.length} Subcategories
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  {cat.description}
                </p>

                {/* Subcategories tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cat.subcategories.map((sub, i) => (
                    <Link
                      key={i}
                      to={`/search?category=${cat.id}&q=${encodeURIComponent(sub)}`}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-brand-50 hover:text-brand-700 border border-slate-100 text-slate-600 text-[11px] font-medium transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  to={`/search?category=${cat.id}`}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs transition-colors"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
