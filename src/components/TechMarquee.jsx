import React from 'react';
import { Database, Layout, Server, DatabaseBackup, Command, Code2, Globe } from 'lucide-react';

const technologies = [
  { name: 'React.js', icon: <Layout className="w-5 h-5 text-blue-400" /> },
  { name: 'Django', icon: <Server className="w-5 h-5 text-[#092E20]" /> },
  { name: 'MySQL', icon: <DatabaseBackup className="w-5 h-5 text-orange-400" /> },
  { name: 'Firebase', icon: <Globe className="w-5 h-5 text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <Command className="w-5 h-5 text-cyan-400" /> },
  { name: 'JavaScript', icon: <Code2 className="w-5 h-5 text-yellow-300" /> },
  { name: 'Python', icon: <Code2 className="w-5 h-5 text-blue-500" /> },
  { name: 'SQLite', icon: <Database className="w-5 h-5 text-blue-300" /> }
];

// Duplicate the array so it scrolls infinitely without empty gaps
const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-black border-y border-slate-800/50 py-8 relative flex shadow-[inset_0_0_50px_rgba(0,0,0,1)]">
      {/* Invisible gradients masking the edges to create a fade-in/out effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* The scrolling container */}
      <div className="flex animate-marquee min-w-[200%]">
        {duplicatedTechnologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-3 mx-8 md:mx-12 shrink-0 group hover:opacity-100 opacity-70 transition-opacity duration-300 cursor-none"
          >
            {tech.icon}
            <span className="text-xl md:text-2xl font-black tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
