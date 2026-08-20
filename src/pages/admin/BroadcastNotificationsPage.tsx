import React, { useState } from 'react';
import { Bell, Send, Check, Sparkles, Users, Store } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';

export const BroadcastNotificationsPage: React.FC = () => {
  const { addNotification } = useApp();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [targetAudience, setTargetAudience] = useState<'all' | 'customers' | 'retailers'>('all');
  const [sent, setSent] = useState(false);

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification({
      type: 'system',
      title: `📢 ${title}`,
      message,
      link: '/'
    });
    setTitle('');
    setMessage('');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <AdminSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="pb-6 border-b border-slate-800">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Bell className="w-7 h-7 text-purple-400" />
            <span>Platform Broadcast & Notification Center</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Push real-time system alerts, festive announcements, or operational updates across the platform
          </p>
        </div>

        {/* Form Box */}
        <form onSubmit={handleBroadcast} className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl max-w-2xl">
          
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2">Target Audience *</label>
            <div className="grid grid-cols-3 gap-3 text-xs">
              {[
                { id: 'all', label: 'All Users & Retailers' },
                { id: 'customers', label: 'Shoppers Only' },
                { id: 'retailers', label: 'Merchants Only' }
              ].map((aud) => (
                <button
                  key={aud.id}
                  type="button"
                  onClick={() => setTargetAudience(aud.id as any)}
                  className={`p-3 rounded-2xl font-bold transition-all ${
                    targetAudience === aud.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {aud.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Announcement Headline *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Monsoon Local Shopping Fest: Verified Stores offering Special Counter Discounts!"
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Notification Body *</label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Discover nearest stockists, compare prices, and support your local neighborhood kiranas..."
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:border-purple-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/30"
            >
              <Send className="w-4 h-4" />
              <span>Broadcast Notification Now</span>
            </button>

            {sent && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> Notification Broadcasted Successfully!
              </span>
            )}
          </div>

        </form>

      </main>
    </div>
  );
};
