import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../utils/animations';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div 
        className="absolute -right-10 -top-10 w-32 h-32 blur-[80px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: skill.color }}
      ></div>

      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-700/50 bg-slate-800/50 group-hover:scale-110 transition-transform duration-300 shadow-lg"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
              {skill.name}
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              {skill.label}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="space-y-4">
        <div className="relative h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            style={{ 
              backgroundColor: skill.color,
              boxShadow: `0 0 15px ${skill.color}55`
            }}
          />
        </div>

        <div className="flex justify-between items-end">
          <div className="max-w-[70%]">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium leading-relaxed">
              {skill.details}
            </p>
          </div>
          <div className="text-right">
            <span 
              className="text-lg font-black tracking-tighter"
              style={{ color: skill.color }}
            >
              {skill.percentage}%
            </span>
          </div>
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
      className="py-20 relative"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <motion.div variants={fadeIn} className="flex flex-col mb-16 px-4 md:px-0">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">02. Technical Arsenal</span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Engine Room</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 px-4 md:px-0">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
