import React from 'react';
import { Crown, AlertTriangle, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface SubscriptionLimitBannerProps {
  storeId?: string;
  onUpgrade?: () => void;
  className?: string;
}

export const SubscriptionLimitBanner: React.FC<SubscriptionLimitBannerProps> = ({
  storeId,
  onUpgrade,
  className = ''
}) => {
  const { user, stores, getStoreSubscription, canAddProduct, openUpgradeModal } = useApp();
  const targetStoreId = storeId || user.storeId || 'store-sharma-auto';
  const currentStore = stores.find(s => s.id === targetStoreId) || stores[0];
  const sub = getStoreSubscription(targetStoreId);
  const usage = canAddProduct(targetStoreId);

  const handleUpgradeClick = () => {
    if (onUpgrade) onUpgrade();
    else openUpgradeModal();
  };

  if (sub.plan === 'pro') {
    return (
      <div className={`p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-800/60 shadow-lg flex flex-wrap items-center justify-between gap-3 text-white ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-500/20">
            <Crown className="w-4 h-4 fill-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs text-white">Dhoondo Pro Active</span>
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] px-2 py-0.2 rounded-full font-black">
                Unlimited Products
              </span>
            </div>
            <p className="text-[11px] text-purple-300">
              Renews on {sub.validUntil} ({sub.billingCycle === 'yearly' ? 'Yearly' : 'Monthly'}) • Verified Pro Badge Active
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleUpgradeClick}
            className="px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 hover:text-white text-xs font-bold border border-purple-700/60 transition-colors"
          >
            Manage Plan
          </button>
        </div>
      </div>
    );
  }

  // Free Tier Usage Meter & Warning
  const isAtLimit = usage.currentCount >= usage.maxCount;
  const isNearLimit = usage.currentCount >= usage.maxCount * 0.8;

  return (
    <div className={`p-4 rounded-2xl border transition-all ${
      isAtLimit 
        ? 'bg-rose-950/40 border-rose-800/80 shadow-lg shadow-rose-950/20' 
        : isNearLimit 
        ? 'bg-amber-950/30 border-amber-800/60' 
        : 'bg-slate-950 border-slate-800'
    } ${className}`}>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2.5">
          {isAtLimit ? (
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          )}
          
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs text-white">
                {isAtLimit ? "You've reached your 50-product limit" : "Free Starter Plan"}
              </span>
              <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${
                isAtLimit ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-slate-800 text-slate-300'
              }`}>
                {usage.currentCount} / {usage.maxCount} Products
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {isAtLimit 
                ? 'Upgrade to Pro to list unlimited products and unlock the verified gold badge.' 
                : 'Free tier includes up to 50 active items in your store catalog.'}
            </p>
          </div>
        </div>

        <button
          onClick={handleUpgradeClick}
          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-1.5 transition-all transform active:scale-95 shrink-0"
        >
          <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>Upgrade to Pro (Unlimited)</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Visual Usage Progress Bar */}
      <div className="space-y-1">
        <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isAtLimit
                ? 'bg-rose-500'
                : isNearLimit
                ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                : 'bg-gradient-to-r from-purple-500 to-indigo-500'
            }`}
            style={{ width: `${Math.min(100, usage.percentage)}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>{usage.currentCount} Products in Catalog</span>
          <span>{Math.max(0, usage.maxCount - usage.currentCount)} slots remaining on Free tier</span>
        </div>
      </div>

    </div>
  );
};
