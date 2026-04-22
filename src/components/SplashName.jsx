import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const SplashName = () => {
  const name = "KRISH GUPTA".split("");
  
  // Smooth mouse tracking for ambient light
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 40, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 50%)`
  );

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="h-[70vh] flex items-center justify-center relative overflow-hidden flex-col mt-20 bg-[#020617]"
    >
      {/* 1. Subtle Aurora Background (Next-Level Premium) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ 
                x: ['0%', '10%', '-5%', '0%'],
                y: ['0%', '-10%', '5%', '0%'],
                scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div 
            animate={{ 
                x: ['0%', '-10%', '10%', '0%'],
                y: ['0%', '10%', '-10%', '0%'],
                scale: [1, 1.2, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div 
            animate={{ 
                x: ['0%', '15%', '-15%', '0%'],
                y: ['0%', '15%', '-15%', '0%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-pink-600/10 blur-[100px] rounded-full mix-blend-screen"
        />
      </div>

      {/* 2. Interactive Glassmorphism Spotlight */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlight }}
      />

      {/* 3. Extremely Clean Typography Reveal */}
      <div className="z-10 flex flex-wrap justify-center px-4 w-full max-w-[100vw] relative">
        <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center items-center"
        >
            {name.map((char, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: index * 0.05,
                    ease: [0.2, 0.65, 0.3, 0.9]
                }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 inline-block pb-2 hover:to-white/80 transition-colors duration-500"
            >
                {char === " " ? "\u00A0\u00A0" : char}
            </motion.span>
            ))}
        </motion.div>
      </div>

      {/* 4. Elegant Subtitle */}
      <motion.div 
        initial={{ opacity: 0, letterSpacing: "0em" }}
        animate={{ opacity: 1, letterSpacing: "0.3em" }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="mt-6 text-slate-400 font-mono text-xs md:text-sm uppercase z-10"
      >
        <span className="text-blue-400 mr-2">/</span>
        Software Architect & Engineer
      </motion.div>
      
      {/* 5. Minimalist Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-12 flex flex-col items-center justify-center text-slate-600 font-mono text-[10px] tracking-[0.3em] z-10"
      >
        <span className="mb-6">EXPLORE</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-white/50"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default SplashName;
