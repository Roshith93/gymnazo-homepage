import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';

const Instagram = ({ className, ...props }: React.ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface CountdownProps {
  targetDate: string; // ISO string format
  onComplete: () => void;
}

export default function Countdown({ targetDate, onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference <= 0) {
        setIsExpired(true);
        onComplete();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  if (isExpired) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between overflow-y-auto overflow-x-hidden font-sans">
      
      {/* Background glow decoration */}
      <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[350px] h-[350px] bg-gold-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header Branding */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Gymnazo Logo"
            className="h-10 w-10 object-contain rounded-full border border-gold-500/20"
          />
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg tracking-wider text-white">
              GYMNAZO
            </span>
            <span className="text-[8px] font-semibold tracking-[0.25em] text-gold-500">
              THE FITNESS ZONE
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/917907878740"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gold-500/20 bg-gold-500/5 hover:bg-gold-500 hover:text-black px-4 py-2 text-[10px] font-black uppercase tracking-wider text-gold-500 transition-all active:scale-95 flex items-center gap-1.5"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          Enquire Now
        </a>
      </header>

      {/* Center Countdown Panel */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 relative z-10">
        <div className="max-w-3xl w-full text-center space-y-10">
          
          {/* Main Title Badge */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-1.5 text-xs text-gold-500 font-bold uppercase tracking-widest"
            >
              <Sparkles className="h-4 w-4 text-gold-500 animate-pulse" />
              Digital Launch
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight"
            >
              Our Fitness Zone <br />
              <span className="text-gold-gradient">Goes Digital</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto"
            >
              Our physical gym in Alathur, Palakkad is fully operational and open for training! We are currently building a premium online experience to match. Stay tuned.
            </motion.p>
          </div>

          {/* Time Counter Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="glass-panel border border-gold-500/10 rounded-2xl sm:rounded-3xl p-3 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
              >
                {/* Visual light glow inside cards */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
                
                <span className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
                  {String(value).padStart(2, '0')}
                </span>
                <span className="text-[8px] sm:text-xs font-bold uppercase tracking-wider text-gold-500 mt-1 sm:mt-2">
                  {unit}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="tel:+917907878740"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black font-heading font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-gold-500/10 active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call +91 7907878740
            </a>
            
            <a
              href="https://www.instagram.com/gymnazo.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 hover:border-gold-500/30 bg-white/5 text-white hover:text-gold-500 font-heading font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Instagram className="h-4 w-4" />
              Follow Instagram
            </a>
          </motion.div>

        </div>
      </main>

      {/* Footer / Bypass button */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 border-t border-white/5">
        <p className="text-[10px] text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()} Gymnazo - The Fitness Zone. Malamal Junction, Alathur, Palakkad.
        </p>

        {/* Bypass button for previewing */}
        <button
          onClick={onComplete}
          className="text-[10px] font-black uppercase tracking-wider text-gray-600 hover:text-gold-500 transition-colors border border-dashed border-gray-800 hover:border-gold-500/30 px-3 py-1.5 rounded-lg cursor-pointer"
        >
          🔑 Preview Website
        </button>
      </footer>

    </div>
  );
}
