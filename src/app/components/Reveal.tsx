"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { ReactNode, ElementType } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  /** Px translateY on entry */
  y?: number;
  /** Animation duration in seconds */
  duration?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Reveal — opacity + translateY only. No filter blur (kept the page laggy).
 * Long ease + early trigger gives a buttery feel cheaply.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 20,
  duration = 0.7,
  className,
  as = "div",
}) => {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as React.ComponentType<HTMLMotionProps<"div">>;

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "0px 0px -10% 0px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
};

interface RevealGroupProps {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
}

const itemVariants = (y: number, duration: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
});

export const RevealGroup: React.FC<RevealGroupProps> = ({
  children,
  stagger = 0.07,
  delayChildren = 0,
  y = 18,
  duration = 0.65,
  className,
  as = "div",
}) => {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as React.ComponentType<HTMLMotionProps<"div">>;

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      className={className}
      data-y={y}
      data-duration={duration}
    >
      {children}
    </Comp>
  );
};

interface RevealItemProps {
  children: ReactNode;
  y?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
}

export const RevealItem: React.FC<RevealItemProps> = ({
  children,
  y = 18,
  duration = 0.65,
  className,
  as = "div",
}) => {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as React.ComponentType<HTMLMotionProps<"div">>;

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp variants={itemVariants(y, duration)} className={className}>
      {children}
    </Comp>
  );
};

export default Reveal;
