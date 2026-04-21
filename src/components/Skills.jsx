import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../utils/animations';
import { Layers, Server, ShieldCheck, Cpu } from 'lucide-react';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="group bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Dynamic Glow */}
      <div 
        className="absolute -right-8 -top-8 w-24 h-24 blur-3xl rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: skill.color }}
      ></div>

      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-800/80 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-xl"
          style={{ color: skill.color }}
        >
          {React.cloneElement(skill.icon, { className: 'w-5 h-5' })}
        </div>
        <div>
          <h4 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h4>
          <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">
            {skill.label}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="relative h-1 w-full bg-slate-800/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ 
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}80` 
            }}
          />
        </div>
        <div className="flex justify-between items-center px-1">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">{skill.details}</span>
            <span className="text-xs font-black" style={{ color: skill.color }}>{skill.percentage}%</span>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, icon: Icon, color, categorySkills }) => (
    <motion.div variants={fadeIn} className="space-y-6">
        <div className="flex items-center gap-4 pb-4 border-b border-white/5 mx-2">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10" style={{ color }}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className="text-lg font-black text-white uppercase tracking-tighter">{title}</h3>
                <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: color }}></div>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
            {categorySkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
  const frontendSkills = skills.filter(s => s.category === 'Frontend');
  const backendSkills = skills.filter(s => s.category === 'Backend');
  const toolsSkills = skills.filter(s => s.category === 'Tools');

  return (
    <motion.section 
      id="skills"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-8 relative px-4 md:px-0"
    >
      <motion.div variants={fadeIn} className="flex flex-col mb-16 items-center text-center">
        <div className="flex items-center gap-4 mb-4">
          <Cpu className="text-indigo-500 w-5 h-5 animate-pulse" />
          <span className="text-indigo-500 font-mono text-sm tracking-widest uppercase">02. Technical Arsenal</span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-indigo-500 to-transparent"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Engine Room</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        <SkillCategory 
            title="Frontend Core" 
            icon={Layers} 
            color="#3b82f6" 
            categorySkills={frontendSkills} 
        />
        <SkillCategory 
            title="Backend Systems" 
            icon={Server} 
            color="#10b981" 
            categorySkills={backendSkills} 
        />
        <SkillCategory 
            title="DevOps & Meta" 
            icon={ShieldCheck} 
            color="#a855f7" 
            categorySkills={toolsSkills} 
        />
      </div>
    </motion.section>
  );
};

export default Skills;
