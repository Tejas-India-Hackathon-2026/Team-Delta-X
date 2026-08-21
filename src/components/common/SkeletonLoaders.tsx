import React from 'react';

export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 animate-pulse">
    <div className="h-44 bg-slate-200 rounded-xl w-full"></div>
    <div className="h-3 bg-slate-200 rounded w-1/3"></div>
    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
    <div className="flex justify-between items-center pt-2">
      <div className="h-5 bg-slate-200 rounded w-1/4"></div>
      <div className="h-8 bg-slate-200 rounded-xl w-24"></div>
    </div>
  </div>
);

export const StoreCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 animate-pulse">
    <div className="h-28 bg-slate-200 rounded-xl w-full"></div>
    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
    <div className="flex gap-2 pt-2">
      <div className="h-8 bg-slate-200 rounded-xl flex-1"></div>
      <div className="h-8 bg-slate-200 rounded-xl flex-1"></div>
    </div>
  </div>
);
