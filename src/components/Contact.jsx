import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Terminal, Hash, ShieldCheck, Activity, Globe } from 'lucide-react';
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



const CommunicationModule = ({ icon, label, value, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn}
    className="group bg-[#111111]/30 backdrop-blur-3xl border border-white/5 rounded-3xl p-8 hover:border-purple-500/20 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
  >
    <div className="w-16 h-16 bg-purple-500/5 border border-purple-500/10 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:bg-purple-500/10 group-hover:scale-110 group-hover:border-purple-500/30" style={{ color: '#a855f7' }}>
      {React.cloneElement(icon, { className: 'w-8 h-8' })}
    </div>
    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-purple-500/50 mb-2 font-black">{label}</p>
    <p className="text-white font-black text-sm uppercase tracking-widest truncate max-w-full group-hover:text-purple-400 transition-colors">{value}</p>
    
    {/* Diagnostic HUD marker */}
    <div className="absolute top-4 right-4 font-mono text-[8px] text-white/5 uppercase tracking-widest">
        UPLINK: ACTIVE
    </div>
  </motion.a>
);

const SysStatusCard = () => (
  <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="p-6 md:p-10 bg-[#080808] border border-white/5 rounded-2xl md:rounded-[2.5rem] relative overflow-hidden group shadow-3xl"
  >
      {/* 1. Kinetic Border Patrol */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* 2. Optimized Hex Stream Background (Minimal DOM nodes) */}
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none select-none">
          <div className="absolute inset-0 animate-data-drift flex flex-col font-mono text-[8px] gap-2 p-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="opacity-50">
                  0x{Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase().padStart(6,'0')} 
                  0x{Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase().padStart(6,'0')}
                  0x{Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase().padStart(6,'0')}
                </div>
              ))}
          </div>
      </div>

      <div className="relative z-10">
          <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                  {/* Radar Wave Pulse */}
                  <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20 scale-150" />
                  <div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_#a855f7] relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.5em] font-black">SYS_STATUS</span>
                <span className="text-[12px] font-black text-white italic tracking-tighter uppercase mt-1">Operational_Mode</span>
              </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative mb-4">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-500/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-500/30" />
              
              <p className="text-[11px] font-mono text-slate-400 leading-relaxed uppercase font-bold tracking-tight">
                  Ready for end-to-end architecture deployment and full-stack integration. 
                  <span className="text-purple-500/80 block mt-2 animate-pulse font-black">
                      {">"} PROTOCOLS_STANDING_BY_FOR_INITIAL_TRANSMISSION...
                  </span>
              </p>
          </div>

          {/* HUD Metadata */}
          <div className="flex justify-between items-center opacity-30 group-hover:opacity-60 transition-opacity">
              <span className="text-[7px] font-mono font-black text-slate-500 uppercase tracking-[0.4em]">Auth: SEC_V4</span>
              <div className="flex gap-2">
                  <div className="w-8 h-[2px] bg-white/10" />
                  <div className="w-2 h-[2px] bg-purple-500" />
              </div>
          </div>
      </div>

      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.03),transparent_70%)] pointer-events-none" />
  </motion.div>
);

