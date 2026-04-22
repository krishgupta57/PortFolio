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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-8 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isHidden && !isOpen ? -120 : 0, 
          opacity: 1,
          borderColor: isHidden ? 'rgba(255,255,255,0.05)' : 'rgba(59,130,246,0.2)'
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto relative max-w-full group/nav"
      >
        {/* Progress Ring Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative w-10 h-10 flex items-center justify-center mr-2 cursor-none group/logo"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="20" cy="20" r="18" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <motion.circle 
              cx="20" cy="20" r="18" fill="transparent" 
              stroke="#ec4899" strokeWidth="2" strokeLinecap="round"
              style={{ strokeDasharray: circumference, strokeDashoffset }}
            />
          </svg>
          <span className="text-[10px] font-black tracking-tighter bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent transform group-hover/logo:scale-110 transition-transform">
            KG.
          </span>
        </button>

        {/* System Status Telemetry */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1 border-l border-white/10 mr-2 opacity-60">
            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse shadow-[0_0_8px_#ec4899]" />
            <span className="text-[8px] font-mono tracking-widest text-pink-400 whitespace-nowrap uppercase">V3.2.0 // SYSTEM_OPTIMAL</span>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-1 relative">
          <AnimatePresence>
            {activeSection && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 bg-pink-500/10 border border-pink-500/20 rounded-full z-0"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </AnimatePresence>

          {navItems.map((item) => (
            <li key={item} className="relative z-10">
              <MagneticButton
                isActive={activeSection === item}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </MagneticButton>
            </li>
          ))}
        </ul>

        <div className="h-4 w-[1px] bg-white/10 mx-2 hidden md:block"></div>

        {/* Drop Mail Button */}
        <button 
          onClick={() => scrollToSection('Contact')}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 active:scale-95 group cursor-none"
        >
          Hire Me
          <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors relative z-50 cursor-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-slate-900/90 backdrop-blur-2xl border border-white/5 rounded-3xl p-4 shadow-2xl z-40 flex flex-col gap-2 pointer-events-auto"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`w-full text-left px-6 py-4 rounded-2xl transition-all text-lg font-bold ${
                    activeSection === item ? 'bg-blue-500/10 text-blue-400' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('Contact')}
              className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-2xl flex items-center justify-between text-white font-black uppercase tracking-widest text-sm shadow-xl"
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
