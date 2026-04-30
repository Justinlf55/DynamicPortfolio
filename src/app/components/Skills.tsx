"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import SectionHeader from "./SectionHeader";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { skillsData, skillCategories, type Skill as SkillType } from "../data";
import { cn } from "@/lib/cn";

const Skills: React.FC = () => {
  const [category, setCategory] = useState<(typeof skillCategories)[number]>("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      skillsData.filter(
        (s) =>
          category === "All" ||
          s.category.includes(category as SkillType["category"][number])
      ),
    [category]
  );

  return (
    <section id="skills" className="relative snap-section">
      <div className="container-x w-full">
        <SectionHeader
          index="03"
          eyebrow="Tooling"
          title="The stack I reach for."
        />

        <RevealGroup
          stagger={0.05}
          y={14}
          duration={0.55}
          className="flex flex-wrap gap-1.5 mb-8"
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

        <RevealGroup
          key={category /* re-stagger when filter changes */}
          stagger={0.04}
          y={16}
          duration={0.5}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3"
        >
          {filtered.map((skill) => (
            <RevealItem key={skill.label}>
              <SkillTile
                skill={skill}
                isSelected={selected === skill.label}
                onSelect={() =>
                  setSelected((prev) => (prev === skill.label ? null : skill.label))
                }
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

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
          // Default: monochrome with detail preserved
          "[filter:grayscale(1)_brightness(1.15)_contrast(1.2)]",
          // Hover / keyboard focus / selected: true color
          "group-hover:[filter:none] group-focus-visible:[filter:none]",
          isSelected && "[filter:none]"
        )}
      />
    </div>
    <span
      className={cn(
        "relative font-mono text-[10px] uppercase tracking-wider transition-colors",
        isSelected ? "text-white" : "text-chalk-300 group-hover:text-white"
      )}
    >
      {skill.label}
    </span>
  </button>
);

export default Skills;
