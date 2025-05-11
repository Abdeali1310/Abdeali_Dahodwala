import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MobileNavbar from "@/components/MobileNavbar";
import MySkills from "@/components/MySkills";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
  
export default function Home() {
  return (
    <main className=" relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <div className="hidden">
        <FloatingNav navItems={navItems}/>
        </div>
        <div className="hidden md:block">

      <Navbar />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      <Hero />
      <AboutMe />
      <Grid />
      <RecentProjects />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  </main>
  );
}
