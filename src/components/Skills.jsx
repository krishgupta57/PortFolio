import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Layout, Server, Database, Layers } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-blue-500 mr-4 font-mono text-lg">02.</span> Technical Arsenal
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px] cursor-none">
        
        {/* Large Tile: Full Stack Engine (Spans 2 columns, 2 rows) */}
        <motion.div 
          variants={fadeIn} 
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden relative group hover:border-blue-500/50 transition-colors"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors pointer-events-none"></div>
          
          <div className="w-14 h-14 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-2xl mb-8 border border-blue-500/20">
            <Layers className="w-7 h-7" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-white tracking-tight">Full Stack Architecture</h3>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-sm">
            Expertise in bridging high-performance React frontend interfaces with profoundly optimized Python Django backends and secure authentication workflows.
          </p>
          
          <ul className="space-y-3">
            {['React.js (Hooks, Context)', 'Django (REST Framework)', 'Authentication (JWT, Sessions)', 'System Design Basics'].map((item, i) => (
              <li key={i} className="flex items-center text-slate-300 font-medium bg-slate-800/50 py-2 px-4 rounded-lg w-fit border border-slate-700/50">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Wide Tile: Frontend Engineering (Spans 2 columns, 1 row) */}
        <motion.div 
          variants={fadeIn} 
          className="md:col-span-2 md:row-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-colors group relative overflow-hidden flex flex-col justify-center"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 flex items-center justify-center rounded-xl mb-6 border border-indigo-500/20">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Frontend Engineering</h3>
              <p className="text-slate-400">Crafting incredibly smooth, fully responsive, and animated user interfaces using modern DOM manipulations and frameworks.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {['React Framework', 'JavaScript (ES6+)', 'Tailwind CSS v4', 'Responsive Design', 'Framer Motion'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-black border border-slate-700 rounded-full text-xs font-mono text-indigo-300 group-hover:border-indigo-500/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Small Tile A: Database (Spans 1 column, 1 row) */}
        <motion.div 
          variants={fadeIn} 
          className="md:col-span-1 md:row-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors flex flex-col justify-between"
        >
          <div className="w-12 h-12 bg-orange-500/10 text-orange-400 flex items-center justify-center rounded-xl mb-4 border border-orange-500/20">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Database Optimization</h3>
            <p className="text-slate-400 text-sm">Structuring perfectly normalized relational tables via MySQL and SQLite. Deep focus on query speeds and caching.</p>
          </div>
        </motion.div>

        {/* Small Tile B: Tooling (Spans 1 column, 1 row) */}
        <motion.div 
          variants={fadeIn} 
          className="md:col-span-1 md:row-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors flex flex-col justify-between relative overflow-hidden shadow-inner"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
            <Server className="w-48 h-48" />
          </div>
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 flex items-center justify-center rounded-xl mb-4 border border-emerald-500/20">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">API & Tooling</h3>
            <p className="text-slate-400 text-sm">RESTful API development. Experienced with deployment pipelines, Git workflows, and containerization basics (Docker).</p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Skills;
