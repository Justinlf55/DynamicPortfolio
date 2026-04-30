import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  accent,
  description,
  className,
}) => (
  <Reveal className={cn("flex flex-col gap-3 mb-8 md:mb-10", className)}>
    <div className="flex items-center gap-3 text-eyebrow eyebrow">
      <span className="text-accent-soft">{index}</span>
      <span className="h-px w-10 bg-line-strong" />
      <span>{eyebrow}</span>
    </div>
    <h2 className="text-hero text-gradient font-semibold max-w-3xl">
      {title}
      {accent && <span className="text-accent-gradient">{accent}</span>}
    </h2>
    {description && (
      <p className="text-chalk-300 text-lg max-w-2xl leading-relaxed">{description}</p>
    )}
  </Reveal>
);

export default SectionHeader;
