import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Automation",
      skills: ["Claude API", "Retell AI", "Prompt Engineering", "MCP Servers", "n8n", "Zapier", "Make"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Languages & Backend",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "Node.js", "Express", "FastAPI", "SQL", "PostgreSQL"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Frontend & Web",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "WordPress"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "AI Platforms & Tools",
      skills: ["ChatGPT", "Claude", "DeepSeek V3", "Mistral", "GoHighLevel", "Follow Up Boss", "ComfyUI"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Neural_Architecture</h2>
          <p className="text-white/60 text-center max-w-2xl">The technical stack powering my solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
