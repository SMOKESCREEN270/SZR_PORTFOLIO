import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Transmission Successful",
        description: "Your message has been logged. I'll respond shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const contactLinks = [
    {
      href: "mailto:shaikhzaidrahman10b@gmail.com",
      icon: <Mail size={18} />,
      label: "Email",
      value: "shaikhzaidrahman10b@gmail.com",
      external: false,
    },
    {
      href: "https://wa.me/916290575310",
      icon: <Phone size={18} />,
      label: "WhatsApp",
      value: "+91 6290575310",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative border-t border-white/5">
      <div className="container px-5 mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">

          {/* Left — contact info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
              Initialize<br /><span className="text-cyan-400">Connection</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-sm md:text-lg mb-8 md:mb-12 max-w-md leading-relaxed">
              Currently open for freelance opportunities, hackathon collaborations, and innovative AI engineering roles. Let's build the future together.
            </motion.p>

            <motion.div variants={stagger} className="space-y-3 md:space-y-4">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeUp}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="flex items-center gap-3 md:gap-4 text-white/80 hover:text-cyan-400 active:scale-[0.98] transition-all group p-3 md:p-4 glass rounded-xl"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors shrink-0">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white/50 mb-0.5">{link.label}</div>
                    <div className="font-medium text-sm md:text-base truncate">{link.value}</div>
                  </div>
                </motion.a>
              ))}

              <motion.div variants={fadeUp} className="flex gap-3 pt-3">
                {[
                  { href: "https://linkedin.com/in/shaikhzaidrahman", icon: <Linkedin size={18} />, label: "LinkedIn" },
                  { href: "https://github.com/shaikhzaidrahman", icon: <Github size={18} />, label: "GitHub" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 md:w-12 md:h-12 glass rounded-full flex items-center justify-center text-white/80 hover:text-cyan-400 hover:border-cyan-400/50 active:scale-95 transition-all hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass p-6 md:p-8 rounded-2xl border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name", label: "Identifier", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Return Address", type: "email", placeholder: "john@example.com" },
              ].map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label htmlFor={field.id} className="text-xs md:text-sm text-white/60 font-medium block">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs md:text-sm text-white/60 font-medium block">Payload</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Enter message coordinates..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 hover:bg-cyan-400 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Transmitting...</span>
                ) : (
                  <>
                    Transmit <Send size={16} className="group-hover:translate-x-1 transition-transform" />
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
