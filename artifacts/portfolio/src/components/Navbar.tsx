import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-display font-bold text-white tracking-tighter">
            SZ<span className="text-cyan-400">R</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors"
                data-interactive="true"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
