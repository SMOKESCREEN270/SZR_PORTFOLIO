import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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

const socials = [
  { href: "https://www.linkedin.com/in/shaikh-zaid-rahman-b873753b4/", icon: <Linkedin size={18} />, label: "LinkedIn" },
  { href: "https://github.com/shaikhzaidrahman", icon: <Github size={18} />, label: "GitHub" },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative border-t border-white/[0.04]">
      <div className="container px-5 mx-auto">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="text-center"
          >
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
              Let's Work<br /><span className="text-accent">Together</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/40 text-sm md:text-lg mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed">
              Currently open for freelance opportunities, hackathon collaborations, and innovative AI engineering roles.
            </motion.p>

            {/* Contact links */}
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-8">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeUp}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="flex items-center gap-3 md:gap-4 text-white/70 hover:text-primary active:scale-[0.98] transition-all group p-4 md:p-5 glass rounded-2xl hover:border-primary/20"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    {link.icon}
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-xs text-white/30 mb-0.5">{link.label}</div>
                    <div className="font-medium text-sm md:text-base truncate">{link.value}</div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-white/20 group-hover:text-primary/60 transition-colors shrink-0" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA email button */}
            <motion.div variants={fadeUp} className="mb-8">
              <a
                href="mailto:shaikhzaidrahman10b@gmail.com?subject=Let's%20Work%20Together"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:brightness-110 hover:scale-[1.03] active:scale-95 transition-all duration-200 text-sm md:text-base"
              >
                <Mail size={18} />
                Send Me an Email
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex gap-3 justify-center">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 md:w-12 md:h-12 glass rounded-full flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 active:scale-95 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
