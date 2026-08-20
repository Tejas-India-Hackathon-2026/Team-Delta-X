import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Send, 
  Check, 
  Clock, 
  MessageCircle, 
  Sparkles,
  Package
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RetailerSidebar } from '../../components/retailer/RetailerSidebar';

export const EnquiriesPage: React.FC = () => {
  const { user, stores, enquiries, replyToEnquiry } = useApp();
  const currentStore = stores.find(s => s.id === (user.storeId || 'store-sharma-auto')) || stores[0];

  const storeEnquiries = enquiries.filter(e => e.storeId === currentStore.id);
  const [replyTextMap, setReplyTextMap] = useState<Record<string, string>>({});

  const handleSendReply = (enquiryId: string) => {
    const text = replyTextMap[enquiryId];
    if (!text || !text.trim()) return;
    replyToEnquiry(enquiryId, text.trim());
    setReplyTextMap(prev => ({ ...prev, [enquiryId]: '' }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <RetailerSidebar />

      <main className="flex-1 p-4 sm:p-8 space-y-6 overflow-y-auto max-h-screen">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <MessageSquare className="w-7 h-7 text-blue-400" />
              <span>Customer Enquiries Inbox</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Direct inquiries and availability requests received from nearby customers
            </p>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold">
            {storeEnquiries.length} Total Enquiries
          </span>
        </div>

        {/* List */}
        {storeEnquiries.length === 0 ? (
          <div className="p-12 bg-slate-900 rounded-3xl border border-slate-800 text-center space-y-3">
            <MessageSquare className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No Customer Inquiries Yet</h3>
            <p className="text-xs text-slate-400">Incoming inquiries from shoppers will appear here in real-time.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {storeEnquiries.map((enq) => {
              const whatsappReplyUrl = `https://wa.me/${enq.customerPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${enq.customerName}, replying from ${currentStore.name}: `)}`;

              return (
                <div
                  key={enq.id}
                  className="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-4 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/30">
                        {enq.customerName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{enq.customerName}</div>
                        <div className="text-xs text-slate-400">{enq.customerPhone}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {enq.createdAt}
                      </span>
                      {enq.status === 'replied' ? (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                          ✓ Replied
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-[10px] animate-pulse">
                          New Message
                        </span>
                      )}
                    </div>
                  </div>

                  {enq.productName && (
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs flex items-center justify-between">
                      <span className="text-slate-300 font-semibold flex items-center gap-2">
                        <Package className="w-4 h-4 text-brand-400" />
                        <span>Regarding: <strong>{enq.productName}</strong></span>
                      </span>
                      {enq.productPrice && (
                        <span className="font-mono font-bold text-brand-400">₹{enq.productPrice}</span>
                      )}
                    </div>
                  )}

                  {/* Customer message bubble */}
                  <div className="p-4 rounded-2xl bg-slate-800 text-xs text-slate-200 leading-relaxed border border-slate-700">
                    “{enq.customerMessage}”
                  </div>

                  {/* Reply message if already sent */}
                  {enq.replyMessage && (
                    <div className="p-4 rounded-2xl bg-brand-950/60 border border-brand-500/30 text-xs text-brand-200 space-y-1">
                      <div className="font-bold text-brand-400 text-[11px]">Your Store Reply ({enq.repliedAt}):</div>
                      <p>{enq.replyMessage}</p>
                    </div>
                  )}

                  {/* Reply box */}
                  <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                    <input
                      type="text"
                      value={replyTextMap[enq.id] || ''}
                      onChange={(e) => setReplyTextMap({ ...replyTextMap, [enq.id]: e.target.value })}
                      placeholder="Type response back to customer..."
                      className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:border-brand-500 outline-none w-full"
                    />

                    <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                      <button
                        onClick={() => handleSendReply(enq.id)}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Reply</span>
                      </button>

                      <a
                        href={whatsappReplyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </main>
    </div>
  );
};
