import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  Store, 
  Lock, 
  Phone, 
  Mail, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  EyeOff, 
  KeyRound, 
  ShieldCheck, 
  MapPin,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RetailerAuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialMode = (searchParams.get('mode') as 'signin' | 'signup' | 'forgot') || 
    (window.location.pathname.includes('register') || window.location.pathname.includes('signup') ? 'signup' : 
     window.location.pathname.includes('forgot') ? 'forgot' : 'signin');

  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  
  // Auth Forms State
  const [identifier, setIdentifier] = useState(''); // email or phone
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Sign Up State
  const [name, setName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [email, setEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [categoryIds, setCategoryIds] = useState<string[]>(['cat-automobile']);
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('Koramangala 4th Block');
  const [city, setCity] = useState('Bengaluru');
  const [gstNumber, setGstNumber] = useState('');

  // Forgot Password State
  const [forgotTarget, setForgotTarget] = useState(''); // phone or email
  const [forgotMethod, setForgotMethod] = useState<'phone' | 'email'>('phone');
  const [otpStep, setOtpStep] = useState<'input' | 'otp' | 'new_password' | 'done'>('input');
  const [otpValue, setOtpValue] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpTimer, setOtpTimer] = useState(45);

  const { stores, categories, setUserRole, registerNewStore } = useApp();
  const navigate = useNavigate();

  // Handle Retailer Sign In
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Match existing store or fallback to default Sharma Auto Parts
    const matchedStore = stores.find(s => 
      s.phone.includes(identifier.replace(/[^0-9]/g, '')) || 
      (s.email && s.email.toLowerCase() === identifier.toLowerCase())
    ) || stores[0];

    setUserRole('retailer', matchedStore.id);
    navigate('/retailer/dashboard');
  };

  // Quick Demo Logins
  const handleQuickDemoLogin = (storeId: string) => {
    setUserRole('retailer', storeId);
    navigate('/retailer/dashboard');
  };

  // Handle Retailer Sign Up / Register Store
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const newStoreId = registerNewStore({
      name: name || 'New Neighborhood Store',
      ownerName: ownerName || 'Proprietor',
      phone: phone.replace(/[^0-9]/g, '') || '9845012345',
      whatsapp: phone.replace(/[^0-9]/g, '') || '9845012345',
      email: email || `${(name || 'store').toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      categoryIds,
      verified: true,
      address: address || 'Shop #12, Main Road',
      area: area || 'Koramangala',
      city: city || 'Bengaluru',
      pincode: '560034',
      coordinates: { lat: 12.9352 + (Math.random() - 0.5) * 0.02, lng: 77.6245 + (Math.random() - 0.5) * 0.02 },
      openingHours: '9:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['UPI Accepted', 'Counter Billing', 'Home Delivery'],
      about: `${name} is a verified local retailer on Dhoondo.`
    });

    setUserRole('retailer', newStoreId);
    navigate('/retailer/dashboard');
  };

  // Handle Forgot Password Flow
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotTarget.trim()) return;
    setOtpStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue.trim().length >= 4) {
      setOtpStep('new_password');
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword === confirmPassword) {
      setOtpStep('done');
      setTimeout(() => {
        setAuthMode('signin');
        setOtpStep('input');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50/70 text-slate-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Background ambient sky blue radial gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-300/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-xl w-full mx-auto space-y-6 relative z-10">
        
        {/* Top Header Logo */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-sky-400 text-white flex items-center justify-center font-black shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform">
              <Store className="w-6 h-6" />
            </div>
            <span className="font-black text-2xl text-slate-900 tracking-tight">
              Dhoondo <span className="text-sky-600 text-sm font-bold bg-sky-100 px-2 py-0.5 rounded-lg border border-sky-200">Merchant Portal</span>
            </span>
          </Link>

          <p className="text-xs text-slate-500">
            {authMode === 'signin' && 'Sign in to access your live store inventory, demand radar, and customer orders.'}
            {authMode === 'signup' && 'Take your local store online in 2 minutes. Free digital storefront for neighborhood retailers.'}
            {authMode === 'forgot' && 'Reset your store password securely via registered Phone or Email OTP.'}
          </p>
        </div>

        {/* Auth Mode Toggle Tabs (Sign In / Register Store) */}
        {authMode !== 'forgot' && (
          <div className="flex bg-sky-50/90 p-1.5 rounded-2xl border border-sky-200/80 backdrop-blur-md shadow-sm">
            <button
              onClick={() => setAuthMode('signin')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                authMode === 'signin'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Merchant Sign In</span>
            </button>

            <button
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                authMode === 'signup'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Merchant Sign Up (Register Store)</span>
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 1. SIGN IN FORM */}
        {/* ------------------------------------------------------------- */}
        {authMode === 'signin' && (
          <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-sky-500/5 space-y-6">
            
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Registered Mobile Number or Email Address *
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-3 text-sky-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="+91 98450 12345 or store@sharmaauto.in"
                    className="w-full pl-10 pr-4 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Store Password *
                  </label>
                  <button
                    type="button"
                    onClick={() => setAuthMode('forgot')}
                    className="text-xs text-sky-600 hover:text-sky-700 font-bold"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute left-3.5 top-3 text-sky-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-sky-500 bg-sky-50 border-sky-300 focus:ring-sky-500"
                  />
                  <span>Keep me signed in on this counter</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <span>Sign In to Merchant Counter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick 1-Click Demo Accounts */}
            <div className="pt-4 border-t border-sky-100 space-y-3">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                Or 1-Click Instant Demo Login
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('store-sharma-auto')}
                  className="p-3 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200 text-left transition-all group shadow-sm"
                >
                  <div className="font-bold text-xs text-slate-900 group-hover:text-sky-700 flex items-center justify-between">
                    <span>Sharma Auto Parts</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-200/80 text-sky-800 font-bold">Auto Spares</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Koramangala 4th Block • Verified</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('store-sanjeevani-med')}
                  className="p-3 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200 text-left transition-all group shadow-sm"
                >
                  <div className="font-bold text-xs text-slate-900 group-hover:text-sky-700 flex items-center justify-between">
                    <span>Sanjeevani Medicos</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">Pharmacy</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Indiranagar 100ft Rd • Rx Verified</div>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 2. SIGN UP / REGISTER STORE FORM */}
        {/* ------------------------------------------------------------- */}
        {authMode === 'signup' && (
          <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-sky-500/5 space-y-6">
            
            <div className="flex items-center gap-2 pb-2 border-b border-sky-100 text-sky-700 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Digital Storefront Onboarding (Free Merchant Account)</span>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Store / Business Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mahalakshmi Auto Spares"
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Proprietor Name *</label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile (WhatsApp for Orders) *</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98450 12345"
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Set Counter Password *</label>
                  <input
                    type="password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Retail Category *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {categories.slice(0, 8).map((cat) => {
                    const isSelected = categoryIds.includes(cat.id);
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setCategoryIds([cat.id])}
                        className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all text-left ${
                          isSelected
                            ? 'bg-sky-500 text-white shadow-md'
                            : 'bg-sky-50/60 border border-sky-200 text-slate-700 hover:bg-sky-100'
                        }`}
                      >
                        <span>{cat.emoji}</span>
                        <span className="truncate">{cat.name.split('&')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Shop Address & Landmark *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Shop #12, 80ft Road..."
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
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
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95 mt-2"
              >
                <span>Activate Store & Open Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-slate-500">Already registered? </span>
                <button
                  type="button"
                  onClick={() => setAuthMode('signin')}
                  className="text-xs font-bold text-sky-600 hover:underline"
                >
                  Sign in here
                </button>
              </div>
            </form>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 3. FORGOT PASSWORD (EMAIL OR PHONE NUMBER OTP FLOW) */}
        {/* ------------------------------------------------------------- */}
        {authMode === 'forgot' && (
          <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-sky-500/5 space-y-6">
            
            <div className="flex items-center justify-between pb-2 border-b border-sky-100">
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

              <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                Recovery via OTP
              </span>
            </div>

            {/* Step 1: Input Phone or Email */}
            {otpStep === 'input' && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 text-base">Reset Your Store Password</h3>
                  <p className="text-xs text-slate-500">
                    Choose how you want to receive your 4-digit verification code:
                  </p>
                </div>

                <div className="flex bg-sky-50 p-1 rounded-xl border border-sky-200 text-xs">
                  <button
                    type="button"
                    onClick={() => setForgotMethod('phone')}
                    className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                      forgotMethod === 'phone' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-sky-700'
                    }`}
                  >
                    📱 Mobile SMS / WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setForgotMethod('email')}
                    className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                      forgotMethod === 'email' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-sky-700'
                    }`}
                  >
                    📧 Email Address
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {forgotMethod === 'phone' ? 'Enter Registered Mobile Number *' : 'Enter Registered Email Address *'}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-3 text-sky-500">
                      {forgotMethod === 'phone' ? <Phone className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                    </div>
                    <input
                      type={forgotMethod === 'phone' ? 'tel' : 'email'}
                      required
                      value={forgotTarget}
                      onChange={(e) => setForgotTarget(e.target.value)}
                      placeholder={forgotMethod === 'phone' ? '+91 98450 12345' : 'owner@sharmaauto.in'}
                      className="w-full pl-10 pr-4 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <span>Send 4-Digit OTP Code</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Step 2: Enter OTP */}
            {otpStep === 'otp' && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 text-base">Enter 4-Digit Code</h3>
                  <p className="text-xs text-slate-500">
                    We sent a verification code to <strong>{forgotTarget}</strong>
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    maxLength={4}
                    required
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                    placeholder="1 2 3 4"
                    className="w-full tracking-widest text-center font-mono text-2xl font-black py-3 bg-sky-50 border-2 border-sky-400 rounded-xl text-slate-900 outline-none focus:bg-white"
                    autoFocus
                  />
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                    <button
                      type="button"
                      onClick={() => setOtpValue('1234')}
                      className="text-sky-600 font-bold hover:underline"
                    >
                      ⚡ Auto-fill Demo OTP (1234)
                    </button>
                    <span>Resend in {otpTimer}s</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <span>Verify OTP & Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Step 3: Set New Password */}
            {otpStep === 'new_password' && (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 text-base">Create New Password</h3>
                  <p className="text-xs text-slate-500">
                    Set a new strong password for your retail store counter.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">New Password *</label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Confirm New Password *</label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <span>Save New Password & Sign In</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Step 4: Done */}
            {otpStep === 'done' && (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Password Reset Successfully!</h3>
                <p className="text-xs text-slate-500">Redirecting to Sign In...</p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
