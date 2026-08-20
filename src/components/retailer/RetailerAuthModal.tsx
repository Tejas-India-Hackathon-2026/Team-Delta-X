import React, { useState } from 'react';
import { 
  X, 
  Store, 
  Lock, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  EyeOff, 
  KeyRound, 
  ShieldCheck, 
  ArrowLeft 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface RetailerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup' | 'forgot';
}

export const RetailerAuthModal: React.FC<RetailerAuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signin'
}) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  
  // Sign In State
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Sign Up State
  const [name, setName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [email, setEmail] = useState('');
  const [categoryIds, setCategoryIds] = useState<string[]>(['cat-automobile']);
  const [area, setArea] = useState('Koramangala 4th Block');
  const [address, setAddress] = useState('');

  // Forgot Password State
  const [forgotTarget, setForgotTarget] = useState('');
  const [forgotMethod, setForgotMethod] = useState<'phone' | 'email'>('phone');
  const [otpStep, setOtpStep] = useState<'input' | 'otp' | 'new_password' | 'done'>('input');
  const [otpValue, setOtpValue] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { stores, categories, setUserRole, registerNewStore } = useApp();

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedStore = stores.find(s => 
      s.phone.includes(identifier.replace(/[^0-9]/g, '')) || 
      (s.email && s.email.toLowerCase() === identifier.toLowerCase())
    ) || stores[0];

    setUserRole('retailer', matchedStore.id);
    onClose();
  };

  const handleQuickLogin = (storeId: string) => {
    setUserRole('retailer', storeId);
    onClose();
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const newStoreId = registerNewStore({
      name: name || 'Neighborhood Retailer Store',
      ownerName: ownerName || 'Store Owner',
      phone: phone.replace(/[^0-9]/g, '') || '9845012345',
      whatsapp: phone.replace(/[^0-9]/g, '') || '9845012345',
      email: email || 'store@dhoondo.in',
      categoryIds,
      verified: true,
      address: address || 'Shop #14, Main Market',
      area: area || 'Koramangala',
      city: 'Bengaluru',
      pincode: '560034',
      coordinates: { lat: 12.9352 + (Math.random() - 0.5) * 0.02, lng: 77.6245 + (Math.random() - 0.5) * 0.02 },
      openingHours: '9:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['UPI Accepted', 'Counter Billing'],
      about: `${name} is verified on Dhoondo.`
    });

    setUserRole('retailer', newStoreId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-slate-900 max-h-[90vh] overflow-y-auto font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-sky-50 text-slate-400 hover:text-slate-700 hover:bg-sky-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-sky-400 text-white flex items-center justify-center font-black shadow-md shadow-sky-500/20">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900">
              {authMode === 'signin' && 'Retailer Sign In'}
              {authMode === 'signup' && 'Register New Store (Free Sign Up)'}
              {authMode === 'forgot' && 'Reset Store Password'}
            </h2>
            <p className="text-xs text-slate-500">
              Dhoondo Hyperlocal Merchant Portal
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        {authMode !== 'forgot' && (
          <div className="flex bg-sky-50 p-1 rounded-2xl border border-sky-200 text-xs shadow-sm">
            <button
              onClick={() => setAuthMode('signin')}
              className={`flex-1 py-2 rounded-xl font-bold transition-all ${
                authMode === 'signin'
                  ? 'bg-sky-500 text-white shadow-md font-extrabold'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2 rounded-xl font-bold transition-all ${
                authMode === 'signup'
                  ? 'bg-sky-500 text-white shadow-md font-extrabold'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              Sign Up / Register Store
            </button>
          </div>
        )}

        {/* 1. SIGN IN TAB */}
        {authMode === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number or Email *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="+91 98450 12345 or store@sharmaauto.in"
                  className="w-full pl-9 pr-4 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">Password *</label>
                <button
                  type="button"
                  onClick={() => setAuthMode('forgot')}
                  className="text-xs text-sky-600 hover:underline font-bold"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-1.5 transition-all transform active:scale-95"
            >
              <span>Sign In & Open Counter</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-3 border-t border-sky-100 space-y-2">
              <div className="text-[10px] uppercase font-bold text-slate-500 text-center">
                1-Click Quick Demo Login
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickLogin('store-sharma-auto')}
                  className="p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-left border border-sky-200 text-xs text-sky-900 font-bold"
                >
                  Sharma Auto Parts
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickLogin('store-sanjeevani-med')}
                  className="p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-left border border-sky-200 text-xs text-emerald-900 font-bold"
                >
                  Sanjeevani Medicos
                </button>
              </div>
            </div>
          </form>
        )}

        {/* 2. SIGN UP / REGISTER STORE TAB */}
        {authMode === 'signup' && (
          <form onSubmit={handleSignUp} className="space-y-3.5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Store Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mahalakshmi Spares"
                  className="w-full px-3 py-2 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Proprietor Name *</label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="e.g. Ramesh"
                  className="w-full px-3 py-2 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mobile (WhatsApp Ready) *</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98450 12345"
                className="w-full px-3 py-2 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Neighborhood Area *</label>
              <input
                type="text"
                required
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Koramangala 4th Block"
                className="w-full px-3 py-2 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-1.5 mt-2 transition-all transform active:scale-95"
            >
              <span>Create Store & Activate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* 3. FORGOT PASSWORD TAB */}
        {authMode === 'forgot' && (
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => {
                setAuthMode('signin');
                setOtpStep('input');
              }}
              className="text-xs text-slate-600 hover:text-sky-700 flex items-center gap-1 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sign In</span>
            </button>

            {otpStep === 'input' && (
              <div className="space-y-3">
                <div className="flex bg-sky-50 p-1 rounded-xl text-xs border border-sky-200">
                  <button
                    type="button"
                    onClick={() => setForgotMethod('phone')}
                    className={`flex-1 py-1.5 rounded-lg font-bold ${
                      forgotMethod === 'phone' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Mobile Phone OTP
                  </button>
                  <button
                    type="button"
                    onClick={() => setForgotMethod('email')}
                    className={`flex-1 py-1.5 rounded-lg font-bold ${
                      forgotMethod === 'email' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Email Address
                  </button>
                </div>

                <input
                  type={forgotMethod === 'phone' ? 'tel' : 'email'}
                  required
                  value={forgotTarget}
                  onChange={(e) => setForgotTarget(e.target.value)}
                  placeholder={forgotMethod === 'phone' ? '+91 98450 12345' : 'store@sharmaauto.in'}
                  className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-xl text-xs text-slate-900 outline-none focus:bg-white focus:border-sky-500"
                />

                <button
                  type="button"
                  onClick={() => setOtpStep('otp')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/20"
                >
                  Send OTP Code
                </button>
              </div>
            )}

            {otpStep === 'otp' && (
              <div className="space-y-3">
                <input
                  type="text"
                  maxLength={4}
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  placeholder="1 2 3 4"
                  className="w-full text-center font-mono text-xl font-black py-2.5 bg-sky-50 border border-sky-400 rounded-xl text-slate-900 outline-none focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setOtpValue('1234')}
                  className="text-xs text-sky-600 underline block text-center font-bold"
                >
                  Auto-fill Demo Code (1234)
                </button>
                <button
                  type="button"
                  onClick={() => setOtpStep('new_password')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/20"
                >
                  Verify Code
                </button>
              </div>
            )}

            {otpStep === 'new_password' && (
              <div className="space-y-3">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  className="w-full px-3 py-2 bg-sky-50/50 border border-sky-200 rounded-xl text-xs text-slate-900 outline-none focus:bg-white focus:border-sky-500"
                />
                <button
                  type="button"
                  onClick={() => {
                    setOtpStep('done');
                    setTimeout(() => {
                      setAuthMode('signin');
                      setOtpStep('input');
                    }, 1500);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/20"
                >
                  Update & Sign In
                </button>
              </div>
            )}

            {otpStep === 'done' && (
              <div className="p-4 text-center text-emerald-600 font-bold text-xs bg-emerald-50 rounded-xl border border-emerald-200">
                ✓ Password Reset! Returning to Sign In...
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
