import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
