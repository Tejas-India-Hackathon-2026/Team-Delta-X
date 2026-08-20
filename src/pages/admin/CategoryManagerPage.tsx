import React, { useState } from 'react';
import { Layers, Plus, Search, Edit2, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { AddCategoryModal } from '../../components/admin/AddCategoryModal';

export const CategoryManagerPage: React.FC = () => {
  const { categories } = useApp();
  const [addCatModalOpen, setAddCatModalOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    c.subcategories.some(s => s.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Layers className="w-7 h-7 text-purple-400" />
              <span>Platform Category & Taxonomy Master</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Add new sectors, manage subcategories, and customize search keyword mappings
            </p>
          </div>

          <button
            onClick={() => setAddCatModalOpen(true)}
            className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-purple-600/25 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Category</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-96 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search categories and subcategories..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-purple-500 outline-none"
          />
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center text-xl">
                    {cat.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{cat.name}</h3>
                    <span className="text-[10px] text-purple-300 font-semibold">{cat.subcategories.length} subcategories</span>
                  </div>
                </div>

                {cat.isCustom && (
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                    Custom
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 line-clamp-2">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800">
                {cat.subcategories.slice(0, 6).map((sub, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px]"
                  >
                    {sub}
                  </span>
                ))}
                {cat.subcategories.length > 6 && (
                  <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-500 text-[10px]">
                    +{cat.subcategories.length - 6} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>

      {addCatModalOpen && (
        <AddCategoryModal
          isOpen={addCatModalOpen}
          onClose={() => setAddCatModalOpen(false)}
        />
      )}
    </div>
  );
};
