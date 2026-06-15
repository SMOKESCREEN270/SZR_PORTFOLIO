import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Automation",
    skills: ["Claude API", "Retell AI", "Prompt Engineering", "MCP Servers", "n8n", "Zapier", "Make"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Languages & Backend",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Node.js", "Express", "FastAPI", "SQL", "PostgreSQL"],
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Frontend & Web",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "WordPress"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "AI Platforms & Tools",
    skills: ["ChatGPT", "Claude", "DeepSeek V3", "Mistral", "GoHighLevel", "Follow Up Boss", "ComfyUI"],
    color: "from-orange-400 to-red-500",
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
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 text-center">Neural_Architecture</h2>
          <p className="text-white/60 text-center max-w-xl text-sm md:text-base">The technical stack powering my solutions.</p>
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
              className="glass p-5 md:p-8 rounded-2xl relative overflow-hidden group"
            >
              <div
                className={`absolute -right-16 -top-16 w-36 h-36 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              />

              <h3 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6 relative z-10">{category.title}</h3>

              <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default select-none"
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
