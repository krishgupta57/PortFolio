import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const About = () => {
  return (
    <motion.section 
      id="about" 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-blue-500 mr-4 font-mono text-lg">01.</span> About Background
      </motion.h2>
      
      {/* Top Section: Text & Image horizontally balanced */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeIn} className="space-y-6 text-slate-400 text-lg leading-relaxed">
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
        
        <motion.div variants={fadeIn} className="relative group mx-auto md:ml-auto md:mr-0 w-full max-w-sm">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
          {/* NOTE: Replace the src below with your actual photo path! e.g., src="/my-photo.jpg" */}
          <img 
            src="src/assets/front.jpg" 
            alt="Krish Gupta" 
            className="w-full h-auto aspect-square object-cover rounded-2xl border border-slate-700 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 shadow-2xl" 
          />
        </motion.div>
      </div>

      {/* Bottom Section: Horizontal Education Timeline Spanning Full Width */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-24 pt-16 border-t border-slate-800/50"
      >
        <motion.h3 variants={fadeIn} className="text-2xl font-bold text-white mb-20 text-center tracking-tight">The Education Journey</motion.h3>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-6 relative">
          
          {/* Glowing Connecting Line for Desktop */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-[28px] left-[15%] w-[70%] h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-[0_0_20px_rgba(99,102,241,0.6)] z-0 rounded-full"
          ></motion.div>
          
          {/* Mobile connecting line */}
          <motion.div 
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="block md:hidden absolute top-[10%] left-[50%] w-[2px] h-[80%] bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 -translate-x-1/2 z-0"
          ></motion.div>

          {/* Point 1: 10th Grade */}
          <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center group bg-black/50 md:bg-transparent p-6 rounded-2xl">
            <div className="w-14 h-14 bg-black border-[3px] border-purple-500 rounded-full flex items-center justify-center text-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)] mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <p className="text-purple-400 text-xs font-mono mb-4 px-4 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20 tracking-widest uppercase">2019 • 65%</p>
            <h4 className="text-white font-bold text-lg mb-2">High School (10th)</h4>
            <p className="text-slate-400 text-sm">Delhi Public School, Satna</p>
          </motion.div>

          {/* Point 2: 12th Grade */}
          <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center group bg-black/50 md:bg-transparent p-6 rounded-2xl">
            <div className="w-14 h-14 bg-black border-[3px] border-indigo-500 rounded-full flex items-center justify-center text-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.5)] mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-indigo-400 text-xs font-mono mb-4 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 tracking-widest uppercase">2021 • 65%</p>
            <h4 className="text-white font-bold text-lg mb-2">Senior Secondary (12th)</h4>
            <p className="text-slate-400 text-sm">Delhi Public School, Satna</p>
          </motion.div>

          {/* Point 3: B.Tech */}
          <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center group bg-black/50 md:bg-transparent p-6 rounded-2xl">
            <div className="w-14 h-14 bg-black border-[3px] border-blue-500 rounded-full flex items-center justify-center text-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <p className="text-blue-400 text-xs font-mono mb-4 px-4 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20 tracking-widest uppercase">2021 – 2025 • CGPA: 7.01</p>
            <h4 className="text-white font-bold text-lg mb-2">B.Tech Computer Science</h4>
            <p className="text-slate-400 text-sm">Lakshmi Narain College of Technology</p>
          </motion.div>

        </div>
      </motion.div>

    </motion.section>
  );
};

export default About;
