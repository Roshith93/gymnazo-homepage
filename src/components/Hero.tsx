import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom hook to run a number counter animation
function useCounter(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  // Trigger counters after 500ms
  useEffect(() => {
    const timer = setTimeout(() => setStartCount(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // HTML5 Canvas golden particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const particleCount = 40;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      decay: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * -0.6 - 0.2; // Move upwards
        this.alpha = Math.random() * 0.5 + 0.1;
        this.decay = Math.random() * 0.002 + 0.001;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset if particles go off-screen
        if (this.y < 0 || this.alpha <= 0) {
          this.y = height + Math.random() * 20;
          this.x = Math.random() * width;
          this.alpha = Math.random() * 0.5 + 0.1;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Golden glow radial gradient
        const grad = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        grad.addColorStop(0, '#fdf7d6');
        grad.addColorStop(0.4, '#d4af37');
        grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
        c.fillStyle = grad;
        c.shadowColor = '#d4af37';
        c.shadowBlur = 8;
        c.fill();
        c.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Animated numbers
  const members = useCounter(700, 2000, startCount);
  const trainers = useCounter(4, 1500, startCount);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20"
    >
      {/* Background Image Parallax with Golden Vignette */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.95)), url("/gym-interior.jpg")',
        }}
      />

      {/* Radial Gold Lighting Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-950/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Floating Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Scroll indicator side track */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-20">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold-500 [writing-mode:vertical-lr] select-none opacity-60">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold-500 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/60 animate-bounce" />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-950/30 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gold-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Premium Gym in Alathur, Palakkad
            </span>
          </div>

          {/* Main Titles */}
          <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95]">
            <span className="block text-white">GYMNAZO</span>
            <span className="block text-gold-gradient tracking-[0.1em] text-3xl sm:text-5xl md:text-6xl mt-4 font-extrabold uppercase">
              The Fitness Zone
            </span>
          </h1>

          {/* High Energy Slogan */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-300 font-medium tracking-wide">
            Transform Your Body. Transform Your Life. Achieve your peak physical potential with state-of-the-art coaching and high-tier equipment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => handleScrollToSection('contact')}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-xl shadow-gold-500/20 transition-all duration-300 hover:scale-105 hover:shadow-gold-500/35 active:scale-95 cursor-pointer"
            >
              Join Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="tel:+917907878740"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-gold-500/50 hover:bg-gold-500/5 hover:text-gold-400 active:scale-95"
            >
              <Phone className="h-4 w-4 text-gold-500 group-hover:animate-bounce" />
              Call Us
            </a>
          </div>
        </motion.div>

        {/* Stats Section with glassmorphic cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto"
        >
          {/* Stat 1 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-center items-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/0 to-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="font-heading font-black text-3xl sm:text-4xl text-gold-400">
              {members}{members === 700 ? '+' : ''}
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-2">
              Happy Members
            </span>
          </div>

          {/* Stat 2 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-center items-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/0 to-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="font-heading font-black text-3xl sm:text-4xl text-gold-400">
              {trainers}
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-2">
              Trainers
            </span>
          </div>

          {/* Stat 3 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-center items-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/0 to-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="font-heading font-black text-3xl sm:text-4xl text-gold-400">
              Modern
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-2">
              Equipment
            </span>
          </div>

          {/* Stat 4 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-center items-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/0 to-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="font-heading font-black text-3xl sm:text-4xl text-gold-400">
              Affordable
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-gray-400 mt-2">
              Memberships
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
