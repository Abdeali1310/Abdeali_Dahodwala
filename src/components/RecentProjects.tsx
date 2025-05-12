import { projects } from "@/data";
import React from "react";
import ImageModalViewer from "./ImageModalViewer";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { FaGithub } from "react-icons/fa6";
import { Separator } from "./ui/separator";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-12 my-5  px-4 max-w-4xl mt-12 mx-auto">
      <h2 className="text-2xl md:text-3xl md:text-center lg:mb-12 text-blue-50 font-bold mb-8 font-serif">
        Some of My Works
      </h2>
      <p className="text-zinc-400 text-lg md:text-xl md:text-center mb-8">
        Here are some of my recent works that are built with modern <strong className="text-blue-500 font-bold">Tools</strong> and
        <strong className="text-blue-500 font-bold"> Technologies</strong> along with clean design principles.
      </p>

      <div className="grid grid-cols-1 mb-5 sm:grid-cols-2 items-center justify-center gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-zinc-950 shadow-[0_2px_2px_#3b82f6] hover:shadow-none rounded-xl p-5 group relative overflow-hidden transition-all duration-400 hover:scale-[1.02]"
          >
            <ImageModalViewer
              src={project.img}
              alt={project.title}
              link={project.link}
              live={project.live}
              title={project.title}
            />

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.des}
            </p>

            <div className="flex items-center gap-3 mb-4">
              {project.iconLists.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  alt="tech"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
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
                  <Image
                    src="/arrow.svg"
                    alt="Live"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </a>
            </div>

            <div className="hidden lg:flex absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 items-center justify-center gap-6 transition">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Site"
                  className="p-3 hover:scale-105"
                >
                  <Image
                    src="/arrow.svg"
                    alt="Live"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hover:scale-105"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-serif text-center mb-16 mt-12">
        <a href="https://github.com/Abdeali1310">
          <MagicButton
            title="View More on"
            icon={<FaGithub />}
            position="right"
          />
        </a>
      </h2>
      <Separator className="bg-gray-600" />
    </div>
  );
};

export default RecentProjects;
