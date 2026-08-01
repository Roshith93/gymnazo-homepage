import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Gym Floor & Turf',
    category: 'Facilities',
    image: '/gallery-1.jpg',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Strength Section',
    category: 'Strength',
    image: '/gallery-5.jpg',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Captain America Dumbbells',
    category: 'Equipment',
    image: '/gallery-3.jpg',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    title: 'Elite Dumbbell Rack',
    category: 'Equipment',
    image: '/gallery-4.jpg',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    title: 'Advanced Training Turf',
    category: 'Facilities',
    image: '/gallery-2.jpg',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 6,
    title: 'Warmup & Stretching',
    category: 'Mobility',
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86685?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-1',
  },
];


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 bg-dark-950 border-b border-gold-500/5">
      {/* Background decoration */}
      <div className="absolute left-1/3 bottom-0 w-[300px] h-[300px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Visual Gallery</span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Gymnazo in <span className="text-gold-gradient">Action</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Take a visual tour of our training facilities, heavy iron sections, cardio turf, and athletic community in Alathur.
          </p>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className={`relative rounded-2xl overflow-hidden group border border-white/5 hover:border-gold-500/30 cursor-pointer shadow-lg shadow-black/40 transition-all duration-500 ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />

              {/* Text / Icon overlays */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                {/* Category tag */}
                <div className="self-start">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gold-500 bg-black/75 px-3 py-1 rounded-full border border-gold-500/20">
                    {item.category}
                  </span>
                </div>

                {/* Info and action */}
                <div className="flex items-end justify-between translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Gymnazo Space</p>
                  </div>
                  
                  <div className="h-9 w-9 rounded-xl bg-gold-500 text-black flex items-center justify-center shadow-lg shadow-gold-500/20">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-xl bg-dark-900 border border-white/10 text-white hover:text-gold-500 transition-colors"
            aria-label="Close image modal"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gymnazo Envisioned"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
