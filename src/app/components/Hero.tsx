"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { scrollToHash } from "@/lib/scroll";

const INTRO_DURATION = 2.6;

const Hero: React.FC = () => {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: reduce ? 0 : INTRO_DURATION,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const photoItem: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : INTRO_DURATION + 0.15 },
    },
  };

  return (
    <section id="top" className="relative snap-section pt-24 md:pt-28">
      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center w-full"
      >
        <div className="md:col-span-7 flex flex-col gap-6 order-2 md:order-1">
          <motion.div
            variants={item}
            className="flex items-center gap-3 text-eyebrow eyebrow"
          >
            <span className="pulse-dot text-chalk-200">Available — Apr 2026</span>
            <span className="h-px w-10 bg-line-strong" />
            <span>San Francisco, CA</span>
          </motion.div>

          <h1 className="text-display font-semibold tracking-tightest">
            <motion.span variants={item} className="block text-gradient">
              Building
            </motion.span>
            <motion.span
              variants={item}
              className="block text-accent-gradient leading-[1.02]"
              aria-hidden
            >
              <Typewriter
                words={["polished,", "performant,", "thoughtful,", "accessible,"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </motion.span>
            <span className="sr-only">polished, performant, thoughtful, accessible,</span>
            <motion.span variants={item} className="block text-gradient">
              interfaces at scale.
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="text-chalk-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            I&apos;m{" "}
            <span className="text-white font-medium">Justin Fernandez</span>, a
            frontend engineer specializing in React and React Native. Most recently
            at <span className="text-white font-medium">Gemini</span>, where I shipped
            onboarding and credit card experiences used by hundreds of thousands of
            customers.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3 mt-2"
          >
            <a
              href="/Justin_Fernandez_Resume_2024.pdf"
              download="Justin_Fernandez_Resume.pdf"
              className="btn-primary"
            >
              Download résumé
              <ArrowDown size={14} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact");
              }}
              className="btn-secondary"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </a>

            <div className="flex items-center gap-1 ml-1">
              <SocialLink
                href="https://www.linkedin.com/in/justin-f-7a4727122/"
                label="LinkedIn"
              >
                <Linkedin size={15} />
              </SocialLink>
              <SocialLink href="https://github.com/Justinlf55" label="GitHub">
                <Github size={15} />
              </SocialLink>
              <SocialLink href="mailto:justinlfern@gmail.com" label="Email">
                <Mail size={15} />
              </SocialLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={photoItem}
          className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative group/photo">
            {/* Single violet aura */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />

            {/* Photo container — duotone via single mix-blend layer */}
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full overflow-hidden border border-accent/40 shadow-[0_0_0_1px_rgba(139,92,246,0.35),0_25px_80px_-20px_rgba(139,92,246,0.45)]">
              <Image
                src="/headphoto.png"
                alt="Justin Fernandez"
                fill
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                className="object-cover [filter:grayscale(1)_contrast(1.2)_brightness(0.95)] transition-[filter] duration-500 group-hover/photo:[filter:grayscale(0.3)_contrast(1.05)]"
              />

              {/* Single duotone tint layer */}
              <div
                aria-hidden
                className="absolute inset-0 bg-accent mix-blend-color pointer-events-none transition-opacity duration-500 group-hover/photo:opacity-40"
              />

              {/* Static scanlines — pure CSS, no blend mode */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 1px, transparent 1px, transparent 3px)",
                }}
              />
            </div>

            {/* Corner brackets — terminal-ish framing */}
            <CornerBracket className="-top-2 -left-2" position="tl" />
            <CornerBracket className="-top-2 -right-2" position="tr" />
            <CornerBracket className="-bottom-2 -left-2" position="bl" />
            <CornerBracket className="-bottom-2 -right-2" position="br" />

            {/* Floating chips — hidden on smallest viewports to prevent overflow */}
            <div className="absolute -top-2 -left-4 sm:-left-10 chip rotate-[-4deg] bg-ink-900/90 z-10 hidden sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> react
            </div>
            <div className="absolute -bottom-3 right-0 chip rotate-[3deg] bg-ink-900/90 z-10 hidden sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" /> typescript
            </div>
            <div className="absolute top-12 -right-4 md:-right-10 chip rotate-[6deg] bg-ink-900/90 z-10 hidden md:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> design systems
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : INTRO_DURATION + 1.0, duration: 0.7 }}
        className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-none"
      >
        <div className="flex items-center gap-2 text-chalk-500 text-eyebrow eyebrow">
          <ArrowDown size={12} className="animate-bounce" />
          scroll
        </div>
      </motion.div>
    </section>
  );
};

const CornerBracket: React.FC<{
  className?: string;
  position: "tl" | "tr" | "bl" | "br";
}> = ({ className, position }) => {
  const map: Record<string, string> = {
    tl: "border-t border-l rounded-tl-md",
    tr: "border-t border-r rounded-tr-md",
    bl: "border-b border-l rounded-bl-md",
    br: "border-b border-r rounded-br-md",
  };
  return (
    <span
      aria-hidden
      className={`absolute h-4 w-4 border-accent/70 ${map[position]} ${className ?? ""}`}
    />
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="grid place-items-center h-9 w-9 rounded-full border border-line text-chalk-300 hover:text-white hover:border-accent/60 hover:bg-white/[0.03] transition-all"
  >
    {children}
  </a>
);

export default Hero;
