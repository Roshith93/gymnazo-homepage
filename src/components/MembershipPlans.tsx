import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Monthly Plan',
    regularPrice: '1000',
    studentPrice: '800',
    duration: 'Month',
    features: [
      'Access to Strength Training Zone',
      'Cardio & Free Weight Access',
      'Locker & Shower Facility',
      'General Instructor Guidance',
      'Flexible Timing Access',
    ],
    popular: false,
  },
  {
    name: 'Quarterly Plan',
    regularPrice: '2599',
    studentPrice: '2199',
    duration: '3 Months',
    features: [
      'Access to Strength Training Zone',
      'Cardio & Free Weight Access',
      'Locker & Shower Facility',
      'General Instructor Guidance',
      '1 Custom Nutrition Session',
      'Flexible Timing Access',
    ],
    popular: false,
  },
  {
    name: 'Half Yearly Plan',
    regularPrice: '4599',
    studentPrice: '3999',
    duration: '6 Months',
    features: [
      'Access to Strength Training Zone',
      'Cardio & Free Weight Access',
      'Locker & Shower Facility',
      'General Instructor Guidance',
      '2 Custom Nutrition Sessions',
      'Body Composition Assessment',
      'Flexible Timing Access',
    ],
    popular: false,
  },
  {
    name: 'Yearly Plan',
    regularPrice: '7599',
    studentPrice: '6999',
    duration: '12 Months',
    features: [
      'Unrestricted Gym Floor Access',
      'Full Cardio & Strength Equipment',
      'Free Locker & Locker Facility',
      'General Instructor Support',
      '4 Custom Nutrition Consulting Sessions',
      'Monthly BMI & Fat Assessment',
      'Priority Trainer Walkthroughs',
      'Complimentary Gymnazo Welcome Kit',
    ],
    popular: true,
  },
];

export default function MembershipPlans() {
  const [billingType, setBillingType] = useState<'regular' | 'student'>('regular');

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
    <section id="memberships" className="relative py-24 bg-dark-950 border-b border-gold-500/5">
      {/* Glow decorations */}
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-gold-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] bg-gold-900/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Switch Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Flexible Pricing</span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Premium Membership <span className="text-gold-gradient">Plans</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base">
            Choose a plan that fits your schedule and status. Students enjoy special discounted packages with valid ID proof!
          </p>

          {/* Pricing Toggle Switch */}
          <div className="inline-flex rounded-full bg-dark-900 p-1 border border-gold-500/10 relative mt-4 shadow-inner shadow-black">
            <button
              onClick={() => setBillingType('regular')}
              className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billingType === 'regular'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Regular Members
            </button>
            <button
              onClick={() => setBillingType('student')}
              className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billingType === 'student'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Student Discount
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = billingType === 'regular' ? plan.regularPrice : plan.studentPrice;
            
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 border ${
                  plan.popular
                    ? 'bg-gradient-to-b from-gold-950/20 to-dark-900/80 border-gold-500 shadow-xl shadow-gold-500/5 -translate-y-2'
                    : 'bg-dark-900/50 border-white/5 hover:border-gold-500/30'
                } relative group`}
              >
                {/* Popular Ribbon Tag */}
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-black px-4 py-1 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Sparkles className="h-3 w-3 animate-spin" />
                    Best Value
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name */}
                  <div>
                    <h3 className="font-heading font-black text-lg text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase font-semibold tracking-wider">
                      Gymnazo Standard
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline">
                    <span className="text-sm font-bold text-gold-500">₹</span>
                    <span className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs text-gray-500 ml-1 font-semibold">
                      / {plan.duration}
                    </span>
                  </div>

                  <hr className="border-white/5" />

                  {/* Features List */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={handleScrollToContact}
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-black shadow-lg shadow-gold-500/10 hover:from-gold-500 hover:to-gold-400 hover:shadow-gold-500/30'
                        : 'bg-dark-800 text-gray-300 hover:bg-gold-500 hover:text-black border border-white/5 hover:border-transparent'
                    }`}
                  >
                    Join Today
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
