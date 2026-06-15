import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import CountUp from "react-countup";
import { ArrowRight, Terminal, Download } from "lucide-react";

interface Props {
  onOpenCVModal: () => void;
}

export function Hero({ onOpenCVModal }: Props) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.5 } },
              },
            },
            particles: {
              color: { value: "#22d3ee" },
              links: { color: "#22d3ee", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1 },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-cyan-500/30"
            >
              <Terminal size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-cyan-50">System Online: Ready for Input</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-6">
              Shaikh Zaid <br />
              <span className="text-gradient-primary">Rahman</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl font-light">
              AI Builder <span className="text-cyan-400">·</span> Full-Stack Developer <span className="text-cyan-400">·</span> Prompt Engineer
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
                data-interactive="true"
              >
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  View Systems <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <button
                onClick={onOpenCVModal}
                className="flex items-center gap-2 px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                data-testid="button-hero-download-cv"
              >
                <Download size={18} />
                Download CV
              </button>

              <a 
                href="#contact" 
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
                data-interactive="true"
              >
                Initialize Contact
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative max-w-lg w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="aspect-square rounded-full relative p-2 overflow-hidden glass border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent animate-pulse rounded-full" />
              <img 
                src="/zaid.png" 
                alt="Shaikh Zaid Rahman" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Floating Stat Badges */}
            <motion.div 
              className="absolute top-10 -left-10 glass px-6 py-4 rounded-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="text-3xl font-display font-bold text-cyan-400">
                <CountUp end={13} duration={2.5} />
              </div>
              <div className="text-xs text-white/60 font-medium uppercase tracking-wider">Anthropic<br/>Certs</div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -right-10 glass px-6 py-4 rounded-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-3xl font-display font-bold text-white">
                <CountUp end={25} duration={2.5} suffix="+" />
              </div>
              <div className="text-xs text-white/60 font-medium uppercase tracking-wider">Websites<br/>Deployed</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
