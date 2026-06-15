import { motion } from "framer-motion";
import { Terminal, MapPin, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold">System.About()</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-white/70 font-light">
              <p>
                I am <strong className="text-white font-medium">Shaikh Zaid Rahman</strong>, an AI Builder and Full-Stack Developer operating at the intersection of generative AI and scalable web architecture. 
              </p>
              <p>
                While still in my 2nd year of BCA, I've already shipped production AI systems, deployed autonomous voice agents, and secured 13 specialized certifications from Anthropic.
              </p>
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={20} />
                  <span>Kolkata, West Bengal, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass p-6 rounded-2xl border-cyan-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={64} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-cyan-400">Education.Current</h3>
                <div className="space-y-4 relative z-10">
                  <div>
                    <h4 className="font-semibold text-white">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-white/60 text-sm">Institute of Leadership, Entrepreneurship, and Development (iLEAD) · 2nd Year</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Higher Secondary Education (Class XII)</h4>
                    <p className="text-white/60 text-sm">Seventh Day Adventist Senior Secondary School, Kolkata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
