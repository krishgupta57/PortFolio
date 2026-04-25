import React, { useState, useEffect, useMemo } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';

import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BootSequence from './components/BootSequence';
import SystemTelemetry from './components/SystemTelemetry';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [binary, setBinary] = useState("1");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const dotSpringConfig = { damping: 25, stiffness: 700, mass: 0.2 };
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);

  // Trail spring with more delay
  const trailSpringConfig = { damping: 30, stiffness: 150, mass: 1 };
  const trailXSpring = useSpring(cursorX, trailSpringConfig);
  const trailYSpring = useSpring(cursorY, trailSpringConfig);

  useEffect(() => {
    const timer = setInterval(() => setBinary(Math.random() > 0.5 ? "1" : "0"), 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div 
      initial={false}
      className="fixed inset-0 pointer-events-none z-[100] hidden md:block"
    >
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-pink-500/50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          borderColor: isHovering ? "#ec4899" : "#3b82f6",
          backgroundColor: isHovering ? "rgba(236, 72, 153, 0.15)" : "transparent"
        }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-pink-500"
        style={{
          x: dotXSpring,
          y: dotYSpring,
          translateX: "12px", 
          translateY: "12px"
        }}
      />

      {/* Cybernetic Data Node Trail */}
      <motion.div
        className="fixed top-0 left-0 text-[10px] font-mono text-blue-500/50 font-bold"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "24px",
          translateY: "24px"
        }}
      >
        {binary}
      </motion.div>
    </motion.div>
  );
};

const BackgroundDataStream = () => {
    const particles = useMemo(() => Array.from({ length: 15 }), []);

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
      layout
      initial={false}
      className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative" 
      style={{ backgroundColor: '#010409' }}
    >
      <AnimatePresence mode="wait">
        {showBoot ? (
          <BootSequence key="boot" onComplete={() => setShowBoot(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >


            <Navigation />
            <SystemTelemetry />

            <main className="relative w-full">
                <div id="hero" className="max-w-6xl mx-auto px-6 text-center pt-10 relative">
                    <Hero />
                </div>
      
                <TechMarquee />

                <div className="max-w-6xl mx-auto px-6 space-y-16 md:space-y-24 relative">

                    <div id="about">
                        <About />
                    </div>
                </div>
      
                <div id="skills" className="relative">
                    <Skills />
                </div>
                
                <div id="projects" className="relative">
                    <Projects />
                </div>

                <div id="contact" className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center relative">
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
        {/* Layer 4: Breathing Telemetry Glows (System Pulse) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[64px] animate-breathing" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pink-600/10 blur-[64px] animate-breathing" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <div className="w-full h-[1px] bg-blue-500/20 animate-scan" />
      </div>
    </motion.div>
  );
}

export default App;
