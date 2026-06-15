import { useState } from "react";
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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/85 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.4)]" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter" onClick={closeMobile}>
            SZ<span className="text-cyan-400">R</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors py-1"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenCVModal}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-400 hover:text-black active:scale-95 transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              data-testid="button-download-cv"
            >
              <Download size={14} />
              Download CV
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/5 transition-colors"
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
        <div className="bg-background/95 backdrop-blur-xl border-b border-white/10 py-4 px-5">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white/80 hover:text-cyan-400 py-3 border-b border-white/5 last:border-0 transition-colors"
                onClick={closeMobile}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { closeMobile(); onOpenCVModal(); }}
              className="flex items-center gap-2 text-cyan-400 font-semibold text-base py-3 mt-1"
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
