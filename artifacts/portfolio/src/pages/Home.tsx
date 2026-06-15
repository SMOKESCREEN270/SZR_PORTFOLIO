import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { CVDownloadModal } from "@/components/CVDownloadModal";

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-cyan-500/30">
      <CustomCursor />
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />
      <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      <CVDownloadModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </main>
  );
}
