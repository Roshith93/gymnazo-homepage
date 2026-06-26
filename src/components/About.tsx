import { useState, useEffect } from 'react';
import { Dumbbell, ShieldCheck, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const aboutImages = [
  '/gym-interior.jpg',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800'
];

export default function About() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % aboutImages.length);
  };

  return (
    <section id="about" className="relative py-24 bg-dark-950 overflow-hidden border-b border-gold-500/5">
      {/* Background Accent Gradients */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-gold-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Multi-Image Slider with offset Gold Border Accent */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* The gold decorative background border offset */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-600 to-gold-400 rounded-3xl opacity-30 blur-sm scale-95" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/40 rounded-3xl pointer-events-none hidden sm:block translate-x-2 translate-y-2" />
            
            {/* Main Image container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full shadow-2xl shadow-black/80 group">
              <img
                src={aboutImages[activeIdx]}
                alt={`Gymnazo Interior ${activeIdx + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Slider Control buttons */}
              <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg bg-dark-950/80 border border-white/5 text-gray-400 hover:text-gold-500 hover:border-gold-500/20 active:scale-95 transition-all shadow-md cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-dark-950/80 border border-white/5 text-gray-400 hover:text-gold-500 hover:border-gold-500/20 active:scale-95 transition-all shadow-md cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
                {aboutImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIdx === i ? 'w-4 bg-gold-500' : 'w-1.5 bg-white/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              
              {/* Image Floating tag */}
              <div className="absolute bottom-4 left-4 glass-panel rounded-xl px-4 py-2 border border-gold-500/20 z-20 pointer-events-none">
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold-500">ESTABLISHED PLACE</p>
                <p className="text-xs font-semibold text-white">Alathur, Palakkad</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-8 bg-gold-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold-500">About Us</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Welcome to <span className="text-gold-gradient">Gymnazo</span>
              </h2>
              <p className="text-lg text-gold-200/90 font-medium">
                At Gymnazo, we believe fitness is a lifestyle.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you're looking to lose weight, build muscle, improve endurance, or simply stay healthy, our experienced trainers and modern equipment help you reach your goals. Located conveniently in Alathur, Palakkad, Gymnazo is designed for beginners as well as experienced athletes.
              </p>
            </div>

            {/* Core Values Sub-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {/* Value 1 */}
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="font-heading font-bold text-base text-white">Modern Gear</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Premium benches, plates, and professional cardio rigs.
                </p>
              </div>

              {/* Value 2 */}
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="font-heading font-bold text-base text-white">Expert Guidance</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Certified coaches to optimize your reps and safety.
                </p>
              </div>

              {/* Value 3 */}
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="font-heading font-bold text-base text-white">Elite Community</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A motivating, friendly atmosphere for all levels.
                </p>
              </div>
            </div>

            {/* Quick CTA Sign-off */}
            <div className="border-t border-gold-500/10 pt-6">
              <blockquote className="border-l-2 border-gold-500 pl-4 italic text-sm text-gray-400">
                "Our space is configured with high-tier resistance machinery, dedicated stretching mats, and heavy iron, giving you everything needed to sculpt your physique."
              </blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
