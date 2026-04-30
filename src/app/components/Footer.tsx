import { Github, Linkedin, Mail } from "lucide-react";
import { RevealGroup, RevealItem } from "./Reveal";

const Footer: React.FC = () => (
  <footer className="relative border-t border-line py-10 mt-12">
    <RevealGroup
      stagger={0.08}
      y={14}
      duration={0.6}
      className="container-x flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <RevealItem className="flex items-center gap-3">
        <span className="grid place-items-center h-7 w-7 rounded-md bg-white text-ink-900 font-mono text-[11px] font-bold">
          JF
        </span>
        <span className="text-sm text-chalk-300">
          Justin Fernandez · {new Date().getFullYear()}
        </span>
      </RevealItem>

      <RevealItem className="font-mono text-[11px] uppercase tracking-wider text-chalk-500">
        Built with Next.js + Tailwind. Designed in restraint.
      </RevealItem>

      <RevealItem className="flex items-center gap-1">
        <a
          href="https://www.linkedin.com/in/justin-f-7a4727122/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid place-items-center h-8 w-8 rounded-full border border-line text-chalk-300 hover:text-white hover:border-accent/60 transition-[color,border-color]"
        >
          <Linkedin size={14} />
        </a>
        <a
          href="https://github.com/Justinlf55"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid place-items-center h-8 w-8 rounded-full border border-line text-chalk-300 hover:text-white hover:border-accent/60 transition-[color,border-color]"
        >
          <Github size={14} />
        </a>
        <a
          href="mailto:justinlfern@gmail.com"
          aria-label="Email"
          className="grid place-items-center h-8 w-8 rounded-full border border-line text-chalk-300 hover:text-white hover:border-accent/60 transition-[color,border-color]"
        >
          <Mail size={14} />
        </a>
      </RevealItem>
    </RevealGroup>
  </footer>
);

export default Footer;
