"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";
import { skillsData, skillCategories, type Skill as SkillType } from "../data";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

const Skills: React.FC = () => {
  const [category, setCategory] = useState<(typeof skillCategories)[number]>("All");
  const [selected, setSelected] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () =>
      skillsData.filter(
        (s) =>
          category === "All" ||
          s.category.includes(category as SkillType["category"][number])
      ),
    [category]
  );

  const selectedSkill = useMemo(
    () => skillsData.find((s) => s.label === selected) ?? null,
    [selected]
  );

  const isSplit = !!selectedSkill;

  return (
    <section id="skills" className="relative snap-section">
      <div className="container-x w-full">
        <SectionHeader
          index="03"
          eyebrow="Tooling"
          title="The stack I reach for."
          description="Click any tile to see how I've used it."
        />

        <RevealGroup
          stagger={0.05}
          y={14}
          duration={0.55}
          className="flex flex-wrap gap-1.5 mb-6"
        >
          {skillCategories.map((c) => (
            <RevealItem key={c}>
              <button
                onClick={() => setCategory(c)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-[background-color,border-color,color] border",
                  category === c
                    ? "bg-accent/15 border-accent/50 text-accent-soft"
                    : "bg-transparent border-line text-chalk-400 hover:text-white hover:border-line-strong"
                )}
              >
                {c}
              </button>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Split-pane container: grid on left, experience panel on right */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
          {/* Skills grid — compresses to ~half width when a skill is selected */}
          <motion.div
            layout={!reduce}
            transition={{ duration: 0.55, ease: EASE }}
            className={cn(
              "min-w-0 w-full",
              isSplit && "lg:w-1/2"
            )}
          >
            <RevealGroup
              key={category /* re-stagger when filter changes */}
              stagger={0.04}
              y={16}
              duration={0.5}
              className={cn(
                "grid gap-3 transition-[grid-template-columns] duration-500",
                isSplit
                  ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
              )}
            >
              {filtered.map((skill) => (
                <RevealItem key={skill.label}>
                  <SkillTile
                    skill={skill}
                    isSelected={selected === skill.label}
                    onSelect={() =>
                      setSelected((prev) =>
                        prev === skill.label ? null : skill.label
                      )
                    }
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          </motion.div>

          {/* Experience panel — slides in from the right */}
          <AnimatePresence mode="wait">
            {selectedSkill && (
              <motion.aside
                key={selectedSkill.label}
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, x: 60, width: 0 }
                }
                animate={
                  reduce
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, width: "auto" }
                }
                exit={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, x: 40, width: 0 }
                }
                transition={{ duration: 0.5, ease: EASE }}
                className="lg:w-1/2 lg:flex-shrink-0 overflow-hidden"
                role="region"
                aria-live="polite"
                aria-label={`${selectedSkill.label} experience`}
              >
                <ExperiencePanel
                  skill={selectedSkill}
                  onClose={() => setSelected(null)}
                />
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------

interface ExperiencePanelProps {
  skill: SkillType;
  onClose: () => void;
}

const ExperiencePanel: React.FC<ExperiencePanelProps> = ({ skill, onClose }) => (
  <article className="surface rounded-2xl p-5 md:p-6 border-accent/30 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.35)] relative h-full flex flex-col gap-4">
    {/* Close — right-arrow that pushes the panel back out */}
    <button
      type="button"
      onClick={onClose}
      aria-label="Close panel"
      className="absolute top-3 right-3 grid place-items-center h-8 w-8 rounded-full text-chalk-400 hover:text-white hover:bg-white/[0.05] hover:border-accent/50 border border-line transition-colors group"
    >
      <ArrowRight
        size={14}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </button>

    {/* Header — icon + name + meta */}
    <header className="flex items-start gap-4 pr-10">
      <div className="relative h-12 w-12 md:h-14 md:w-14 flex-shrink-0 rounded-xl bg-white/[0.04] border border-line p-2.5">
        <Image
          src={skill.path}
          alt=""
          fill
          sizes="56px"
          className="object-contain p-2"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
          {skill.label}
        </h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5">
          {skill.years && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-soft bg-accent/[0.1] border border-accent/30 px-2 py-0.5 rounded-full">
              {skill.years}
            </span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-wider text-chalk-500">
            {skill.category.join(" · ")}
          </span>
        </div>
      </div>
    </header>

    {/* Experience body */}
    <p className="text-sm md:text-[15px] text-chalk-200 leading-relaxed">
      {skill.experience}
    </p>
  </article>
);

// ---------------------------------------------------------------------------

interface SkillTileProps {
  skill: SkillType;
  isSelected: boolean;
  onSelect: () => void;
}

const SkillTile: React.FC<SkillTileProps> = ({ skill, isSelected, onSelect }) => (
  <button
    type="button"
    onClick={onSelect}
    aria-pressed={isSelected}
    aria-label={`${skill.label} — click to see my experience with it`}
    className={cn(
      "group relative w-full aspect-square surface rounded-xl flex flex-col items-center justify-center gap-2 p-3",
      "transition-[transform,background-color,border-color,box-shadow] duration-300",
      "hover:-translate-y-1 hover:bg-white/[0.04] hover:border-accent/40",
      "hover:shadow-[0_8px_30px_-10px_rgba(139,92,246,0.4)]",
      "shadow-[inset_0_0_25px_rgba(139,92,246,0.08)]",
      isSelected &&
        "border-accent/60 bg-accent/[0.08] -translate-y-1 shadow-[0_8px_30px_-10px_rgba(139,92,246,0.5)]"
    )}
  >
    <div className="relative h-9 w-9 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-110">
      <Image
        src={skill.path}
        alt={skill.label}
        fill
        sizes="40px"
        className={cn(
          "object-contain transition-[filter] duration-300",
          "[filter:grayscale(1)_brightness(1.15)_contrast(1.2)]",
          "group-hover:[filter:none] group-focus-visible:[filter:none]",
          isSelected && "[filter:none]"
        )}
      />
    </div>
    <span
      className={cn(
        "relative font-mono text-[10px] uppercase tracking-wider transition-colors text-center",
        isSelected ? "text-white" : "text-chalk-300 group-hover:text-white"
      )}
    >
      {skill.label}
    </span>
  </button>
);

export default Skills;
