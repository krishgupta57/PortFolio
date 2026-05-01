import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';

const MagneticButton = ({ children, onClick, isActive }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseEnter = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayText(children.toString().split("").map((char, index) => {
        if (index < iteration) return children[index];
        return letters[Math.floor(Math.random() * letters.length)];
      }).join(""));
      
      if (iteration >= children.toString().length) clearInterval(intervalRef.current);
      iteration += 1 / 2; // Speed of decode
    }, 30);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    clearInterval(intervalRef.current);
    setDisplayText(children);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{ x, y }}
      className={`relative px-4 py-2 text-sm font-bold transition-colors cursor-none ${
        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
      }`}
    >
      <span className="font-mono">{displayText}</span>
    </motion.button>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const lastScrollY = useRef(0);
  
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  // Reading Progress Ring Math
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Standard Smart Hide: Hide on DOWN, Show on UP
    if (latest < 50) {
      setIsHidden(false);
    } else if (latest > lastScrollY.current) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    lastScrollY.current = latest;

    // ScrollSpy Logic
    const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
    const scrollPos = latest + 200;

    sections.forEach((section, i) => {
      if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        setActiveSection(navItems[i]);
      }
    });

    if (latest < 100) setActiveSection(null);
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">
      {/* Logo - Left Side */}
      <motion.button 
        initial={{ x: -20, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-3 group/logo cursor-none pointer-events-auto"
      >
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black text-xl rounded-xl rotate-3 group-hover/logo:rotate-0 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          K.
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-sm font-black tracking-tighter text-white uppercase">
            Krish
          </span>
          <span className="text-[10px] font-mono text-slate-500 font-bold">GUPTA.</span>
        </div>
      </motion.button>

      {/* Desktop Nav Items - Centered Pill */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: isHidden && !isOpen ? -100 : 0, 
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="hidden md:flex items-center bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl px-2 py-2 pointer-events-auto shadow-2xl"
      >
        <ul className="flex items-center gap-1">
          {navItems.map((item, index) => (
            <li key={item} className="relative">
              <button
                onClick={() => scrollToSection(item)}
                className={`px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all flex items-center gap-2 group cursor-none relative z-10 ${
                  activeSection === item ? 'text-white' : 'text-slate-500 hover:text-white'
                }`}
              >
                <span className="text-[8px] opacity-40 font-mono">0{index + 1}</span>
                {item}
                {activeSection === item && (
                  <motion.div 
                    layoutId="nav-active" 
                    className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Action */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <motion.button 
          initial={{ x: 20, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollToSection('Contact')}
          className="hidden md:flex items-center gap-3 bg-[#111111] hover:bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-full border border-white/10 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 group cursor-none relative overflow-hidden"
        >
          <span className="relative z-10">Drop Mail</span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none" />
        </motion.button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white transition-colors relative z-50 cursor-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl z-40 flex flex-col gap-2 pointer-events-auto"
          >
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all text-sm font-black tracking-widest uppercase flex items-center justify-between ${
                    activeSection === item ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="text-[10px] opacity-40">0{index + 1}</span>
                  {item}
                </span>
                {activeSection === item && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('Contact')}
              className="mt-4 w-full bg-white p-5 rounded-xl flex items-center justify-center gap-3 text-black font-black uppercase tracking-[0.2em] text-xs shadow-xl"
            >
              Drop Mail
              <Send className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
