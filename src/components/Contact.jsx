import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Terminal, Hash, ShieldCheck, Activity } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';
import BorderConduit from './BorderConduit';

const CornerFrame = () => (
    <>
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500/50 -translate-x-1 -translate-y-1" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-pink-500/50 translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-500/50 -translate-x-1 translate-y-1" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500/50 translate-x-1 translate-y-1" />
    </>
);

const CommunicationModule = ({ icon, label, value, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn}
    className="group bg-slate-900/20 backdrop-blur-xl border border-blue-500/10 rounded-sm p-6 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center cursor-none"
  >
    <CornerFrame />
    <div className="w-12 h-12 bg-pink-500/5 border border-pink-500/10 rounded-sm flex items-center justify-center mb-4 transition-all group-hover:bg-pink-500/10 group-hover:scale-110" style={{ color: '#ec4899' }}>
      {icon}
    </div>
    <p className="text-xs font-mono uppercase tracking-[0.2em] text-pink-500/50 mb-1">{label}</p>
    <p className="text-white font-black text-sm uppercase tracking-widest truncate max-w-full">{value}</p>
    
    {/* Diagnostic HUD marker */}
    <div className="absolute top-2 right-2 font-mono text-[6px] text-blue-500/20">
        MOD_L: ACTIVE
    </div>
  </motion.a>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });
  
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 100, damping: 30 });

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
        setStatus({ type: 'success', msg: 'LINK_ESTABLISHED // PACKET_DELIVERED' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || "UPLINK_FAILURE");
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'TERMINAL_ERROR // RETRY_PROTOCOL' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 relative overflow-hidden"
    >
      {/* No local background - handled globally for performance */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeIn} className="flex items-center gap-6 mb-16">
            <div className="p-3 bg-pink-500/10 border border-pink-500/20">
                <Activity className="text-pink-500 w-6 h-6" />
            </div>
            <div>
                <span className="text-pink-500 font-mono text-[10px] tracking-widest uppercase block mb-1">04. Communcation Protocol</span>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    Direct <span className="text-pink-blue">Uplink</span>
                </h2>
            </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Communication Modules */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-1">
            {[
                { icon: <Mail />, label: "Secure_Mail", value: "krishgupta7898@gmail.com", href: "mailto:krishgupta7898@gmail.com" },
                { icon: <Phone />, label: "Direct_Line", value: "+91 7898325702", href: "tel:+917898325702" },
                { icon: <MapPin />, label: "Loc_Coord", value: "Bhopal, India", href: "#" }
            ].map((module, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                >
                    <CommunicationModule {...module} color="#3b82f6" />
                </motion.div>
            ))}
            
            {/* System Availability Hud */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-pink-500/5 border border-pink-500/10 rounded-sm"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                    <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest">Sys_Status: Operational</span>
                </div>
                <p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase">
                    Ready for end-to-end architecture deployment and full-stack integration.
                </p>
            </motion.div>
          </div>

          {/* Command Terminal Form */}
          <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="lg:col-span-2 relative group"
          >
            <BorderConduit duration={8} className="overflow-hidden shadow-2xl">
                <div className="bg-slate-900/40 backdrop-blur-2xl border-y border-white/5 rounded-sm p-8 md:p-16 relative">
                    <CornerFrame />
                    <div className="absolute top-4 right-8 font-mono text-[9px] text-pink-500/20">TERM_ID: KRISH_UPLINK_PRO</div>

                    <form onSubmit={handleFormSubmit} className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4 mb-10">
                        <Terminal className="w-6 h-6 text-pink-500" />
                        <h3 className="text-2xl font-black text-white tracking-widest uppercase leading-none">Execute Message Protocol</h3>
                    </div>

                    {status.msg && (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`p-4 font-mono text-[10px] font-bold border ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                        {status.msg}
                        </motion.div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-3 group/input"
                        >
                        <div className="flex justify-between items-center px-1">
                            <span className="text-xs font-mono text-blue-500/50 uppercase tracking-widest">Input_Identity</span>
                            <span className="text-[10px] font-mono text-slate-600 uppercase">Status: {formState.name ? 'VALID' : 'WAITING'}</span>
                        </div>
                        <input 
                            type="text" required placeholder="User_Name" 
                            value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})}
                            className="w-full bg-slate-950 border border-blue-500/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-700 font-mono text-sm uppercase cursor-none"
                        />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-3 group/input"
                        >
                        <div className="flex justify-between items-center px-1">
                            <span className="text-xs font-mono text-blue-500/50 uppercase tracking-widest">Input_Address</span>
                            <span className="text-[10px] font-mono text-slate-600 uppercase">Status: {formState.email ? 'VALID' : 'WAITING'}</span>
                        </div>
                        <input 
                            type="email" required placeholder="User_Email" 
                            value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})}
                            className="w-full bg-slate-950 border border-blue-500/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-700 font-mono text-sm uppercase cursor-none"
                        />
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="space-y-3 group/input"
                    >
                        <div className="flex justify-between items-center px-1">
                            <span className="text-xs font-mono text-blue-500/50 uppercase tracking-widest">Input_Payload</span>
                            <span className="text-[10px] font-mono text-slate-600 uppercase">Size: {formState.message.length} bytes</span>
                        </div>
                        <textarea 
                        required placeholder="Enter_Encryption_Details..." rows="6"
                        value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-slate-950 border border-blue-500/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-700 resize-none font-mono text-sm uppercase cursor-none"
                        ></textarea>
                    </motion.div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-pink-600 text-white rounded-sm py-6 font-black uppercase tracking-[0.3em] text-xs transition-all shadow-[0_10px_20px_rgba(236,72,153,0.2)] hover:bg-white hover:text-pink-600 disabled:opacity-70 flex justify-center items-center group cursor-none"
                    >
                        {isSubmitting ? (
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span className="animate-pulse">ENCRYPTING...</span>
                        </div>
                        ) : (
                        <span className="flex items-center gap-4">
                            Initialize Transmission
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        )}
                    </button>
                    </form>
                </div>
            </BorderConduit>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
