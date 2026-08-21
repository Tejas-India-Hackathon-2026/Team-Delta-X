import React, { useState, useRef } from 'react';
import { 
  Plus, 
  X, 
  Package, 
  Tag, 
  DollarSign, 
  Camera, 
  Upload, 
  Sparkles, 
  Check, 
  Crown, 
  AlertTriangle, 
  RefreshCw,
  Trash2,
  Eye
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Curated high-res fallback photos matching Indian retail categories
const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
  'cat-automobile': 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
  'cat-pharmacy': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  'cat-grocery': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  'cat-electronics': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  'cat-hardware': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
  'cat-stationery': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
};

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
  
  // Camera & Image Capture state
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageSourceLabel, setImageSourceLabel] = useState<string>('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  
  const calculatedDiscountMargin = React.useMemo(() => {
    const numPrice = parseFloat(price) || 0;
    const numMrp = parseFloat(mrp) || 0;
    if (numMrp > 0 && numPrice > 0 && numMrp > numPrice) {
      const discountPct = Math.round(((numMrp - numPrice) / numMrp) * 100);
      const savingsRs = numMrp - numPrice;
      return { discountPct, savingsRs };
    }
    return { discountPct: 0, savingsRs: 0 };
  }, [price, mrp]);

  const currentCategory = categories.find(c => c.id === categoryId);

  // 1. Handle File Upload (From Device Gallery/Files)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file, 'Device Photo');
    }
  };

  // 2. Read, resize, and convert image to compressed base64
  const processImageFile = (file: File, sourceName: string) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setImagePreview(dataUrl);
        setImageSourceLabel(sourceName);
        stopLiveCamera();
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // 3. Live Web Camera Stream
  const startLiveCamera = async () => {
    setIsCameraActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.warn('Direct webcam failed, falling back to native camera input:', err);
      setIsCameraActive(false);
      cameraInputRef.current?.click();
    }
  };

  const captureLiveCameraPhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setImagePreview(dataUrl);
      setImageSourceLabel('Live Camera Capture 📸');
      stopLiveCamera();
    }
  };

  const stopLiveCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  // 4. Smart Matching Catalog Preset
  const handleUseSmartPreset = () => {
    const defaultImg = CATEGORY_DEFAULT_IMAGES[categoryId] || CATEGORY_DEFAULT_IMAGES['cat-automobile'];
    setImagePreview(defaultImg);
    setImageSourceLabel('Smart Catalog Photo ✨');
    stopLiveCamera();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLimitReached) {
      openUpgradeModal();
      return;
    }

    const sellingPrice = parseFloat(price) || 100;
    const mrpPrice = parseFloat(mrp) || Math.round(sellingPrice * 1.2);
    const stockQty = parseInt(stock, 10) || 10;
    const finalImage = imagePreview || CATEGORY_DEFAULT_IMAGES[categoryId] || CATEGORY_DEFAULT_IMAGES['cat-automobile'];

    addProductToStore(
      {
        name,
        brand,
        categoryId,
        subcategory: subcategory || currentCategory?.subcategories[0] || 'General',
        description,
        image: finalImage,
        mrp: mrpPrice,
        basePrice: sellingPrice,
        keywords: [name.toLowerCase(), brand.toLowerCase(), categoryId]
      },
      stockQty,
      sellingPrice
    );

    stopLiveCamera();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200 my-auto">
        
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
            onClick={() => {
              stopLiveCamera();
              onClose();
            }}
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

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openUpgradeModal();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs shadow-md shadow-purple-600/30 flex items-center gap-1.5"
              >
                <Crown className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Upgrade to Pro 👑</span>
              </button>
            </div>
          </div>
        ) : (

        /* Product Form */
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Product Title *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Honda Shine Front Disc Brake Pad"
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
                placeholder="e.g. Honda Genuine / Castrol"
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
                placeholder="380"
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
              <label className="block text-xs font-bold text-slate-700 mb-1">Stock (Units) *</label>
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

          {/* 📸 CAMERA & PHOTO INSERTION SECTION (NO URL REQUIRED) */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-brand-600" />
                <span>Product Photo (Click with Camera or Upload) *</span>
              </label>
              {imageSourceLabel && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {imageSourceLabel}
                </span>
              )}
            </div>

            {/* Hidden file inputs */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Live Camera Viewfinder (if web camera is active) */}
            {isCameraActive && (
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex flex-col items-center justify-center border-2 border-brand-500 animate-in fade-in">
                <video ref={videoRef} playsInline autoPlay className="w-full h-full object-cover" />
                <canvas ref={canvasRef} className="hidden" />
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={captureLiveCameraPhoto}
                    className="px-5 py-2 rounded-full bg-brand-500 hover:bg-brand-400 text-slate-950 font-black text-xs shadow-lg flex items-center gap-1.5"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Click Photo</span>
                  </button>
                  <button
                    type="button"
                    onClick={stopLiveCamera}
                    className="px-4 py-2 rounded-full bg-slate-900/80 text-white font-bold text-xs hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Photo Preview if already selected */}
            {imagePreview && !isCameraActive && (
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 flex items-center gap-3">
                <img
                  src={imagePreview}
                  alt="Product preview"
                  className="w-20 h-20 rounded-xl object-cover border border-slate-100 shadow-sm"
                />
                <div className="flex-1 min-w-0 text-xs">
                  <div className="font-bold text-slate-900 truncate">
                    {name || 'Selected Product Image'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    High quality photo ready for customer catalog
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={startLiveCamera}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Retake</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null); // data-image-preview-remove
                        setImageSourceLabel('');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-[11px] font-bold flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons for Image Insertion */}
            {!isCameraActive && !imagePreview && (
              <div className="grid grid-cols-3 gap-2 pt-1">
                <button
                  type="button"
                  onClick={startLiveCamera}
                  className="p-3 rounded-2xl bg-white hover:bg-brand-50 border-2 border-dashed border-brand-300 hover:border-brand-500 text-slate-700 hover:text-brand-700 flex flex-col items-center justify-center gap-1.5 transition-all text-center group"
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold">Open Camera 📸</span>
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-3 rounded-2xl bg-white hover:bg-purple-50 border-2 border-dashed border-purple-200 hover:border-purple-500 text-slate-700 hover:text-purple-700 flex flex-col items-center justify-center gap-1.5 transition-all text-center group"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold">Upload File 🖼️</span>
                </button>

                <button
                  type="button"
                  onClick={handleUseSmartPreset}
                  className="p-3 rounded-2xl bg-white hover:bg-amber-50 border-2 border-dashed border-amber-200 hover:border-amber-500 text-slate-700 hover:text-amber-700 flex flex-col items-center justify-center gap-1.5 transition-all text-center group"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold">Smart Match ✨</span>
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Product Description</label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Genuine OEM spare part with manufacturer warranty and hologram seal..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                stopLiveCamera();
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/25 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Live Catalog</span>
            </button>
          </div>

        </form>
        )}

      </div>
    </div>
  );
};
