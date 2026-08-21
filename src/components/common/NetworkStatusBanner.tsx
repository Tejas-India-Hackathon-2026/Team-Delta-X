import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export const NetworkStatusBanner: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      setTimeout(() => setShowReconnected(false), 3000);
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showReconnected) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-2 text-center text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md ${
        isOnline
          ? 'bg-emerald-600 text-white'
          : 'bg-rose-600 text-white animate-pulse'
      }`}
    >
      {isOnline ? (
        <>
          <Wifi className="w-4 h-4" />
          <span>Internet connection restored. Live stock active!</span>
        </>
      ) : (
        <>
          <WifiOff className="w-4 h-4" />
          <span>You are offline. Showing cached local store data.</span>
        </>
      )}
    </div>
  );
};
