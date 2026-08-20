import React, { useState } from 'react';
import { 
  Crown, 
  Check, 
  CreditCard, 
  Receipt, 
  Calendar, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Download, 
  RotateCcw,
  Sparkles,
  Zap,
  Package,
  Layers,
  HelpCircle,
  X,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';
import { SubscriptionModal } from '../../components/retailer/SubscriptionModal';
import { BillingCycle } from '../../types';

export const SubscriptionPage: React.FC = () => {
  const { 
    user, 
    stores, 
    inventory, 
    getStoreSubscription, 
    canAddProduct, 
    cancelSubscription, 
    reactivateSubscription 
  } = useApp();

  const currentStore = stores.find(s => s.id === user.storeId) || stores[0];
  const sub = getStoreSubscription(currentStore.id);
  const usage = canAddProduct(currentStore.id);

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState<BillingCycle>('yearly');
  const [isCancelConfirmOpen, setIsCancelConfirmOpen] = useState(false);

  const isPro = sub.plan === 'pro';

  const handleOpenUpgrade = (cycle: BillingCycle = 'yearly') => {
    setSelectedCycle(cycle);
    setIsUpgradeModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <RetailerSidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-6xl space-y-6 custom-scrollbar">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-purple-400 font-semibold mb-1">
              <span>{currentStore.name}</span>
              <span>•</span>
              <span>SaaS Billing & Subscription</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <span>Subscription & Plans</span>
              {isPro && (
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs px-2.5 py-0.5 rounded-full font-black flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5 fill-amber-300" />
                  <span>PRO MERCHANT</span>
                </span>
              )}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Manage your store tier, catalog limits, payment invoices, and billing renewal
            </p>
          </div>

          {!isPro && (
            <button
              onClick={() => handleOpenUpgrade('yearly')}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-purple-600/30 flex items-center gap-2 transition-all transform active:scale-95 shrink-0"
            >
              <Crown className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Upgrade to Pro Plan</span>
            </button>
          )}
        </div>

        {/* 🌟 1. ACTIVE PLAN SUMMARY CARD */}
        <div className={`p-6 rounded-3xl border shadow-2xl relative overflow-hidden ${
          isPro 
            ? 'bg-gradient-to-br from-purple-950/90 via-slate-900 to-indigo-950/90 border-purple-800/80 shadow-purple-950/30' 
            : 'bg-slate-900/90 border-slate-800 shadow-slate-950/50'
        }`}>
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black shadow-lg ${
                  isPro 
                    ? 'bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 shadow-amber-500/30' 
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  <Crown className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-white">
                      {isPro ? 'Dhoondo Pro Plan' : 'Free Starter Plan'}
                    </h2>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase ${
                      sub.status === 'active' 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {sub.status === 'active' ? '🟢 Active' : '🟡 Cancelled (Active till expiry)'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isPro 
                      ? `Billed ${sub.billingCycle} (₹${sub.amount.toLocaleString('en-IN')}) • Renews on ${sub.validUntil}` 
                      : 'Free tier allows up to 50 items. Upgrade anytime to unlock unlimited inventory.'}
                  </p>
                </div>
              </div>

              {/* Key Usage Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 font-semibold">Catalog Usage</div>
                  <div className="text-base font-black text-white mt-0.5">
                    {usage.currentCount} / {isPro ? '∞ Unlimited' : '50'}
                  </div>
                  <div className="text-[10px] text-purple-400">
                    {isPro ? '100% Unlimited Slots' : `${Math.max(0, 50 - usage.currentCount)} slots left`}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 font-semibold">Demand Radar</div>
                  <div className="text-base font-black text-white mt-0.5">
                    {isPro ? '⚡ Real-Time' : 'Standard'}
                  </div>
                  <div className="text-[10px] text-emerald-400">
                    {isPro ? 'Live Customer Alerts' : 'Basic Placement'}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 font-semibold">Verified Pro Badge</div>
                  <div className="text-base font-black text-white mt-0.5">
                    {isPro ? '👑 Gold Verified' : 'Standard'}
                  </div>
                  <div className="text-[10px] text-amber-400">
                    {isPro ? 'Boosts buyer trust' : 'Upgrade to enable'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col justify-between gap-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 lg:w-72 shrink-0">
              <div>
                <div className="text-xs font-bold text-slate-400">Billing Cycle</div>
                <div className="text-lg font-black text-white mt-0.5">
                  {isPro ? (sub.billingCycle === 'yearly' ? 'Yearly (₹999/yr)' : 'Monthly (₹99/mo)') : 'Free Plan (₹0)'}
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  Valid Until: <strong className="text-slate-300">{sub.validUntil}</strong>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                {isPro ? (
                  sub.status === 'active' ? (
                    <button
                      onClick={() => setIsCancelConfirmOpen(true)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-rose-950/80 text-slate-400 hover:text-rose-300 border border-slate-800 hover:border-rose-800 text-xs font-bold transition-all"
                    >
                      Cancel Subscription
                    </button>
                  ) : (
                    <button
                      onClick={() => reactivateSubscription(currentStore.id)}
                      className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all"
                    >
                      Reactivate Auto-Renew
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => handleOpenUpgrade('yearly')}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Crown className="w-3.5 h-3.5 text-amber-300" />
                    <span>Upgrade to Pro Now</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Usage Meter Bar for Free Tier */}
          {!isPro && (
            <div className="mt-5 pt-4 border-t border-slate-800 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Free Tier Limit: {usage.currentCount} / {usage.maxCount} Products ({usage.percentage}%)</span>
                <span>{Math.max(0, usage.maxCount - usage.currentCount)} slots remaining</span>
              </div>
              <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    usage.percentage >= 100 
                      ? 'bg-rose-500' 
                      : usage.percentage >= 80 
                      ? 'bg-amber-500' 
                      : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                  }`}
                  style={{ width: `${usage.percentage}%` }}
                />
              </div>
            </div>
          )}

        </div>

        {/* 🌟 2. FREE VS PRO COMPLETE FEATURE BREAKDOWN */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Compare Plan Benefits</span>
            </h3>
            <span className="text-xs text-slate-400">Switch or upgrade anytime</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider">Features</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-slate-300">Free Tier</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-purple-300">👑 Pro Merchant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Active Product Catalog</td>
                  <td className="py-3.5 px-4 text-slate-400">Up to 50 Products</td>
                  <td className="py-3.5 px-4 font-black text-amber-400">Unlimited Products</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">2D Google Maps Discovery</td>
                  <td className="py-3.5 px-4 text-slate-400">Standard Placement</td>
                  <td className="py-3.5 px-4 font-bold text-white">Enhanced Verified Pin</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Store Verified Pro Badge</td>
                  <td className="py-3.5 px-4 text-slate-500"><X className="w-4 h-4 text-slate-600" /></td>
                  <td className="py-3.5 px-4 font-bold text-amber-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Gold Verified Pro Badge</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Customer Demand Radar Alerts</td>
                  <td className="py-3.5 px-4 text-slate-500"><X className="w-4 h-4 text-slate-600" /></td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400">Real-Time Search Alerts</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">WhatsApp 1-Click Quick Order</td>
                  <td className="py-3.5 px-4 text-slate-400">Basic</td>
                  <td className="py-3.5 px-4 font-bold text-white">Custom Enquiry Template</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Promotional Offer Deals</td>
                  <td className="py-3.5 px-4 text-slate-400">Max 3 Offers</td>
                  <td className="py-3.5 px-4 font-bold text-white">Unlimited Promo Deals</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Customer Support</td>
                  <td className="py-3.5 px-4 text-slate-400">Email (48 hrs)</td>
                  <td className="py-3.5 px-4 font-bold text-purple-300">24/7 Dedicated Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 🌟 3. BILLING INVOICES & PAYMENT RECEIPTS */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Receipt className="w-5 h-5 text-purple-400" />
              <span>Billing History & Invoices</span>
            </h3>
            <span className="text-xs text-slate-400">GST-compliant tax invoices</span>
          </div>

          {(!sub.invoices || sub.invoices.length === 0) ? (
            <div className="p-8 text-center bg-slate-950/60 rounded-2xl border border-slate-800 text-slate-400 text-xs">
              <Receipt className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="font-bold text-slate-300">No Billing Invoices Yet</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Invoices will appear here automatically when you upgrade to Pro.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-3 px-4 font-bold uppercase">Invoice #</th>
                    <th className="py-3 px-4 font-bold uppercase">Date</th>
                    <th className="py-3 px-4 font-bold uppercase">Plan Details</th>
                    <th className="py-3 px-4 font-bold uppercase">Amount</th>
                    <th className="py-3 px-4 font-bold uppercase">Status</th>
                    <th className="py-3 px-4 font-bold uppercase text-right">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {sub.invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-950/40 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-purple-300">{inv.invoiceNumber}</td>
                      <td className="py-3 px-4 text-slate-400">{inv.date}</td>
                      <td className="py-3 px-4 font-medium text-white">{inv.plan}</td>
                      <td className="py-3 px-4 font-bold text-white">₹{inv.amount.toLocaleString('en-IN')}</td>
                      <td className="py-3 px-4">
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] px-2 py-0.5 rounded-full font-bold">
                          Paid
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => alert(`Downloading GST Invoice ${inv.invoiceNumber} for ₹${inv.amount}...`)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Confirmation Modal for Subscription Cancellation */}
        {isCancelConfirmOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-md w-full shadow-2xl space-y-4 text-white">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-lg font-black text-white">Cancel Pro Subscription?</h3>
                <p className="text-xs text-slate-400">
                  Your auto-renewal will be turned off. You will still keep all your Pro features and unlimited products until <strong>{sub.validUntil}</strong>.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setIsCancelConfirmOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                >
                  Keep Subscription
                </button>
                <button
                  onClick={() => {
                    cancelSubscription(currentStore.id);
                    setIsCancelConfirmOpen(false);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-lg transition-colors"
                >
                  Confirm Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Global Subscription Checkout Modal */}
      <SubscriptionModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        initialCycle={selectedCycle}
      />
    </div>
  );
};
