import React, { useState, useRef, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Layout } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';
import { projects } from '../data/portfolioData';

// Memoized Slide component to prevent unnecessary re-renders during sliding
const ProjectSlide = memo(({ project, active }) => {
  const containerRef = useRef(null);
  
  // FIXED: Ensure scroll container is handled safely
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
        className="w-full max-w-5xl h-[500px] md:h-[600px] bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl relative"
      >
        {/* Parallax Image */}
        <motion.img 
          style={{ y: active ? parallaxY : 0 }}
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-[120%] object-cover opacity-80"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-blue-600/20 backdrop-blur-md border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">
                {project.category}
            </span>
          </div>

          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-slate-300 text-base md:text-lg font-medium mb-8 max-w-xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[9px] font-black uppercase tracking-widest text-slate-500 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={project.link}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all group/btn cursor-none"
          >
            Launch Case Study
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
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
      className="py-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 mb-4">
            <Layout className="text-blue-500 w-5 h-5" />
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">03. Masterpieces</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Visionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Creations</span>
        </h2>
      </div>

      <div className="relative group/slider cursor-none w-full">
        {/* Nav Arrows - PERFORMANCE: No heavy blurs */}
        <div className="absolute top-1/2 left-4 md:left-10 -translate-y-1/2 z-[30] opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button onClick={prevSlide} className="p-4 bg-slate-900 border border-white/10 rounded-full text-white hover:bg-blue-600 transition-colors shadow-2xl">
                <ChevronLeft className="w-6 h-6" />
            </button>
        </div>
        <div className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 z-[30] opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <button onClick={nextSlide} className="p-4 bg-slate-900 border border-white/10 rounded-full text-white hover:bg-blue-600 transition-colors shadow-2xl">
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>

        {/* ALIGNMENT FIX: Sliding Container moves by precisely 100vw per index */}
        <div className="w-full relative py-8 overflow-visible min-h-[620px]">
            <motion.div 
                animate={{ x: `-${index * 100}vw` }}
                transition={{ type: "spring", stiffness: 180, damping: 25, mass: 0.8 }}
                className="flex items-center flex-nowrap"
            >
                {projects.map((project, i) => (
                    <ProjectSlide key={project.title} project={project} active={i === index} />
                ))}
            </motion.div>
        </div>
      </div>

      {/* Modern Progress Pills */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {projects.map((_, i) => (
            <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 h-1 rounded-full ${
                    i === index ? 'w-10 bg-blue-600' : 'w-2 bg-slate-800'
                }`}
            />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
