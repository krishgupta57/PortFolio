import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full p-6 backdrop-blur-xl bg-black/60 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
        >
          Krish Gupta
        </motion.div>
        
        {/* Desktop Links */}
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex space-x-8 text-sm font-medium text-slate-300"
        >
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-300 hover:text-blue-400 transition-colors p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 top-[100%] mx-6 mt-2 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item} className="border-b border-slate-800 last:border-none">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsOpen(false)}
                    className="block px-8 py-4 text-slate-300 font-medium hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
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
