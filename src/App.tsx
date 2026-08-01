import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, ArrowRight, X } from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';

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

  const LAUNCH_DATE = "2026-08-01T19:00:00+05:30";
  const [showCountdown, setShowCountdown] = useState(() => {
    return new Date() < new Date(LAUNCH_DATE);
  });


  // Trigger loading screen fadeout
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(loadTimer);
    };
  }, []);

  // Show inauguration offer popup when loading ends and countdown is cleared
  useEffect(() => {
    if (!loading && !showCountdown) {
      const timer = setTimeout(() => {
        setShowPromoPopup(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [loading, showCountdown]);

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
                <WhatsAppIcon className="h-6 w-6" />
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
                  className="relative bg-dark-950 rounded-2xl max-w-[420px] w-[70%] sm:w-full border border-gold-500/20 shadow-2xl overflow-hidden flex flex-col"
                >
                  {/* Close button overlayed on the image */}
                  <button
                    onClick={() => setShowPromoPopup(false)}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:text-gold-500 transition-colors backdrop-blur-sm cursor-pointer"
                    aria-label="Close promotion popup"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Inauguration Offer Image */}
                  <div className="w-full bg-black">
                    <img
                      src="/inauguration-offer.jpg"
                      alt="Gymnazo Inauguration Offer"
                      className="w-full h-auto object-contain block"
                    />
                  </div>

                   {/* Action Section */}
                   <div className="p-4 bg-dark-950 border-t border-gold-500/10 flex flex-col items-center gap-2">
                    <a
                      href="https://wa.me/917907878740?text=%20Hi%20Gymnazo%20%F0%9F%91%8B!,%0A%20I'd%20like%20to%20claim%20the%20Website%20Launch%20Offer.%20Please%20share%20the%20next%20steps!%20%20%F0%9F%92%AA%20%E2%9D%A4%EF%B8%8F"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowPromoPopup(false)}
                      className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black rounded-xl font-heading font-black text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95 cursor-pointer text-center block"
                    >
                      🔥 Claim My Offer
                    </a>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest text-center mt-1">
                      *Limited Time Only! Grab your extra days now at Malmal Junction, Alathur
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


