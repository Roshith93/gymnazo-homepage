import { Dumbbell, Flame, ShieldAlert, Heart, Zap, UserPlus } from 'lucide-react';

const programs = [
  {
    icon: Dumbbell,
    title: 'Muscle Building',
    tagline: 'Hypertrophy & Tone',
    desc: 'Focus on progressive overload, high-volume resistance exercises, and custom nutrition pathways to sculpt solid, lean muscle mass.',
  },
  {
    icon: Flame,
    title: 'Fat Loss',
    tagline: 'Burn & Shred',
    desc: 'High-intensity interval training (HIIT), metabolic conditioning, and structured cardio circuits designed to torch fat while maintaining lean muscle.',
  },
  {
    icon: ShieldAlert, // Representing raw strength power
    title: 'Strength Training',
    tagline: 'Power & Performance',
    desc: 'Master basic compound movements (squat, bench press, deadlift) and increase your absolute physical strength and structural bone density.',
  },
  {
    icon: Heart,
    title: 'Cardio Training',
    tagline: 'Stamina & Endurance',
    desc: 'Optimize VO2 max and conditioning with custom routines on our state-of-the-art treadmills, assault bikes, and rowing stations.',
  },
  {
    icon: Zap,
    title: 'Functional Fitness',
    tagline: 'Mobility & Athletics',
    desc: 'Improve real-world movement efficiency, joint flexibility, core stability, and agility to perform better in daily life and recreational sports.',
  },
  {
    icon: UserPlus,
    title: 'Personal Training',
    tagline: '1-on-1 Dedicated Coaching',
    desc: 'Accelerate your progress with certified personal trainers who build bespoke routines, correct your form, and track daily lifestyle metrics.',
  },
];

export default function WorkoutPrograms() {
  return (
    <section id="programs" className="relative py-24 bg-dark-900 border-b border-gold-500/5">
      {/* Background decoration */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gold-900/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Our Programs</span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            Tailored Workout <span className="text-gold-gradient">Programs</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Select a pathway aligned with your immediate health objectives. Our coaches ensure target alignment and correct form.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden border border-white/5 hover:border-gold-500/30 hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                {/* Background Accent glow */}
                <div className="absolute -right-16 -bottom-16 w-36 h-36 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors duration-500" />
                
                <div className="space-y-6">
                  {/* Top Header Grid */}
                  <div className="flex items-start justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-all duration-300">
                      <Icon className="h-7 w-7 text-gold-500" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                      Active
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-gold-400 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-500/70">
                      {prog.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                {/* Card footer CTA action */}
                <div className="mt-8 border-t border-gold-500/5 pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gold-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Enquire Program</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
