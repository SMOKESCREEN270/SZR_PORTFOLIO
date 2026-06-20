import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

interface Props {
  onOpenCVModal: () => void;
}

export function Hero({ onOpenCVModal }: Props) {
  return (
    <section id="home" className="relative pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Animated gradient mesh background — pure CSS, zero JS */}
      <div className="hero-mesh" />
      <div className="dot-grid" />

      {/* Bottom fade into next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-[2]" />

      <div className="container relative z-10 px-5 mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-white/70">Available for opportunities</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.05] mb-6">
              Shaikh Zaid
              <br />
              <span className="text-gradient-primary">Rahman</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              AI Builder <span className="text-primary/60">·</span> Full-Stack Developer <span className="text-primary/60">·</span> Prompt Engineer
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative w-full sm:w-auto px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-95"
              >
                <span className="relative flex items-center justify-center gap-2">
                  View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 border border-primary/40 text-primary font-semibold rounded-full hover:bg-primary/10 active:scale-95 transition-all duration-200"
                data-testid="button-hero-download-cv"
              >
                <Download size={16} />
                Download CV
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 border border-white/15 text-white/80 font-semibold rounded-full hover:bg-white/5 active:scale-95 transition-all duration-200 text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Avatar + floating stat badges */}
          <motion.div
            className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="w-full h-full rounded-full relative overflow-hidden border-2 border-white/10 shadow-[0_0_80px_-20px_hsl(195_80%_55%/0.15)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              <img
                src="/zaid.png"
                alt="Shaikh Zaid Rahman"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Floating badge — Anthropic Certs */}
            <motion.div
              className="absolute top-4 -left-4 sm:-left-10 glass px-4 py-3 rounded-2xl shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-accent">13</div>
              <div className="text-[10px] sm:text-xs text-white/50 font-medium uppercase tracking-wider">Anthropic<br />Certs</div>
            </motion.div>

            {/* Floating badge — Websites */}
            <motion.div
              className="absolute bottom-4 -right-4 sm:-right-10 glass px-4 py-3 rounded-2xl shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-accent">25+</div>
              <div className="text-[10px] sm:text-xs text-white/50 font-medium uppercase tracking-wider">Websites<br />Deployed</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
