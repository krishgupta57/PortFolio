import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../utils/animations';
import { Cpu } from 'lucide-react';
import BorderConduit from './BorderConduit';

const CornerFrame = () => (
    <>
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-pink-500/50 -translate-x-1 -translate-y-1" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-pink-500/50 translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-pink-500/50 -translate-x-1 translate-y-1" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-pink-500/50 translate-x-1 translate-y-1" />
    </>
);

const LogicLoadMeter = React.memo(({ percentage, color, isActive }) => {
    const blocks = 10;
    const filledBlocks = Math.round((percentage / 100) * blocks);
    
    return (
        <div className="flex gap-1.5 h-2 w-full">
            {[...Array(blocks)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0.1 }}
                    animate={{ 
                        opacity: isActive ? (i < filledBlocks ? [1, 0.4, 1] : 0.1) : (i < filledBlocks ? 0.4 : 0.05),
                    }}
                    transition={{ 
                        duration: 1.5,
                        repeat: isActive && i < filledBlocks ? Infinity : 0,
                        delay: i * 0.05 
                    }}
                    className="h-full flex-grow rounded-sm transition-colors duration-500"
                    style={{ 
                        backgroundColor: i < filledBlocks ? (isActive ? color : `${color}40`) : 'transparent',
                        border: `1px solid ${i < filledBlocks ? (isActive ? color : `${color}20`) : '#1e293b10'}`,
                        boxShadow: isActive && i < filledBlocks ? `0 0 15px ${color}` : 'none',
                        willChange: 'opacity, transform'
                    }}
                />
            ))}
        </div>
    );
});

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeIn}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative group cursor-crosshair will-change-transform"
    >
        {/* Next-Level Industrial Card Frame */}
        <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 relative overflow-hidden transition-shadow duration-500 group-hover:border-purple-500/40 shadow-2xl group-hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]">
          
          {/* Background Grid & Light Source */}
          <div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.1),transparent_70%)]" 
                 style={{ 
                    '--mouse-x': `${(mouseX.get() + 0.5) * 100}%`,
                    '--mouse-y': `${(mouseY.get() + 0.5) * 100}%`
                 }} 
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
          </div>

          {/* Card Header: Metadata */}
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="flex flex-col gap-1">
                <span className="text-[7px] font-mono font-black text-purple-500 uppercase tracking-[0.3em]">Module_Node_v4</span>
                <h4 className="text-xl font-black text-white italic uppercase tracking-tighter group-hover:text-purple-400 transition-colors">
                    {skill.name}
                </h4>
            </div>
            <div className="flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-[6px] font-mono text-slate-500 font-black tracking-widest">STABILITY</span>
                <span className="text-[8px] font-mono text-emerald-500 font-black uppercase italic">Locked</span>
            </div>
          </div>

          {/* Central HUD Focal Point */}
          <div className="relative h-40 flex items-center justify-center mb-8">
            {/* Optimized Rotating HUD Rings (Using CSS instead of Framer Motion for better perf) */}
            <div className="absolute w-32 h-32 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute w-24 h-24 border border-white/5 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
            
            {/* The Circular Meter */}
            <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="56" cy="56" r="50" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="4" />
                    <motion.circle
                        cx="56" cy="56" r="50"
                        fill="transparent"
                        stroke={skill.color || '#a855f7'}
                        strokeWidth="4"
                        strokeDasharray={2 * Math.PI * 50}
                        initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - skill.percentage / 100) }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_currentColor]"
                    />
                </svg>
                
                {/* Center Icon */}
                <div 
                    style={{ color: skill.color || '#a855f7' }}
                    className={`relative z-20 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                >
                    {React.cloneElement(skill.icon, { className: 'w-8 h-8 drop-shadow-[0_0_10px_currentColor]' })}
                </div>
            </div>

            {/* Percentage Readout */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-black border border-white/10 px-3 py-1 rounded-sm shadow-xl">
                <span className="text-[10px] font-mono font-black text-purple-500 tracking-widest">{skill.percentage}%</span>
            </div>
          </div>

          {/* Diagnostic Footer */}
          <div className="relative z-10 space-y-4">
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 group-hover:bg-white/[0.05] transition-all">
                <div className="flex items-center gap-2 mb-2 opacity-50">
                    <Cpu className="w-3 h-3 text-purple-400" />
                    <span className="text-[7px] font-mono text-slate-400 uppercase font-black tracking-widest">Diagnostic_Report</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors">
                    {skill.details}
                </p>
            </div>

            {/* Hardware-Style Tags */}
            <div className="flex gap-2">
                <div className="flex-1 h-6 bg-[#0a0a0a] border border-white/5 rounded-md flex items-center justify-center">
                    <span className="text-[6px] font-mono text-slate-600 font-black uppercase tracking-widest">REF: {skill.category}</span>
                </div>
                <div className="flex-1 h-6 bg-[#0a0a0a] border border-white/5 rounded-md flex items-center justify-center gap-2">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[6px] font-mono text-slate-600 font-black uppercase tracking-widest">LIVE_SYNC</span>
                </div>
            </div>
          </div>

          {/* Hardware Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-2xl group-hover:border-purple-500/50 transition-colors" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-2xl group-hover:border-purple-500/50 transition-colors" />
          
          {/* Kinetic Scanline */}
          <motion.div 
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent pointer-events-none z-0"
          />
        </div>
    </motion.div>
  );
};

const SectionHeader = ({ label, title, status, location }) => (
    <motion.div variants={fadeIn} className="relative mb-16 md:mb-24 w-full group/header px-4 md:px-0">
        {/* The Frame Background - Adjusted for mobile */}
        <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[2.5rem] -mx-2 md:-mx-8 -my-4 md:-my-8 pointer-events-none" />
        
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            <div className="flex flex-col gap-3 md:gap-4">
                {/* Module Label Tag */}
                <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white font-mono text-[7px] md:text-[8px] font-black tracking-[0.3em] uppercase px-2 md:px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        {label}
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-purple-500 to-transparent opacity-30" />
                </div>
                
                {/* Main High-Contrast Title - Granular scaling */}
                <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.9] md:leading-none flex flex-wrap items-baseline">
                    {title.split(' ')[0]} 
                    <span className="text-purple-500 ml-2 md:ml-4 group-hover/header:ml-4 md:group-hover/header:ml-8 transition-all duration-700 whitespace-nowrap">
                        {title.split(' ').slice(1).join(' ')}
                    </span>
                </h2>
            </div>

            {/* Diagnostic Data Block */}
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 font-mono w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                <div className="flex items-center gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-lg">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-[8px] md:text-[10px] text-slate-300 font-bold tracking-widest uppercase">{status || 'SYSTEM_READY'}</span>
                </div>
                <div className="text-[8px] md:text-[10px] text-slate-500 tracking-[0.2em] md:tracking-[0.4em] uppercase font-black">
                    {location || 'IN // BHOPAL_HUB'}
                </div>
            </div>
        </div>

        {/* Decorative Corner Markers - Hidden on mobile for cleaner look */}
        <div className="absolute -top-4 -left-2 md:-top-8 md:-left-8 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-purple-500/30 rounded-tl-xl md:rounded-tl-2xl pointer-events-none" />
        <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-8 w-8 md:w-12 h-8 md:h-12 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl md:rounded-br-2xl pointer-events-none" />
    </motion.div>
);

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-32 relative overflow-hidden bg-[#010409]"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
            label="System Matrix v4.0" 
            title="Technical Arsenal" 
            status="DIAGNOSTIC: COMPLETE"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 relative">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
