"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const NAME = "JUSTIN FERNANDEZ";
const HOLD_MS = 2700;

const Intro: React.FC = () => {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const hideTimer = setTimeout(() => setShow(false), HOLD_MS);
    const unlockTimer = setTimeout(() => {
      document.body.style.overflow = "";
    }, HOLD_MS + 1300);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unlockTimer);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          aria-hidden
          className="fixed inset-0 z-[100] bg-ink-950 grid place-items-center pointer-events-none overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.25, 1] }}
        >
          {/* Subtle violet glow behind the mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute h-[44rem] w-[44rem] rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative flex flex-col items-center gap-6 sm:gap-8 md:gap-10 px-6 max-w-full">
            {/* Top hairline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="h-px w-32 sm:w-44 md:w-56 bg-line-strong origin-left"
            />

            {/* Name typed in mono — CSS keyframe per letter */}
            <h1
              className="font-mono font-semibold text-base sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.18em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white flex flex-wrap justify-center"
              style={{
                textShadow:
                  "0 0 24px rgba(139,92,246,0.45), 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {NAME.split("").map((char, i) => (
                <span
                  key={i}
                  className="intro-letter inline-block"
                  style={{
                    animationDelay: `${0.45 + i * 0.05}s`,
                    width: char === " " ? "0.6em" : undefined,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            {/* Bottom violet progress line */}
            <div className="relative h-px w-32 sm:w-44 md:w-56 bg-line overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1], delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent"
              />
            </div>

            {/* Mono caption */}
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[11px] sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.28em] text-chalk-100 flex items-center gap-2 sm:gap-3 text-center"
            >
              <span className="whitespace-nowrap">Frontend Engineer</span>
              <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(139,92,246,0.8)] flex-shrink-0" />
              <span className="text-accent-soft whitespace-nowrap">Portfolio v2</span>
            </motion.p>
          </div>

          {/* Reveal hairline at bottom of overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 h-px bg-accent/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
