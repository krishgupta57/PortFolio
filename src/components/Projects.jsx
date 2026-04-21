import React, { useState, useRef, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Dna, Cpu, ShieldCheck } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';
import { projects } from '../data/portfolioData';

const CornerFrame = () => (
    <>
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 -translate-x-2 -translate-y-2" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/50 translate-x-2 -translate-y-2" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/50 -translate-x-2 translate-y-2" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 translate-x-2 translate-y-2" />
    </>
);

const ProjectSlide = memo(({ project, active, index }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={containerRef} className="w-screen shrink-0 flex justify-center px-4 md:px-10 relative">
      <motion.div
        animate={{ 
          opacity: active ? 1 : 0.4, 
          scale: active ? 1 : 0.9,
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="w-full max-w-5xl h-[550px] md:h-[650px] bg-slate-900/40 backdrop-blur-3xl border border-blue-500/10 rounded-sm relative p-1"
      >
        {/* Schematic Corner Frame */}
        <CornerFrame />

        <div className="relative w-full h-full border border-blue-500/5 overflow-hidden">
            {/* Raster Scan Line Animation */}
            {active && (
                <motion.div 
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-1 bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-40 pointer-events-none"
                />
            )}

            {/* Parallax Image with Blueprint Filter */}
            <div className="absolute inset-0 z-0">
                <motion.img 
                    style={{ y: active ? parallaxY : 0 }}
                    src={project.image} 
                    alt={project.title} 
                    className={`absolute inset-0 w-full h-[120%] object-cover transition-all duration-1000 ${active ? 'opacity-40 grayscale-0' : 'opacity-10 grayscale'}`}
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            {/* Hardware Specs - Top Left */}
            <div className="absolute top-8 left-8 z-30 font-mono text-[10px] text-blue-400 opacity-60 flex flex-col gap-1 uppercase tracking-tighter">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span>SYSTEM_ACTIVE // {project.status}</span>
                </div>
                <div>MODULE_ID: 00{index + 1}</div>
                <div className="flex items-center gap-2 mt-4 text-xs font-black text-white bg-blue-500/20 px-2 py-1 w-fit">
                    <Cpu className="w-3 h-3" />
                    {project.category}
                </div>
            </div>

            {/* Coordinate Markers - Bottom Right */}
            <div className="absolute bottom-12 right-12 z-30 font-mono text-[10px] text-blue-400 opacity-60 text-right hidden md:block">
                <div>COORD_LAT: 28.5383° N</div>
                <div>COORD_LON: 81.3792° W</div>
                <div>REF_VAL: 0x7FFEFFA</div>
            </div>

            {/* Content Section */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-30 overflow-hidden">
                <div className="max-w-2xl">
                    <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none flex items-baseline gap-4">
                        <span className="text-blue-500 font-mono text-xl">/0{index + 1}</span>
                        {project.title}
                    </h3>

                    <p className="text-slate-300 text-base md:text-lg font-medium mb-10 leading-relaxed border-l-2 border-blue-500/30 pl-6">
                        {project.description}
                    </p>

                    {/* Spec Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                        {project.specs.map((spec, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-[9px] font-mono text-blue-400 opacity-50 uppercase">Diagnostic_{i}</span>
                                <span className="text-xs font-black text-white uppercase tracking-widest">{spec}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <a 
                            href={project.link}
                            className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white hover:text-blue-600 transition-all group/btn cursor-none border border-blue-400/50"
                        >
                            Launch Core System
                            <ExternalLink className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                        </a>
                        <div className="flex gap-2">
                             {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-slate-500 uppercase">{tag}</span>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
});

const Projects = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <motion.section 
      id="projects"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 relative overflow-hidden bg-slate-950"
    >
      {/* No local background - handled globally for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex items-center gap-6 mb-6">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-sm">
                <Dna className="text-blue-500 w-6 h-6" />
            </div>
            <div>
                <span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase block mb-1">Project Schema v2.0 // Selected Files</span>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    Visionary <span className="text-blue-500">Creations</span>
                </h2>
            </div>
        </div>
      </div>

      <div className="relative group/slider cursor-none w-full">
        {/* Schematic Navigation */}
        <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-[30] opacity-0 group-hover/slider:opacity-100 transition-all duration-500">
            <button onClick={prevSlide} className="w-16 h-16 bg-slate-900 border border-blue-500/20 hover:border-blue-500 text-white transition-all flex flex-col items-center justify-center gap-1 group/nav">
                <ChevronLeft className="w-6 h-6" />
                <span className="text-[8px] font-mono text-blue-500/50 group-hover/nav:text-blue-500">PREV</span>
            </button>
        </div>
        <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-[30] opacity-0 group-hover/slider:opacity-100 transition-all duration-500">
            <button onClick={nextSlide} className="w-16 h-16 bg-slate-900 border border-blue-500/20 hover:border-blue-500 text-white transition-all flex flex-col items-center justify-center gap-1 group/nav">
                <ChevronRight className="w-6 h-6" />
                <span className="text-[8px] font-mono text-blue-500/50 group-hover/nav:text-blue-500">NEXT</span>
            </button>
        </div>

        <div className="w-full relative py-8 overflow-visible min-h-[670px]">
            <motion.div 
                animate={{ x: `-${index * 100}vw` }}
                transition={{ type: "spring", stiffness: 180, damping: 25, mass: 0.8 }}
                className="flex items-center flex-nowrap"
            >
                {projects.map((project, i) => (
                    <ProjectSlide key={project.title} project={project} index={i} active={i === index} />
                ))}
            </motion.div>
        </div>
      </div>

      {/* Progress Monitor */}
      <div className="flex justify-center items-center gap-6 mt-12 relative z-10">
        <div className="font-mono text-[10px] text-blue-500/50">SEQUENCE_LOAD:</div>
        <div className="flex gap-2">
            {projects.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`transition-all duration-500 h-2 rounded-sm border ${
                        i === index ? 'w-16 bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-4 bg-slate-900 border-slate-800'
                    }`}
                />
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
