import React from 'react';
import { motion } from 'framer-motion';
import { FaCss3Alt, FaHtml5, FaJs, FaLaravel } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiMysql } from 'react-icons/si';

const Skills = ({ dark }) => {
  // Floating animation for each icon
  const floatAnimation = {
    y: [0, -15, 0, 15, 0], // up-down movement
    rotate: [0, 10, -10, 10, 0], // subtle rotation
    transition: {
      duration: 4,       // total duration of one loop
      repeat: Infinity,  // repeat forever
      ease: "easeInOut"
    }
  };

  return (
    <div className={`min-h-screen py-24 transition-colors duration-300 ${dark ? "bg-[#1E293B] text-slate-200" : "bg-[#E5E7EB] text-slate-800"}`}>
      <h2 className='my-20 text-center text-4xl text-[#2563EB] dark:text-[#22C55E]'>Skills Highlight</h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* React */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        {/* MongoDB */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <SiMongodb className='text-7xl text-cyan-500'/>
        </motion.div>

        {/* Node.js */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>

        {/* HTML */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        {/* CSS */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>

        {/* Laravel */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <FaLaravel className="text-7xl text-red-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>

        {/* MySQL */}
        <motion.div animate={floatAnimation} whileHover={{ scale: 1.2 }}>
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
