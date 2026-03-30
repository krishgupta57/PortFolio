import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-blue-500 mr-4 font-mono text-lg">03.</span> Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} variants={fadeIn} className="group flex flex-col bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-blue-400 font-mono text-xs font-bold mb-3 tracking-widest uppercase">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-black border border-slate-700/50 rounded-full text-xs font-mono text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={project.link} className="inline-flex items-center text-sm font-bold text-white hover:text-blue-400 transition-colors w-max cursor-none">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
