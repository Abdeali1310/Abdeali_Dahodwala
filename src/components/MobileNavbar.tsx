"use client";
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react"; // Optional: replace with any icons
import { FaDownload, FaHome, FaProjectDiagram, FaTools } from "react-icons/fa";
import { ToggleButton } from "./ToggleButton";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome size={20} /> },
    { name: "Skills", href: "/skills", icon: <FaTools size={20} /> },
    {
      name: "Projects",
      href: "/projects",
      icon: <FaProjectDiagram size={20} />,
    },
    { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
  ];

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleDrawer}
          className="text-black dark:text-white p-2 rounded-full"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay Drawer */}
      <div
        className={`fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-10 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      <div
        className={`fixed top-0 left-0 h-full w-3/4 backdrop-blur text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={closeDrawer}
            className="text-black dark:text-white p-2 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-6 flex flex-col h-[70%] justify-center items-center gap-6">
          {navLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              onClick={closeDrawer}
              className="flex text-black dark:text-white items-center justify-center gap-3 text-lg font-medium hover:text-blue-400 transition"
            >
              {icon}
              {name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1qwcQP_g_MmztebvGEA7UTZ97WKgLsy0s/view?usp=drivesdk"
            download
            target="_blank"
            className="flex text-zinc-900 dark:text-white gap-3 text-lg items-center font-semibold"
          >
            <FaDownload />
            Resume
          </a>
        </nav>
      </div>

      {/* Move ToggleButton outside if it's causing any overlap */}
      <div className="fixed top-4 right-4 z-50">
        <ToggleButton />
      </div>
    </>
  );
};

export default MobileNavbar;
