import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Tag, 
  Filter, 
  Check, 
  AlertTriangle,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { Product } from '../../types';

export const ProductsManagementPage: React.FC = () => {
  const { products, categories, updateProductDetails, addProductToStore } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (selectedCategory !== 'all' && p.categoryId !== selectedCategory) return false;
    return true;
  });

  const handleToggleRx = (prod: Product) => {
    updateProductDetails(prod.id, {
      requiresPrescription: !prod.requiresPrescription
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Package className="w-7 h-7 text-purple-400" />
              <span>Master Product Catalog Database</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Global catalog of {products.length} products across 16 sectors with regulatory prescription controls
            </p>
          </div>

          <button
            onClick={() => {
              const name = prompt('Enter new master product name:');
              if (name) {
                addProductToStore({ name, brand: 'Global Brand' }, 10, 250);
              }
            }}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30"
          >
            + Add Master Product
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <div className="w-full sm:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product name, brand, SKU..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-purple-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`py-1.5 px-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {categories.slice(0, 5).map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`py-1.5 px-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  selectedCategory === c.id ? 'bg-purple-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {c.emoji} {c.name.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Products Master Table */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950/60 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                  <th className="py-4 px-4 sm:px-6">Product Details</th>
                  <th className="py-4 px-3">Brand & Category</th>
                  <th className="py-4 px-3 text-center">MRP (₹)</th>
                  <th className="py-4 px-3 text-center">Prescription (Rx) Flag</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80">
                {filteredProducts.map((p) => {
                  const cat = categories.find(c => c.id === p.categoryId);

                  return (
                    <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                      
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 rounded-xl object-contain bg-slate-800 p-1 border border-slate-700 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-white text-sm line-clamp-1">{p.name}</div>
                            <div className="text-slate-400 text-[10px] font-mono">SKU: {p.sku}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-3">
                        <div className="font-bold text-purple-300">{p.brand}</div>
                        <div className="text-slate-400 text-[11px]">{cat?.name || 'General'}</div>
                      </td>

                      <td className="py-4 px-3 text-center font-bold text-white">
                        ₹{p.mrp}
                      </td>

                      <td className="py-4 px-3 text-center">
                        <button
                          onClick={() => handleToggleRx(p)}
                          className={`px-3 py-1 rounded-full font-bold text-[10px] transition-colors ${
                            p.requiresPrescription
                              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                              : 'bg-slate-800 text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {p.requiresPrescription ? 'Rx Required' : 'Standard OTC'}
                        </button>
                      </td>

                      <td className="py-4 px-4 text-right">
                        <span className="text-xs text-purple-400 font-medium">
                          Active in Master
                        </span>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};
