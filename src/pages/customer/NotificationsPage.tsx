import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Check, 
  Trash2, 
  Tag, 
  TrendingDown, 
  Package, 
  Sparkles, 
  ArrowLeft, 
  Clock, 
  CheckCheck,
  Settings
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NotificationType } from '../../types';

export const NotificationsPage: React.FC = () => {
  const { 
    notifications, 
    markNotificationAsRead, 
    markAllNotificationsAsRead, 
    deleteNotification 
  } = useApp();

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === 'unread') return !n.read;
    if (activeFilter === 'stock') return n.type === 'stock_alert';
    if (activeFilter === 'price') return n.type === 'price_drop';
    if (activeFilter === 'offers') return n.type === 'offer';
    return true;
  });

  const getNotifIcon = (type: NotificationType) => {
    switch (type) {
      case 'stock_alert':
        return <Package className="w-5 h-5 text-emerald-600" />;
      case 'price_drop':
        return <TrendingDown className="w-5 h-5 text-blue-600" />;
      case 'offer':
        return <Tag className="w-5 h-5 text-amber-600" />;
      case 'demand_match':
        return <Sparkles className="w-5 h-5 text-orange-600" />;
      default:
        return <Bell className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <Link to="/" className="hover:text-brand-600 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span>Notification Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              <Bell className="w-7 h-7 text-brand-600" />
              <span>Notifications & Local Alerts</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={markAllNotificationsAsRead}
              className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <CheckCheck className="w-4 h-4 text-brand-600" />
              <span>Mark All Read</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'all', label: 'All Alerts' },
            { id: 'unread', label: 'Unread Only' },
            { id: 'stock', label: '📦 Back In Stock' },
            { id: 'price', label: '📉 Price Drops' },
            { id: 'offers', label: '🏷️ Store Offers' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`py-2 px-4 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeFilter === f.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Notification List */}
        {filteredNotifications.length === 0 ? (
          <div className="p-12 bg-white rounded-3xl border border-slate-200 text-center space-y-3 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Bell className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No Notifications</h3>
            <p className="text-xs text-slate-500">You're all caught up on nearby stock updates and price alerts!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => markNotificationAsRead(notif.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 cursor-pointer ${
                  notif.read
                    ? 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    : 'bg-brand-50/40 border-brand-300/80 shadow-sm text-slate-900'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-2xl shrink-0 ${
                    notif.read ? 'bg-slate-100' : 'bg-white shadow-sm border border-brand-200'
                  }`}>
                    {getNotifIcon(notif.type)}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-slate-900">
                        {notif.title}
                      </h4>
                      {!notif.read && (
                        <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {notif.message}
                    </p>

                    <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {notif.timestamp}
                      </span>
                      {notif.link && (
                        <Link
                          to={notif.link}
                          className="text-brand-700 font-bold hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Details →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notif.id);
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Delete notification"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
