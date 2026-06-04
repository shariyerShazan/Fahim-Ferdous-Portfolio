import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 relative">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Education />
      <Certificates />
      <Contact />
      
      <footer className="py-12 text-center text-slate-500 font-mono text-sm">
        <p>&copy; {new Date().getFullYear()} Md. Fahim Ferdous. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
