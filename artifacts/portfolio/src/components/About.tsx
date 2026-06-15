import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function About() {
  return (
    <section id="about" className="pt-6 pb-12 md:pt-8 md:pb-16 relative overflow-hidden">
      <div className="container px-5 mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold whitespace-nowrap">System.About()</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div variants={stagger} className="space-y-5 text-base md:text-lg text-white/70 font-light">
              <motion.p variants={fadeUp}>
                I am <strong className="text-white font-medium">Shaikh Zaid Rahman</strong>, an AI Builder and Full-Stack Developer operating at the intersection of generative AI and scalable web architecture.
              </motion.p>
              <motion.p variants={fadeUp}>
                While still in my 2nd year of BCA, I've already shipped production AI systems, deployed autonomous voice agents, and secured 13 specialized certifications from Anthropic — the company behind Claude.
              </motion.p>
              <motion.p variants={fadeUp}>
                I don't wait for the right moment. I build systems that work, iterate fast, and solve problems that matter — from pharmaceutical drug screening AI to real-time grain-quality advisory tools for rural mills.
              </motion.p>
              <motion.div variants={fadeUp} className="pt-5 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400 shrink-0" size={18} />
                  <span className="text-sm md:text-base">Kolkata, West Bengal, India</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-5">
              <motion.div
                variants={fadeUp}
                className="glass p-5 md:p-6 rounded-2xl border-cyan-500/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <GraduationCap size={56} />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-4 text-cyan-400">Education.Current</h3>
                <div className="space-y-4 relative z-10">
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-white/60 text-xs md:text-sm mt-1">Institute of Leadership, Entrepreneurship, and Development (iLEAD) · 2nd Year · Kolkata</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="font-semibold text-white text-sm md:text-base">Higher Secondary Education (Class XII)</h4>
                    <p className="text-white/60 text-xs md:text-sm mt-1">Seventh Day Adventist Senior Secondary School, Kolkata</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                {[
                  { value: "13", label: "Anthropic Certs" },
                  { value: "25+", label: "Websites Delivered" },
                  { value: "94%", label: "AI Completion Rate" },
                  { value: "15K+", label: "Event Visitors" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-center">
                    <div className="text-xl md:text-2xl font-display font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-xs text-white/50 mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
