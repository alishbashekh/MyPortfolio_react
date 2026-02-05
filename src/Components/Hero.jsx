import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from "../assets/pp.jpg";


const Hero = ({ dark }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const secondaryColor = dark ? '#E5E7EB' : '#1E293B';

  return (
    <div
  className={`${
    dark ? "bg-[#1E293B] text-white" : "bg-[#E5E7EB] text-[#1E293B]"
  } min-h-screen flex items-center justify-center`}
>
  <div className="w-full max-w-6xl px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-6">

    <div className="flex justify-center w-full lg:w-1/2">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-60 sm:w-48 sm:h-48 md:w-56 md:h-70 lg:w-50 lg:h-70 rounded-xl border-4 border-[#2563EB] dark:border-[#22C55E] object-cover transition-transform duration-500 hover:scale-105"
      />
    </div> 
    <div className="w-full lg:w-1/2 text-center lg:text-left">
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

      <p className="max-w-lg mx-auto lg:mx-0 py-4 text-base sm:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolores
        ipsum. Voluptatibus deserunt mollitia officia tenetur sapiente minus
        neque totam?
      </p>

      <a
           href="/assets/Resume.pdf"   
           download                   
           className="inline-block mt-6 bg-[#2563EB] dark:bg-[#22C55E] text-white rounded-full px-6 py-3 text-sm hover:opacity-90 transition"
       >
  Download Resume
</a>     
    </div>

  </div>
</div>


  );
};

export default Hero;