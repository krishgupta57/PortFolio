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
      <BorderConduit duration={Math.random() * 2 + 3}>
        <div className="group bg-slate-900/20 backdrop-blur-xl border border-pink-500/5 rounded-sm p-6 hover:border-pink-500/20 transition-all duration-300 relative">
          <CornerFrame />
          
          <div className="flex items-center gap-5 mb-6">
            <div 
              className="w-12 h-12 rounded-sm flex items-center justify-center bg-pink-500/5 border border-pink-500/10 group-hover:border-pink-500/30 group-hover:bg-pink-500/10 transition-all relative"
              style={{ color: '#ec4899' }}
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                <motion.path 
                    d="M 50,0 L 50,15 L 85,15 L 85,50 L 100,50 M 0,50 L 15,50 L 15,85 L 50,85 L 50,100"
                    fill="transparent"
                    stroke="#ec4899"
                    strokeWidth="2"
                    strokeDasharray="300"
                    initial={{ strokeDashoffset: 300 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                />
              </svg>
              <div className="relative z-10 group-hover:animate-pulse">
                {React.cloneElement(skill.icon, { className: 'w-6 h-6' })}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-baseline">
                <h4 className="text-lg font-black text-white uppercase tracking-widest group-hover:text-pink-400 transition-colors">
                  {skill.name}
                </h4>
                <span className="text-sm font-mono font-bold text-pink-500">{skill.percentage}%</span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mt-1">
                MOD_REF // {skill.category}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <LogicLoadMeter percentage={skill.percentage} color={skill.color} />
            <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-pink-500/30 uppercase tracking-tighter">Diagnostic_Log</span>
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-relaxed line-clamp-2">{skill.details}</span>
            </div>
          </div>
        </div>
      </BorderConduit>
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
            <div className="p-2 bg-pink-500/10 border border-pink-500/20">
              <Cpu className="text-pink-500 w-4 h-4" />
            </div>
            <span className="text-pink-500 font-mono text-[10px] tracking-widest uppercase">System Core // Arsenal v3.2</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-pink-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
            Technical <span className="text-pink-blue">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
          {/* Internal More Flows: Vertical Conduits between cards */}
          <div className="absolute -top-10 left-[25%] w-[1px] h-[calc(100%+80px)] opacity-10 hidden lg:block">
            <div className="conduit-lane">
                <div className="conduit-pulse" style={{ animationDuration: '4s' }} />
            </div>
          </div>
          <div className="absolute -top-10 left-[50%] w-[1px] h-[calc(100%+80px)] opacity-10 hidden lg:block">
            <div className="conduit-lane">
                <div className="conduit-pulse" style={{ animationDuration: '6s', animationDelay: '-2s' }} />
            </div>
          </div>
          <div className="absolute -top-10 left-[75%] w-[1px] h-[calc(100%+80px)] opacity-10 hidden lg:block">
            <div className="conduit-lane">
                <div className="conduit-pulse" style={{ animationDuration: '5s', animationDelay: '-1s' }} />
            </div>
          </div>

          {skills.map((skill, i) => (
            <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
            >
                <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
