import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { timelineData } from "../data";

const Experience: React.FC = () => (
  <section id="experience" className="relative snap-section">
    <div className="container-x w-full">
      <SectionHeader
        index="01"
        eyebrow="Experience"
        title="Where I've shipped."
      />

      <RevealGroup
        as="ol"
        stagger={0.18}
        y={24}
        duration={0.75}
        className="relative border-l border-line ml-1.5 space-y-6"
      >
        {timelineData.map((role) => (
          <RevealItem as="li" key={role.company} className="relative pl-6 md:pl-10">
            <span className="absolute -left-[7px] top-1 grid place-items-center">
              <span className="h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(139,92,246,0.18),0_0_20px_rgba(139,92,246,0.6)]" />
            </span>

            <article className="surface rounded-2xl p-5 md:p-6 hover:border-line-strong transition-colors">
              <header className="flex items-start gap-4 mb-3">
                <div className="relative h-10 w-10 md:h-11 md:w-11 rounded-lg overflow-hidden bg-white/5 border border-line flex-shrink-0">
                  <Image src={role.logo} alt={role.company} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                      {role.company}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-chalk-400">
                      {role.date}
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-chalk-300 mt-0.5">
                    {role.role} · {role.location}
                  </div>
                </div>
              </header>

              <RevealGroup
                as="ul"
                stagger={0.05}
                y={14}
                duration={0.55}
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1.5"
              >
                {role.bullets.map((b, idx) => (
                  <RevealItem
                    as="li"
                    key={idx}
                    className="flex gap-2.5 text-[13px] md:text-sm text-chalk-300 leading-snug"
                  >
                    <span className="font-mono text-accent-soft text-[10px] mt-1.5 flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{b}</span>
                  </RevealItem>
                ))}
              </RevealGroup>

              {role.tags && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-line">
                  {role.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default Experience;
