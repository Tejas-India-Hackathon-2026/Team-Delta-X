import React, { useEffect, useState } from 'react';
import { 
  Compass, 
  Search, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe2,
  Layers
} from 'lucide-react';

interface AppIntroSplashScreenProps {
  onComplete: () => void;
}

export const AppIntroSplashScreen: React.FC<AppIntroSplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const letters = [
    { char: 'D', delay: 150 },
    { char: 'h', delay: 450 },
    { char: 'o', delay: 750 },
    { char: 'o', delay: 1050 },
    { char: 'n', delay: 1350 },
    { char: 'd', delay: 1650 },
    { char: 'o', delay: 1950 },
  ];

  // Progress Bar & Auto-Transition Sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2.5; // reaches 100% in ~3.2s
      });
    }, 80);

    const timer = setTimeout(() => {
      handleEnter();
    }, 3400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleEnter = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#f8f5ff] via-[#f1e8fc] to-[#e4d4f8] overflow-hidden select-none transition-all duration-700 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      
      {/* 🌌 Weightless Floating Particle Field (Zero-Gravity Background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-400/30 backdrop-blur-sm"
            style={{
              width: `${(i % 5) * 4 + 6}px`,
              height: `${(i % 5) * 4 + 6}px`,
              left: `${(i * 17) % 94}%`,
              top: `${(i * 23) % 90}%`,
              animation: `floatParticle ${6 + (i % 4) * 2}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}

        {/* Ambient Orbit Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 1000 600">
          <path
            d="M 50 300 Q 300 100 500 300 T 950 300"
            fill="none"
            stroke="url(#splashGrad)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            d="M 100 250 Q 500 500 900 250"
            fill="none"
            stroke="url(#splashGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top Skip Button */}
      <div className="absolute top-6 right-6 z-30">
        <button
          onClick={handleEnter}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-purple-950 font-bold text-xs shadow-lg shadow-purple-500/10 border border-purple-200 transition-all hover:scale-105 active:scale-95"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
        </button>
      </div>

      {/* 🪟 Central SaaS Browser Window Mockup Frame */}
      <div className="relative w-full max-w-4xl px-4 z-20">
        <div className="w-full rounded-3xl bg-white/80 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden p-6 sm:p-10 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] relative">
          
          {/* Top Browser Dots & URL */}
          <div className="absolute top-4 left-6 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-purple-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-purple-200"></div>
            <div className="ml-2 px-3 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] text-purple-700 font-bold">
              dhoondo.app
            </div>
          </div>

          {/* 🌟 1. CENTRAL FLOATING 'DHOONDO' LETTERS */}
          <div className="relative z-20 flex items-center justify-center gap-1 sm:gap-2 mb-4">
            {letters.map((item, idx) => (
              <span
                key={idx}
                className="inline-block text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#37195a] drop-shadow-sm font-sans select-none"
                style={{
                  animation: `letterFloatIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards, gentleBob 4s ease-in-out infinite alternate`,
                  animationDelay: `${item.delay}ms, ${item.delay + 1300}ms`,
                  opacity: 0,
                  transformOrigin: 'center center'
                }}
              >
                {item.char}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <div 
            className="text-xs sm:text-sm font-bold text-purple-700/90 tracking-widest uppercase mb-8"
            style={{
              animation: 'gentleBob 4s ease-in-out infinite alternate',
              animationDelay: '2.2s'
            }}
          >
            Find Nearby • Compare Prices • Buy Local
          </div>

          {/* 🌟 2. FLOATING 2D UI CARDS (ODOO EXPLAINER STYLE) */}
          
          {/* Card A: 🗺️ Map View Card (Top Right) */}
          <div 
            className="hidden sm:flex absolute top-6 right-8 z-10 w-44 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl flex-col"
            style={{ animation: `driftFloatA 6s ease-in-out infinite alternate` }}
          >
            <div className="flex items-center justify-between text-[11px] font-bold text-purple-900 mb-1.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>Map View</span>
              </span>
              <span className="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">1 km</span>
            </div>
            <div className="h-12 rounded-xl bg-purple-50 border border-purple-100 p-2 flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[10px] text-purple-800 font-bold">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
                <span>Live 2D Map</span>
              </div>
              <div className="text-[9px] text-purple-600 font-medium">
                Verified Stores Nearby
              </div>
            </div>
          </div>

          {/* Card B: 🔍 Search Results Card (Top Left) */}
          <div 
            className="hidden sm:flex absolute top-8 left-8 z-10 w-40 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl flex-col"
            style={{ animation: `driftFloatB 7s ease-in-out infinite alternate` }}
          >
            <div className="flex items-center gap-1 text-[11px] font-bold text-purple-900 mb-2">
              <Search className="w-3.5 h-3.5 text-purple-600" />
              <span>Instant Search</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-full bg-purple-100 rounded-full"></div>
              <div className="h-2 w-4/5 bg-purple-50 rounded-full"></div>
            </div>
          </div>

          {/* Card C: 🏪 Verified Merchant Badge (Bottom Left) */}
          <div 
            className="hidden sm:flex absolute bottom-6 left-10 z-10 p-2.5 px-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl items-center gap-2"
            style={{ animation: `driftFloatC 5.5s ease-in-out infinite alternate` }}
          >
            <div className="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold text-purple-950">Verified Retailer</div>
              <div className="text-[9px] text-purple-600 font-medium">100% In-Stock Local</div>
            </div>
          </div>

          {/* Floating Badges */}
          <div 
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-xl bg-white/90 border border-purple-100 shadow-md flex items-center gap-1 text-[10px] font-bold text-purple-800"
            style={{ animation: 'gentleBob 4.5s ease-in-out infinite alternate' }}
          >
            <span>🛵 Auto</span>
          </div>

          <div 
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-xl bg-white/90 border border-purple-100 shadow-md flex items-center gap-1 text-[10px] font-bold text-purple-800"
            style={{ animation: 'gentleBob 5s ease-in-out infinite alternate', animationDelay: '1s' }}
          >
            <span>🛒 Kirana</span>
          </div>

          {/* ⚡ Progress Bar & Direct Enter Button */}
          <div className="w-full max-w-xs space-y-3 z-20">
            <div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={handleEnter}
              className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95 group"
            >
              <span>Explore Marketplace</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* 💫 CSS Keyframe Animations */}
      <style>{`
        @keyframes letterFloatIn {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.6) rotate(20deg);
          }
          60% {
            opacity: 1;
            transform: translateY(-8px) scale(1.05) rotate(-3deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes gentleBob {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
          100% {
            transform: translateY(6px) rotate(-1deg);
          }
        }

        @keyframes driftFloatA {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-10px, -12px) rotate(-2deg); }
          100% { transform: translate(8px, 10px) rotate(1.5deg); }
        }

        @keyframes driftFloatB {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(12px, -8px) rotate(2.5deg); }
          100% { transform: translate(-6px, 12px) rotate(-1.5deg); }
        }

        @keyframes driftFloatC {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(8px, -10px) rotate(-1.5deg); }
          100% { transform: translate(-10px, 6px) rotate(2deg); }
        }

        @keyframes floatParticle {
          0% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.7; }
          100% { transform: translateY(-60px) scale(0.9); opacity: 0.2; }
        }
      `}</style>

    </div>
  );
};
