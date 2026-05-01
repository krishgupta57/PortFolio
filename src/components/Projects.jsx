import React, { useState, useRef, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Dna, Cpu, ShieldCheck } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';
import { projects } from '../data/portfolioData';

const CyberButton = ({ children, href, className, primary }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative overflow-hidden group cursor-none ${className}`}
    >
      <div className="relative z-10 flex items-center gap-4">{children}</div>
      <motion.div 
        className={`absolute top-0 bottom-0 w-12 -skew-x-[20deg] -translate-x-[150%] group-hover:animate-[scan_1.5s_ease-in-out_infinite] ${primary ? 'bg-white/30 blur-[2px]' : 'bg-pink-500/20 blur-[2px]'}`}
        style={{ zIndex: 0 }}
      />
    </motion.a>
  );
};

const CornerFrame = () => (
    <>
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500/50 -translate-x-2 -translate-y-2" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500/50 translate-x-2 -translate-y-2" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500/50 -translate-x-2 translate-y-2" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500/50 translate-x-2 translate-y-2" />
    </>
);

const ProjectSlide = memo(({ project, active, index }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={containerRef} className="w-screen shrink-0 flex justify-center px-4 md:px-20 relative">
      <motion.div
        animate={{ 
          opacity: active ? 1 : 0.3, 
          scale: active ? 1 : 0.9,
          filter: active ? "blur(0px)" : "blur(4px)"
        }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="w-full max-w-7xl h-[650px] md:h-[700px] bg-[#111111]/30 backdrop-blur-3xl border border-white/5 rounded-[3rem] relative overflow-hidden group shadow-2xl"
      >
        {/* Large Background Number */}
        <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 leading-none select-none -translate-y-1/4 translate-x-1/4 pointer-events-none group-hover:text-purple-500/10 transition-colors duration-1000">
            0{index + 1}
        </div>

        {/* Raster Scan Line Animation */}
        {active && (
            <motion.div 
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-40 pointer-events-none"
            />
        )}

        <div className="relative w-full h-full p-1 flex flex-col md:flex-row">
            
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden rounded-[2.5rem] md:rounded-r-none">
                <motion.img 
                    style={{ y: active ? parallaxY : 0 }}
                    src={project.image} 
                    alt={project.title} 
                    className={`absolute inset-0 w-full h-[120%] object-cover transition-all duration-1000 ${active ? 'opacity-60 grayscale-0' : 'opacity-20 grayscale'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent md:hidden" />
                
                {/* HUD Elements on Image */}
                <div className="absolute top-8 left-8 z-30 font-mono text-[9px] text-purple-400 font-black flex flex-col gap-2 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 w-fit">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_#a855f7]" />
                        <span>SYS_ACTIVE // {project.status}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={active ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-purple-500 font-mono text-sm font-black tracking-widest">/0{index + 1}</span>
                        <div className="h-[1px] w-12 bg-purple-500/30" />
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">MODULE_v4.2</span>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none uppercase">
                        {project.title}
                    </h3>

                    <p className="text-slate-400 text-base md:text-lg font-medium mb-8 leading-relaxed border-l-2 border-purple-500/20 pl-6 line-clamp-3 md:line-clamp-none">
                        {project.description}
                    </p>

                    {/* Spec Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-10">
                        {project.specs.slice(0, 4).map((spec, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-[8px] font-mono text-purple-400/50 uppercase tracking-widest">Diag_Ref_{i}</span>
                                <span className="text-[11px] font-black text-white uppercase tracking-widest">{spec}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <button 
                            onClick={() => window.open(project.link, '_blank')}
                            className="group relative px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Launch Core System
                                <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none" />
                        </button>
                        
                        <div className="flex gap-2">
                             {project.tags.map((tag, i) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[8px] font-mono text-slate-500 uppercase rounded-full">
                                    {tag}
                                </span>
                             ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Coordinate Markers - HUD */}
        <div className="absolute bottom-8 right-12 z-30 font-mono text-[8px] text-white/10 tracking-[0.5em] uppercase hidden md:block select-none">
            COORD: 23.2599° N // 77.4126° E
        </div>
      </motion.div>
    </div>
  );
});

const SectionHeader = ({ label, title, status, location }) => (
    <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/5 pb-8 w-full">
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

const Projects = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipeDistance = offset.x;
    if (swipeDistance < -50) nextSlide();
    else if (swipeDistance > 50) prevSlide();
  };

  return (
    <motion.section 
      id="projects"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 relative overflow-hidden bg-[#010409]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
            label="Project Schema v4.2 // Selected Files" 
            title="Visionary Creations" 
            status="DEPLOYMENT: ACTIVE"
        />
      </div>

      <div className="relative group/slider w-full h-fit">
        {/* Schematic Navigation */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 z-[100] hidden xl:block">
            <button onClick={prevSlide} className="w-20 h-20 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/50 text-white transition-all flex flex-col items-center justify-center gap-1 group/nav shadow-2xl">
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[8px] font-mono text-slate-500 group-hover:text-purple-500">PREV</span>
            </button>
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 z-[100] hidden xl:block">
            <button onClick={nextSlide} className="w-20 h-20 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/50 text-white transition-all flex flex-col items-center justify-center gap-1 group/nav shadow-2xl">
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                <span className="text-[8px] font-mono text-slate-500 group-hover:text-purple-500">NEXT</span>
            </button>
        </div>

        <div className="w-full relative py-4 overflow-x-hidden min-h-[600px]">
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="w-full"
            >
                <motion.div 
                    animate={{ x: `-${index * 100}vw` }}
                    transition={{ type: "spring", stiffness: 180, damping: 25 }}
                    className="flex items-center flex-nowrap w-full"
                >
                    {projects.map((project, i) => (
                        <ProjectSlide key={project.title} project={project} index={i} active={i === index} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
      </div>

      {/* Progress Monitor */}
      <div className="flex justify-center items-center gap-8 mt-16 relative z-10">
        <div className="font-mono text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">SEQUENCE_LOAD:</div>
        <div className="flex gap-4">
            {projects.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`transition-all duration-700 h-2 rounded-full ${
                        i === index ? 'w-16 bg-purple-600 shadow-[0_0_15px_#a855f7]' : 'w-4 bg-white/5 border border-white/10'
                    }`}
                />
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
