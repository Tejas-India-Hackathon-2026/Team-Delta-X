import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, X, Volume2, Sparkles, ArrowRight } from 'lucide-react';
import { soundEffects } from '../../services/audioService';

interface VoiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceSearchModal: React.FC<VoiceSearchModalProps> = ({ isOpen, onClose }) => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTranscript('');
      setIsListening(true);
      soundEffects.playPop();

      // Check for Web Speech API
      const SpeechRecognition = (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition ||
        (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

      let recognitionInstance: any = null;

      if (SpeechRecognition) {
        try {
          recognitionInstance = new SpeechRecognition();
          recognitionInstance.continuous = false;
          recognitionInstance.interimResults = true;
          recognitionInstance.lang = 'en-IN';

          recognitionInstance.onresult = (event: any) => {
            const current = event.resultIndex;
            const text = event.results[current][0].transcript;
            setTranscript(text);
          };

          recognitionInstance.onerror = () => {
            // fallback will take over if user speaks or clicks prompt
          };

          recognitionInstance.onend = () => {
            setIsListening(false);
          };

          recognitionInstance.start();
        } catch {
          // Fallback simulation
        }
      }

      // If speech API unavailable or user is testing on simulator, provide quick voice prompt simulation
      const timer = setTimeout(() => {
        if (!transcript) {
          setTranscript('Honda Shine front brake pad');
          setIsListening(false);
        }
      }, 3500);

      const voiceWaveBars = [12, 24, 38, 18, 30, 44, 20, 36, 14];

  return () => {
        clearTimeout(timer);
        if (recognitionInstance) {
          try { recognitionInstance.stop(); } catch {}
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSearch = (query: string) => {
    if (query.trim()) {
      soundEffects.playSuccessChime();
      onClose();
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 text-center relative overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dhoondo Voice Discovery</span>
        </div>

        {/* Animated Mic Waveform Orb */}
        <div className="relative my-6 flex justify-center items-center">
          {isListening && (
            <>
              <div className="absolute w-36 h-36 rounded-full bg-brand-500/20 animate-ping"></div>
              <div className="absolute w-28 h-28 rounded-full bg-teal-500/30 animate-pulse"></div>
            </>
          )}

          <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-brand-600 to-teal-500 text-white flex items-center justify-center shadow-xl shadow-brand-500/30">
            <Mic className={`w-10 h-10 ${isListening ? 'animate-bounce' : ''}`} />
          </div>
        </div>

        {/* Sound Wave Bars */}
        {isListening && (
          <div className="flex items-center justify-center gap-1.5 h-8 mb-4">
            {[40, 70, 90, 60, 100, 75, 45, 85, 60, 30].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-brand-500 rounded-full animate-wave-bar"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-extrabold text-slate-900 mb-1">
          {isListening ? 'Listening in English / Hindi...' : 'Voice Query Captured'}
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          Speak product name, brand, or model (e.g. “Shine brake pad” or “Amul butter”)
        </p>

        {/* Transcript Box */}
        <div className="min-h-[56px] p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-sm font-semibold text-slate-800 mb-5">
          {transcript ? (
            <span className="text-brand-800 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-brand-600" />
              “{transcript}”
            </span>
          ) : (
            <span className="text-slate-400 italic font-normal">Listening to voice input...</span>
          )}
        </div>

        {/* Action Button */}
        {transcript ? (
          <button
            onClick={() => handleSearch(transcript)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all"
          >
            <span>Search “{transcript}”</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <div className="space-y-2">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Or Try Saying:
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {['Honda Shine brake pad', 'Dolo 650 strip', 'Castrol 10W30', 'Amul Milk 500ml'].map((sample, i) => (
                <button
                  key={i}
                  onClick={() => handleSearch(sample)}
                  className="px-3 py-1 bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 rounded-full text-xs font-medium transition-colors"
                >
                  “{sample}”
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
