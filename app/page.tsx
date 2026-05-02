import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Publications />
      <ResumeSection />
    </main>
  );
}
