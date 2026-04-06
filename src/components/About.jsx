import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../utils/animations';
import profilePic from '../assets/front.jpg';

const EducationCard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between w-full mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Central Line Node */}
      <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-900 border-2 rounded-full flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
           style={{ borderColor: item.color }}>
        <div className="text-white">
          {React.cloneElement(item.icon, { className: 'w-5 h-5', style: { color: item.color } })}
        </div>
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`relative w-[calc(100%-60px)] md:w-[45%] p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors group shadow-xl ml-auto md:ml-0`}
      >
        {/* Glow Effect */}
        <div 
          className="absolute -right-10 -top-10 w-24 h-24 blur-[60px] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundColor: item.color }}
        ></div>

        <div className="flex flex-col gap-2">
          <span 
            className="font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 bg-white/5 rounded-full w-fit border border-white/10"
            style={{ color: item.color }}
          >
            {item.year} • {item.grade}
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{item.title}</h3>
          <p className="text-slate-400 font-medium mb-2">{item.institution}</p>
          <p className="text-slate-500 text-sm leading-relaxed border-t border-white/5 pt-4">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative"
    >
      <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-blue-500 mr-4 font-mono text-lg">01.</span> About Background
      </motion.h2>
      
      {/* Top Section: Text & Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <motion.div variants={fadeIn} className="space-y-6 text-slate-400 text-lg leading-relaxed order-2 md:order-1">
          <p>
            As a passionate Full-Stack Developer, I thrive on building end-to-end applications that solve real-world problems. With 3+ major projects under my belt featuring completely integrated authentication systems and REST APIs, I am heavily focused on scalable backend logic and smooth frontend experiences.
          </p>
          <p>
            My fundamental strengths lie in system design basics, Object-Oriented Programming (OOP), and optimizing database queries perfectly for production environments. 
          </p>
          
          <ul className="space-y-4 mt-6">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 font-bold">✓</span>
              <span><strong>End-to-End Architecture:</strong> Deeply comfortable stitching scalable relational database models (MySQL) to snappy React.js frontend interfaces.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 font-bold">✓</span>
              <span><strong>Agile Problem Solving:</strong> Quick to adapt, rapidly distilling highly complex workflows into perfectly maintainable, clean code architectures.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 font-bold">✓</span>
              <span><strong>User-Centric Design:</strong> Obsessed with crafting UI/UX interactivity that feels butter-smooth, engaging, and premium for the end user.</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div variants={fadeIn} className="relative group mx-auto md:ml-auto md:mr-0 w-full max-w-sm order-1 md:order-2">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
          <img 
            src={profilePic} 
            alt="Krish Gupta" 
            className="w-full h-auto aspect-square object-cover rounded-2xl border border-slate-700 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 shadow-2xl" 
          />
        </motion.div>
      </div>

      {/* Vertical Education Timeline Section */}
      <motion.div variants={fadeIn} className="relative max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center mb-20 text-center">
            <div className="flex items-center gap-4 mb-4">
                <span className="text-purple-500 font-mono text-sm tracking-widest uppercase text-center">Educational Odyssey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                The Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Learning</span>
            </h2>
        </div>

        <div className="relative mt-10">
          {/* Central Connecting Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-30 z-10"></div>
          
          {/* Render Education Cards */}
          <div className="relative z-20">
            {education.map((item, index) => (
              <EducationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>

    </motion.section>
  );
};

export default About;
