const facilities = [
  {
    title: 'Cardio Machines',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    desc: 'Commercial treadmills, rowers, and upright exercise bikes.',
  },
  {
    title: 'Professional Dumbbells',
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&q=80&w=600',
    desc: 'Ergonomic dumbbells ranging from 2.5kg up to heavy iron.',
  },
  {
    title: 'Olympic Barbells',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600&fit=crop&q=80&w=600&auto=format', // Alternating Unsplash barbell
    // Let's use a nice barbell specific unsplash image:
    image_alt: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    desc: 'Standard 20kg Olympic bars, EZ curl bars, and powerlifting cages.',
  },
  {
    title: 'Rubberized Weight Plates',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600',
    desc: 'Color-coded bumper plates and durable rubberized iron disks.',
  },
  {
    title: 'Adjustable Benches',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    desc: 'Incline, decline, and flat benches for bench press and free weights.',
  },
  {
    title: 'Dedicated Stretching Area',
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86685?auto=format&fit=crop&q=80&w=600',
    desc: 'Padded floor mats, yoga blocks, and foam rollers for flexibility.',
  },
  {
    title: 'Personal Training Zone',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
    desc: 'Assigned personal space for 1-on-1 coaching and target setting.',
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 bg-dark-950 border-b border-gold-500/5">
      {/* Glow highlight */}
      <div className="absolute right-1/4 top-1/4 w-[300px] h-[300px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Our Facilities</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
              State-Of-The-Art <span className="text-gold-gradient">Environment</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Explore the premium zones at Gymnazo designed to maximize your efficiency, comfort, and performance safety.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => {
            const imgSrc = fac.image_alt || fac.image;
            return (
              <div
                key={idx}
                className="relative h-[300px] rounded-2xl overflow-hidden group shadow-lg shadow-black/40 border border-white/5 hover:border-gold-500/30 transition-all duration-500"
              >
                {/* Background Image */}
                <img
                  src={imgSrc}
                  alt={fac.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Black Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/60 transition-all duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-gold-400 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle border top glow */}
                <div className="absolute inset-0 rounded-2xl border border-gold-500/0 group-hover:border-gold-500/20 pointer-events-none transition-all duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
