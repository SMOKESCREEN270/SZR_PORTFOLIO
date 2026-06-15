import { motion } from "framer-motion";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Freelance Web Development & AI Solutions",
      period: "June 2025 – December 2025",
      highlights: [
        "Developed 25+ WordPress websites with custom themes and plugins, achieving 35% improvement in client retention rate and 43% increase in website traffic",
        "Deployed 3 AI-powered voice agents using Retell AI with 94% conversation completion rate and 82% user satisfaction increase, generating $4,000–$5,000 cost savings per client",
        "Automated entire cold calling and lead conversation process using n8n, Zapier, and Make automation platforms integrated with CRM tools (GoHighLevel, Follow Up Boss)",
        "Crafted advanced prompts for cold calling agents and receptionist bots with comprehensive objection handling",
      ]
    },
    {
      role: "Landing Page Developer",
      company: "Managedia 2026 — iLEAD Tech Club Core Dev Team",
      period: "April 20, 2026 – May 8, 2026",
      highlights: [
        "Built responsive landing page for inter-collegiate festival, achieving 15,000+ unique visitors and 5,000+ event registrations",
        "Engineered dynamic event filtering system and optimized registration architecture for high-traffic processing",
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-l from-cyan-500/50 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-display font-bold">Execution.Log()</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-40px] top-0 bottom-0 w-px bg-cyan-500/20">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              </div>
              
              <div className="glass p-8 rounded-2xl border-white/5 hover:border-cyan-500/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                    {exp.company && <p className="text-cyan-400 font-medium mt-1">{exp.company}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 px-4 py-2 rounded-full w-fit">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-3 text-white/70">
                      <TrendingUp className="text-cyan-500 shrink-0 mt-1" size={16} />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
