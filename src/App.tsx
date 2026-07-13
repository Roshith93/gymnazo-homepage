import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, PhoneCall, ArrowRight, X } from 'lucide-react';

// Import sub-components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import WorkoutPrograms from './components/WorkoutPrograms';
import MembershipPlans from './components/MembershipPlans';
import BmiCalculator from './components/BmiCalculator';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Countdown from './components/Countdown';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showPromoPopup, setShowPromoPopup] = useState(false);

  const LAUNCH_DATE = "2026-07-31T19:00:00+05:30";
  const [showCountdown, setShowCountdown] = useState(() => {
    return new Date() < new Date(LAUNCH_DATE);
  });

  // Trigger loading screen fadeout
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    // Timed promo popup disabled for now:
    // const promoTimer = setTimeout(() => {
    //   setShowPromoPopup(true);
    // }, 10000); // Show popup after 10s

    return () => {
      clearTimeout(loadTimer);
      // clearTimeout(promoTimer);
    };
  }, []);

  // Monitor scroll for progress indicator and sticky bottom CTA bar
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      }

      // Show sticky CTA bar only after scrolling past Hero section (e.g. 500px)
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Global Loading/Intro Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center gap-6"
          >
            <div className="relative">
              {/* Spinning gold background track ring */}
              <div className="h-28 w-28 rounded-full border-2 border-gold-500/10 border-t-gold-500 animate-spin" />
              
              <img
                src="/logo.png"
                alt="Gymnazo Logo"
                className="absolute inset-0 m-auto h-20 w-20 object-contain rounded-full border border-gold-500/20"
              />
            </div>
            
            <div className="text-center space-y-1">
              <h2 className="font-heading font-black text-2xl tracking-[0.2em] text-white">
                GYMNAZO
              </h2>
              <p className="text-[10px] font-bold tracking-[0.3em] text-gold-500 uppercase">
                The Fitness Zone
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Countdown Launch Screen */}
      <AnimatePresence>
        {!loading && showCountdown && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Countdown
              targetDate={LAUNCH_DATE}
              onComplete={() => setShowCountdown(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Layout (Only rendered or made visible when loading ends and countdown is cleared/bypassed) */}
      {!loading && !showCountdown && (
        <div className="flex flex-col min-h-screen relative bg-dark-950 text-gray-100">
          
          {/* 2. Scroll Progress Top Bar */}
          <div
            className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 z-50 transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Core UI Sections */}
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <WhyChooseUs />
            <Facilities />
            <WorkoutPrograms />
            <MembershipPlans />
            <BmiCalculator />
            <Gallery />
            <Testimonials />
            <Faqs />
            <Contact />
          </main>

          <Footer />

          {/* 3. Floating WhatsApp Widget (Bottom Right) */}
          <AnimatePresence>
            {showStickyBar && (
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                href="https://wa.me/917907878740"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-[92px] sm:bottom-6 right-4 sm:right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:scale-110 hover:shadow-emerald-500/40 active:scale-95 border border-emerald-500/20"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="h-6 w-6" />
              </motion.a>
            )}
          </AnimatePresence>

          {/* 4. Sticky "Join Now" Bottom Banner (Scroll Revealed) */}
          <AnimatePresence>
            {showStickyBar && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="fixed bottom-0 left-0 right-0 z-30 bg-black/85 backdrop-blur-md border-t border-gold-500/10 px-4 py-3 shadow-2xl flex items-center justify-between"
              >
                <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <span className="text-[10px] sm:text-xs font-heading font-black text-white uppercase tracking-wider">
                      GYMNAZO — THE FITNESS ZONE
                    </span>
                    <span className="hidden sm:inline text-gold-500/50">|</span>
                    <span className="text-[10px] sm:text-xs text-gray-400">
                      Located in Alathur, Palakkad
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                    <a
                      href="tel:+917907878740"
                      className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-gold-500 hover:text-gold-400 transition-colors uppercase"
                    >
                      <PhoneCall className="h-3.5 w-3.5" />
                      +91 7907878740
                    </a>
                    
                    <button
                      onClick={handleScrollToContact}
                      className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 text-black font-heading font-extrabold text-[10px] sm:text-xs uppercase tracking-wider px-4 py-2 hover:from-gold-500 hover:to-gold-400 active:scale-95 transition-all shadow-md shadow-gold-500/10 cursor-pointer"
                    >
                      Join Now
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 5. Membership Enquiry / Promo Popup Modal */}
          <AnimatePresence>
            {showPromoPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative glass-panel rounded-3xl p-6 sm:p-8 max-w-md w-full border border-gold-500/20 shadow-2xl overflow-hidden"
                >
                  {/* Gold radial background accent glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />

                  {/* Close button */}
                  <button
                    onClick={() => setShowPromoPopup(false)}
                    className="absolute top-4 right-4 p-1.5 rounded-lg border border-white/5 text-gray-500 hover:text-gold-500 transition-colors bg-dark-950/40"
                    aria-label="Close promotion popup"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>

                  <div className="text-center space-y-4">
                    {/* Header Icon */}
                    <div className="h-12 w-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto text-gold-500">
                      <Sparkles className="h-6 w-6 animate-pulse" />
                    </div>

                    {/* Text content */}
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold tracking-widest text-gold-500 uppercase">Limited Time Offer</p>
                      <h3 className="font-heading font-black text-xl text-white">Start Your Transformation</h3>
                      <p className="text-xs text-gray-400 leading-relaxed pt-1">
                        Register today to receive a free welcome evaluation session, personalized BMI analysis, and 10% off on our Quarterly Student/Regular slots.
                      </p>
                    </div>

                    {/* Form Direct Link */}
                    <button
                      onClick={() => {
                        setShowPromoPopup(false);
                        handleScrollToContact();
                      }}
                      className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black rounded-xl font-heading font-black text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/15"
                    >
                      Claim Offer Now
                    </button>

                    <p className="text-[9px] text-gray-600 tracking-wide uppercase">
                      *Offer applicable only for residents in Alathur, Palakkad.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      )}
    </>
  );
}

// Sparkles local SVG fallback or simple helper icon
function Sparkles({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
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
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
    </svg>
  );
}
