import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 md:py-10 border-t border-white/[0.04]">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Shaikh Zaid Rahman
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/shaikh-zaid-rahman-b873753b4/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/30 hover:text-primary hover:bg-white/5 transition-all"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://github.com/shaikhzaidrahman"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/30 hover:text-primary hover:bg-white/5 transition-all"
            >
              <Github size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
