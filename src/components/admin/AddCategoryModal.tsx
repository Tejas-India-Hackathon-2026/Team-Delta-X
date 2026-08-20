import React, { useState } from 'react';
import { Layers, X, Plus, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCategoryModal: React.FC<AddCategoryModalProps> = ({ isOpen, onClose }) => {
  const { addCategory } = useApp();

  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('📦');
  const [description, setDescription] = useState('');
  const [subcategoriesStr, setSubcategoriesStr] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subs = subcategoriesStr
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    addCategory({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      iconName: 'Package',
      emoji: emoji || '📦',
      description: description || 'Local merchant category',
      color: 'from-purple-500 to-indigo-600',
      subcategories: subs.length > 0 ? subs : ['General Items']
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-purple-700 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Add New Platform Category</h3>
              <p className="text-xs text-purple-200">Create searchable categories and subcategories</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Emoji Icon</label>
              <input
                type="text"
                required
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
                placeholder="🛠️"
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-lg focus:bg-white focus:border-purple-500 outline-none"
              />
            </div>

            <div className="col-span-3">
              <label className="block text-xs font-bold text-slate-700 mb-1">Category Title *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Solar & Renewable Energy"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-purple-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Subcategories (comma separated) *
            </label>
            <input
              type="text"
              required
              value={subcategoriesStr}
              onChange={(e) => setSubcategoriesStr(e.target.value)}
              placeholder="Solar Panels, Inverters, Lithium Batteries, Charge Controllers"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Solar rooftop components, monocrystalline panels & backup systems from verified local dealers..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-purple-500 outline-none resize-none"
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
              className="px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-md"
            >
              Save Category
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
