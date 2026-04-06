import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Maximize2, X } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const Hero = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="hero" className="min-h-[50vh] flex items-center relative border-none w-full">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center w-full">
        
        {/* Left Column: Text Content */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 z-10 w-full max-w-2xl">
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
          
          <motion.p variants={fadeIn} className="text-xl text-slate-400 leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Krish Gupta</span>. I specialize in developing robust React and Django projects, combining beautiful frontend interfaces with deeply optimized backend architecture.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] cursor-none">
              View My Projects
            </a>
            <button onClick={() => setIsZoomed(true)} className="px-8 py-4 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] cursor-none">
              Zoom Resume
            </button>
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

        {/* Right Column: Floating Resume Snapshot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 3 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="relative hidden xl:flex justify-end items-center group cursor-pointer"
          onClick={() => setIsZoomed(true)}
        >
          {/* Glowing Ambient Backing */}
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-400/30 transition-colors pointer-events-none"></div>
          
          <div className="relative z-10 w-64 h-80 bg-slate-800 border-2 border-slate-700 rounded-xl overflow-hidden shadow-2xl group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
             {/* Stunning Premium CSS Resume Wireframe */}
             <div className="w-full h-full bg-slate-50 relative pb-4 overflow-hidden group-hover:bg-white transition-colors">
                
                {/* Header of paper sheet clearly screaming RESUME */}
                <div className="w-full h-16 bg-slate-800 mb-4 flex flex-col items-center justify-center px-4 shadow-md border-b-4 border-blue-600">
                  <h3 className="text-white font-black tracking-widest text-lg">RESUME</h3>
                  <div className="w-12 h-1 bg-blue-500 mt-1 rounded-full"></div>
                </div>
                
                {/* Body of paper sheet */}
                <div className="px-5 space-y-5">
                  <div className="space-y-2">
                    <div className="w-20 h-1.5 bg-blue-600/50 rounded-full mb-1"></div>
                    <div className="w-full h-1 bg-slate-300 rounded-full"></div>
                    <div className="w-[85%] h-1 bg-slate-300 rounded-full"></div>
                    <div className="w-[90%] h-1 bg-slate-300 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-1.5 bg-blue-600/50 rounded-full mb-1"></div>
                    <div className="w-full h-1 bg-slate-300 rounded-full"></div>
                    <div className="w-[75%] h-1 bg-slate-300 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-24 h-1.5 bg-blue-600/50 rounded-full mb-1"></div>
                    <div className="w-full h-1 bg-slate-300 rounded-full"></div>
                    <div className="w-[80%] h-1 bg-slate-300 rounded-full"></div>
                    <div className="w-[60%] h-1 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
                
                {/* Cinematic Hover Overlay Filter */}
                <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-black/90 border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out">
                    <Maximize2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-white font-bold tracking-widest mt-4 text-sm shadow-black drop-shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">VIEW PDF</span>
                </div>
             </div>
          </div>

          {/* Glaringly obvious hovering call-to-action badge */}
          <div className="absolute -bottom-4 right-[-10px] bg-blue-600 border border-blue-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] z-20 flex items-center gap-2 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 cursor-none">
            <Maximize2 className="w-3 h-3" />
            Click to View Resume
          </div>
        </motion.div>
      </div>

      {/* Embedded Full-Screen Zoomed Resume Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md cursor-auto"
            onClick={() => setIsZoomed(false)}
          >
            {/* Standard Window Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-red-500 rounded-full text-white transition-colors z-[101]"
              onClick={() => setIsZoomed(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-5xl h-[90vh] bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()} // Stop clicking inside the modal from closing it
            >
              {/* Fake Mac Toolbar */}
              <div className="w-full h-12 bg-slate-800/80 flex items-center px-4 border-b border-slate-700 shrink-0">
                 <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full bg-red-500" onClick={() => setIsZoomed(false)}></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="mx-auto font-mono text-slate-400 text-sm font-semibold tracking-wider">Krish_Gupta_Resume.pdf</div>
              </div>
              
              {/* The Actual embedded PDF */}
              <div className="w-full h-full bg-slate-950 flex justify-center items-center relative overflow-hidden">
                <iframe src="/Krish_Resume.pdf" className="w-full h-full border-none bg-white">
                  <p className="text-white text-center p-8">Your browser doesn't support PDF viewing. <a href="/Krish_Resume.pdf" className="text-blue-400 underline">Download it here</a>.</p>
                </iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
