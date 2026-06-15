import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import CountUp from "react-countup";
import { ArrowRight, Terminal, Download } from "lucide-react";

interface Props {
  onOpenCVModal: () => void;
}

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export function Hero({ onOpenCVModal }: Props) {
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: isMobile ? 30 : 60,
            interactivity: {
              events: { onHover: { enable: !isMobile, mode: "grab" } },
              modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
            },
            particles: {
              color: { value: "#22d3ee" },
              links: { color: "#22d3ee", distance: 150, enable: true, opacity: 0.15, width: 1 },
              move: { enable: true, speed: isMobile ? 0.6 : 1 },
              number: { density: { enable: true, area: 800 }, value: isMobile ? 25 : 55 },
              opacity: { value: 0.25 },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-0" />

      <div className="container relative z-10 px-5 mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 md:mb-8 border-cyan-500/30"
            >
              <Terminal size={13} className="text-cyan-400" />
              <span className="text-xs md:text-sm font-medium text-cyan-50">System Online: Ready for Input</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold font-display leading-[1.05] mb-4 md:mb-6">
              Shaikh Zaid
              <br />
              <span className="text-gradient-primary">Rahman</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 font-light">
              AI Builder <span className="text-cyan-400">·</span> Full-Stack Developer <span className="text-cyan-400">·</span> Prompt Engineer
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative w-full sm:w-auto px-7 py-3.5 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                data-interactive="true"
              >
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-2">
                  View Systems <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 border border-cyan-400/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black active:scale-95 transition-all duration-200"
                data-testid="button-hero-download-cv"
              >
                <Download size={16} />
                Download CV
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 active:scale-95 transition-colors text-center"
                data-interactive="true"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Avatar + badges */}
          <motion.div
            className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="w-full h-full rounded-full relative p-1.5 overflow-hidden glass border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 to-transparent animate-pulse rounded-full" />
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
              className="absolute top-4 -left-4 sm:-left-10 glass px-4 py-3 rounded-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">
                <CountUp end={13} duration={2.5} />
              </div>
              <div className="text-[10px] sm:text-xs text-white/60 font-medium uppercase tracking-wider">Anthropic<br />Certs</div>
            </motion.div>

            {/* Floating badge — Websites */}
            <motion.div
              className="absolute bottom-4 -right-4 sm:-right-10 glass px-4 py-3 rounded-2xl"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                <CountUp end={25} duration={2.5} suffix="+" />
              </div>
              <div className="text-[10px] sm:text-xs text-white/60 font-medium uppercase tracking-wider">Websites<br />Deployed</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
