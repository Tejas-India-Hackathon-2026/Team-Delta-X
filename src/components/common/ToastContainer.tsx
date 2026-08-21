import React from 'react';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
          error: <XCircle className="w-5 h-5 text-rose-500 shrink-0" />,
          warning: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />,
          info: <Info className="w-5 h-5 text-blue-500 shrink-0" />
        };

        const bgColors = {
          success: 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100',
          error: 'bg-rose-950/90 border-rose-500/40 text-rose-100',
          warning: 'bg-amber-950/90 border-amber-500/40 text-amber-100',
          info: 'bg-blue-950/90 border-blue-500/40 text-blue-100'
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-2xl border backdrop-blur-md shadow-xl flex items-start gap-3 transform transition-all animate-bounce-short ${bgColors[toast.type]}`}
          >
            {icons[toast.type]}
            <div className="flex-1">
              <h5 className="text-xs font-bold text-white">{toast.title}</h5>
              {toast.message && <p className="text-[11px] text-slate-300 mt-0.5">{toast.message}</p>}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-slate-400 hover:text-white p-0.5 rounded-lg transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
