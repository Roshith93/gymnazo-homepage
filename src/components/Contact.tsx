import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Star } from 'lucide-react';
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

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  goal: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Build EmailJS Template parameters mapping
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: `+91-${data.phone}`,
      fitness_goal: data.goal,
      message: data.message,
      to_email: 'gymnazo.in@gmail.com', // Target email
    };

    if (serviceId && templateId && publicKey) {
      try {
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
        
        if (response.status === 200) {
          setSubmitStatus('success');
          setStatusMessage('Your enquiry was sent successfully! Our trainers will contact you soon.');
          reset();
        } else {
          throw new Error('EmailJS failed to deliver.');
        }
      } catch (err) {
        console.error('EmailJS submission error:', err);
        setSubmitStatus('error');
        setStatusMessage('Failed to deliver your email. Please try call or WhatsApp us directly.');
      }
    } else {
      // Developer simulated fallback mode
      console.log('--- EmailJS Fallback Simulation ---');
      console.log('EmailJS keys not detected in .env.local. Running in simulation mode.');
      console.log('Submission Payload:', templateParams);
      
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setStatusMessage('Enquiry submitted! (Simulation Mode: data logged to console successfully)');
      reset();
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-900 border-b border-gold-500/5">
      {/* Background gradients */}
      <div className="absolute right-1/4 top-1/4 w-[300px] h-[300px] bg-gold-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500">Contact Us</span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Start Your Fitness <span className="text-gold-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Reach out via our form, call us, drop a WhatsApp message, or visit our space in Alathur, Palakkad.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct info, Social CTA, Google Map (span 5) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Gym info block */}
              <div>
                <h3 className="font-heading font-black text-xl text-white">Gymnazo</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mt-1">The Fitness Zone</p>
              </div>

              {/* Specific Items */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</h4>
                    <p className="text-sm text-gray-200 mt-1">Alathur, Palakkad, Kerala, India</p>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Call Us</h4>
                    <a href="tel:+917907878740" className="text-sm text-gray-200 hover:text-gold-500 transition-colors mt-1 block font-semibold">
                      +91 7907878740
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</h4>
                    <a href="mailto:gymnazo.in@gmail.com" className="text-sm text-gray-200 hover:text-gold-500 transition-colors mt-1 block">
                      gymnazo.in@gmail.com
                    </a>
                  </div>
                </div>

                {/* Operating Shifts */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Timings</h4>
                    <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                      Morning: 5:00 AM – 10:00 AM <br />
                      Evening: 4:00 PM – 10:00 PM <br />
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Closed on Sundays</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Chat action buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/917907878740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3 shadow-lg shadow-emerald-500/10 active:scale-95 transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/gymnazo.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider py-3 shadow-lg shadow-purple-500/10 active:scale-95 transition-all"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>

            </div>

            {/* Google Reviews Widget */}
            <div className="glass-panel rounded-2xl p-5 border border-gold-500/10 flex items-center justify-between shadow-lg mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.707 0-8.529-3.896-8.529-8.7S7.533 1.115 12.24 1.115c2.203 0 4.185.836 5.727 2.215l3.197-3.197C18.892.934 15.82 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c7.062 0 11.734-4.966 11.734-11.94 0-.806-.067-1.41-.157-2.255H12.24z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex gap-0.5 text-gold-500 mb-0.5">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Google Reviews</p>
                </div>
              </div>
              <a
                href="https://g.page/r/Cadh2_jNHdovEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gold-500/20 bg-gold-500/5 hover:bg-gold-500 hover:text-black px-4 py-2 text-[10px] font-black uppercase tracking-wider text-gold-500 transition-colors active:scale-95 cursor-pointer"
              >
                Write Review
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-lg h-[220px]">
              <iframe
                title="Gymnazo Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4674390089886!2d76.5304626!3d10.6482802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba80b00197a6559%3A0x2fda1dcdf8db61a7!2sGymnazo%20The%20Fitness%20Zone!5e0!3m2!1sen!2sin!4v1719260000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Contact form (span 7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gold-500/10">
              <h3 className="font-heading font-black text-xl text-white mb-2">Send Enquiry</h3>
              <p className="text-xs text-gray-400 mb-6">Fill in the form details below to request details on slots, personal training, or student deals.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-rose-500 font-semibold">{errors.name.message}</span>
                  )}
                </div>

                {/* Grid phone & email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                    <div className="flex rounded-xl overflow-hidden border border-white/5 focus-within:border-gold-500/50 bg-dark-950">
                      <span className="bg-dark-900 border-r border-white/5 px-3 py-3 text-xs sm:text-sm text-gold-500 font-extrabold flex items-center select-none">
                        +91-
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="9999999999"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit mobile number',
                          },
                          onChange: (e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                          }
                        })}
                        className="w-full bg-transparent px-4 py-3 text-xs sm:text-sm text-white focus:outline-none"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[10px] text-rose-500 font-semibold">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      {...register('email', {
                        required: 'Email address is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-rose-500 font-semibold">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Goal Selector */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Fitness Goal</label>
                  <select
                    defaultValue=""
                    {...register('goal', { required: 'Please select a fitness goal' })}
                    className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-300 focus:outline-none cursor-pointer"
                  >
                    <option value="" disabled>Select your focus area</option>
                    <option value="Muscle Building">💪 Muscle Building (Hypertrophy)</option>
                    <option value="Fat Loss">🔥 Fat Loss / Toning</option>
                    <option value="Strength Training">🏋 Power / Heavy Strength</option>
                    <option value="Cardio Fitness">❤️ Cardio / Aerobic Stamina</option>
                    <option value="Functional Athletics">⚡ Mobility / Functional Athletics</option>
                    <option value="Personal Coaching">👨 1-on-1 Personal Training</option>
                  </select>
                  {errors.goal && (
                    <span className="text-[10px] text-rose-500 font-semibold">{errors.goal.message}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Message / Request</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirement, preference, or slot enquiries..."
                    {...register('message', { required: 'Please enter a message' })}
                    className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none resize-none"
                  />
                  {errors.message && (
                    <span className="text-[10px] text-rose-500 font-semibold">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-black py-4 rounded-xl font-heading font-black text-xs uppercase tracking-widest transition-all duration-300 hover:from-gold-500 hover:to-gold-400 disabled:opacity-50 cursor-pointer shadow-lg shadow-gold-500/10 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Send Enquiry
                    </>
                  )}
                </button>

                {/* Feedback Alerts */}
                {submitStatus === 'success' && (
                  <div className="mt-4 flex gap-3 items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl animate-fadeIn">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="text-xs font-semibold leading-normal">{statusMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 flex gap-3 items-center bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl animate-fadeIn">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="text-xs font-semibold leading-normal">{statusMessage}</p>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
