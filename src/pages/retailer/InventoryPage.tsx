import React, { useState, useMemo } from 'react';
import { 
  Boxes, 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Check, 
  ArrowUpDown, 
  Sparkles,
  DollarSign
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';
import { AddProductModal } from '../../components/retailer/AddProductModal';
import { SubscriptionLimitBanner } from '../../components/retailer/SubscriptionLimitBanner';
import { StockStatus } from '../../types';

export const InventoryPage: React.FC = () => {
  const { 
    user, 
    stores, 
    inventory, 
    products, 
    updateStock, 
    setExactStock, 
    deleteProductFromStore 
  } = useApp();

  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<string>('');

  const currentStore = stores.find(s => s.id === (user.storeId || 'store-sharma-auto')) || stores[0];

  const storeInventoryList = useMemo(() => {
    const storeInvs = inventory.filter(inv => inv.storeId === currentStore.id);
    return storeInvs.map(inv => {
      const prod = products.find(p => p.id === inv.productId) || products[0];
      return { ...inv, product: prod };
    });
  }, [inventory, products, currentStore.id]);

  
  const statusTabCounts = useMemo(() => ({
    all: storeInventoryList.length,
    in_stock: storeInventoryList.filter(i => i.status === 'in_stock').length,
    low_stock: storeInventoryList.filter(i => i.status === 'low_stock').length,
    out_of_stock: storeInventoryList.filter(i => i.status === 'out_of_stock').length,
  }), [storeInventoryList]);

  const filteredList = useMemo(() => {
    return storeInventoryList.filter(item => {
      const matchesSearch = item.product.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.product.brand.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.product.sku.toLowerCase().includes(searchFilter.toLowerCase());

      if (!matchesSearch) return false;
      if (statusFilter !== 'all' && item.status !== statusFilter) return false;
      return true;
    });
  }, [storeInventoryList, searchFilter, statusFilter]);

  
  const handleQuickStockDelta = (productId: string, delta: number) => {
    const item = storeInventoryList.find(i => i.productId === productId);
    if (!item) return;
    const newQty = Math.max(0, item.stockQuantity + delta);
    setExactStock(currentStore.id, productId, newQty, item.price);
  };

  const handleStartEditPrice = (invId: string, currentPrice: number) => {
    setEditingPriceId(invId);
    setTempPrice(currentPrice.toString());
  };

  const handleSavePrice = (productId: string) => {
    const newP = parseFloat(tempPrice);
    if (!isNaN(newP) && newP > 0) {
      setExactStock(currentStore.id, productId, storeInventoryList.find(i => i.productId === productId)?.stockQuantity || 1, newP);
    }
    setEditingPriceId(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <RetailerSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Boxes className="w-7 h-7 text-brand-400" />
              <span>Live Inventory & Stock Manager</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Real-time counter stock, fast + / − steppers, and pricing adjustments for {currentStore.name}
            </p>
          </div>

          <button
            onClick={() => setAddProductModalOpen(true)}
            className="px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-brand-500/20 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product to Catalog</span>
          </button>
        </div>

        {/* 👑 SaaS Subscription Usage & 50-Product Limit Banner */}
        <SubscriptionLimitBanner />

        {/* Search & Status Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <div className="w-full sm:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search product name, brand, or SKU..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-xs w-full sm:w-auto overflow-x-auto">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'in_stock', label: '🟢 In Stock' },
              { id: 'low_stock', label: '🟡 Low Stock' },
              { id: 'out_of_stock', label: '🔴 Out of Stock' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setStatusFilter(f.id)}
                className={`py-1.5 px-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                  statusFilter === f.id
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Inventory Master Table */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950/60 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                  <th className="py-4 px-4 sm:px-6">Product Details</th>
                  <th className="py-4 px-3 text-center">Category</th>
                  <th className="py-4 px-3 text-center">Selling Price (₹)</th>
                  <th className="py-4 px-3 text-center">MRP (₹)</th>
                  <th className="py-4 px-3 text-center">Availability Status</th>
                  <th className="py-4 px-4 text-center">Live Stock Stepper</th>
                  <th className="py-4 px-4 text-center">Last Updated</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80">
                {filteredList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                    
                    {/* Details */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-11 h-11 rounded-xl object-contain bg-slate-800 p-1 border border-slate-700 shrink-0"
                        />
                        <div>
                          <div className="font-bold text-white text-sm line-clamp-1">{item.product.name}</div>
                          <div className="text-slate-400 text-[11px] flex items-center gap-2 mt-0.5">
                            <span className="text-brand-400 font-semibold">{item.product.brand}</span>
                            <span>•</span>
                            <span className="font-mono text-[10px]">SKU: {item.product.sku}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-3 text-center text-slate-300">
                      {item.product.subcategory}
                    </td>

                    {/* Price with Inline Edit */}
                    <td className="py-4 px-3 text-center">
                      {editingPriceId === item.id ? (
                        <div className="flex items-center justify-center gap-1">
                          <input
                            type="number"
                            value={tempPrice}
                            onChange={(e) => setTempPrice(e.target.value)}
                            className="w-16 p-1 bg-slate-800 border border-brand-500 rounded text-center text-xs font-bold text-white outline-none"
                            autoFocus
                          />
                          <button
                            onClick={() => handleSavePrice(item.productId)}
                            className="p-1 rounded bg-brand-600 text-white"
                          >
                            <Check className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => handleStartEditPrice(item.id, item.price)}
                          className="cursor-pointer hover:text-brand-400 flex items-center justify-center gap-1 group font-bold text-white text-sm"
                          title="Click to edit price"
                        >
                          <span>₹{item.price}</span>
                          <Edit3 className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      )}
                    </td>

                    {/* MRP */}
                    <td className="py-4 px-3 text-center text-slate-400 line-through">
                      ₹{item.mrp}
                    </td>

                    {/* Availability */}
                    <td className="py-4 px-3 text-center">
                      {item.status === 'in_stock' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          In Stock ({item.stockQuantity})
                        </span>
                      ) : item.status === 'low_stock' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          Low Stock ({item.stockQuantity})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                          Out of Stock
                        </span>
                      )}
                    </td>

                    {/* Live Stock Stepper (- 1 +) */}
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex items-center bg-slate-800 rounded-xl p-1 border border-slate-700 shadow-inner">
                        <button
                          onClick={() => updateStock(currentStore.id, item.productId, -1)}
                          className="w-7 h-7 rounded-lg bg-slate-700 hover:bg-slate-600 active:scale-95 text-white font-bold flex items-center justify-center text-sm transition-all"
                          title="Decrease stock by 1"
                        >
                          −
                        </button>
                        <span className="w-10 text-center font-black text-white text-sm">
                          {item.stockQuantity}
                        </span>
                        <button
                          onClick={() => updateStock(currentStore.id, item.productId, 1)}
                          className="w-7 h-7 rounded-lg bg-brand-600 hover:bg-brand-500 active:scale-95 text-white font-bold flex items-center justify-center text-sm transition-all"
                          title="Increase stock by 1"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    {/* Last Updated */}
                    <td className="py-4 px-4 text-center text-slate-400 text-[11px]">
                      {item.lastUpdated}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => deleteProductFromStore(currentStore.id, item.productId)}
                        className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="Remove product from store inventory"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {addProductModalOpen && (
        <AddProductModal
          isOpen={addProductModalOpen}
          onClose={() => setAddProductModalOpen(false)}
        />
      )}
    </div>
  );
};
