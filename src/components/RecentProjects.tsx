import { projects } from "@/data";
import React from "react";
import ImageModalViewer from "./ImageModalViewer";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Some of My Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-zinc-900 shadow-md rounded-xl p-5 group relative overflow-hidden transition hover:scale-[1.02]"
          >
            <ImageModalViewer src={project.img} alt={project.title} link={project.link} live={project.live} title={project.title}/>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.des}
            </p>
            <div className="flex items-center gap-3 mb-4">
              {project.iconLists.map((icon, idx) => (
                <img key={idx} src={icon} alt="tech" className="w-6 h-6" />
              ))}
            </div>
            <div className="lg:hidden mt-12 flex gap-5">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Site"
                >
                  <img src="/arrow.svg" alt="Live" className="w-7 h-7" />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img src="/github.svg" alt="GitHub" className="w-7 h-7" />
              </a>
            </div>

            {/* Hover effect only for lg and above */}
            <div className="hidden lg:flex absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 items-center justify-center gap-6 transition">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Site"
                >
                  <img src="/arrow.svg" alt="Live" className="w-7 h-7" />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img src="/github.svg" alt="GitHub" className="w-7 h-7" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
