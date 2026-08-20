import React, { useState } from 'react';
import { 
  X, 
  Crown, 
  Check, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Store, 
  Lock, 
  ChevronRight,
  Building2,
  Receipt,
  FileCheck2,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { BillingCycle } from '../../types';
import { soundEffects } from '../../services/audioService';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCycle?: BillingCycle;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  initialCycle = 'yearly'
}) => {
  const { user, stores, upgradeToPro, getStoreSubscription } = useApp();
  
  const currentStore = stores.find(s => s.id === user.storeId) || stores[0];
  const currentSub = getStoreSubscription(currentStore.id);

  const [step, setStep] = useState<'plans' | 'checkout' | 'processing' | 'success' | 'failure'>('plans');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialCycle);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'netbanking'>('card');

  // Card states
  const [cardNumber, setCardNumber] = useState('4532 8901 2345 8892');
  const [cardHolder, setCardHolder] = useState(currentStore.ownerName || 'Retailer Name');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvv, setCardCvv] = useState('892');

  // Netbanking & GST states
  const [selectedBank, setSelectedBank] = useState('sbi');
  const [gstNumber, setGstNumber] = useState('');
  const [showGstField, setShowGstField] = useState(false);
  const [failureReason, setFailureReason] = useState('Bank server timeout. Please check card details or try NetBanking.');

  if (!isOpen) return null;

  const monthlyPrice = 99;
  const yearlyPrice = 999; // ~₹83/mo (Save 16%)
  const selectedPrice = billingCycle === 'yearly' ? yearlyPrice : monthlyPrice;

  // Calculate GST Breakdown (18% GST included)
  const basePrice = Math.round((selectedPrice / 1.18) * 100) / 100;
  const gstAmount = Math.round((selectedPrice - basePrice) * 100) / 100;

  // Handle Payment Simulation
  const handleSimulatePayment = (outcome: 'success' | 'failure') => {
    setStep('processing');
    soundEffects.playPop();

    setTimeout(() => {
      if (outcome === 'success') {
        upgradeToPro(currentStore.id, billingCycle);
        setStep('success');
      } else {
        soundEffects.playPop();
        setFailureReason('Transaction declined by issuing bank (Simulated failure). Your account was not charged.');
        setStep('failure');
      }
    }, 1400);
  };

  const handleClose = () => {
    setStep('plans');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden text-white animate-in zoom-in-95 duration-200 max-h-[94vh] flex flex-col font-sans">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20 font-black">
              <Crown className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white">
                  Dhoondo Pro for Retailers
                </h2>
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wider">
                  Supercharge Store
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Unlock unlimited product listings, verified pro badge & demand radar
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar space-y-6">
          
          {/* ============================================================== */}
          {/* STEP 1: PLANS & PRICING COMPARISON                             */}
          {/* ============================================================== */}
          {step === 'plans' && (
            <div className="space-y-6">
              
              {/* Billing Cycle Toggle */}
              <div className="flex justify-center">
                <div className="p-1 bg-slate-950 rounded-2xl border border-slate-800 flex items-center gap-1 shadow-inner">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                      billingCycle === 'monthly'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Monthly (₹99/mo)
                  </button>

                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                      billingCycle === 'yearly'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>Yearly (₹999/yr)</span>
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-md shadow-sm">
                      SAVE 16%
                    </span>
                  </button>
                </div>
              </div>

              {/* Free vs Pro Comparison Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Free Plan Card */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3 relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Starter</div>
                      <h3 className="text-lg font-black text-slate-200">Free Tier</h3>
                    </div>
                    <span className="text-lg font-black text-slate-300">₹0</span>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    Basic starter storefront for small neighbourhood shops testing local search.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-slate-400" />
                      <span><strong>Up to 50 Products</strong> max</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-slate-400" />
                      <span>Standard 2D Map Pin</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-slate-400" />
                      <span>Standard Counter Search</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <X className="w-3.5 h-3.5 text-slate-600" />
                      <span className="line-through">No Verified Pro Badge</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <X className="w-3.5 h-3.5 text-slate-600" />
                      <span className="line-through">No Demand Radar Alerts</span>
                    </div>
                  </div>

                  <button
                    disabled
                    className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed opacity-60"
                  >
                    Current Plan
                  </button>
                </div>

                {/* Pro Merchant Plan Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-purple-950/70 to-slate-950 border-2 border-purple-500/60 shadow-xl shadow-purple-900/20 space-y-3 relative">
                  
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-500 to-amber-300 text-slate-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-slate-950" />
                    <span>Recommended</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-extrabold text-purple-300 uppercase tracking-wider">Growth</div>
                      <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                        <span>Pro Merchant</span>
                        <Crown className="w-4 h-4 text-amber-300 fill-amber-300" />
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-white">₹{selectedPrice}</span>
                      <span className="text-[10px] text-slate-400">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300">
                    High-volume retailers scaling catalog, counter sales & customer footfall.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-purple-900/60 text-xs">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span><strong>Unlimited Products</strong> listing</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>👑 <strong>Verified Pro Gold Badge</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span><strong>Customer Demand Alerts</strong> radar</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>1-Click WhatsApp Quick Orders</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span><strong>24/7 Dedicated</strong> Merchant Support</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95 group"
                  >
                    <span>Upgrade to Pro Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 2: CHECKOUT & PAYMENT SECTION (CARDS & NETBANKING)         */}
          {/* ============================================================== */}
          {step === 'checkout' && (
            <div className="space-y-5">
              
              {/* Order Summary & Tax Breakdown Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/70 via-slate-900 to-slate-950 border border-purple-800/60 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-black">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xs sm:text-sm text-white">
                        Dhoondo Pro Subscription ({billingCycle === 'yearly' ? '1 Year Plan' : '1 Month Plan'})
                      </div>
                      <div className="text-[10px] text-purple-300">
                        Merchant: <strong>{currentStore.name}</strong> • {currentStore.area}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-black text-white">₹{selectedPrice.toLocaleString('en-IN')}</div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded font-bold">
                      {billingCycle === 'yearly' ? 'Save 16%' : 'Standard'}
                    </span>
                  </div>
                </div>

                {/* Detailed Tax Breakdown */}
                <div className="pt-2.5 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400">Base Price:</span>
                    <div className="font-bold text-slate-200">₹{basePrice}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">18% GST (CGST+SGST):</span>
                    <div className="font-bold text-slate-200">₹{gstAmount}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400">Total Payable:</span>
                    <div className="font-black text-emerald-400 text-xs">₹{selectedPrice}</div>
                  </div>
                </div>

                {/* Optional GSTIN Input Toggle */}
                <div className="pt-1">
                  {!showGstField ? (
                    <button
                      type="button"
                      onClick={() => setShowGstField(true)}
                      className="text-[11px] text-purple-400 hover:text-purple-300 underline font-semibold flex items-center gap-1"
                    >
                      <span>+ Add Business GSTIN for Input Tax Credit (ITC)</span>
                    </button>
                  ) : (
                    <div className="space-y-1 pt-1">
                      <label className="text-[10px] text-slate-400 font-bold">Enter Business GSTIN (Optional):</label>
                      <input
                        type="text"
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                        placeholder="29ABCDE1234F1Z5"
                        maxLength={15}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-purple-500/50 rounded-xl text-xs text-white font-mono uppercase outline-none focus:border-purple-400"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Methods Tabs (Cards & NetBanking) */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Select Payment Method:</span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3" /> 256-Bit SSL Encrypted
                  </span>
                </label>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-purple-950/80 border-purple-500 text-purple-200 ring-2 ring-purple-500/20 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    <span className="font-extrabold text-sm">Credit / Debit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2.5 transition-all ${
                      paymentMethod === 'netbanking'
                        ? 'bg-purple-950/80 border-purple-500 text-purple-200 ring-2 ring-purple-500/20 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-5 h-5 text-purple-400" />
                    <span className="font-extrabold text-sm">NetBanking</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Payment Input Section */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                
                {/* 1. CARD PAYMENT DETAILS */}
                {paymentMethod === 'card' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">
                        Card Number (Visa / MasterCard / RuPay):
                      </label>
                      <div className="relative">
                        <CreditCard className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="4532 8901 2345 8892"
                          maxLength={19}
                          className="w-full pl-9 pr-16 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-mono outline-none focus:border-purple-500"
                        />
                        <span className="absolute right-3 top-2.5 text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-bold">
                          RuPay / Visa
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="col-span-2">
                        <label className="block text-[11px] font-bold text-slate-400 mb-1">Cardholder Name:</label>
                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="Name on card"
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 mb-1">Expiry (MM/YY):</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="12/28"
                          maxLength={5}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-mono text-center outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">CVV / Security Code:</label>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="•••"
                        maxLength={4}
                        className="w-28 px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-mono text-center outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                )}

                {/* 2. NETBANKING */}
                {paymentMethod === 'netbanking' && (
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Popular Indian Banks:
                    </label>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'sbi', name: 'State Bank (SBI)' },
                        { id: 'hdfc', name: 'HDFC Bank' },
                        { id: 'icici', name: 'ICICI Bank' },
                        { id: 'axis', name: 'Axis Bank' },
                        { id: 'kotak', name: 'Kotak Bank' },
                        { id: 'pnb', name: 'Punjab National' },
                      ].map((bank) => (
                        <button
                          key={bank.id}
                          type="button"
                          onClick={() => setSelectedBank(bank.id)}
                          className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                            selectedBank === bank.id
                              ? 'bg-purple-900/60 border-purple-400 text-white ring-2 ring-purple-500/30'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {bank.name}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <label className="text-[11px] font-bold text-slate-400 mb-1 block">Or select from other 50+ banks:</label>
                      <select 
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white outline-none focus:border-purple-500"
                      >
                        <option value="sbi">State Bank of India (SBI)</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                        <option value="bob">Bank of Baroda</option>
                        <option value="canara">Canara Bank</option>
                        <option value="union">Union Bank of India</option>
                        <option value="idbi">IDBI Bank</option>
                      </select>
                    </div>
                  </div>
                )}

              </div>

              {/* Functional Simulator Actions (Success vs Failure) */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Authorize & Pay:</span>
                  <span className="text-[10px] text-amber-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Sandbox Test Mode
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSimulatePayment('success')}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Pay ₹{selectedPrice.toLocaleString('en-IN')} (Simulate Success)</span>
                  </button>

                  <button
                    onClick={() => handleSimulatePayment('failure')}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-rose-950/80 text-rose-300 hover:text-rose-200 border border-slate-700 hover:border-rose-700/60 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
                  >
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>Simulate Payment Failure</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep('plans')}
                  className="text-xs text-slate-400 hover:text-white underline font-semibold"
                >
                  ← Back to Plans
                </button>

                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>RBI Compliant • 100% Secure Checkout</span>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 3: PROCESSING STATE                                       */}
          {/* ============================================================== */}
          {step === 'processing' && (
            <div className="py-12 text-center space-y-4">
              <div className="relative w-16 h-16 mx-auto">
                <div className="w-16 h-16 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin"></div>
                <Crown className="w-6 h-6 text-purple-400 absolute inset-0 m-auto" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-white">Verifying Secure Payment...</h3>
                <p className="text-xs text-slate-400">Communicating with banking gateway & activating Pro features</p>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 4: SUCCESS STATE (CONFETTI & PRO ACTIVATED)               */}
          {/* ============================================================== */}
          {step === 'success' && (
            <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/30">
                <Crown className="w-9 h-9 fill-slate-950" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-black uppercase">
                  Payment Verified • Active
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                  🎉 Welcome to Dhoondo Pro!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your store <strong>{currentStore.name}</strong> is now unlocked with <strong>Unlimited Product Listings</strong>, <strong>👑 Pro Verified Gold Badge</strong>, and Real-Time Customer Demand Alerts.
                </p>
              </div>

              {/* Unlocked Capabilities Summary */}
              <div className="grid grid-cols-2 gap-2 text-left max-w-md mx-auto bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Unlimited Products</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Gold Badge</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Customer Demand Radar</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>24/7 Dedicated Support</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="w-full max-w-md mx-auto py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Go to Retailer Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 5: FAILURE & RETRY STATE                                  */}
          {/* ============================================================== */}
          {step === 'failure' && (
            <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-white">Payment Unsuccessful</h3>
                <p className="text-xs text-rose-300 max-w-md mx-auto">
                  {failureReason}
                </p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 max-w-md mx-auto text-left space-y-1 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>No charges were debited from your account.</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  You can retry with another card or through NetBanking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto pt-2">
                <button
                  onClick={() => setStep('checkout')}
                  className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/25 flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Payment Again</span>
                </button>

                <button
                  onClick={handleClose}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>256-Bit SSL Secured SaaS Subscription</span>
          </div>

          <div className="text-[11px] text-slate-500">
            Cancel anytime with 1-click
          </div>
        </div>

      </div>
    </div>
  );
};
