import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaLaravel } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa6'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiMysql } from 'react-icons/si'


const Skills = ({dark}) => {
  return (
    <div className={`min-h-screen py-24 transition-colors duration-300 ${dark ? "bg-[#1E293B] text-slate-200" : "bg-[#E5E7EB] text-slate-800"}`}>
        <h2 className='my-20 text-center text-4xl text-[#2563EB] dark:text-[#22C55E]'>Skills Highlight</h2>
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
      
    </div>
  )
}

export default Skills
