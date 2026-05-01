import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { education } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../utils/animations';
import profilePic from '../assets/front.jpg';
import { BookOpen, Target, Shield, Compass } from 'lucide-react';
import BorderConduit from './BorderConduit';

const CornerFrame = () => (
    <>
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 -translate-x-1 -translate-y-1" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/50 translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 -translate-x-1 translate-y-1" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/50 translate-x-1 translate-y-1" />
    </>
);

const EducationCard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between w-full mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Schematic Node */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-12 h-12 bg-[#010409] border-2 border-purple-500/30 flex items-center justify-center z-20 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
        <div className="absolute inset-0 bg-purple-500/5 animate-pulse rounded-xl" />
        <div className="relative z-10 text-purple-400 font-mono text-xs font-black">0{index + 1}</div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
      </div>

      {/* Blueprint Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative w-[calc(100%-48px)] md:w-[45%] p-10 bg-[#111111]/60 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] hover:border-purple-500/40 transition-all group ml-auto md:ml-0 shadow-2xl overflow-hidden`}
      >
          {/* Subtle grid in background of card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />
          
          <div className="flex flex-col gap-5 relative z-10">
          <div className="flex justify-between items-baseline mb-2">
            <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-sm border border-purple-500/10">
                    LOG_YEAR: {item.year}
                </span>
                <div className="flex items-center gap-2 bg-emerald-500/5 px-2 py-1 rounded-sm border border-emerald-500/10">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="font-mono text-[8px] font-black tracking-[0.2em] text-emerald-400 uppercase">VERIFIED</span>
                </div>
            </div>
            <span className="font-mono text-[9px] text-slate-600 uppercase tracking-widest font-black opacity-50">REF: {item.id}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">{item.title}</h3>
          <p className="text-purple-400 font-mono text-[11px] tracking-[0.3em] uppercase mb-2 font-black">{item.institution}</p>
          
          <div className="w-full h-[1px] bg-gradient-to-r from-purple-500/30 via-transparent to-transparent mb-2" />

          <p className="text-slate-400 text-base leading-relaxed font-medium">
            {item.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />
                <span className="text-[10px] font-mono text-slate-500 uppercase font-black tracking-[0.4em]">GRADE: {item.grade}</span>
            </div>
            <div className="font-mono text-[9px] text-purple-500/20 uppercase font-black tracking-[0.3em]">AUTH_ENCRYPTED</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const BentoCard = ({ children, className, title, subtitle }) => (
  <motion.div
    variants={fadeIn}
    className={`relative group bg-[#111111]/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl hover:border-purple-500/20 transition-all duration-700 ${className}`}
  >
    {/* Neon Corners */}
    <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-purple-500/20 rounded-tl-[2.5rem] z-20 group-hover:border-purple-500/50 transition-colors" />
    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-purple-500/20 rounded-br-[2.5rem] z-20 group-hover:border-purple-500/50 transition-colors" />

    {title && (
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest">{title}</h4>
          {subtitle && <p className="text-[9px] font-mono text-purple-500/50 uppercase tracking-[0.3em] font-black mt-1">{subtitle}</p>}
        </div>
        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_#a855f7]" />
      </div>
    )}

    <div className="relative z-10 h-full">{children}</div>

    {/* Aesthetic grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
  </motion.div>
);

const SectionHeader = ({ label, title, status, location }) => (
    <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/5 pb-8 w-full">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                <span className="text-purple-400 font-mono text-[9px] font-black tracking-[0.4em] uppercase">{label}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none uppercase">
                {title.split(' ')[0]} <span className="text-white/20 italic">{title.split(' ').slice(1).join(' ')}</span>
                <span className="text-purple-500 italic">.</span>
            </h2>
        </div>
        <div className="flex flex-col items-end gap-2 mb-1">
            <div className="px-4 py-1.5 bg-[#0a0a0a] border border-white/10 rounded-sm flex items-center gap-2 shadow-2xl relative overflow-hidden group">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                <span className="text-[9px] font-mono text-slate-300 font-black tracking-[0.2em] uppercase">{status || 'SYSTEM_SYNC: ACTIVE'}</span>
            </div>
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] font-black">{location || 'BHOPAL // INDIA_REGION'}</span>
        </div>
    </motion.div>
);

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="about" 
      className="py-20 relative bg-[#010409] min-h-screen overflow-hidden"
    >
      {/* Modal - Kept for High Interactivity */}
      <AnimatePresence>
        {isResumeOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsResumeOpen(false)}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            >
                <motion.div 
                    initial={{ scale: 0.95, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 30 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-[90vw] h-[92vh] bg-white rounded-xl overflow-hidden shadow-[0_0_100px_rgba(168,85,247,0.3)] border border-white/10"
                >
                    <div className="absolute top-4 right-6 z-50">
                        <button 
                            onClick={() => setIsResumeOpen(false)}
                            className="p-4 bg-black/5 hover:bg-black/10 rounded-full transition-all group active:scale-95"
                        >
                            <Shield className="w-8 h-8 text-slate-400 group-hover:text-purple-600 rotate-45 transition-colors" />
                        </button>
                    </div>
                    <iframe 
                        src="/Krish_Resume.pdf#view=FitH&toolbar=1" 
                        className="w-full h-full border-none"
                        title="Full Resume View"
                    />
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Background Atmosphere - Optimized */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#1a1b1e,transparent)] opacity-40" />
          
          {/* Animated Glows - Reduced Blur for Performance */}
          <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/5 blur-[80px] animate-breathing will-change-transform" />
          <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[80px] animate-breathing will-change-transform" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
            label="01. Biographical Schematic" 
            title="About Background" 
            status="PERSONA_ARCHIVE: SYNCED"
        />
        
        {/* Top Section: BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          
          {/* Bio Card - Large */}
          <BentoCard 
            title="Persona Archive" 
            subtitle="Core_Identity // V4.0"
            className="md:col-span-2 md:row-span-2"
          >
            <div className="space-y-8 mt-4">
              <p className="text-slate-100 text-2xl md:text-5xl font-black leading-tight tracking-tight">
                "Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Stunning Design</span> with Iron-Clad Backend Logic."
              </p>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium border-l-4 border-purple-500/20 pl-8 max-w-2xl">
                I thrive on building end-to-end applications that solve real-world problems. My strength lies in distilling complex workflows into maintainable architectures.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                  {['System Design', 'OOP', 'Query Optimization', 'Clean Code'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">
                        {tag}
                    </span>
                  ))}
              </div>
            </div>
          </BentoCard>

          {/* Status Card */}
          <BentoCard 
            title="System Status" 
            subtitle="Uptime: 99.9%"
            className="md:col-span-1"
          >
            <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                <div className="w-20 h-20 rounded-full border-2 border-purple-500/20 flex items-center justify-center relative mb-4">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-full animate-ping" />
                    <div className="w-8 h-8 bg-purple-500 rounded-full shadow-[0_0_20px_#a855f7] animate-pulse" />
                </div>
                <p className="text-emerald-400 font-mono text-[10px] font-black tracking-[0.4em] uppercase">STATUS: OPTIMAL</p>
                <p className="text-slate-500 text-[9px] font-mono uppercase mt-2 tracking-widest">Protocol Standing By</p>
            </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard 
            title="Loc_Coord" 
            subtitle="Node_Bhopal"
            className="md:col-span-1"
          >
            <div className="flex flex-col gap-4 mt-2">
                <div className="space-y-1">
                    <p className="text-white font-black text-2xl tracking-tighter">Bhopal, India</p>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">23.2599° N // 77.4126° E</p>
                </div>
                <div className="h-20 w-full bg-white/5 rounded-2xl relative overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#a855f720,transparent)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
                </div>
            </div>
          </BentoCard>

          {/* Specialization Cards */}
          <BentoCard title="Architecture" subtitle="Diag_01" className="md:col-span-1">
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
                Deeply comfortable stitching scalable relational models (MySQL) to React.js interfaces.
            </p>
          </BentoCard>

          <BentoCard title="Optimization" subtitle="Diag_02" className="md:col-span-1">
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
                 Distilling highly complex workflows into maintainable, high-performance code architectures.
            </p>
          </BentoCard>

          <BentoCard title="UX/UI" subtitle="Diag_03" className="md:col-span-1">
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
                Obsessed with crafting Butter-smooth, engaging, and premium interactivity.
            </p>
          </BentoCard>

        </div>
        
        {/* Credentials Section: RESUME */}
        <motion.div variants={fadeIn} className="mb-32">
          <SectionHeader 
            label="CREDENTIALS" 
            title="Resume" 
            status="STATUS: VERIFIED"
            location="LAST_UPDATED: FEB 2026"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            {/* Main Resume Window Card */}
            <div className="md:col-span-3">
                <BentoCard 
                    title="Doc_Viewer" 
                    subtitle="Krish_Resume.pdf"
                    className="p-0 h-full overflow-hidden"
                >
                    <div 
                        onClick={() => setIsResumeOpen(true)}
                        className="group cursor-zoom-in relative h-full"
                    >
                        {/* OS Header - Embedded in Bento Style */}
                        <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="text-[9px] font-mono text-slate-500 font-black tracking-widest uppercase">System_Preview</span>
                        </div>

                        {/* Document Content */}
                        <div className="h-[480px] overflow-hidden relative bg-black flex justify-center items-start">
                            <div className="w-full h-full bg-white relative overflow-hidden">
                                <iframe 
                                    src="/Krish_Resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" 
                                    className="w-full h-[110%] border-none pointer-events-none select-none"
                                    title="Resume Preview"
                                    scrolling="no"
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Overlays */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                                <span className="text-4xl md:text-7xl font-black text-slate-900/5 rotate-[-30deg] tracking-tighter select-none uppercase group-hover:text-slate-900/10 transition-all duration-700 text-center px-10">
                                    CLICK TO ZOOM
                                </span>
                            </div>
                            
                            <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                                <motion.div 
                                    animate={{ top: ["-10%", "110%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[1px] bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.3)] z-50"
                                />
                            </div>
                        </div>
                    </div>
                </BentoCard>
            </div>

            {/* Sidebar Cards */}
            <div className="md:col-span-1 flex flex-col gap-6">
                {/* Operations Card */}
                <BentoCard title="Operations" subtitle="System_CTA" className="flex-1">
                    <div className="flex flex-col gap-4 mt-4">
                        <a 
                            href="/Krish_Resume.pdf" 
                            download="Krish_Resume.pdf"
                            className="w-full py-4 bg-white text-black rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
                        >
                            <Shield className="w-4 h-4" />
                            Download
                        </a>
                        <a 
                            href="/Krish_Resume.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-transparent border border-white/10 text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
                        >
                            <Compass className="w-4 h-4" />
                            External
                        </a>
                    </div>
                </BentoCard>

                {/* Metadata Card */}
                <BentoCard title="Metadata" subtitle="Sync_Data" className="flex-1">
                    <div className="space-y-4 mt-4">
                        {[
                            { label: 'Type', value: 'PDF/A' },
                            { label: 'Size', value: '2.4 MB' },
                            { label: 'Status', value: 'Synced', color: 'text-purple-500' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest font-black">{item.label}</span>
                                <span className={`text-[9px] font-mono ${item.color || 'text-slate-300'} font-black tracking-widest uppercase`}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </BentoCard>
            </div>
          </div>
        </motion.div>

        {/* Sequential Execution Path (Timeline) */}
        <motion.div variants={fadeIn} className="relative">
          <SectionHeader 
            label="ARCHITECTURE // TIMELINE" 
            title="Career Matrix" 
            status="SYSTEM_SYNC: ACTIVE"
          />

          <div className="relative pb-32">
            {/* Schematic Central Wire */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-[2px] h-full bg-white/5 z-10 overflow-hidden">
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 3.5, ease: [0.32, 0.72, 0, 1] }}
                    className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"
                />
                
                {/* Flowing Downward Data Pulse */}
                <motion.div 
                    animate={{ 
                        top: ["-20%", "120%"],
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute left-0 w-full h-80 bg-gradient-to-b from-transparent via-purple-500 via-blue-400 to-transparent z-20"
                />
            </div>
            
            <div className="relative z-20 space-y-4">
              {education.map((item, index) => (
                <EducationCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
