import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import profilePic from "../assets/pp.jpg";

const Hero = ({ dark }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const secondaryColor = dark ? '#1E293B' : '#E5E7EB';
  const primaryColor = dark? "#22C55E" : "#2563EB";



  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imgVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
      <div className="min-h-screen flex items-center justify-center"
      style={{background:secondaryColor}}>
      <div className="w-full max-w-6xl px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-6">

        <motion.div
          className="flex justify-center w-full lg:w-1/2"
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-60 sm:w-48 sm:h-48 md:w-56 md:h-70 lg:w-50 lg:h-70 rounded-xl border-4 border-[#2563EB] dark:border-[#22C55E] object-cover transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h2
            className="pb-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
            style={{ color: secondaryColor }}
          >
            <span className="text-[#2563EB] dark:text-[#22C55E]">
              Alishba Shabbir
            </span>
          </h2>

          <p
            className="text-base sm:text-xl md:text-3xl mb-6 font-medium"
            style={{ color: secondaryColor }}
          >
            MERN Stack Developer
          </p>

          <p className="max-w-lg mx-auto lg:mx-0 py-2 text-base sm:text-lg leading-relaxed">
            I am a full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js) and PHP Laravel, with strong experience in building scalable web applications, RESTful APIs, and dynamic user interfaces. I work with MySQL and MongoDB, implement secure authentication systems, follow MVC architecture and clean coding practices, and use Git/GitHub for version control.
          </p>

          <motion.a
            href="/resume1.pdf"
            download
            className="inline-block mt-6 bg-[#2563EB] dark:bg-[#22C55E] text-white rounded-full px-6 py-3 text-sm"
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
