import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote: "Very good Gym with Awesome facilities and equipment. Just had an amazing workout at the gym! 💪 The trainers are super knowledgeable, and the equipment is top-notch. Seriously, if you're thinking about joining, do it! The staff here is so friendly and always ready to help. This place is definitely worth checking out!",
    author: 'Hafiz Napster',
    status: 'Local Guide',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "I personally feel this gym is not just a place for fitness, but also a place of support and motivation. The atmosphere is very positive, and the trainers and members are always willing to help. It feels comfortable and welcoming, making it easy to reach out for guidance whenever needed. This gym has helped me improve not only physically but also mentally. Highly recommended!",
    author: 'Surendran Rk',
    status: 'Regular Member',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "Gymnazo is an excellent gym with quality equipment, a clean environment, and a motivating atmosphere. The trainers are supportive and helpful, and the members are friendly. It's a great place for anyone serious about fitness, bodybuilding, or improving their health. Highly recommended!",
    author: 'ABHI ABHI',
    status: 'Active Member',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "A very well maintained and one of the oldest gym in Alathur.. perfectly good choice if you are a beginner. The trainers are also very supportive and friendly.. would recommend to everyone who are planning to start working out.",
    author: 'Jayin Varghese Embrayil',
    status: 'Regular Member',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "I have PCOS before joining the Gymnazo gym and after joining the gym I reversed my PCOS. I have had a good experience ❤️‍🩹",
    author: 'Shaikha Shaikha',
    status: 'Regular Member',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "Sweat, sore muscles, zero regrets 💪 This gym = result.",
    author: 'Ambili Jayaram',
    status: 'Regular Member',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "Gym is pretty spacious also it's open till 10pm which is a plus. Also the trainers are really knowledgeable and kind.",
    author: 'Govardhan',
    status: 'Local Guide',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "Trainers are friendly and this gym have a wide variety of equipments and overall a great gym.",
    author: 'Insina',
    status: 'Regular Member',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "Excellent gym with modern equipment, a clean environment, and friendly, supportive trainers. Highly recommended. 😍",
    author: 'Mahesh M',
    status: 'Regular Member',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
  },
  {
    rating: 5,
    quote: "Excellent Gym, trainers are very good.",
    author: 'Roshith Radhakrishnan',
    status: 'Local Guide',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-dark-900 border-b border-gold-500/5 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute right-1/3 top-1/4 w-[350px] h-[350px] bg-gold-900/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Testimonials</span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Loved By Our <span className="text-gold-gradient">Community</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Don't just take our word for it. Here is what members from Alathur, Palakkad say about their Gymnazo experience.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl shadow-black/80 overflow-hidden border border-gold-500/10">
          
          {/* Quote Icon Background */}
          <div className="absolute -top-6 -right-6 text-gold-500/5 pointer-events-none">
            <Quote className="h-44 w-44 rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            
            {/* Stars rating */}
            <div className="flex items-center gap-1">
              {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-200 font-medium italic leading-relaxed max-w-3xl">
              "{testimonials[activeIdx].quote}"
            </p>

            {/* Author details */}
            <div className="flex flex-col items-center space-y-3 pt-4">
              <img
                src={testimonials[activeIdx].avatar}
                alt={testimonials[activeIdx].author}
                className="h-14 w-14 rounded-full object-cover border-2 border-gold-500/30 shadow-lg"
              />
              <div>
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-white">
                  {testimonials[activeIdx].author}
                </h4>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-500 mt-0.5">
                  {testimonials[activeIdx].status}
                </p>
              </div>
            </div>

          </div>

          {/* Nav Buttons */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto p-2 rounded-xl bg-dark-950 border border-white/5 text-gray-400 hover:text-gold-500 hover:border-gold-500/20 active:scale-95 transition-all shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto p-2 rounded-xl bg-dark-950 border border-white/5 text-gray-400 hover:text-gold-500 hover:border-gold-500/20 active:scale-95 transition-all shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Nav Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIdx === idx
                  ? 'w-8 bg-gradient-to-r from-gold-600 to-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                  : 'w-2.5 bg-dark-800 border border-white/5 hover:bg-gold-500/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
