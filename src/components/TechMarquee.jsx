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
    <div className="w-full overflow-hidden bg-[#010409] border-y border-white/5 py-12 relative flex">
      {/* Invisible gradients masking the edges */}
      <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-[#010409] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-[#010409] to-transparent z-10 pointer-events-none"></div>
      
      {/* The scrolling container */}
      <div className="flex animate-marquee min-w-[200%] items-center">
        {duplicatedTechnologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-4 mx-12 md:mx-16 shrink-0 group hover:opacity-100 opacity-40 transition-all duration-500"
          >
            <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-purple-500/30 transition-colors">
                {tech.icon}
            </div>
            <span className="text-2xl md:text-4xl font-black tracking-tighter text-white uppercase group-hover:text-purple-400 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Scan line effect on marquee */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(168,85,247,0.02)_50%,transparent_100%)] bg-[size:100%_4px]" />
    </div>
  );
};

export default TechMarquee;
