import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../utils/animations';
import { Cpu } from 'lucide-react';

const CornerFrame = () => (
    <>
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/50 -translate-x-1 -translate-y-1" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500/50 translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500/50 -translate-x-1 translate-y-1" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/50 translate-x-1 translate-y-1" />
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
                    whileInView={{ opacity: i < filledBlocks ? 1 : 0.1 }}
                    transition={{ delay: i * 0.05 }}
                    className="h-full flex-grow rounded-sm"
                    style={{ 
                        backgroundColor: i < filledBlocks ? color : 'transparent',
                        border: `1px solid ${i < filledBlocks ? color : '#1e293b'}`,
                        boxShadow: i < filledBlocks ? `0 0 10px ${color}80` : 'none'
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
      className="group bg-slate-900/20 backdrop-blur-xl border border-blue-500/5 rounded-sm p-6 hover:border-blue-500/20 transition-all duration-300 relative"
    >
      <CornerFrame />
      
      <div className="flex items-center gap-5 mb-6">
        <div 
          className="w-12 h-12 rounded-sm flex items-center justify-center bg-blue-500/5 border border-blue-500/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all"
          style={{ color: skill.color }}
        >
          {React.cloneElement(skill.icon, { className: 'w-6 h-6' })}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-baseline">
            <h4 className="text-lg font-black text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h4>
            <span className="text-sm font-mono font-bold" style={{ color: skill.color }}>{skill.percentage}%</span>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mt-1">
            MOD_REF // {skill.category}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <LogicLoadMeter percentage={skill.percentage} color={skill.color} />
        <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Diagnostic_Log</span>
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-relaxed line-clamp-2">{skill.details}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-16 relative w-full bg-slate-950 overflow-hidden"
    >
      {/* No local background - handled globally for performance */}

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div variants={fadeIn} className="flex flex-col mb-16 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-blue-500/10 border border-blue-500/20">
              <Cpu className="text-blue-500 w-4 h-4" />
            </div>
            <span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase">System Core // Arsenal v3.0</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
            Technical <span className="text-blue-500">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
