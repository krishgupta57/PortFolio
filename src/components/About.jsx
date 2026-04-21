import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Parallax orbs (move slower than the card)
    const orbX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);
    const orbY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

  return (
    <motion.section 
      id="about" 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative py-32 overflow-hidden"
    >
      {/* No local background - handled globally for performance */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeIn} className="flex items-center gap-6 mb-16">
            <div className="p-3 bg-pink-500/10 border border-pink-500/20">
                <Compass className="text-pink-500 w-6 h-6" />
            </div>
            <div>
                <span className="text-pink-500 font-mono text-[10px] tracking-widest uppercase block mb-1">01. Biographical Schematic</span>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    About <span className="text-pink-blue">Background</span>
                </h2>
            </div>
        </motion.div>
        
        {/* Top Section: Text & Schematic Image */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div variants={fadeIn} className="space-y-8 order-2 lg:order-1">
            <BorderConduit duration={6}>
              <div className="relative p-8 bg-slate-900/20 font-medium border border-white/5 backdrop-blur-sm">
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-blue-500/30 tracking-[0.3em]">REF_LOG // V3.2</div>
                  <div className="space-y-6">
                    <p className="text-slate-200 text-lg md:text-xl leading-relaxed italic">
                    "As a passionate Full-Stack Developer, I thrive on building end-to-end applications that solve real-world problems. With 3+ major projects featuring completely integrated authentication systems and REST APIs, I am heavily focused on scalable backend logic and smooth frontend experiences."
                    </p>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    My fundamental strengths lie in system design basics, Object-Oriented Programming (OOP), and optimizing database queries perfectly for production environments.
                    </p>
                  </div>
              </div>
            </BorderConduit>
            
            <div className="grid grid-cols-1 gap-8 group">
                {[
                    { label: 'End-to-End Architecture', desc: 'Deeply comfortable stitching scalable relational database models (MySQL) to snappy React.js frontend interfaces.' },
                    { label: 'Agile Problem Solving', desc: 'Quick to adapt, rapidly distilling highly complex workflows into perfectly maintainable, clean code architectures.' },
                    { label: 'User-Centric Design', desc: 'Obsessed with crafting UI/UX interactivity that feels butter-smooth, engaging, and premium for the end user.' }
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="space-y-3 p-4 bg-white/5 border border-white/5 rounded-sm hover:border-pink-500/20 transition-all hover:translate-x-2"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-pink-500 font-mono text-sm font-black">[{i + 1}]</span>
                            <span className="text-sm font-black text-white uppercase tracking-widest">{item.label}</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed border-l border-white/5 pl-4">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
          </motion.div>
          
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            variants={fadeIn} 
            className="relative group mx-auto w-full max-w-sm order-1 lg:order-2 transition-all duration-200"
          >
            {/* AMBIENT BREATHING GLOW (The Backdrop) */}
            <motion.div 
                animate={{ 
                    boxShadow: [
                        "0 0 40px rgba(236,72,153,0.1)",
                        "0 0 80px rgba(59,130,246,0.15)",
                        "0 0 40px rgba(236,72,153,0.1)"
                    ] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-sm -z-10"
            />

            {/* CINEMATIC FRAME WITH CIRCULATING BORDER */}
            <BorderConduit duration={5} className="overflow-hidden shadow-2xl">
              <div className="relative bg-slate-900 border border-white/10 rounded-sm p-[2px] transition-all duration-700">
                  
                  {/* HIGH-VISIBILITY GLASS BADGES */}
                  <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-2">
                      <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-2xl">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                          <span className="font-mono text-[8px] font-bold text-white tracking-[0.2em] uppercase">STATUS: OPTIMAL</span>
                      </div>
                  </div>

                  <div className="absolute bottom-6 left-6 z-50">
                      <div className="bg-black/80 backdrop-blur-md border border-pink-500/20 px-3 py-1.5 rounded-full shadow-2xl">
                          <span className="font-mono text-[8px] font-bold text-pink-400 tracking-[0.2em] uppercase">SYSTEM_v3.2.0</span>
                      </div>
                  </div>

                  <div className="relative overflow-hidden">
                      <img 
                          src={profilePic} 
                          alt="Krish Gupta" 
                          className="w-full h-auto aspect-[3/4] object-cover transition-all duration-1000 ease-in-out" 
                      />
                      {/* Subtle Material Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                  </div>
                  
                  {/* Clean Identity HUD */}
                  <div className="absolute bottom-6 right-6 z-50">
                      <span className="font-mono text-[8px] text-white/40 tracking-[0.4em] uppercase">
                          [ ID // KRISH_GUPTA ]
                      </span>
                  </div>
              </div>
            </BorderConduit>

            {/* Heavy Depth Shadow */}
            <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/60 blur-3xl -z-10" />
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
            <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-blue-500/5 z-10 overflow-hidden">
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 4.0, ease: "easeOut" }}
                    className="w-full bg-pink-500/20"
                />
                
                {/* Flowing Downward Data Pulse */}
                <motion.div 
                    animate={{ 
                        top: ["-20%", "120%"],
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute left-0 w-full h-40 bg-gradient-to-b from-transparent via-pink-400 via-blue-400 to-transparent z-20"
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
