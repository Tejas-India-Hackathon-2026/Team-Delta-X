import React, { useState } from 'react';
import { Plus, X, Package, Tag, DollarSign, Image as ImageIcon, Check, Crown, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose }) => {
  const { user, categories, addProductToStore, canAddProduct, openUpgradeModal } = useApp();
  const activeStoreId = user.storeId || 'store-sharma-auto';
  const usage = canAddProduct(activeStoreId);
  const isLimitReached = !usage.allowed;

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || 'cat-automobile');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');
  const [mrp, setMrp] = useState('');
  const [stock, setStock] = useState('10');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  if (!isOpen) return null;

  const currentCategory = categories.find(c => c.id === categoryId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLimitReached) {
      openUpgradeModal();
      return;
    }

    const sellingPrice = parseFloat(price) || 100;
    const mrpPrice = parseFloat(mrp) || Math.round(sellingPrice * 1.2);
    const stockQty = parseInt(stock, 10) || 10;

    addProductToStore(
      {
        name,
        brand,
        categoryId,
        subcategory: subcategory || currentCategory?.subcategories[0] || 'General',
        description,
        image: imageUrl || 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
        mrp: mrpPrice,
        basePrice: sellingPrice,
        keywords: [name.toLowerCase(), brand.toLowerCase()]
      },
      stockQty,
      sellingPrice
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-purple-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Add Product to Store Catalog</h3>
              <p className="text-xs text-slate-400">List an item for instant neighborhood discovery</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 🚫 50-Product Limit Reached State */}
        {isLimitReached ? (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-3xl bg-amber-500/10 text-amber-500 border border-amber-500/30 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
              <Crown className="w-7 h-7 fill-amber-500" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] bg-rose-100 text-rose-700 px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                Free Plan Limit Reached (50/50)
              </span>
              <h4 className="text-xl font-black text-slate-900">
                You’ve reached your 50-product limit
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Your Free Starter tier allows up to 50 active products. Upgrade to <strong>Dhoondo Pro</strong> to list unlimited products and earn the Verified Pro Gold badge.
              </p>
            </div>

            {/* Feature Perks */}
            <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-100 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex items-center gap-2 text-purple-900 font-bold">
                <Check className="w-4 h-4 text-purple-600" />
                <span>Unlimited Product Listings (No Caps)</span>
              </div>
              <div className="flex items-center gap-2 text-purple-900 font-bold">
                <Check className="w-4 h-4 text-purple-600" />
                <span>👑 Verified Pro Gold Merchant Badge</span>
              </div>
              <div className="flex items-center gap-2 text-purple-900 font-bold">
                <Check className="w-4 h-4 text-purple-600" />
                <span>Real-Time Customer Demand Alerts Radar</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto pt-2">
              <button
                onClick={() => {
                  onClose();
                  openUpgradeModal();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <Crown className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Upgrade to Pro (₹99/mo)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onClose}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Normal Form with Usage Pill */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Usage Notice Bar */}
            {usage.plan === 'free' && (
              <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-between text-xs">
                <span className="text-purple-800 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Free Tier: {usage.currentCount} / {usage.maxCount} Products</span>
                </span>
                <span className="text-[11px] text-purple-600 font-semibold">
                  {usage.maxCount - usage.currentCount} slots remaining
                </span>
              </div>
            )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Product Title *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Hero Splendor Chain Sprocket Kit"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brand Name *</label>
              <input
                type="text"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. Hero Genuine / Rolon"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category *</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.emoji} {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Subcategory</label>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
              >
                {currentCategory?.subcategories.map((sub, i) => (
                  <option key={i} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Selling Price (₹) *</label>
              <input
                type="number"
                required
                min="1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="420"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-bold focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">MRP (₹)</label>
              <input
                type="number"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
                placeholder="499"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Initial Stock (Units) *</label>
              <input
                type="number"
                required
                min="0"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="10"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-bold focus:bg-white focus:border-brand-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Image URL (Optional)</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Product Description</label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Genuine OEM spare part with manufacturer seal..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/25"
            >
              Add to Live Catalog
            </button>
          </div>

        </form>
        )}

      </div>
    </div>
  );
};
