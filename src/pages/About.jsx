import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaLaravel } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa6'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiMysql } from 'react-icons/si'


const About = ({ dark }) => {
  const primaryColor = dark ? "#22C55E" : "#2563EB"; 
  const secondaryColor = dark ? "#1E293B" : "#E5E7EB";
  const cardText = dark ? "text-slate-400" : "text-slate-700";

  return (
    <div
      className={`min-h-screen px-6 py-16 transition-colors duration-300 ${
        dark ? "bg-[#020617] text-slate-200" : "bg-[#F8FAFC] text-slate-800"
      }`}
    >
      <div className="max-w-5xl mx-auto grid gap-10">
        
        {/* Card */}
        <section
          data-aos="fade-up"
          className="p-6 md:p-8 rounded-2xl shadow-lg border text-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: primaryColor }}
          >
            About Me
          </h1>
          <p className={`leading-relaxed ${cardText}`}>
            I am a passionate frontend developer focused on building clean,
            responsive, and user-friendly web applications using modern
            technologies like React and Tailwind CSS. I enjoy turning ideas
            into real-world digital experiences.
          </p>
        </section>

        {/* Career Goals Card */}
        <section
          data-aos="fade-up"
          className="p-6 md:p-8 rounded-2xl shadow-lg border text-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Career Goals
          </h2>
          <p className={`leading-relaxed ${cardText}`}>
            My goal is to grow as a full-stack developer and contribute to
            meaningful projects that solve real-world problems. I aim to work
            in a collaborative environment where I can continuously learn
            and improve my skills.
          </p>
        </section>

        {/* Education Card */}
        <section
          data-aos="fade-up"
          className="p-6 md:p-8 rounded-2xl shadow-lg border text-center "
          style={{ backgroundColor: secondaryColor }}
        >
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Education
          </h2>
          <ul className={`space-y-2 ${cardText}`}>
            <li>• Bachelor’s Degree in Information Technology</li>
            <li>• Diploma in full stack Web Development from Aptech Institute</li>
          </ul>
        </section>

        {/* Experience Card */}
        <section
          data-aos="fade-up"
          className="p-6 md:p-8 rounded-2xl shadow-lg border text-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Experience
          </h2>
          <p className={`leading-relaxed ${cardText}`}>
            I have worked on multiple personal and academic projects where I
            focused on building responsive UI components, managing state,
            and improving user experience using React and Tailwind CSS and backend logics.
          </p>
        </section>

        {/* Tools & Technologies Card */}
        <section
          data-aos="fade-up"
          className="p-6 md:p-8 rounded-2xl shadow-lg border text-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: primaryColor }}
          >
            Tools & Technologies
          </h2>
           <div className="flex flex-wrap items-center justify-center gap-4">
                      <div>
                          <RiReactjsLine className='text-7xl text-cyan-400'/>
                      </div>
                      
                      <div className='p-4'>
                          <SiMongodb className='text-7xl text-cyan-500'/>
                      </div>
                      <div className="p-4">
                          <FaNodeJs className='text-7xl text-green-500'/>
                      </div>
          
                      <div className="p-4">
                        <FaHtml5 className="text-7xl text-orange-500" />
                      </div>
          
                       <div className="p-4">
                       <FaCss3Alt className="text-7xl text-blue-500" />
                      </div>
          
                     <div className="p-4">
                      <FaLaravel className="text-7xl text-red-500" />
                     </div>
          
                     <div className="p-4">
                     <FaJs className="text-7xl text-yellow-400" />
                      </div>
          
                      <div className="p-4">
                      <SiMysql className="text-7xl text-blue-600" />
                      </div>
          
                  </div>
        </section>
      </div>
    </div>
  );
};

export default About;
