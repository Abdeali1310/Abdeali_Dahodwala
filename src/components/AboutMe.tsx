import Image from "next/image";
import { FaBook, FaPlaneDeparture } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 mb-12 px-1 md:px-6 mt-60 max-w-6xl mx-auto">
      <h2 className="text-2xl hidden md:hidden lg:text-3xl font-bold mb-14 md:text-center font-serif">
        Let Me Introduce Myself
      </h2>
      <h2 className="text-2xl mb-14 font-bold md:hidden font-serif">
        About Myself
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="flex justify-center">
          <Image
            src="/profile.png" 
            alt="Profile illustration"
            width={350}
            height={350}
            className="rounded-full shadow-[7px_8px_15px_#297fff] transition duration-300 hover:shadow-2xl hover:shadow-blue-500 hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            I&apos;m Abdeali Dahodwala
          </h3>
          <p className="text-gray-700 text-lg dark:text-gray-300">
            A passionate web developer based in <strong className="text-blue-500">Ahmedabad, Gujarat. </strong>
            I&apos;ve recently completed my graduation and am actively working
            on improving myself to become a full stack developer.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I’ve built several projects using the MERN stack and Next.js. You
            can check them out in the{" "}
            <strong>

            <a href="/projects" className="text-purple-500 text-lg">
              Projects
            </a>{" "}
            </strong>
            section.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
            Currently Exploring Next.js and new ways to grow as a developer by
            building projects, understanding advanced concepts, and improving
            both frontend and backend skills.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Apart from coding, here are some things I enjoy:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <FaBook /> Reading
            </li>
            <li className="flex items-center gap-2">
              <FaPlaneDeparture /> Travelling
            </li>
          </ul>
        </div>

        
      </div>
    </section>
  );
};

export default AboutMe;
