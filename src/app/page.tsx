"use client"
import AboutMe from "@/components/AboutMe";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
  
export default function Home() {
  return (
    <main className=" relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      
      <Hero />
      <AboutMe />
      <Grid />
    </div>
  </main>
  );
}
