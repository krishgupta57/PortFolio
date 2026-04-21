import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../utils/animations';
import profilePic from '../assets/front.jpg';
import { BookOpen, Target, Shield, Compass } from 'lucide-react';

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
    <div className={`relative flex items-center justify-between w-full mb-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Schematic Node */}
      <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-950 border border-blue-500/20 flex items-center justify-center z-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
        <div className="relative z-10 text-blue-500 font-mono text-[10px]">0{index + 1}</div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500" />
      </div>

      {/* Blueprint Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`relative w-[calc(100%-60px)] md:w-[42%] p-8 bg-slate-900/40 backdrop-blur-xl border border-blue-500/10 rounded-sm hover:border-blue-500/30 transition-all group ml-auto md:ml-0`}
      >
        <CornerFrame />
        
          <div className="flex flex-col gap-3">
          <div className="flex justify-between items-baseline mb-2">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-blue-500 uppercase">
                LOG_YEAR: {item.year}
            </span>
            <span className="font-mono text-xs text-slate-500 uppercase">REF: {item.id}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase">{item.title}</h3>
          <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-4 opacity-70 italic">{item.institution}</p>
          
          <div className="w-full h-[1px] bg-blue-500/10 mb-4" />

          <p className="text-slate-400 text-base leading-relaxed font-medium">
            {item.description}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-xs font-mono text-slate-500 uppercase">GRADE_POINT: {item.grade}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative py-24 overflow-hidden"
    >
      {/* Infinite Blueprint Grid Sync */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
            backgroundImage: "linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeIn} className="flex items-center gap-6 mb-16">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20">
                <Compass className="text-blue-500 w-6 h-6" />
            </div>
            <div>
                <span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase block mb-1">01. Biographical Schematic</span>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    About <span className="text-blue-500">Background</span>
                </h2>
            </div>
        </motion.div>
        
        {/* Top Section: Text & Schematic Image */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div variants={fadeIn} className="space-y-8 order-2 lg:order-1">
            <div className="relative p-8 bg-slate-900/20 border-l border-blue-500/30 font-medium">
                <div className="absolute top-4 right-4 font-mono text-[10px] text-blue-500/30">SYSTEM_LOG: ACTIVE</div>
                <div className="space-y-6">
                  <p className="text-slate-200 text-xl md:text-2xl leading-relaxed italic">
                  "As a passionate Full-Stack Developer, I thrive on building end-to-end applications that solve real-world problems. With 3+ major projects featuring completely integrated authentication systems and REST APIs, I am heavily focused on scalable backend logic and smooth frontend experiences."
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                  My fundamental strengths lie in system design basics, Object-Oriented Programming (OOP), and optimizing database queries perfectly for production environments.
                  </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
                {[
                    { label: 'End-to-End Architecture', desc: 'Deeply comfortable stitching scalable relational database models (MySQL) to snappy React.js frontend interfaces.' },
                    { label: 'Agile Problem Solving', desc: 'Quick to adapt, rapidly distilling highly complex workflows into perfectly maintainable, clean code architectures.' },
                    { label: 'User-Centric Design', desc: 'Obsessed with crafting UI/UX interactivity that feels butter-smooth, engaging, and premium for the end user.' }
                ].map((item, i) => (
                    <div key={i} className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 font-mono text-sm font-black">[{i + 1}]</span>
                            <span className="text-sm font-black text-white uppercase tracking-widest">{item.label}</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed border-l border-white/5 pl-4">{item.desc}</p>
                    </div>
                ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative group mx-auto w-full max-w-md order-1 lg:order-2">
            {/* Schematic Image Frame */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-blue-500/20" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-blue-500/20" />
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 font-mono text-[8px] text-blue-500/30 vertical-text hidden md:block">
                REF_PROFILE_SCAN_001
            </div>

            <div className="relative bg-slate-900 p-2 border border-blue-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 animate-pulse z-10" />
                <img 
                    src={profilePic} 
                    alt="Krish Gupta" 
                    className="w-full h-auto aspect-square object-cover opacity-100 transition-all duration-700" 
                />
                
                {/* Image Hud Overlays */}
                <div className="absolute top-6 left-6 z-20 font-mono text-[8px] text-blue-400 bg-black/60 px-2 py-1 border border-blue-400/30">
                    STATUS: OPTIMAL
                </div>
                <div className="absolute bottom-6 right-6 z-20 font-mono text-[8px] text-blue-400 bg-black/60 px-2 py-1 border border-blue-400/30">
                    REF: 22.4 // 81.3
                </div>
            </div>
          </motion.div>
        </div>

        {/* Sequential Execution Path (Timeline) */}
        <motion.div variants={fadeIn} className="relative">
          <div className="flex flex-col items-center mb-24 text-center">
              <div className="flex items-center gap-4 mb-4">
                  <Target className="text-blue-500 w-5 h-5" />
                  <span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase">Sequential Execution Path</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
                  The Journey of <span className="text-blue-500">Learning</span>
              </h2>
          </div>

          <div className="relative mt-10">
            {/* Schematic Central Wire */}
            <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-blue-500/10 z-10">
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="w-full bg-gradient-to-b from-blue-500/50 to-transparent"
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
