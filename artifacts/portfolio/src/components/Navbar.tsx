import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

interface Props {
  onOpenCVModal: () => void;
}

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ onOpenCVModal }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  // Track active section via IntersectionObserver
  const updateActiveSection = useCallback(() => {
    const sections = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = updateActiveSection();
    return cleanup;
  }, [updateActiveSection]);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter" onClick={closeMobile}>
            SZ<span className="text-primary">R</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium px-3.5 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenCVModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/20 active:scale-95 transition-all duration-200"
              data-testid="button-download-cv"
            >
              <Download size={14} />
              Download CV
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 -mr-2 rounded-xl hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="lg:hidden overflow-hidden"
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="bg-background/95 backdrop-blur-2xl border-b border-white/[0.06] py-3 px-5">
          <div className="flex flex-col gap-0.5">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium py-3 px-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={closeMobile}
                >
                  {link.name}
                </a>
              );
            })}
            <button
              onClick={() => { closeMobile(); onOpenCVModal(); }}
              className="flex items-center gap-2 text-primary font-semibold text-base py-3 px-3 mt-1 rounded-xl hover:bg-primary/10 transition-colors"
              data-testid="button-download-cv-mobile"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
