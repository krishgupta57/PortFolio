import React from 'react';
import { motion } from 'framer-motion';

const SplashName = () => {
  const name = "KRISH GUPTA".split("");

  return (
    <section className="h-[70vh] flex items-center justify-center relative overflow-hidden flex-col mt-20">
      {/* Ambient Rotating Rings */}
      <motion.div 
        animate={{ 
          rotate: 360, 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-blue-500/10 rounded-full border-dashed -z-10 opacity-50"
      />
      <motion.div 
        animate={{ 
          rotate: -360, 
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-indigo-500/10 rounded-full border-dotted -z-10 opacity-50"
      />

      {/* Center Optimized Glow */}
      <div className="absolute w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(0,0,0,0) 70%)' }}></div>

      {/* Cinematic Staggered Text Reveal */}
      <div className="z-10 flex flex-wrap justify-center px-2 w-full max-w-[100vw]">
        {name.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: index * 0.08,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 hover:to-blue-400 transition-colors duration-500 cursor-none inline-block pb-2"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
        className="mt-8 text-blue-400/80 font-mono text-sm tracking-[0.3em] uppercase"
      >
        Digital Craftsman
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-12 flex flex-col items-center justify-center text-slate-500 font-mono text-xs tracking-widest"
      >
        <span className="mb-4">SCROLL TO EXPLORE</span>
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default SplashName;
