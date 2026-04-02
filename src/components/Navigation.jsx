import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  // Robust programmatic scroll handler that works better on mobile
  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      setIsOpen(false);
      // Small timeout to allow the menu close animation to begin
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 w-full p-6 backdrop-blur-xl bg-black/60 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-none z-50"
        >
          Krish Gupta
        </motion.button>
        
        {/* Desktop Links */}
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex space-x-4 text-sm font-medium text-slate-300"
        >
          {navItems.map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 hover:text-blue-400 transition-colors cursor-none"
              >
                {item}
              </button>
            </li>
          ))}
        </motion.ul>
        
        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            type="button"
            onClick={() => setIsOpen(prev => !prev)} 
            className="text-slate-300 hover:text-blue-400 transition-colors p-3 -mr-3 relative z-[60]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute left-0 right-0 top-[100%] mx-6 mt-4 bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-50"
          >
            <ul className="flex flex-col p-2">
              {navItems.map((item) => (
                <li key={item} className="border-b border-slate-800/50 last:border-none">
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="w-full text-left px-8 py-5 text-slate-300 font-bold hover:bg-blue-500/10 hover:text-blue-400 transition-colors active:bg-blue-500/20"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
