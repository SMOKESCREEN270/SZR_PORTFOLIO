import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

const certs = [
  "Claude AI Fundamentals",
  "Prompt Engineering & Advanced Techniques",
  "Claude API Integration",
  "Model Context Protocol (MCP) Development",
  "Agentic Systems & Autonomous Agents",
  "Claude Code IDE Tools",
  "Vision Capabilities",
  "Advanced Reasoning",
  "System Design & Production Architecture",
  "Specialized AI Deployment",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container px-5 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5 border-cyan-500/30">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span className="text-xs md:text-sm font-medium text-cyan-50">13 Anthropic-Issued Certifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold">Verified_Capabilities</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2.5 md:gap-4"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 glass rounded-xl border-white/10 hover:border-cyan-400/40 transition-colors"
            >
              <Award className="text-cyan-500 shrink-0" size={15} />
              <span className="text-white/80 text-xs md:text-sm font-medium">{cert}</span>
            </motion.div>
          ))}
          <motion.div
            variants={item}
            className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 glass rounded-xl border-white/10 opacity-50"
          >
            <span className="text-white/60 text-xs md:text-sm italic">+ 3 additional specialized certifications</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
