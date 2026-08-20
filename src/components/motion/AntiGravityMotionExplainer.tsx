import React, { useState, useRef } from 'react';
import { 
  Compass, 
  Search, 
  MapPin, 
  Store, 
  ShieldCheck, 
  Sparkles, 
  RotateCcw, 
  Smartphone,
  Monitor,
  Package, 
  Heart, 
  Navigation,
  Globe2,
  CheckCircle2,
  User,
  X,
  Volume2,
  VolumeX,
  Play,
  Pause
} from 'lucide-react';

interface AntiGravityMotionExplainerProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const AntiGravityMotionExplainer: React.FC<AntiGravityMotionExplainerProps> = ({ 
  onClose,
  isModal = false 
}) => {
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [animationKey, setAnimationKey] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleReplay = () => {
    setAnimationKey(prev => prev + 1);
    setIsPlaying(true);
  };

  const letters = [
    { char: 'D', delay: 200, from: 'translate(-80px, -120px) rotate(-24deg)' },
    { char: 'h', delay: 600, from: 'translate(-40px, 140px) rotate(18deg)' },
    { char: 'o', delay: 900, from: 'translate(60px, -150px) rotate(-15deg)' },
    { char: 'o', delay: 1200, from: 'translate(120px, 100px) rotate(20deg)' },
    { char: 'n', delay: 1500, from: 'translate(-100px, 80px) rotate(-12deg)' },
    { char: 'd', delay: 1800, from: 'translate(140px, -90px) rotate(16deg)' },
    { char: 'o', delay: 2100, from: 'translate(80px, 130px) rotate(-18deg)' },
  ];

  const isPhone = aspectRatio === '9:16';

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      
      {/* 🎛️ Aspect Ratio & Control Toolbar */}
      <div className="flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-2.5 px-4 rounded-2xl border border-slate-800 text-white shadow-xl">
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider hidden sm:inline">Format:</span>
          
          <button
            onClick={() => setAspectRatio('16:9')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              aspectRatio === '16:9'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>16:9 Widescreen</span>
          </button>

          <button
            onClick={() => setAspectRatio('9:16')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              aspectRatio === '9:16'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>9:16 Phone Ratio</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReplay}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-white text-xs font-bold transition-all active:scale-95 border border-slate-700"
            title="Replay Motion Sequence"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 🎬 MOTION STAGE CANVAS */}
      <div className="flex justify-center items-center py-2">
        <div 
          key={animationKey}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative rounded-3xl overflow-hidden shadow-2xl border border-purple-200/40 bg-gradient-to-br from-[#f8f5ff] via-[#f2ebfc] to-[#e8ddfb] select-none transition-all duration-500 ${
            isPhone 
              ? 'w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16]' 
              : 'w-full max-w-5xl aspect-video'
          }`}
          style={{
            boxShadow: '0 25px 60px -15px rgba(124, 58, 237, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.15)'
          }}
        >
          
          {/* 🌌 Weightless Floating Particle Dust */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(isPhone ? 12 : 20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-purple-400/25 backdrop-blur-sm"
                style={{
                  width: `${(i % 5) * 3 + 5}px`,
                  height: `${(i % 5) * 3 + 5}px`,
                  left: `${(i * 17) % 92}%`,
                  top: `${(i * 23) % 90}%`,
                  animation: `floatParticle ${5 + (i % 4) * 2}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.3}s`,
                  transform: `translate(${mousePos.x * (8 + i * 2)}px, ${mousePos.y * (8 + i * 2)}px)`
                }}
              />
            ))}

            {/* Ambient Zero-Gravity Orbit Waves */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1000 600">
              <path
                d="M 100 300 Q 300 120 500 300 T 900 300"
                fill="none"
                stroke="url(#purpleGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 🪟 Mockup Frame (Browser or Phone) */}
          <div className={`absolute ${isPhone ? 'inset-3 rounded-3xl border-2 border-purple-300/60' : 'inset-4 sm:inset-6 rounded-2xl border border-white/80'} bg-white/75 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col`}>
            
            {/* Top Mockup Header */}
            {isPhone ? (
              /* Phone Dynamic Island / Notch Bar */
              <div className="h-9 bg-white/90 border-b border-purple-100 px-4 flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-purple-950">9:41</span>
                <div className="w-16 h-3.5 bg-purple-950 rounded-full"></div>
                <div className="flex items-center gap-1 text-[10px] text-purple-800 font-bold">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>
            ) : (
              /* Browser Mockup Top Navbar */
              <div className="h-10 sm:h-12 bg-white/80 border-b border-purple-100/80 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-200"></div>
                  
                  <div className="ml-3 px-4 py-1 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] text-purple-700 font-semibold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                    <span>dhoondo.app</span>
                  </div>
                </div>

                <div className="text-[10px] font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                  SaaS Motion Explainer
                </div>
              </div>
            )}

            {/* 🎬 2D Stage Canvas */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden">
              
              {/* 🌟 1. CENTRAL FLOATING 'DHOONDO' LETTERS (ZERO-GRAVITY FLOAT-IN) */}
              <div 
                className="relative z-20 flex items-center justify-center gap-0.5 sm:gap-1.5"
                style={{
                  transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                {letters.map((item, idx) => (
                  <span
                    key={idx}
                    className={`inline-block font-black tracking-tight text-[#3b1d60] drop-shadow-sm font-sans select-none ${
                      isPhone ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-6xl md:text-7xl'
                    }`}
                    style={{
                      animation: `letterFloatIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards, gentleBob 4s ease-in-out infinite alternate`,
                      animationDelay: `${item.delay}ms, ${item.delay + 1400}ms`,
                      opacity: 0,
                      transformOrigin: 'center center'
                    }}
                  >
                    {item.char}
                  </span>
                ))}
              </div>

              {/* Subtitle Under Dhoondo Logo */}
              <div 
                className="absolute z-20 font-bold text-purple-700 text-center uppercase tracking-widest"
                style={{
                  top: isPhone ? '56%' : '62%',
                  fontSize: isPhone ? '9px' : '11px',
                  animation: 'gentleBob 4s ease-in-out infinite alternate',
                  animationDelay: '2.4s'
                }}
              >
                Smarter Local Search • Anti-Gravity UI
              </div>

              {/* 🌟 2. FLOATING 2D UI CARDS (ODOO STYLE EXPLAINER ELEMENTS) */}
              
              {/* Card A: 🗺️ Map View Card */}
              <div 
                className={`absolute z-10 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-purple-100 shadow-xl ${
                  isPhone ? 'top-3 right-3 w-32' : 'top-6 right-6 sm:top-10 sm:right-12 w-40 sm:w-48'
                }`}
                style={{
                  animation: `driftFloatA 6s ease-in-out infinite alternate`,
                  transform: `translate(${mousePos.x * 16}px, ${mousePos.y * 16}px)`
                }}
              >
                <div className="flex items-center justify-between text-[10px] font-bold text-purple-900 mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-purple-600" />
                    <span>Map View</span>
                  </span>
                  <span className="text-[8px] bg-purple-100 text-purple-700 px-1 py-0.2 rounded font-bold">1 km</span>
                </div>
                <div className="h-10 sm:h-12 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100/80 p-1.5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center gap-1 text-[9px] text-purple-800 font-bold z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping"></span>
                    <span>Live 2D Map</span>
                  </div>
                  <div className="text-[8px] text-purple-600 font-medium z-10">
                    Verified Stores Nearby
                  </div>
                </div>
              </div>

              {/* Card B: 🔍 Search Results Card */}
              <div 
                className={`absolute z-10 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-purple-100 shadow-xl ${
                  isPhone ? 'top-3 left-3 w-32' : 'top-8 left-6 sm:top-12 sm:left-12 w-36 sm:w-44'
                }`}
                style={{
                  animation: `driftFloatB 7s ease-in-out infinite alternate`,
                  transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`
                }}
              >
                <div className="flex items-center gap-1 text-[10px] font-bold text-purple-900 mb-1.5">
                  <Search className="w-3 h-3 text-purple-600" />
                  <span>Search</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-purple-100 rounded-full"></div>
                  <div className="h-1.5 w-3/4 bg-purple-50 rounded-full"></div>
                </div>
              </div>

              {/* Card C: 🏪 Verified Merchant Badge */}
              <div 
                className={`absolute z-10 p-2 px-3 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl flex items-center gap-1.5 ${
                  isPhone ? 'bottom-4 left-3' : 'bottom-6 left-8 sm:bottom-10 sm:left-16'
                }`}
                style={{
                  animation: `driftFloatC 5.5s ease-in-out infinite alternate`,
                  transform: `translate(${mousePos.x * 14}px, ${mousePos.y * -14}px)`
                }}
              >
                <div className="w-6 h-6 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-purple-950">Verified Shop</div>
                  <div className="text-[8px] text-purple-600 font-medium">100% In-Stock</div>
                </div>
              </div>

              {/* Card D: 👤 Customer Hub Card */}
              <div 
                className={`absolute z-10 p-2 px-3 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl flex items-center gap-1.5 ${
                  isPhone ? 'bottom-4 right-3' : 'bottom-8 right-8 sm:bottom-12 sm:right-16'
                }`}
                style={{
                  animation: `driftFloatD 6.5s ease-in-out infinite alternate`,
                  transform: `translate(${mousePos.x * -12}px, ${mousePos.y * 12}px)`
                }}
              >
                <div className="w-6 h-6 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-purple-950">Local Buyer</div>
                  <div className="text-[8px] text-purple-600 font-medium">Jamui & All India</div>
                </div>
              </div>

              {/* Floating Emojis / Badges */}
              <div 
                className="absolute top-[35%] left-2 p-1.5 rounded-xl bg-white/80 border border-purple-100 shadow-md text-[9px] font-bold text-purple-800"
                style={{ animation: 'gentleBob 4.5s ease-in-out infinite alternate' }}
              >
                <span>🛵 Auto</span>
              </div>

              <div 
                className="absolute top-[35%] right-2 p-1.5 rounded-xl bg-white/80 border border-purple-100 shadow-md text-[9px] font-bold text-purple-800"
                style={{ animation: 'gentleBob 5s ease-in-out infinite alternate', animationDelay: '1s' }}
              >
                <span>🛒 Kirana</span>
              </div>

            </div>

          </div>

          {/* 💫 CSS Keyframe Animations for Physics-Defying Weightless Movement */}
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

            @keyframes driftFloatD {
              0% { transform: translate(0px, 0px) rotate(0deg); }
              50% { transform: translate(-8px, -14px) rotate(2deg); }
              100% { transform: translate(10px, 8px) rotate(-1.5deg); }
            }

            @keyframes floatParticle {
              0% { transform: translateY(0px) scale(1); opacity: 0.3; }
              50% { transform: translateY(-30px) scale(1.2); opacity: 0.7; }
              100% { transform: translateY(-60px) scale(0.9); opacity: 0.2; }
            }
          `}</style>

        </div>
      </div>

    </div>
  );
};
