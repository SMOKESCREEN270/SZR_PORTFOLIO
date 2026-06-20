import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const projects = [
  {
    title: "CodeCure AI",
    event: "SPIRIT 2026 · IIT BHU",
    date: "March 31 – April 4, 2026",
    image: "/codecure.png",
    tags: ["Python", "XGBoost", "Streamlit", "RDKit"],
    description:
      "AI-driven drug toxicity screening tool predicting toxicity across 12 biological assays (Tox21 dataset). Achieved average AUC-ROC of 0.797 with SHAP-based explainability.",
    impact: "Helps pharmaceutical researchers filter unsafe drug candidates early, reducing costly failures.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    title: "PulseIQ (SmartMill)",
    event: "Raccoon AI · NIT Rourkela",
    date: "March 22 – April 10, 2026",
    image: "/pulseiq.png",
    tags: ["Computer Vision", "MobileNetV3", "SaaS"],
    description:
      "Camera-based advisory system for dal milling units using lightweight on-device image classification. Iterated through 4 major product versions with direct farmer feedback.",
    impact: "Helps small/mid-sized mills reduce grain wastage and improve output quality.",
    accent: "from-primary/20 to-accent/10",
  },
  {
    title: "Prompt Wars — 1st Prize",
    event: "Hackathon Competition · Kolkata",
    date: "2026",
    image: "/promptwars.png",
    tags: ["Prompt Engineering", "Context Engineering", "LLMs"],
    description:
      "Won 1st Prize by crafting precision-engineered prompts that achieved exact expected results. Demonstrated iterative refinement and output formatting specifications.",
    impact: "Mastery of advanced LLM interaction and steering — a rare, high-value skill.",
    accent: "from-accent/20 to-accent/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="container px-5 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3">Projects</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base">
            Production-grade applications and hackathon-winning architectures.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="glass rounded-2xl overflow-hidden flex flex-col hover:border-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_hsl(195_80%_55%/0.1)] group"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-white/[0.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 z-20 glass px-2.5 py-1 rounded-full text-[10px] md:text-xs font-semibold text-white/80 flex items-center gap-1.5">
                  <Trophy size={10} className="text-accent" />
                  {project.event}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-base md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs md:text-sm text-white/50 mb-4 flex-1 leading-relaxed">{project.description}</p>

                <div className="mb-4 p-3 bg-primary/[0.04] border border-primary/10 rounded-xl">
                  <span className="text-[10px] md:text-xs font-semibold text-primary/80 uppercase tracking-wider block mb-1">Impact</span>
                  <span className="text-xs md:text-sm text-white/70 leading-snug">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs bg-white/[0.04] text-white/50 px-2.5 py-1 rounded-md border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
