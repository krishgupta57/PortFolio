import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // High-performance motion values that bypass React state updates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs to trail behind the actual mouse for the large ring
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 400, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 400, mass: 0.5 });

  // Extremely tight springs for the central dot to follow instantly
  const dotXSpring = useSpring(cursorX, { damping: 40, stiffness: 1000, mass: 0.1 });
  const dotYSpring = useSpring(cursorY, { damping: 40, stiffness: 1000, mass: 0.1 });

  useEffect(() => {
    const moveCursor = (e) => {
      // Set the motion values instantly based on physical mouse movement
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Large trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500 pointer-events-none z-[100] mix-blend-screen hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.15)" : "transparent"
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Small instant dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-[100] hidden md:block"
        style={{
          x: dotXSpring,
          y: dotYSpring,
          translateX: "12px", 
          translateY: "12px"
        }}
      />
    </>
  );
};

export default CustomCursor;
