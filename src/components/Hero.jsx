import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[50vh] flex flex-col justify-center items-start relative border-none">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 z-10 w-full">
        <motion.div variants={fadeIn} className="flex items-center space-x-2 text-blue-400 font-mono text-sm bg-blue-500/10 px-4 py-2 rounded-full w-fit">
          <Code className="w-4 h-4" />
          <span>Full-Stack Developer</span>
        </motion.div>
        
        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Building scalable <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            web applications.
          </span>
        </motion.h1>
        
        <motion.p variants={fadeIn} className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Krish Gupta</span>. I specialize in developing robust React and Django projects, combining beautiful frontend interfaces with deeply optimized backend architecture.
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 pt-4">
          <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] cursor-none">
            View My Projects
          </a>
          <div className="flex space-x-4 pl-0 md:pl-4 border-l-0 md:border-l border-slate-700">
            <a href="https://github.com/krishgupta57" aria-label="Github Profile" className="p-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-blue-500/50 rounded-full transition-all cursor-none">
              <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/krishgupta57" aria-label="LinkedIn Profile" className="p-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-blue-500/50 rounded-full transition-all cursor-none">
              <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
