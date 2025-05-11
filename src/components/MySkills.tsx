import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiMongodb as SiMongodbCompass,
} from "react-icons/si";

import { Code2, Hammer, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const MySkills = () => {
  return (
    <>
    
    <section id="skills" className="py-16 mb-5 px-4 max-w-5xl mx-auto text-white">
      {/* Heading */}
      <div className="md:text-center mb-12 space-y-4">
        <h2 className="text-4xl font-serif font-bold text-purple-100">Technical Skills</h2>
        <p className="text-zinc-400 max-w-4xl text-xl  mx-auto my-12">
          I’m actively evolving as a Full-Stack Web Developer with practical
          experience in the <strong className="text-blue-500">  MERN stack </strong>(MongoDB, Express.js, React, Node.js) and
          <strong className="text-blue-500"> Next.js</strong>. Known for my adaptability and creative problem-solving.
          Always exploring, always improving.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Languages */}
        <Card className="bg-zinc-950 duration-400 border shadow-purple-400 hover:scale-105 transition hover:border-purple-500 hover:shadow-xl  border-zinc-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <Code2 className="w-5 h-5" /> Languages
            </CardTitle>
          </CardHeader>
          <Separator className="bg-purple-600" />
          <CardContent className="flex flex-wrap gap-4 mt-4">
            {[
              { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
              { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-400" />,
              },
              {
                name: "TypeScript",
                icon: <SiTypescript className="text-blue-400" />,
              },
            ].map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md text-sm"
              >
                {icon} {name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Frameworks & Technologies */}
        <Card className="bg-zinc-950 border hover:scale-105 transition hover:border-purple-500 border-zinc-800 hover:shadow-xl duration-400 shadow-purple-400 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <Hammer className="w-5 h-5" /> Technologies / Frameworks
            </CardTitle>
          </CardHeader>
          <Separator className="bg-purple-600" />
          <CardContent className="flex flex-wrap gap-4 mt-4">
            {[
              { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="text-green-500" />,
              },
              {
                name: "Express.js",
                icon: <SiExpress className="text-white" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-600" />,
              },
              { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            ].map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md text-sm"
              >
                {icon} {name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tools & Deployment */}
        <Card className="bg-zinc-950 border duration-400 hover:scale-105 hover:shadow-xl transition hover:border-purple-500 border-zinc-800 shadow-purple-400 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <Wrench className="w-5 h-5" /> Tools & Deployment
            </CardTitle>
          </CardHeader>
          <Separator className="bg-purple-600" />
          <CardContent className="flex flex-wrap gap-4 mt-4">
            {[
              {
                name: "VS Code",
                icon:<Code2 className="w-5 h-5 text-blue-400" />,
              },
              { name: "Git", icon: <SiGit className="text-orange-500" /> },
              { name: "GitHub", icon: <SiGithub className="text-white" /> },
              {
                name: "Postman",
                icon: <SiPostman className="text-orange-400" />,
              },
              { name: "Vercel", icon: <SiVercel className="text-white" /> },
              {
                name: "MongoDB Compass",
                icon: <SiMongodbCompass className="text-green-600" />,
              },
            ].map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md text-sm"
              >
                {icon} {name}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
    <Separator className="bg-gray-600" />
    </>
  );
};

export default MySkills;
