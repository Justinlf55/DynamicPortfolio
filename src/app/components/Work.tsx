"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { projectsData, type Project } from "../data";
import { cn } from "@/lib/cn";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 64 : -64, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -64 : 64, opacity: 0 }),
};

const Work: React.FC = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const reduce = useReducedMotion();
  const project = projectsData[index];

  const paginate = useCallback(
    (delta: number) =>
      setIndex(([i]) => [
        (i + delta + projectsData.length) % projectsData.length,
        delta,
      ]),
    []
  );
  const goTo = useCallback(
    (i: number) =>
      setIndex(([curr]) => [i, i > curr ? 1 : i < curr ? -1 : 0]),
    []
  );

  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.4),
      { threshold: [0.4] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, paginate]);

  return (
    <section ref={sectionRef} id="projects" className="relative snap-section">
      <div className="container-x w-full">
        <SectionHeader
          index="04"
          eyebrow="Projects"
          title="Things I've built — "
          accent="end-to-end."
        />

        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={project.id}
                custom={direction}
                variants={reduce ? undefined : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 32 },
                  opacity: { duration: 0.25 },
                }}
                drag={reduce ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) paginate(1);
                  else if (info.offset.x > 80) paginate(-1);
                }}
                className="touch-pan-y"
              >
                <ProjectCard project={project} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Edge controls */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous project"
            className="hidden md:grid place-items-center absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-ink-850/95 border border-line text-chalk-200 hover:text-white hover:border-accent/60 hover:bg-ink-800 transition-all z-10"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next project"
            className="hidden md:grid place-items-center absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-ink-850/95 border border-line text-chalk-200 hover:text-white hover:border-accent/60 hover:bg-ink-800 transition-all z-10"
          >
            <ArrowRight size={16} />
          </button>
        </Reveal>

        {/* Footer controls — counter + dots + mobile arrows */}
        <Reveal delay={0.1} className="mt-6 flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-chalk-400">
            <span className="text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mx-1.5 text-chalk-600">/</span>
            {String(projectsData.length).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="Project slides">
            {projectsData.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${p.name}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === index
                    ? "w-10 bg-accent shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                    : "w-5 bg-line hover:bg-line-strong"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous project"
              className="grid place-items-center h-9 w-9 rounded-full border border-line text-chalk-300"
            >
              <ArrowLeft size={14} />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="grid place-items-center h-9 w-9 rounded-full border border-line text-chalk-300"
            >
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="hidden md:block font-mono text-[11px] uppercase tracking-wider text-chalk-500">
            drag · click · arrow keys
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article className="surface rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
      {/* Media */}
      <div
        className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden border-b lg:border-b-0 lg:border-r border-line bg-ink-850 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={project.tnPath}
          alt={`${project.name} thumbnail`}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className={cn(
            "object-cover transition-all duration-700",
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
          priority
          draggable={false}
        />
        <Image
          src={project.gifPath}
          alt={`${project.name} preview`}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 60vw"
          className={cn(
            "object-cover absolute inset-0 transition-opacity duration-700",
            hovered ? "opacity-100" : "opacity-0"
          )}
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/40 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4">
          <span className="chip-accent">{project.tagline}</span>
        </div>
      </div>

      {/* Details */}
      <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col gap-4">
        <header>
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
            {project.name}
          </h3>
        </header>

        <p className="text-sm lg:text-[15px] text-chalk-300 leading-relaxed">
          {project.overview}
        </p>

        <div className="space-y-2">
          <div className="eyebrow">Highlights</div>
          <RevealGroup
            key={project.id /* re-stagger on slide change */}
            as="ul"
            stagger={0.06}
            y={12}
            duration={0.55}
            className="space-y-1.5"
          >
            {project.highlights.slice(0, 4).map((h, i) => (
              <RevealItem
                as="li"
                key={i}
                className="flex gap-2.5 text-[13px] lg:text-sm text-chalk-300 leading-snug"
              >
                <span className="font-mono text-accent-soft text-[10px] mt-1.5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{h}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-auto pt-4 border-t border-line flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Work;
