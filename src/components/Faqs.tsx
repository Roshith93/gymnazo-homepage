import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What are the operating hours of Gymnazo?',
    a: 'We operate in two convenient shifts. Morning: 5:00 AM to 10:00 AM. Evening: 4:00 PM to 10:00 PM. We are closed on Sundays to allow for deep cleaning of equipment.',
  },
  {
    q: 'How do I claim the Student Discount for memberships?',
    a: 'To avail of our student prices (e.g. ₹800/month instead of ₹1000/month), you must present a valid physical school or college ID card at the front desk during registration.',
  },
  {
    q: 'Are personal training packages separate from the general membership?',
    a: 'Yes, personal training packages are separate. General memberships include entry to the gym floor, cardio equipment, free weights, and general guidance. Direct 1-on-1 personal coaching is customized separately depending on your goals.',
  },
  {
    q: 'Do you offer trial workouts or day passes?',
    a: 'Absolutely! We offer a complimentary trial session for local residents of Alathur. Visit us during our morning or evening hours, and our staff will show you around.',
  },
  {
    q: 'What facilities are included in the gym space?',
    a: 'Our facilities include a dedicated cardio machine zone, full dumbbell rack (light to heavy), Olympic barbells, weighted plates, adjustable chest and shoulder benches, stretching mats, clean locker space, and dedicated trial areas.',
  },
];

export default function Faqs() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative py-24 bg-dark-950 border-b border-gold-500/5">
      {/* Background glow decoration */}
      <div className="absolute left-1/4 top-1/3 w-[300px] h-[300px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">FAQ Section</span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need to know about Gymnazo packages, facilities, rules, and student discounts.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
              >
                {/* Question trigger button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-gold-500 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? 'text-gold-500' : 'text-gray-500'}`} />
                    <span className="font-heading font-extrabold text-sm sm:text-base tracking-wide leading-tight">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-gold-500' : ''
                  }`} />
                </button>

                {/* Answer drawer content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[200px] border-t border-white/5' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-xs sm:text-sm text-gray-400 leading-relaxed bg-dark-900/30">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
