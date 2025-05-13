import Link from "next/link";
import { FaProjectDiagram, FaTools, FaEnvelope, FaHome } from "react-icons/fa"; // Importing icons
import { ToggleButton } from "./ToggleButton";

const Navbar = () => {
  return (
    <nav className="fixed top-3 overflow-x-hidden text-zinc-900 dark:text-white left-0 w-full z-50 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Column 1: Name */}
        <h1 className=" text-xl font-bold tracking-widest">
          <Link href="/" className="relative group inline-block">
            <span className="font-bold font-serif">Abdeali</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all group-hover:w-full"></span>
          </Link>
        </h1>

        {/* Column 2: Navigation Links */}
        <div className="flex gap-8 items-center">
          {[{ name: "Home", icon: <FaHome /> },
            { name: "Skills", icon: <FaTools /> },
            { name: "Projects", icon: <FaProjectDiagram /> },
            { name: "Contact", icon: <FaEnvelope /> },
          ].map((item) => (
            <a
              key={item.name}
              href={item.name === "Home" ? `/` : `/${item.name.toLowerCase()}`}
              className="relative  font-medium group flex items-center gap-2"
            >
              {item.icon}
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}

          {/* Add a margin to space out the toggle button */}
        </div>
          <div className="ml-8">
            <ToggleButton />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
