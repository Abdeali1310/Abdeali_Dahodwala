import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import { GithubIcon, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className=" data-scroll-section pb-20 data-scroll pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />

          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-30 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Its Abdeali"
            className="text-center font-serif text-amber-50 text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-7 md:mb-4  text-md md:text-lg lg:text-2xl">
            A passionate web developer on a journey of becoming a full stack
            developer.
          </p>
          <div className="flex gap-7 mt-3 lg:mt-0">
            <a href="#projects">
              <MagicButton
                title="My works"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1qwcQP_g_MmztebvGEA7UTZ97WKgLsy0s/view?usp=drivesdk"
              download
              target="_blank"
            >
              <MagicButton
                title="Resume"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
          <div className="flex gap-6 lg:gap-8 mt-8 lg:mt-12">
            <a
              href="https://github.com/Abdeali1310"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-[0_0_15px_#3b82f6] p-2 rounded-full transition"
            >
              <GithubIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdeali-dahodwala-169083268"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-[0_0_15px_#3b82f6] p-2 rounded-full transition"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
