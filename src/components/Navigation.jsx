import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingUp = latest < lastScrollY.current;
    
    if (latest < 50) {
      setIsHidden(false);
    } else if (latest > lastScrollY.current) {
      setIsHidden(true); // Standard: Scroll DOWN to hide
    } else if (isScrollingUp) {
      setIsHidden(false); // Standard: Scroll UP to show
    }
    
    lastScrollY.current = latest;
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
          y: isHidden && !isOpen ? -45 : 0, 
          opacity: 1 
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-2xl border border-white/5 rounded-full px-4 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto relative max-w-full overflow-hidden md:overflow-visible transition-all duration-300"
      >
        {/* Logo/Brand */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-black tracking-tighter mr-4 pl-2 group relative cursor-none"
        >
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-indigo-400">
            KG.
          </span>
          <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-1 relative">
          <AnimatePresence>
            {hoveredItem && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/5 rounded-full z-0 h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          {navItems.map((item) => (
            <li key={item} className="relative z-10">
              <button
                onClick={() => scrollToSection(item)}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`px-4 py-2 text-sm font-bold transition-colors cursor-none ${
                    hoveredItem === item ? 'text-white' : 'text-slate-400'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="h-4 w-[1px] bg-white/10 mx-2 hidden md:block"></div>

        {/* Drop Mail Button */}
        <button 
          onClick={() => scrollToSection('Contact')}
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 group cursor-none"
        >
          Drop Mail
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
                className="w-full text-left px-6 py-4 rounded-2xl hover:bg-white/5 text-lg font-bold text-slate-300 hover:text-white transition-all active:scale-95"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('Contact')}
              className="mt-4 w-full bg-blue-600 p-5 rounded-2xl flex items-center justify-between text-white font-black uppercase tracking-widest text-sm shadow-xl"
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
