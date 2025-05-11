import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Name + Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Abdeali Dahodwala</h2>
          <p className="text-zinc-400 text-sm">
            Passionate developer building sleek, modern web experiences using MERN Stack and Next.js.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Follow Me</h3>
          <div className="flex gap-6 text-zinc-400">
            <a
              href="https://github.com/Abdeali1310"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/abdeali-dahodwala-169083268"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:abdeali.dahodwala@outlook.com"
              className="hover:text-white transition"
            >
              <Mail />
            </a>
          </div>
        </div>

        {/* Column 4: Optional — Contact Info or Blog */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-zinc-400">Ahmedabad, India</p>
          <p className="text-sm text-zinc-400">abdeali.dahodwala@outlook.com</p>
        </div>
      </div>

      <div className="text-center text-zinc-500 text-sm mt-10 border-t border-zinc-700 pt-4">
        &copy; {new Date().getFullYear()} Abdeali Dahodwala. All rights reserved.
      </div>
    </footer>
  );
}
