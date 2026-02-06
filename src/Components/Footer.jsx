import React from 'react'
import { FaLinkedin, FaMailBulk, FaVoicemail } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

const Footer = ({dark}) => {
    const primaryColor = dark ? "#22C55E" : "#2563EB";
     const cardBg = dark ? "#1E293B" : "#E5E7EB";
  return (
     <section className={`p-8 flex flex-col items-center space-y-4`} style={{ backgroundColor: cardBg }}>
              <div className="flex gap-6 mt-2 text-3xl">
                <a href="https://github.com/alishbashekh" target="_blank" rel="noreferrer" className={`${dark ? "text-green-400" : "text-blue-600"} hover:scale-110 transition-transform`}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/alishba-shabbir/" target="_blank" rel="noreferrer" className={`${dark ? "text-green-400" : "text-blue-600"} hover:scale-110 transition-transform`}><FaLinkedin /></a>
              </div>
            </section>
  )
}

export default Footer
