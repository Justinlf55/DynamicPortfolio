"use client";

import { useEffect, useState, MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { scrollToHash } from "@/lib/scroll";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToHash(href);
    setOpen(false);
  };

  return (
    <motion.header
      initial={reduce ? false : { y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : 2.7 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "bg-ink-900/70 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="w-full flex items-center justify-between h-16 px-6 md:px-10">
        <a
          href="#top"
          onClick={handleNav("#top")}
          className="flex items-center gap-2 group"
          aria-label="Justin Fernandez — back to top"
        >
          <span className="grid place-items-center h-7 w-7 rounded-md bg-white text-ink-900 font-mono text-[11px] font-bold">
            JF
          </span>
          <span className="hidden sm:flex text-sm font-medium tracking-tight">
            Justin Fernandez
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNav(link.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm tracking-tight rounded-full transition-colors",
                    isActive ? "text-white" : "text-chalk-300 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-accent shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={handleNav("#contact")}
            className="btn-secondary"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden grid place-items-center h-9 w-9 rounded-full border border-line text-chalk-100"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-ink-900/95 backdrop-blur-xl">
          <ul className="w-full px-6 md:px-10 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNav(link.href)}
                  className="block px-3 py-3 text-base font-medium tracking-tight text-chalk-100 hover:text-white hover:bg-white/[0.03] rounded-md"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleNav("#contact")}
                className="btn-secondary w-full justify-center mt-2"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default NavBar;
