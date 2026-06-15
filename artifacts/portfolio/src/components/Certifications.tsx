import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export function Certifications() {
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
    "Specialized AI Deployment"
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)]" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-cyan-500/30">
            <ShieldCheck size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-50">13 Anthropic-Issued Certifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Verified_Capabilities</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 px-5 py-3 glass rounded-xl border-white/10 hover:border-cyan-400/50 transition-colors"
            >
              <Award className="text-cyan-500" size={18} />
              <span className="text-white/80 text-sm font-medium">{cert}</span>
            </motion.div>
          ))}
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: certs.length * 0.05 }}
             className="flex items-center gap-3 px-5 py-3 glass rounded-xl border-white/10 opacity-60"
          >
            <span className="text-white/60 text-sm italic">+ 3 additional specialized certifications</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
