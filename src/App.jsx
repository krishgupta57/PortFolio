import React, { useState, useEffect, useMemo } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';

import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BootSequence from './components/BootSequence';
import SystemTelemetry from './components/SystemTelemetry';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsHovering(window.getComputedStyle(target).cursor === 'pointer' || 
                    target.closest('button') || 
                    target.closest('a'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
        <motion.div
            style={{ x: cursorXSpring, y: cursorYSpring }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
        >
            {/* Professional Command Ring - Visible on Hover */}
            <motion.div
                initial={false}
                animate={{ 
                    scale: isHovering ? 1.5 : 0.8,
                    opacity: isHovering ? 1 : 0.2,
                    borderColor: isHovering ? '#a855f7' : 'rgba(255, 255, 255, 0.4)'
                }}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors duration-500"
            >
                {/* Precision Crosshair (+) */}
                <motion.div 
                    animate={{ opacity: isHovering ? 1 : 0 }}
                    className="relative w-full h-full"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-purple-500" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-[1px] bg-purple-500" />
                </motion.div>
            </motion.div>

            {/* Central Precision Point */}
            <motion.div 
                animate={{ 
                    scale: isHovering ? 0.8 : 1,
                    backgroundColor: isHovering ? '#a855f7' : '#ffffff'
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />

            {/* Discreet Metadata */}
            <motion.div
               animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 5 }}
               className="absolute top-6 left-1/2 -translate-x-1/2"
            >
               <span className="text-[7px] font-mono font-black text-purple-400 uppercase tracking-[0.3em] bg-black/80 px-2 py-0.5 border border-white/10 rounded-sm">
                 CMD
               </span>
            </motion.div>
        </motion.div>
    </div>
  );
};

const BackgroundDataStream = () => {
    const particles = useMemo(() => Array.from({ length: 8 }), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {particles.map((_, i) => (
                <div 
                    key={i}
                    className="absolute rounded-full animate-data-drift"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 1}px`,
                        height: `${Math.random() * 4 + 1}px`,
                        backgroundColor: Math.random() > 0.5 ? '#ec4899' : '#3b82f6',
                        animationDelay: `${Math.random() * 20}s`,
                        animationDuration: `${Math.random() * 10 + 15}s`
                    }}
                />
            ))}
        </div>
    );
};

function App() {
  const [showBoot, setShowBoot] = useState(true);

  return (
    <motion.div 
      initial={false}
      className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative" 
      style={{ backgroundColor: '#010409' }}
    >
      <AnimatePresence>
        {showBoot ? (
          <BootSequence key="boot" onComplete={() => setShowBoot(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >


            <Navigation />
            <SystemTelemetry />

            <main className="relative w-full">
                <div id="hero" className="w-full relative">
                    <Hero />
                </div>
      
                <TechMarquee />

                <div id="about" className="w-full relative">
                    <About />
                </div>
      
                <div id="skills" className="w-full relative">
                    <Skills />
                </div>
                
                <div id="projects" className="w-full relative">
                    <Projects />
                </div>

                <div id="certificates" className="w-full relative">
                    <Certificates />
                </div>

                <div id="contact" className="w-full relative">
                    <Contact />
                </div>
            </main>

                  <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <BackgroundDataStream />
      
      {/* 1. Global Multi-Layered Background System */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Layer 1: Fixed Technical Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise" />
        {/* Layer 2: Topological Schematic Pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-topology" />
        {/* Layer 3: High-Performance Moving Blueprint Grid */}
        <div className="absolute inset-[-100px] opacity-[0.04]">
            <div 
                className="absolute inset-0 animate-bp-grid"
                style={{ 
                    backgroundImage: "linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)",
                    backgroundSize: "45px 45px"
                }}
            />
        </div>
        {/* Layer 4: Breathing Telemetry Glows - Optimized size and blur */}
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[40px] animate-breathing" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-pink-600/5 blur-[40px] animate-breathing" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <div className="w-full h-[1px] bg-blue-500/20 animate-scan" />
      </div>
    </motion.div>
  );
}

export default App;
