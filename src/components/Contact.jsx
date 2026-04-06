import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ExternalLink, Sparkles } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const ContactCard = ({ icon, label, value, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn}
    className="flex flex-col items-center p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-slate-700 transition-all duration-300 group relative overflow-hidden text-center cursor-none"
  >
    <div className="absolute -right-4 -top-4 w-12 h-12 blur-2xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: color }}></div>
    <div className="w-12 h-12 bg-black/50 rounded-2xl flex items-center justify-center mb-4 border border-slate-800 transition-transform group-hover:scale-110 duration-300" style={{ color }}>
      {icon}
    </div>
    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{label}</p>
    <p className="text-white font-bold text-sm truncate max-w-full">{value}</p>
    <ExternalLink className="absolute top-4 right-4 w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });
  
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f5e482d0-5a59-4d84-9282-c8bed6bf72b9",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ type: 'success', msg: 'Message successfully delivered. Thank you!' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="max-w-6xl mx-auto px-4 pt-4 pb-12 relative"
    >
      <motion.div variants={fadeIn} className="flex flex-col mb-16 items-center text-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">04. Connection Hub</span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Touch</span>
        </h2>
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Available for new projects</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-1">
          <ContactCard icon={<Mail />} label="Email" value="krishgupta7898@gmail.com" href="mailto:krishgupta7898@gmail.com" color="#3b82f6" />
          <ContactCard icon={<Phone />} label="Phone" value="+91 7898325702" href="tel:+917898325702" color="#6366f1" />
          <ContactCard icon={<MapPin />} label="Location" value="Bhopal, India" href="#" color="#a855f7" />
        </div>

        {/* 3D Form Card */}
        <motion.div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700"></div>

          <form onSubmit={handleFormSubmit} className="relative z-10 space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold text-white tracking-tight uppercase">Let's build something masterpiece.</h3>
            </div>

            {status.msg && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-2xl text-sm font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {status.msg}
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 group/input">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-4 transition-colors group-focus-within/input:text-blue-400">Full Name</p>
                <input 
                  type="text" required placeholder="Ex: John Doe" 
                  value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-600 cursor-none"
                />
              </div>
              <div className="space-y-2 group/input">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-4 transition-colors group-focus-within/input:text-blue-400">Email Address</p>
                <input 
                  type="email" required placeholder="Ex: john@email.com" 
                  value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-600 cursor-none"
                />
              </div>
            </div>
            
            <div className="space-y-2 group/input">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-4 transition-colors group-focus-within/input:text-blue-400">Project Details</p>
              <textarea 
                required placeholder="Tell me more about your project..." rows="5"
                value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-600 resize-none cursor-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl py-6 font-black uppercase tracking-[0.2em] transition-all shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.5)] disabled:opacity-70 flex justify-center items-center group cursor-none hover:-translate-y-1 active:translate-y-0"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <span className="flex items-center gap-3">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
