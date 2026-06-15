import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Transmission Successful",
        description: "Your message has been logged. I'll respond shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Initialize<br/><span className="text-cyan-400">Connection</span></h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Currently open for freelance opportunities, hackathon collaborations, and innovative AI engineering roles. Let's build the future together.
            </p>

            <div className="space-y-6">
              <a href="mailto:shaikhzaidrahman10b@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-cyan-400 transition-colors group p-4 glass rounded-xl">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email</div>
                  <div className="font-medium">shaikhzaidrahman10b@gmail.com</div>
                </div>
              </a>
              
              <a href="tel:6290575310" className="flex items-center gap-4 text-white/80 hover:text-cyan-400 transition-colors group p-4 glass rounded-xl">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Comm Line</div>
                  <div className="font-medium">+91 6290575310</div>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a 
                  href="https://linkedin.com/in/shaikhzaidrahman" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/80 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/shaikhzaidrahman" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/80 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:-translate-y-1"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-white/60 font-medium">Identifier</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/60 font-medium">Return Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/60 font-medium">Payload</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Enter message coordinates..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Transmitting...</span>
                ) : (
                  <>
                    Transmit <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