const SectionHeader = ({ label, title, status, location }) => (
    <motion.div variants={fadeIn} className="relative mb-16 md:mb-24 w-full group/header px-4 md:px-0">
        {/* The Frame Background - Adjusted for mobile */}
        <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[2.5rem] -mx-2 md:-mx-8 -my-4 md:-my-8 pointer-events-none" />
        
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            <div className="flex flex-col gap-3 md:gap-4">
                {/* Module Label Tag */}
                <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white font-mono text-[7px] md:text-[8px] font-black tracking-[0.3em] uppercase px-2 md:px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        {label}
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-purple-500 to-transparent opacity-30" />
                </div>
                
                {/* Main High-Contrast Title - Granular scaling */}
                <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.9] md:leading-none flex flex-wrap items-baseline">
                    {title.split(' ')[0]} 
                    <span className="text-purple-500 ml-2 md:ml-4 group-hover/header:ml-4 md:group-hover/header:ml-8 transition-all duration-700 whitespace-nowrap">
                        {title.split(' ').slice(1).join(' ')}
                    </span>
                </h2>
            </div>

            {/* Diagnostic Data Block */}
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 font-mono w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                <div className="flex items-center gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-lg">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-[8px] md:text-[10px] text-slate-300 font-bold tracking-widest uppercase">{status || 'SYSTEM_READY'}</span>
                </div>
                <div className="text-[8px] md:text-[10px] text-slate-500 tracking-[0.2em] md:tracking-[0.4em] uppercase font-black">
                    {location || 'IN // BHOPAL_HUB'}
                </div>
            </div>
        </div>

        {/* Decorative Corner Markers - Hidden on mobile for cleaner look */}
        <div className="absolute -top-4 -left-2 md:-top-8 md:-left-8 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-purple-500/30 rounded-tl-xl md:rounded-tl-2xl pointer-events-none" />
        <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-8 w-8 md:w-12 h-8 md:h-12 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl md:rounded-br-2xl pointer-events-none" />
    </motion.div>
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
      className="py-20 relative overflow-hidden bg-[#010409]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
            label="04. Communication Protocol" 
            title="Direct Uplink" 
            status="TERMINAL: READY"
        />

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Communication Modules */}
          <div className="grid grid-cols-1 gap-8 lg:col-span-1">
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
                    className="relative"
                >
                    <CommunicationModule {...module} />
                </motion.div>
            ))}
            
            {/* Desktop System Availability Hud removed from here */}
          </div>

          {/* Command Terminal Form */}
          <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="lg:col-span-2 relative group"
          >
            <div className="bg-[#111111]/30 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                {/* Neon Corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/20 rounded-tl-[3rem] group-hover:border-purple-500/50 transition-colors duration-700" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/20 rounded-br-[3rem] group-hover:border-purple-500/50 transition-colors duration-700" />

                <div className="absolute top-6 right-10 font-mono text-[9px] text-purple-500/20 font-black uppercase tracking-widest">TERM_ID: KRISH_UPLINK_PRO</div>

                <form onSubmit={handleFormSubmit} className="relative z-10 space-y-10">
                <div className="flex items-center gap-6 mb-12">
                    <Terminal className="w-8 h-8 text-purple-500" />
                    <h3 className="text-3xl font-black text-white tracking-widest uppercase leading-none">Execute Message Protocol</h3>
                </div>

                {status.msg && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`p-6 rounded-2xl font-mono text-xs font-black border ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                    {status.msg}
                    </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4 group/input relative"
                    >
                    <div className="flex justify-between items-center px-2">
                        <span className="text-[10px] font-mono text-purple-500/50 uppercase tracking-[0.3em] font-black">Input_Identity</span>
                        <span className="text-[9px] font-mono text-slate-600 uppercase font-bold">Status: {formState.name ? 'VALID' : 'WAITING'}</span>
                    </div>
                    <input 
                        type="text" required placeholder="User_Name" 
                        value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all placeholder:text-slate-800 font-mono text-sm uppercase"
                    />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4 group/input relative"
                    >
                    <div className="flex justify-between items-center px-2">
                        <span className="text-[10px] font-mono text-purple-500/50 uppercase tracking-[0.3em] font-black">Input_Address</span>
                        <span className="text-[9px] font-mono text-slate-600 uppercase font-bold">Status: {formState.email ? 'VALID' : 'WAITING'}</span>
                    </div>
                    <input 
                        type="email" required placeholder="User_Email" 
                        value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all placeholder:text-slate-800 font-mono text-sm uppercase"
                    />
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4 group/input relative"
                >
                    <div className="flex justify-between items-center px-2">
                        <span className="text-[10px] font-mono text-purple-500/50 uppercase tracking-[0.3em] font-black">Input_Payload</span>
                        <span className="text-[9px] font-mono text-slate-600 uppercase font-bold">Size: {formState.message.length} bytes</span>
                    </div>
                    <textarea 
                    required placeholder="Enter_Encryption_Details..." rows="6"
                    value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all placeholder:text-slate-800 resize-none font-mono text-sm uppercase"
                    ></textarea>
                </motion.div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-black rounded-full py-6 font-black uppercase tracking-[0.4em] text-xs transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex justify-center items-center group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-4">
                        {isSubmitting ? (
                            <>
                                <div className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                <span className="animate-pulse">ENCRYPTING...</span>
                            </>
                        ) : (
                            <>
                                Initialize Transmission
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none" />
                </button>
                </form>

                {/* Aesthetic grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Global System Status HUD - Full Width */}
        <div className="mt-16 md:mt-24 w-full">
            <SysStatusCard />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
