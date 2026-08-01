import { ShieldAlert, Award } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-gold-500/10 text-gray-400">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Description (span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Gymnazo Logo"
                className="h-10 w-10 object-contain rounded-full border border-gold-500/20"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl tracking-wider text-white">
                  GYMNAZO
                </span>
                <span className="text-[9px] font-semibold tracking-[0.25em] text-gold-500">
                  THE FITNESS ZONE
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              We empower individuals in Alathur, Palakkad to achieve health goals through high-grade strength systems, cardio zones, and personalized coaching.
            </p>

            <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
              <span className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-gold-500" /> Certified Trainers
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 text-gold-500" /> Safe Environment
              </span>
            </div>
          </div>

          {/* Quick Links (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-gold-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-gold-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleLinkClick(e, 'why-us')} className="hover:text-gold-500 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleLinkClick(e, 'facilities')} className="hover:text-gold-500 transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-gold-500 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#memberships" onClick={(e) => handleLinkClick(e, 'memberships')} className="hover:text-gold-500 transition-colors">
                  Memberships
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} className="hover:text-gold-500 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-gold-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-white">
              Reach Us
            </h3>
            <p className="text-xs leading-relaxed text-gray-500">
              📍 Gymnazo, The Fitness Zone<br />
              Alathur, Palakkad, Kerala<br />
              <br />
              📞 <a href="tel:+917907878740" className="hover:text-gold-500 text-gray-300 font-semibold transition-colors">+91 7907878740</a><br />
              ✉ <a href="mailto:gymnazo.in@gmail.com" className="hover:text-gold-500 text-gray-300 transition-colors">gymnazo.in@gmail.com</a>
            </p>
          </div>

          {/* Connect (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-wider text-white">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://wa.me/917907878740"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-dark-900 border border-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500/20 active:scale-95 transition-all shadow-md"
                aria-label="WhatsApp Link"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.instagram.com/gymnazo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-dark-900 border border-white/5 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500/20 active:scale-95 transition-all shadow-md"
                aria-label="Instagram Link"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
            
            <p className="text-[10px] text-gray-600 leading-normal">
              Follow our social channels to witness daily fitness tips, member records, and event schedules.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-black py-6 border-t border-white/5 text-center text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Gymnazo - The Fitness Zone. All Rights Reserved.</p>
          <p>
            Designed & Developed in Palakkad |{' '}
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-gold-500 text-gray-500 transition-colors">
              Back to top ↑
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
