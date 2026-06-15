import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "CodeCure AI",
      event: "SPIRIT 2026 (IIT BHU)",
      date: "March 31 – April 4, 2026",
      image: "/codecure.png",
      tags: ["Python", "XGBoost", "Streamlit", "RDKit"],
      description: "AI-driven drug toxicity screening tool predicting toxicity across 12 biological assays (Tox21 dataset). Achieved average AUC-ROC of 0.797 with SHAP-based explainability.",
      impact: "Helps pharmaceutical researchers filter unsafe drug candidates early, reducing costly failures.",
    },
    {
      title: "PulseIQ (SmartMill)",
      event: "Raccoon AI Innovation Challenge (NIT Rourkela)",
      date: "March 22 – April 10, 2026",
      image: "/pulseiq.png",
      tags: ["Computer Vision", "MobileNetV3", "SaaS"],
      description: "Camera-based advisory system for dal milling units using lightweight on-device image classification. Iterated through 4 major product versions with direct farmer feedback.",
      impact: "Helps small/mid-sized mills reduce grain wastage and improve output quality.",
    },
    {
      title: "Prompt Wars - 1st Prize",
      event: "Hackathon Competition",
      date: "2026",
      image: "/promptwars.png",
      tags: ["Prompt Engineering", "Context Engineering", "LLMs"],
      description: "Won 1st Prize by crafting precision-engineered prompts that achieved exact expected results. Demonstrated iterative refinement and output formatting specifications.",
      impact: "Mastery of advanced LLM interaction and steering.",
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Deployed_Systems</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Production-grade applications and hackathon-winning architectures.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden group flex flex-col h-full border-white/10 hover:border-cyan-500/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 glass px-3 py-1 rounded-full text-xs font-semibold text-white/90 flex items-center gap-2">
                  <Trophy size={12} className="text-yellow-400" />
                  {project.event}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-white/70 mb-4 flex-1">{project.description}</p>
                
                <div className="mb-4 p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-lg">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">Impact</span>
                  <span className="text-sm text-white/80">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
