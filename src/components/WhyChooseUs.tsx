import { UserCheck, Activity, Flame, Shield, Users, CreditCard } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Personal Training',
    desc: 'Receive personalized workout and nutrition regimes designed by certified coaches who keep you accountable.',
  },
  {
    icon: Activity,
    title: 'Cardio Zone',
    desc: 'Equipped with commercial treadmills, ellipticals, and spin bikes to boost your stamina and cardiovascular health.',
  },
  {
    icon: Flame,
    title: 'Strength Training',
    desc: 'Heavy-duty chest press, leg press, lat pulldowns, and compound stations optimized for muscle building.',
  },
  {
    icon: Shield,
    title: 'Free Weights Area',
    desc: 'Extensive barbell racks, custom weight plates, benches, and dumbbells ranging from light to heavy.',
  },
  {
    icon: Users,
    title: 'Friendly Environment',
    desc: 'An inclusive, zero-ego community in Alathur where beginners and competitive athletes support each other.',
  },
  {
    icon: CreditCard,
    title: 'Affordable Memberships',
    desc: 'Premium health standards at pricing plans suited for students and regular fitness enthusiasts alike.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-dark-900 border-b border-gold-500/5">
      {/* Background radial gold glow */}
      <div className="absolute left-1/4 bottom-0 w-[400px] h-[300px] bg-gold-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Why Gymnazo</span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Build Your Perfect <span className="text-gold-gradient">Physique</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            We provide everything you need to break records, build clean mass, and optimize your fitness habits in Alathur.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Gold top accent glow bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="h-12 w-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                    <Icon className="h-6 w-6 text-gold-500 group-hover:text-black transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Small indicator design element */}
                <div className="mt-6 flex items-center justify-end text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold tracking-wider uppercase">
                  ✔ Checked
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
