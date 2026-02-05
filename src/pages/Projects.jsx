import React from "react";

const Project = ({ dark }) => {
  const primaryColor = dark ? "#22C55E" : "#2563EB";    // headings
  const secondaryColor = dark ? "#1E293B" : "#E5E7EB";  // card backgrounds
  const cardText = dark ? "text-slate-400" : "text-slate-700";

  // Sample projects
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS to showcase projects, skills, and contact info.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      live: "https://yourportfolio.com",
      github: "https://github.com/username/portfolio",
    },
    {
      title: "E-commerce Store",
      description:
        "An online store with shopping cart, product filtering, and checkout functionality using React and Node.js.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      live: "https://mystore.com",
      github: "https://github.com/username/ecommerce-store",
    },
    {
      title: "Blog Platform",
      description:
        "A full-stack blog platform where users can create, edit, and comment on posts. Authentication implemented.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      live: "https://myblog.com",
      github: "https://github.com/username/blog-platform",
    }
  ];

  return (
    <div
      className={`min-h-screen px-6 py-16 transition-colors duration-300 ${
        dark ? "bg-[#020617] text-slate-200" : "bg-[#F8FAFC] text-slate-800"
      }`}
    >
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        style={{ color: primaryColor }}
      >
        Projects
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg border transition hover:scale-105"
            style={{ backgroundColor: secondaryColor }}
          >
            <h2 className="text-2xl font-semibold mb-3" style={{ color: primaryColor }}>
              {project.title}
            </h2>
            <p className={`mb-4 leading-relaxed ${cardText}`}>{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    dark ? "bg-slate-800 text-green-400" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg font-medium transition hover:scale-105 ${
                  dark ? "bg-green-600 text-slate-200" : "bg-blue-600 text-white"
                }`}
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg font-medium transition hover:scale-105 ${
                  dark ? "bg-slate-800 text-green-400" : "bg-blue-100 text-blue-600"
                }`}
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
