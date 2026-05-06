import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Maximize2, X, Sparkles, Send } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  // Blink effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="flex items-center gap-2 text-xl md:text-3xl font-bold text-white mb-6 min-h-[40px]">
      <span className="text-purple-500 font-mono">{">"}</span>
      <span>{words[index].substring(0, subIndex)}</span>
      <span className={`w-1 h-8 bg-purple-500 ${blink ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#010409]">
      {/* Background Grid - More pronounced like the image */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#1a1b1e,transparent)]" />

      <div className="w-full px-6 md:px-20 py-16 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start relative"
          >
            {/* Status Pill */}
            <div className="flex items-center gap-3 bg-[#111111]/80 border border-white/10 px-4 py-2 rounded-full mb-4 backdrop-blur-xl">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_12px_#a855f7]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-purple-400 font-black uppercase">
                System Online // 2026
              </span>
            </div>

            {/* Headline */}
            <div className="relative group w-full">
               <h1 className="text-3xl sm:text-5xl md:text-[6rem] font-black text-white leading-[0.9] tracking-tighter mb-6 select-none break-words">
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
                  Krish Gupta | Full Stack Developer & Software Engineer - 
                </span>
                CRAFTING <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-yellow-500">DIGITAL ARC</span>
              </h1>
              {/* Subtle background text glitch effect */}
              <div className="absolute -top-4 -left-4 text-white/5 text-7xl md:text-9xl font-black -z-10 select-none pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                FUTURE
              </div>
            </div>

            {/* Typewriter Subheader */}
            <div className="mb-6">
              <Typewriter words={[
                "Full Stack Developer",
                "Python Backend Developer",
                "React Developer",
                "Developing Scalable Programs"
              ]} />
            </div>

            {/* Bio Description */}
            <div className="max-w-xl mb-8 relative">
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent" />
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                I'm <span className="text-white font-bold">Krish Gupta</span>. I engineer high-performance Full-Stack applications that bridge stunning design with iron-clad backend logic.
                </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto group relative px-10 sm:px-12 py-5 bg-white text-black rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-none overflow-hidden"
              >
                <span className="relative z-10">View Projects →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none" />
              </button>
              
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 sm:px-12 py-5 bg-transparent border border-white/10 text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 hover:border-white/20 transition-all cursor-none shadow-xl"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image Framed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* The Frame */}
            <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white/5 p-4 bg-[#111111]/30 backdrop-blur-lg group will-change-transform">
                {/* Neon Corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-purple-500 rounded-tl-[2.5rem] z-20 opacity-40" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-500 rounded-br-[2.5rem] z-20 opacity-40" />
                
                {/* Image Wrapper */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <img
                        src="/photo.jpg"
                        alt="Krish Gupta"
                        className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Authentication Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-2xl">
                    <div className="space-y-1">
                        <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.4em] font-bold">Authenticated User</p>
                        <p className="text-xl font-black text-white uppercase tracking-tighter">Krish Gupta</p>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center">
                             <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-[0_0_15px_#a855f7]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Glows (Reduced blur for perf) */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[60px] -z-10 rounded-full animate-pulse will-change-[opacity,transform]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[60px] -z-10 rounded-full animate-pulse will-change-[opacity,transform]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
