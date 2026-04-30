import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { education } from "../data";

const stats = [
  { value: "4+", label: "Years shipping production code" },
  { value: "1M+", label: "Users on shipped features" },
  { value: "~25%", label: "CI runtime reduction at Gemini" },
  { value: "10%", label: "Conversion lift at Upstart" },
];

const About: React.FC = () => (
  <section id="about" className="relative snap-section">
    <div className="container-x w-full">
      <SectionHeader
        index="02"
        eyebrow="About"
        title="Biology graduate turned frontend engineer."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <RevealGroup className="lg:col-span-7 space-y-5 text-chalk-200 text-lg leading-relaxed">
          <RevealItem as="p">
            I graduated from{" "}
            <span className="text-white font-medium">UC Irvine</span> with a degree
            in Biology in 2017. After several years in biotech and healthcare,
            I made the jump into software engineering through{" "}
            <span className="text-white font-medium">App Academy</span> in late 2019.
          </RevealItem>
          <RevealItem as="p">
            Since then I&apos;ve spent four years as a full-stack engineer focused
            heavily on the frontend — translating product specs into clean,
            performant React and React Native interfaces. Most recently at{" "}
            <span className="text-white font-medium">Gemini</span>, where I shipped
            onboarding and credit card flows in a high-growth, pre-IPO environment.
          </RevealItem>
          <RevealItem as="p">
            I care about <span className="text-white font-medium">restraint</span>{" "}
            — the right typography, the right motion, the right silence. Every
            decision should pay rent.
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
          <RevealGroup
            stagger={0.06}
            className="grid grid-cols-2 gap-px bg-line surface rounded-2xl overflow-hidden"
          >
            {stats.map((s) => (
              <RevealItem key={s.label} className="bg-ink-900 p-5 md:p-6">
                <div className="font-mono text-3xl md:text-4xl text-white tracking-tighter">
                  {s.value}
                </div>
                <div className="mt-2 text-xs text-chalk-400 leading-snug">
                  {s.label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="space-y-3">
            <div className="eyebrow flex items-center gap-3">
              <span>Education</span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <RevealGroup className="space-y-3" stagger={0.08}>
              {education.map((edu) => (
                <RevealItem
                  key={edu.school}
                  className="surface rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="relative h-10 w-10 rounded-md overflow-hidden bg-white/5 flex-shrink-0">
                    <Image src={edu.logo} alt={edu.school} fill className="object-contain p-1" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-white truncate">
                      {edu.school}
                    </div>
                    <div className="text-xs text-chalk-400 truncate">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-chalk-500 whitespace-nowrap">
                    {edu.date.split(" — ")[1] ?? edu.date}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
