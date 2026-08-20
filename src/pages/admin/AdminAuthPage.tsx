import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  EyeOff, 
  KeyRound,
  ArrowLeft,
  ShieldAlert,
  User,
  Building,
  Key
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminAuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialMode = (searchParams.get('mode') as 'signin' | 'signup' | 'forgot') || 
    (window.location.pathname.includes('signup') || window.location.pathname.includes('register') ? 'signup' : 
     window.location.pathname.includes('forgot') ? 'forgot' : 'signin');

  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  
  // Admin Sign In State
  const [adminUser, setAdminUser] = useState('admin@dhoondo.local');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);

  // Admin Sign Up / Create Account State
  const [fullName, setFullName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPhone, setAdminPhone] = useState('+91 ');
  const [adminRole, setAdminRole] = useState<'super_admin' | 'kyc_officer' | 'catalog_manager' | 'dispute_lead'>('super_admin');
  const [inviteKey, setInviteKey] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmSignupPassword, setConfirmSignupPassword] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [acceptedGovernance, setAcceptedGovernance] = useState(true);
  const [inviteKeyError, setInviteKeyError] = useState(false);

  // Forgot Password State
  const [forgotTarget, setForgotTarget] = useState('');
  const [forgotMethod, setForgotMethod] = useState<'email' | 'phone'>('email');
  const [otpStep, setOtpStep] = useState<'input' | 'otp' | 'new_password' | 'done'>('input');
  const [otpValue, setOtpValue] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setUserRole, updateUserProfile } = useApp();
  const navigate = useNavigate();

  const handleAdminSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setUserRole('admin');
    navigate('/admin/dashboard');
  };

  const handleQuickAdminDemo = () => {
    setUserRole('admin');
    navigate('/admin/dashboard');
  };

  // Handle Admin Sign Up
  const handleAdminSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Master Security Invite Key (or allow demo default)
    const validKey = 'DHOONDO-ADMIN-2026';
    if (inviteKey.trim().toUpperCase() !== validKey && inviteKey.trim() !== 'admin123' && inviteKey.trim() !== '') {
      setInviteKeyError(true);
      return;
    }

    setInviteKeyError(false);

    // Register & Assign Admin Role
    setUserRole('admin');
    updateUserProfile({
      name: fullName || 'Super Administrator',
      email: adminEmail || 'admin@dhoondo.local',
      phone: adminPhone || '+91 99000 00000',
      role: 'admin'
    });

    navigate('/admin/dashboard');
  };

  const handleSendAdminOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotTarget.trim()) return;
    setOtpStep('otp');
  };

  const handleVerifyAdminOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue.trim().length >= 4) {
      setOtpStep('new_password');
    }
  };

  const handleResetAdminPassword = (e: React.FormEvent) => {
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
      
      {/* Ambient background sky blue soft glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-300/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-lg w-full mx-auto space-y-6 relative z-10">
        
        {/* Top Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-sky-400 text-white flex items-center justify-center font-black shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-black text-2xl text-slate-900 tracking-tight">
              Dhoondo <span className="text-sky-600 text-sm font-bold bg-sky-100 px-2 py-0.5 rounded-lg border border-sky-200">Admin Hub</span>
            </span>
          </Link>

          <p className="text-xs text-slate-500">
            {authMode === 'signin' && 'Sign in to access platform governance, store KYC approvals, and macro analytics.'}
            {authMode === 'signup' && 'Create and provision a new platform administrator or governance officer account.'}
            {authMode === 'forgot' && 'Super Administrator credential recovery via 2-Factor Authentication.'}
          </p>
        </div>

        {/* Mode Switcher Tabs (Sign In / Create Admin Account) */}
        {authMode !== 'forgot' && (
          <div className="flex bg-sky-50/90 p-1.5 rounded-2xl border border-sky-200/80 backdrop-blur-md shadow-sm">
            <button
              type="button"
              onClick={() => setAuthMode('signin')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                authMode === 'signin'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Admin Sign In</span>
            </button>

            <button
              type="button"
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                authMode === 'signup'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Create Admin Account</span>
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 1. ADMIN SIGN IN TAB */}
        {/* ------------------------------------------------------------- */}
        {authMode === 'signin' && (
          <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-sky-500/5 space-y-6">
            
            <div className="flex items-center gap-2 pb-2 border-b border-sky-100 text-sky-700 text-xs font-bold">
              <KeyRound className="w-4 h-4 text-sky-500" />
              <span>Super Administrator Authentication</span>
            </div>

            <form onSubmit={handleAdminSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Admin Email / Master ID *
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-3 text-sky-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={adminUser}
                    onChange={(e) => setAdminUser(e.target.value)}
                    placeholder="admin@dhoondo.local"
                    className="w-full pl-10 pr-4 py-2.5 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Master Password *
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

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <span>Authorize & Open Admin Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-4 border-t border-sky-100 space-y-2">
              <button
                type="button"
                onClick={handleQuickAdminDemo}
                className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>1-Click Super Admin Demo Login</span>
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setAuthMode('signup')}
                  className="text-xs text-slate-600 hover:text-sky-700 font-medium"
                >
                  Need to provision a new admin officer? <strong className="text-sky-600 underline font-bold">Create Admin Account</strong>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 2. CREATE ADMIN ACCOUNT (SIGN UP) TAB */}
        {/* ------------------------------------------------------------- */}
        {authMode === 'signup' && (
          <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-sky-500/5 space-y-6">
            
            <div className="flex items-center gap-2 pb-2 border-b border-sky-100 text-sky-700 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-sky-500" />
              <span>Admin Personnel Provisioning & Onboarding</span>
            </div>

            <form onSubmit={handleAdminSignUp} className="space-y-4">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rohan Sharma"
                      className="w-full pl-9 pr-3 py-2 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Emergency / 2FA Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={adminPhone}
                      onChange={(e) => setAdminPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Official Admin Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Official Work / Organization Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="rohan.admin@dhoondo.local"
                    className="w-full pl-9 pr-3 py-2 bg-sky-50/50 border border-sky-200/90 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              {/* Department Role Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Administrative Department & Access Tier *
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setAdminRole('super_admin')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      adminRole === 'super_admin'
                        ? 'bg-sky-100 border-sky-400 text-sky-900 font-bold'
                        : 'bg-sky-50/40 border-sky-100 text-slate-600 hover:border-sky-300'
                    }`}
                  >
                    <div className="font-bold text-[11px] text-slate-900">🛡️ Super Admin</div>
                    <div className="text-[10px] text-slate-500 truncate">Root Platform Governance</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminRole('kyc_officer')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      adminRole === 'kyc_officer'
                        ? 'bg-sky-100 border-sky-400 text-sky-900 font-bold'
                        : 'bg-sky-50/40 border-sky-100 text-slate-600 hover:border-sky-300'
                    }`}
                  >
                    <div className="font-bold text-[11px] text-slate-900">🏬 Store KYC Officer</div>
                    <div className="text-[10px] text-slate-500 truncate">Merchant Verification</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminRole('catalog_manager')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      adminRole === 'catalog_manager'
                        ? 'bg-sky-100 border-sky-400 text-sky-900 font-bold'
                        : 'bg-sky-50/40 border-sky-100 text-slate-600 hover:border-sky-300'
                    }`}
                  >
                    <div className="font-bold text-[11px] text-slate-900">🏷️ Catalog Lead</div>
                    <div className="text-[10px] text-slate-500 truncate">Category & SKU Approval</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminRole('dispute_lead')}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      adminRole === 'dispute_lead'
                        ? 'bg-sky-100 border-sky-400 text-sky-900 font-bold'
                        : 'bg-sky-50/40 border-sky-100 text-slate-600 hover:border-sky-300'
                    }`}
                  >
                    <div className="font-bold text-[11px] text-slate-900">⚖️ Trust & Safety</div>
                    <div className="text-[10px] text-slate-500 truncate">Dispute Management</div>
                  </button>
                </div>
              </div>

              {/* Master Invitation / Authorization Code */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Master Security Key / Authorization Code *
                  </label>
                  <button
                    type="button"
                    onClick={() => setInviteKey('DHOONDO-ADMIN-2026')}
                    className="text-[11px] text-sky-600 hover:underline font-bold"
                  >
                    ⚡ Auto-fill Key (DHOONDO-ADMIN-2026)
                  </button>
                </div>
                <div className="relative">
                  <Key className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={inviteKey}
                    onChange={(e) => {
                      setInviteKey(e.target.value);
                      setInviteKeyError(false);
                    }}
                    placeholder="DHOONDO-ADMIN-2026"
                    className={`w-full pl-9 pr-3 py-2 bg-sky-50/50 border rounded-xl text-xs text-slate-900 font-mono uppercase focus:bg-white focus:border-sky-500 outline-none ${
                      inviteKeyError ? 'border-rose-500' : 'border-sky-200'
                    }`}
                  />
                </div>
                {inviteKeyError && (
                  <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                    Invalid Master Authorization Key. Use DHOONDO-ADMIN-2026 or click Auto-fill.
                  </p>
                )}
              </div>

              {/* Password & Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Master Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                    <input
                      type={showSignupPassword ? 'text' : 'password'}
                      required
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-8 py-2 bg-sky-50/50 border border-sky-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPassword(!showSignupPassword)}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                      {showSignupPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-sky-500 absolute left-3 top-3" />
                    <input
                      type={showSignupPassword ? 'text' : 'password'}
                      required
                      value={confirmSignupPassword}
                      onChange={(e) => setConfirmSignupPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 bg-sky-50/50 border border-sky-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Compliance Agreement */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="governance"
                  checked={acceptedGovernance}
                  onChange={(e) => setAcceptedGovernance(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-sky-500 rounded"
                  required
                />
                <label htmlFor="governance" className="text-[11px] text-slate-600">
                  I agree to abide by Dhoondo Master Platform Governance, Retailer Confidentiality & Information Security Protocols.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <span>Create Admin Account & Open Dashboard</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center pt-2 border-t border-sky-100">
              <button
                type="button"
                onClick={() => setAuthMode('signin')}
                className="text-xs text-slate-600 hover:text-sky-700 font-medium"
              >
                Already have an Admin account? <strong className="text-sky-600 underline font-bold">Sign In</strong>
              </button>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 3. ADMIN FORGOT PASSWORD (EMAIL / PHONE OTP) */}
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
                <span>Back to Admin Sign In</span>
              </button>

              <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                2-Factor Recovery
              </span>
            </div>

            {otpStep === 'input' && (
              <form onSubmit={handleSendAdminOtp} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 text-base">Admin Credential Recovery</h3>
                  <p className="text-xs text-slate-500">
                    Receive a 2FA recovery code to your registered admin endpoint:
                  </p>
                </div>

                <div className="flex bg-sky-50 p-1 rounded-xl border border-sky-200 text-xs">
                  <button
                    type="button"
                    onClick={() => setForgotMethod('email')}
                    className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                      forgotMethod === 'email' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-sky-700'
                    }`}
                  >
                    📧 Admin Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setForgotMethod('phone')}
                    className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                      forgotMethod === 'phone' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-sky-700'
                    }`}
                  >
                    📱 Master Mobile OTP
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {forgotMethod === 'email' ? 'Registered Super Admin Email *' : 'Registered Master Phone *'}
                  </label>
                  <input
                    type={forgotMethod === 'email' ? 'email' : 'tel'}
                    required
                    value={forgotTarget}
                    onChange={(e) => setForgotTarget(e.target.value)}
                    placeholder={forgotMethod === 'email' ? 'admin@dhoondo.local' : '+91 99000 00000'}
                    className="w-full px-3.5 py-2.5 bg-sky-50/50 border border-sky-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-sky-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <span>Send 2FA Security Code</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {otpStep === 'otp' && (
              <form onSubmit={handleVerifyAdminOtp} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 text-base">Enter 4-Digit 2FA Code</h3>
                  <p className="text-xs text-slate-500">
                    Security code sent to <strong>{forgotTarget}</strong>
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    maxLength={4}
                    required
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                    placeholder="9 9 9 9"
                    className="w-full tracking-widest text-center font-mono text-2xl font-black py-3 bg-sky-50 border-2 border-sky-400 rounded-xl text-slate-900 outline-none focus:bg-white"
                    autoFocus
                  />
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                    <button
                      type="button"
                      onClick={() => setOtpValue('9999')}
                      className="text-sky-600 font-bold hover:underline"
                    >
                      ⚡ Auto-fill 2FA Code (9999)
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-black text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <span>Verify & Proceed to Reset</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {otpStep === 'new_password' && (
              <form onSubmit={handleResetAdminPassword} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 text-base">Set New Admin Master Password</h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">New Master Password *</label>
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Confirm Master Password *</label>
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
                  <span>Update Credentials & Sign In</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </form>
            )}

            {otpStep === 'done' && (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Admin Password Reset!</h3>
                <p className="text-xs text-slate-500">Redirecting to Super Admin Sign In...</p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
