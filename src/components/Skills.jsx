import React from 'react';
import { motion } from 'framer-motion';
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

const LogicLoadMeter = ({ percentage, color }) => {
    const blocks = 10;
    const filledBlocks = Math.round((percentage / 100) * blocks);
    
    return (
        <div className="flex gap-1.5 h-2 w-full">
            {[...Array(blocks)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0.2 }}
                    whileInView={{ 
                        opacity: i < filledBlocks ? [1, 0.6, 1] : 0.1,
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: i < filledBlocks ? Infinity : 0,
                        delay: i * 0.1 
                    }}
                    className="h-full flex-grow rounded-sm shadow-sm"
                    style={{ 
                        backgroundColor: i < filledBlocks ? color : 'transparent',
                        border: `1px solid ${i < filledBlocks ? color : '#1e293b'}`,
                        boxShadow: i < filledBlocks ? `0 0 10px ${color}40` : 'none'
                    }}
                />
            ))}
        </div>
    );
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="relative"
    >
        <div className="group bg-[#111111]/30 backdrop-blur-3xl border border-white/5 rounded-3xl p-8 hover:border-purple-500/20 transition-all duration-500 relative overflow-hidden shadow-2xl">
          {/* Neon Corner */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/20 rounded-tl-3xl z-20 group-hover:border-purple-500/50 transition-colors" />
          
          <div className="flex items-center gap-6 mb-8">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-purple-500/5 border border-purple-500/10 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all relative"
              style={{ color: skill.color || '#a855f7' }}
            >
              <div className="relative z-10 group-hover:scale-110 transition-transform">
                {React.cloneElement(skill.icon, { className: 'w-7 h-7' })}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h4>
                <span className="text-sm font-mono font-black text-purple-500">{skill.percentage}%</span>
              </div>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 font-bold">
                MODULE_REF // {skill.category}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <LogicLoadMeter percentage={skill.percentage} color={skill.color || '#a855f7'} />
            <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono text-purple-500/40 uppercase tracking-[0.2em] font-black">Diagnostic_Output:</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors">{skill.details}</span>
            </div>
          </div>

          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
        </div>
    </motion.div>
  );
};

const SectionHeader = ({ label, title, status, location }) => (
    <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/5 pb-8 w-full">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                <span className="text-purple-400 font-mono text-[9px] font-black tracking-[0.4em] uppercase">{label}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none uppercase">
                {title.split(' ')[0]} <span className="text-white/20 italic">{title.split(' ').slice(1).join(' ')}</span>
                <span className="text-purple-500 italic">.</span>
            </h2>
        </div>
        <div className="flex flex-col items-end gap-2 mb-1">
            <div className="px-4 py-1.5 bg-[#0a0a0a] border border-white/10 rounded-sm flex items-center gap-2 shadow-2xl relative overflow-hidden group">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                <span className="text-[9px] font-mono text-slate-300 font-black tracking-[0.2em] uppercase">{status || 'SYSTEM_SYNC: ACTIVE'}</span>
            </div>
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] font-black">{location || 'BHOPAL // INDIA_REGION'}</span>
        </div>
    </motion.div>
);

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 relative overflow-hidden bg-[#010409]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
            label="Technical Arsenal v4.0" 
            title="System Matrix" 
            status="DIAGNOSTIC: COMPLETE"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
