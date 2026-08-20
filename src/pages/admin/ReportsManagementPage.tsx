import React, { useState } from 'react';
import { Flag, AlertTriangle, Check, ShieldCheck, Trash2, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

interface ReportItem {
  id: string;
  type: 'price_mismatch' | 'fake_review' | 'counterfeit_part' | 'inappropriate_content';
  targetName: string;
  targetType: 'store' | 'product' | 'review';
  reportedBy: string;
  reason: string;
  date: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

const INITIAL_REPORTS: ReportItem[] = [
  {
    id: 'rep-01',
    type: 'price_mismatch',
    targetName: 'City Auto Parts Hub',
    targetType: 'store',
    reportedBy: 'Karthik Rao',
    reason: 'Listed price was ₹480 on Dhoondo app, but counter requested ₹510 on physical visit.',
    date: 'Today, 11:30 AM',
    status: 'pending'
  },
  {
    id: 'rep-02',
    type: 'counterfeit_part',
    targetName: 'Honda Shine Front Brake Pad',
    targetType: 'product',
    reportedBy: 'Vipin Sharma',
    reason: 'Suspicious aftermarket box without Hologram seal reported in non-verified store.',
    date: 'Yesterday',
    status: 'pending'
  },
  {
    id: 'rep-03',
    type: 'fake_review',
    targetName: 'Sanjeevani Medicos Review #41',
    targetType: 'review',
    reportedBy: 'Automated Bot Filter',
    reason: 'Repetitive spam text detected from temporary IP subnet.',
    date: '2 days ago',
    status: 'resolved'
  }
];

export const ReportsManagementPage: React.FC = () => {
  const [reports, setReports] = useState<ReportItem[]>(INITIAL_REPORTS);

  const handleResolve = (id: string) => {
    setReports(prev => prev.map(r => r.id === id ? { ...r, status: 'resolved' } : r));
  };

  const handleDismiss = (id: string) => {
    setReports(prev => prev.map(r => r.id === id ? { ...r, status: 'dismissed' } : r));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Flag className="w-7 h-7 text-rose-400" />
              <span>Trust, Safety & Moderation Reports</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Investigate consumer pricing discrepancies, counterfeit flags, and review moderation
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs">
            {reports.filter(r => r.status === 'pending').length} Pending Issues
          </span>
        </div>

        {/* Reports Grid */}
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`p-6 rounded-3xl border transition-all space-y-3 ${
                report.status === 'resolved'
                  ? 'bg-slate-900/60 border-slate-800 opacity-60'
                  : 'bg-slate-900 border-rose-500/30 shadow-lg'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-rose-500/20 text-rose-400 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-sm">
                      {report.targetName}
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      Reported by: <strong>{report.reportedBy}</strong> • {report.date}
                    </span>
                  </div>
                </div>

                <div>
                  {report.status === 'pending' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold text-[10px]">
                      Action Required
                    </span>
                  ) : report.status === 'resolved' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                      ✓ Resolved
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-bold text-[10px]">
                      Dismissed
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-300 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                “{report.reason}”
              </p>

              {report.status === 'pending' && (
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleDismiss(report.id)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white font-semibold text-xs"
                  >
                    Dismiss Flag
                  </button>

                  <button
                    onClick={() => handleResolve(report.id)}
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                  >
                    Resolve & Warn Store
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};
