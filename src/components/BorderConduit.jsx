import React from 'react';
import { motion } from 'framer-motion';

const BorderConduit = ({ children, className = "", duration = 4 }) => {
  return (
    <div className={`relative group/conduit ${className}`}>
      {/* Background/Base Border */}
      <div className="absolute inset-0 border border-white/5 rounded-sm pointer-events-none" />
      
      {/* SVG Container for the Rotating Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="conduitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* The path is basically the perimeter of the div */}
        {/* We use vector-effect="non-scaling-stroke" to keep thickness consistent */}
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="2"
          stroke="url(#conduitGradient)"
          strokeWidth="2"
          strokeDasharray="100 300"
          initial={{ strokeDashoffset: 400 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />
      </svg>
      {children}
    </div>
  );
};

export default BorderConduit;
