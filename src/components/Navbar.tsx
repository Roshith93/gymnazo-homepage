import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Programs', href: '#programs' },
  { name: 'Memberships', href: '#memberships' },
  { name: 'BMI Calc', href: '#bmi-calc' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for header glass background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section to highlight current navigation link
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = navLinks.map(link => document.getElementById(link.href.replace('#', '')));
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(href.replace('#', ''));
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-gold-500/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group lg:static absolute left-1/2 -translate-x-1/2 -ml-6 lg:left-auto lg:translate-x-0 lg:ml-0"
          >
            <img
              src="/logo.png"
              alt="Gymnazo Logo"
              className="h-10 w-10 object-contain rounded-full border border-gold-500/20 group-hover:border-gold-500/60 transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-wider text-white group-hover:text-gold-400 transition-colors duration-300">
                GYMNAZO
              </span>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-gold-500">
                THE FITNESS ZONE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.filter(link => link.name !== 'Home').map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 hover:text-gold-500 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-gold-500'
                    : 'text-gray-400'
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-gold-600 to-gold-400 rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </a>
            ))}
          </nav>

          {/* Header Action Button Removed */}

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-400 hover:bg-dark-900 hover:text-white transition-colors border border-gray-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gold-500" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 bg-dark-950/95 backdrop-blur-lg border-t border-gold-500/10 lg:hidden transition-all duration-500 ease-in-out transform ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-gold-500/10 border-l-4 border-gold-500 text-gold-500 pl-6'
                    : 'text-gray-400 hover:bg-dark-900/50 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-8 border-t border-gold-500/10 pt-6">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 py-4 text-center font-heading font-extrabold uppercase tracking-widest text-black shadow-lg shadow-gold-500/20"
            >
              Join Gymnazo Today
              <ArrowRight className="h-4 w-4 animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
