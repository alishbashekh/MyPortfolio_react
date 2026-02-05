import React from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiLightbulbFlashLine, RiTeamFill, RiTeamLine, RiTimeLine } from "react-icons/ri";
import { SiFigma, SiMongodb, SiMysql, SiPostman, SiTailwindcss, SiVsco, SiVscodium } from "react-icons/si";


const Skills = ({ dark }) => {
  const primaryColor = dark ? "#22C55E" : "#2563EB";      // headings
  const secondaryColor = dark ? "#1E293B" : "#E5E7EB";    // card bg
  const iconBg = dark ? "bg-slate-800 text-green-400" : "bg-blue-100 text-blue-600";

  return (
    <div className={`min-h-screen px-6 py-16 transition-colors duration-300 ${dark ? "bg-[#020617] text-slate-200" : "bg-[#F8FAFC] text-slate-800"}`}>
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Frontend Skills */}
        <section className="p-6 rounded-2xl shadow-lg border" style={{ backgroundColor: secondaryColor }}>
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: primaryColor }}>Frontend Skills</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-6xl">
            <FaReact className="text-cyan-500 p-2 rounded-lg" title="React" />
            <FaHtml5 className="text-orange-500  p-2 rounded-lg" title="HTML5" />
            <FaCss3Alt className="text-blue-500 p-2 rounded-lg" title="CSS3" />
            <SiTailwindcss className="text-cyan-500 p-2 rounded-lg" title="Tailwind CSS" />
            <FaJs className="text-yellow-400 p-2 rounded-lg" title="JavaScript" />
          </div>
        </section>

        {/* Backend Skills */}
        <section className="p-6 rounded-2xl shadow-lg border" style={{ backgroundColor: secondaryColor }}>
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: primaryColor }}>Backend Skills</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-6xl">
            <FaNodeJs className="text-green-500 p-2 rounded-lg" title="Node.js" />
            <SiMongodb className="text-green-600p-2 rounded-lg" title="MongoDB" />
            <SiMysql className="text-blue-600 p-2 rounded-lg" title="MySQL" />
            <FaLaravel className="text-red-500 p-2 rounded-lg" title="Laravel" />
          </div>
        </section>

        {/* Tools */}
        <section className="p-6 rounded-2xl shadow-lg border" style={{ backgroundColor: secondaryColor }}>
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: primaryColor }}>Tools</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-6xl">
            <FaGitAlt className="text-orange-400 p-2 rounded-lg" title="Git" />
            <SiPostman className="text-orange-500 p-2 rounded-lg" title="Postman" />
            <SiFigma className="text-pink-500 p-2 rounded-lg" title="Figma" />
          </div>
        </section>

        {/* Soft Skills */}
        <section className="p-6 rounded-2xl shadow-lg border" style={{ backgroundColor: secondaryColor }}>
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: primaryColor }}>Soft Skills</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-6xl">
            <RiLightbulbFlashLine className="text-yellow-400 p-2 rounded-lg" title="Problem Solving" />
            <RiTeamFill className="text-blue-400 p-2 rounded-lg" title="Teamwork" />
            <RiTeamLine className="text-pink-400 p-2 rounded-lg" title="Communication" />
            <RiTimeLine className="text-green-400 p-2 rounded-lg" title="Time Management" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Skills;
