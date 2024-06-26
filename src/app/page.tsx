import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center px-6">
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
