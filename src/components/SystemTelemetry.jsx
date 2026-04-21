import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SystemTelemetry = () => {
  const [activeSection, setActiveSection] = useState('00_BOOT');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id.toUpperCase());
            }
        });
    }, observerOptions);

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    return () => {
        clearInterval(timer);
        observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col items-center gap-10 pointer-events-none">
      {/* Scroll Metric Vertical Bar */}
      <div className="relative h-64 w-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-pink-500 via-blue-500 to-emerald-500 origin-top shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            style={{ scaleY }}
        />
      </div>

      {/* Telemetry Labels */}
      <div className="flex flex-col gap-8">
        {/* Module ID */}
        <div className="flex flex-col gap-1 items-end">
            <span className="font-mono text-[7px] text-white/20 uppercase tracking-[0.4em]">Active_Module</span>
            <span className="font-mono text-[10px] text-blue-400 font-bold tracking-widest">[ MOD_{activeSection} ]</span>
        </div>

        {/* System Time */}
        <div className="flex flex-col gap-1 items-end">
            <span className="font-mono text-[7px] text-white/20 uppercase tracking-[0.4em]">Sys_Time</span>
            <span className="font-mono text-[10px] text-pink-400 font-bold tracking-widest">{time}</span>
        </div>

        {/* Global Coordinates */}
        <div className="flex flex-col gap-1 items-end">
            <span className="font-mono text-[7px] text-white/20 uppercase tracking-[0.4em]">Loc_Uplink</span>
            <span className="font-mono text-[10px] text-white/60 font-bold tracking-widest">23.25'N // 77.41'E</span>
        </div>
      </div>

      {/* Decorative Vertical Line */}
      <div className="h-20 w-[1px] bg-gradient-to-b from-white/10 to-transparent" />
    </div>
  );
};

export default SystemTelemetry;
