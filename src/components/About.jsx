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
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className={`relative flex items-center justify-between w-full mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Schematic Node (Center Line) */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-10 h-10 bg-[#010409] border-2 border-purple-500/20 flex items-center justify-center z-20 rounded-xl">
        <div className="relative z-10 text-purple-400 font-mono text-[10px] font-black tracking-widest">0{index + 1}</div>
        <div className={`absolute -bottom-1 -right-1 w-2 h-2 rounded-full transition-all duration-700 ${isHovered ? 'bg-blue-400 shadow-[0_0_10px_#60a5fa]' : 'bg-white/10'}`} />
      </div>

      {/* Blueprint Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-[calc(100%-48px)] md:w-[45%] p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-white/10 transition-all duration-500 group ml-auto md:ml-0 shadow-3xl overflow-hidden cursor-pointer`}
      >
          <div className="flex flex-col relative z-10">
            {/* 1. Header: LOG_ID & TIME */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                        <div className="w-1 h-3 bg-blue-600 rounded-full" />
                        <div className="w-1 h-3 bg-blue-600/40 rounded-full" />
                    </div>
                    <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
                        VERIFIED_LOG_00{index + 1}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-700 rounded-full" />
                    <span className="font-mono text-[9px] font-black tracking-[0.2em] text-slate-600 uppercase">
                        {item.year}
                    </span>
                </div>
            </div>
            
            {/* 2. Main Title: Large, Italic, Bold */}
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-8 group-hover:translate-x-2 transition-transform duration-500">
                {item.title}
            </h3>

            {/* 3. Sub-Header: Institution & Category */}
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-[10px] font-black font-mono tracking-widest">{">_"}</span>
                    <span className="text-[11px] font-black font-mono tracking-widest uppercase">{item.institution}</span>
                </div>
                <div className="h-[1px] w-8 bg-white/10" />
                <span className="bg-white/5 px-3 py-1 rounded text-[8px] font-black font-mono text-slate-500 tracking-widest uppercase">
                    ACADEMIC
                </span>
            </div>

            {/* 4. Expansion Trigger Text */}
            <div className={`flex items-center gap-3 transition-all duration-500 mb-4 ${isHovered ? 'opacity-0 h-0' : 'opacity-40 h-auto'}`}>
                <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-slate-600 rounded-full" />)}
                </div>
                <span className="text-[8px] font-black font-mono tracking-[0.3em] text-slate-500 uppercase">ANALYZE LOG ENTRY // EXPAND DOSSIER</span>
                <Compass className="w-3 h-3 text-slate-500" />
            </div>

            {/* 5. Expanded Content: Dossier Style */}
            <motion.div
                initial={false}
                animate={{ 
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
            >
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 relative mb-8">
                    {/* Tiny corner brackets for that dossier look */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />
                    
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                        {item.description}
                    </p>
                </div>
                <div className="w-full h-[1px] bg-white/5 mb-8" />
            </motion.div>

            {/* 6. Footer: Tag & Stylized Number */}
            <div className="flex items-center justify-between mt-auto">
                <div className="bg-black border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 group-hover:border-blue-500/30 transition-colors">
                    <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-blue-500 transition-colors" />
                    <span className="text-[9px] font-black font-mono text-slate-500 tracking-widest uppercase">UNDERGRADUATE</span>
                </div>
                
                <span className="text-4xl font-black text-white/5 italic italic tracking-tighter group-hover:text-blue-500/20 transition-colors duration-700">
                    #0{index + 1}
                </span>
            </div>
          </div>

          {/* Background Highlight on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/[0.02] to-purple-600/[0.02] transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </motion.div>
    </div>
  );
};

const BentoCard = ({ children, className, title, subtitle }) => (
  <motion.div
    variants={fadeIn}
    className={`relative group bg-[#111111]/40 backdrop-blur-md border border-white/5 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 overflow-hidden shadow-2xl hover:border-purple-500/20 transition-all duration-700 ${className}`}
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

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            {/* Main Resume Window Card */}
            <div className="relative md:col-span-3">
                <BentoCard 
                    title="Doc_Viewer" 
                    subtitle="Krish_Resume.pdf"
                    className="p-0 h-full overflow-hidden relative"
                >
                    <div 
                        onClick={() => setIsResumeOpen(true)}
                        className="group cursor-zoom-in relative h-full"
                    >
                        {/* OS Header - Embedded in Bento Style */}
                        <div className="relative bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                            <div className="relative flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="relative text-[9px] font-mono text-slate-500 font-black tracking-widest uppercase">System_Preview</span>
                        </div>

                        {/* Document Content */}
                        <div className="relative h-[480px] overflow-hidden bg-black flex justify-center items-start">
                            <div className="relative w-full h-full bg-white overflow-hidden">
                                <iframe 
                                    src="/Krish_Resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" 
                                    className="relative w-full h-[110%] border-none pointer-events-none select-none"
                                    title="Resume Preview"
                                    scrolling="no"
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Overlays */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                                <span className="relative text-4xl md:text-7xl font-black text-slate-900/5 rotate-[-30deg] tracking-tighter select-none uppercase group-hover:text-slate-900/10 transition-all duration-700 text-center px-10">
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
            <div className="md:col-span-1 flex flex-col gap-6 relative">
                {/* Operations Card */}
                <BentoCard title="Operations" subtitle="System_CTA" className="flex-1 relative">
                    <div className="relative flex flex-col gap-4 mt-4">
                        <a 
                            href="/Krish_Resume.pdf" 
                            download="Krish_Resume.pdf"
                            className="relative w-full py-4 bg-white text-black rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
                        >
                            <Shield className="w-4 h-4" />
                            Download
                        </a>
                        <a 
                            href="/Krish_Resume.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full py-4 bg-transparent border border-white/10 text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
                        >
                            <Compass className="w-4 h-4" />
                            External
                        </a>
                    </div>
                </BentoCard>

                {/* Metadata Card */}
                <BentoCard title="Metadata" subtitle="Sync_Data" className="flex-1 relative">
                    <div className="relative space-y-4 mt-4">
                        {[
                            { label: 'Type', value: 'PDF/A' },
                            { label: 'Size', value: '2.4 MB' },
                            { label: 'Status', value: 'Synced', color: 'text-purple-500' },
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                <span className="relative text-[9px] font-mono text-slate-600 uppercase tracking-widest font-black">{item.label}</span>
                                <span className={`relative text-[9px] font-mono ${item.color || 'text-slate-300'} font-black tracking-widest uppercase`}>{item.value}</span>
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
                    transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
                    className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"
                />
                
                {/* Downward Flowing Data Stream (Optimized with CSS Animation) */}
                <div className="absolute inset-0 z-20 overflow-hidden">
                    <div 
                        className="w-full h-[200%] animate-[dataFlow_2s_linear_infinite] opacity-40 will-change-transform"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, transparent, #a855f7, transparent)',
                            backgroundSize: '100% 100px',
                            backgroundRepeat: 'repeat-y'
                        }}
                    />
                </div>
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
