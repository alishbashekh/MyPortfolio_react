import React from "react";
import pimage from '../assets/projectimg.png'


const ProjectSection = ({ dark }) => {
  const secondaryColor = dark ? "#E5E7EB" : "#1E293B";
  const primaryColor= dark ? "#22C55E" : "#2563EB";

  return (
    <div className={`py-16 px-6 text-center ${dark ? "bg-[#1E293B]" : "bg-[#E5E7EB]"}`}>
      <h2
        className="text-3xl md:text-4xl font-bold mb-10"
        style={{ color: primaryColor }}
      >
        Featured Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="p-6 rounded-lg w-64 shadow-lg hover:scale-105 transition"
          style={{ color: primaryColor}}>  
          <img
            src={pimage}
            alt="Project 1"
            className="rounded-md mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Tourism website</h3>
          <p className="text-sm mb-4">
            A tourism website by using htm css and javascript
          </p>
          <div className="flex gap-2 justify-center mb-4">
            <span className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
              HTML
            </span>
            <span className="text-xs bg-green-200 dark:bg-green-800 px-2 py-1 rounded">
              CSS
            </span>
          </div>
          <a
            href="/project"
            className="text-sm font-semibold hover:underline"
            style={{ color: primaryColor }}
          >
            View Project
          </a>
        </div>
                 <div className="p-6 rounded-lg w-64 shadow-lg hover:scale-105 transition"
          style={{ color: primaryColor}}>  
          <img
            src={pimage}
            alt="Project 1"
            className="rounded-md mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Tourism website</h3>
          <p className="text-sm mb-4">
            A tourism website by using htm css and javascript
          </p>
          <div className="flex gap-2 justify-center mb-4">
            <span className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
              HTML
            </span>
            <span className="text-xs bg-green-200 dark:bg-green-800 px-2 py-1 rounded">
              CSS
            </span>
          </div>
          <a
            href="/project"
            className="text-sm font-semibold hover:underline"
            style={{ color: primaryColor }}
          >
            View Project
          </a>
        </div>
         <div className="p-6 rounded-lg w-64 shadow-lg hover:scale-105 transition"
          style={{ color: primaryColor}}>  
          <img
            src={pimage}
            alt="Project 1"
            className="rounded-md mb-4"
          />
          <h3 className="font-bold text-xl mb-2">Tourism website</h3>
          <p className="text-sm mb-4">
            A tourism website by using htm css and javascript
          </p>
          <div className="flex gap-2 justify-center mb-4">
            <span className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
              HTML
            </span>
            <span className="text-xs bg-green-200 dark:bg-green-800 px-2 py-1 rounded">
              CSS
            </span>
          </div>
          <a
            href="/project"
            className="text-sm font-semibold hover:underline"
            style={{ color: primaryColor }}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

