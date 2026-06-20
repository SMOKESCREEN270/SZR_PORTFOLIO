import { motion } from "framer-motion";
import { Calendar, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const experiences = [
  {
    role: "Freelance Web Development & AI Solutions",
    period: "June 2025 – December 2025",
    highlights: [
      "Developed 25+ WordPress websites with custom themes and plugins, achieving 35% improvement in client retention rate and 43% increase in website traffic",
      "Deployed 3 AI-powered voice agents using Retell AI with 94% conversation completion rate and 82% user satisfaction increase, generating $4,000–$5,000 cost savings per client",
      "Automated entire cold calling and lead conversation process using n8n, Zapier, and Make automation platforms integrated with CRM tools (GoHighLevel, Follow Up Boss)",
      "Crafted advanced prompts for cold calling agents and receptionist bots with comprehensive objection handling",
    ],
  },
  {
    role: "Landing Page Developer",
    company: "Managedia 2026 — iLEAD Tech Club Core Dev Team",
    period: "April 20 – May 8, 2026",
    highlights: [
      "Built responsive landing page for inter-collegiate festival, achieving 15,000+ unique visitors and 5,000+ event registrations",
      "Engineered dynamic event filtering system and optimized registration architecture for high-traffic processing",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden bg-grid">
      <div className="container px-5 mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="section-line-reverse" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold whitespace-nowrap">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent hidden md:block" />

          <div className="space-y-6 md:space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 md:left-5 top-7 w-5 h-5 rounded-full border-2 border-accent/50 bg-background items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="glass p-6 md:p-8 rounded-2xl hover:border-primary/20 transition-colors group">
                  {/* Header */}
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between mb-5">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {exp.role}
                      </h3>
                      {exp.company && (
                        <p className="text-primary/80 font-medium mt-1.5 text-sm md:text-base">{exp.company}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-white/40 bg-white/[0.04] px-3.5 py-2 rounded-full w-fit shrink-0 border border-white/[0.06]">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 md:space-y-4">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="flex gap-3 text-white/60">
                        <TrendingUp className="text-accent/60 shrink-0 mt-0.5" size={15} />
                        <span className="leading-relaxed text-sm md:text-base">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
