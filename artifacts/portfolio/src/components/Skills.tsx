import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Automation",
    skills: ["Claude API", "Retell AI", "Prompt Engineering", "MCP Servers", "n8n", "Zapier", "Make"],
    gradient: "from-primary/20 to-accent/10",
    dotColor: "bg-primary",
  },
  {
    title: "Languages & Backend",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Node.js", "Express", "FastAPI", "SQL", "PostgreSQL"],
    gradient: "from-primary/20 to-primary/5",
    dotColor: "bg-primary/80",
  },
  {
    title: "Frontend & Web",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "WordPress"],
    gradient: "from-accent/20 to-accent/5",
    dotColor: "bg-accent/80",
  },
  {
    title: "AI Platforms & Tools",
    skills: ["ChatGPT", "Claude", "DeepSeek V3", "Mistral", "GoHighLevel", "Follow Up Boss", "ComfyUI"],
    gradient: "from-accent/20 to-primary/10",
    dotColor: "bg-accent",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-grid">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 text-center">Tech Stack</h2>
          <p className="text-white/40 text-center max-w-xl text-sm md:text-base">The technical stack powering my solutions.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              variants={card}
              className="glass p-5 md:p-8 rounded-2xl relative overflow-hidden group hover:border-white/15 transition-colors"
            >
              {/* Background glow */}
              <div
                className={`absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Category title with color dot */}
              <div className="flex items-center gap-2.5 mb-5 md:mb-6 relative z-10">
                <span className={`w-2 h-2 rounded-full ${category.dotColor}`} />
                <h3 className="text-base md:text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs md:text-sm text-white/60 hover:bg-white/[0.08] hover:text-white/80 hover:border-white/15 transition-all duration-200 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
