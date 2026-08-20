import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Store, ShieldCheck, Check, X, ArrowRight, Sparkles, KeyRound, Lock } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { user, setUserRole } = useApp();
  const [selectedRole, setSelectedRole] = useState<UserRole>(user.role);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Account & Persona Portal</span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-white">
            Choose Your Portal & Sign In
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Access Dhoondo customer discovery, merchant operations, or platform administration.
          </p>
        </div>

        {/* Roles & Auth Links */}
        <div className="p-6 space-y-4">
          
          {/* 1. Customer Card */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="font-bold text-slate-900 text-sm">Customer / Shopper</span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Find nearby products, compare prices & stocks, request demand alerts.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  setUserRole('customer');
                  handleNavigate('/profile');
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors text-center"
              >
                Shopper Profile & Orders
              </button>
              <button
                onClick={() => {
                  setUserRole('customer');
                  handleNavigate('/');
                }}
                className="py-2 px-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
              >
                Explore Nearby
              </button>
            </div>
          </div>

          {/* 2. Retailer / Merchant Card with Sign In & Sign Up buttons */}
          <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/40 space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Store className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Local Retailer / Merchant</span>
                  <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full font-bold">Store SaaS</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage live counter inventory, price matrices, customer enquiries & demand radar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => handleNavigate('/retailer/login')}
                className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <KeyRound className="w-3.5 h-3.5 text-brand-400" />
                <span>Retailer Sign In</span>
              </button>

              <button
                onClick={() => handleNavigate('/retailer/register')}
                className="py-2 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Store className="w-3.5 h-3.5" />
                <span>Register Store (Sign Up)</span>
              </button>
            </div>
          </div>

          {/* 3. Platform Admin Card with Sign In & Sign Up buttons */}
          <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/40 space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Super Admin & Governance</span>
                  <span className="text-[10px] px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full font-bold">Root Access</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Store KYC verification approvals, catalog taxonomy, broadcast alerts & audit controls.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => handleNavigate('/admin/login')}
                className="py-2 px-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <KeyRound className="w-3.5 h-3.5 text-purple-200" />
                <span>Admin Sign In</span>
              </button>

              <button
                onClick={() => handleNavigate('/admin/signup')}
                className="py-2 px-3 rounded-xl bg-purple-900 hover:bg-purple-950 text-purple-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Create Admin Account</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
