"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import type { SiteContent } from "@/content";

type Phase = SiteContent["protocol"]["phases"][number];

const easeOut = [0.16, 1, 0.3, 1] as const;

export function ProtocolSteps({
  phases,
  activeIndex,
  onActiveChange,
}: {
  phases: Phase[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
}) {
  const reduce = useReducedMotion();
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.65", "end 0.4"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  });
  const railClip = useTransform(
    reduce ? scrollYProgress : smoothProgress,
    [0, 1],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
  );

  useEffect(() => {
    if (reduce) return;

    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const ratios = new Map<Element, number>();

    const pickActive = () => {
      let bestIndex = 0;
      let bestRatio = -1;
      nodes.forEach((node, index) => {
        const ratio = ratios.get(node) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = index;
        }
      });
      if (bestRatio > 0) onActiveChange(bestIndex);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.intersectionRatio);
        }
        pickActive();
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-18% 0px -18% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [phases.length, onActiveChange, reduce]);

  return (
    <div className="protocol__steps" role="list" ref={stepsRef}>
      <div className="protocol__rail" aria-hidden>
        <span className="protocol__rail-track" />
        <motion.span
          className="protocol__rail-progress"
          style={
            reduce ? { clipPath: "inset(0 0 0% 0)" } : { clipPath: railClip }
          }
        />
      </div>

      {phases.map((phase, index) => (
        <ProtocolStep
          key={phase.num}
          phase={phase}
          side={index % 2 === 0 ? "right" : "left"}
          active={reduce ? true : activeIndex === index}
          reached={reduce ? true : index <= activeIndex}
          reduce={Boolean(reduce)}
          setRef={(el) => {
            stepRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}

function ProtocolStep({
  phase,
  side,
  active,
  reached,
  reduce,
  setRef,
}: {
  phase: Phase;
  side: "left" | "right";
  active: boolean;
  reached: boolean;
  reduce: boolean;
  setRef: (el: HTMLElement | null) => void;
}) {
  const outwardX = side === "left" ? -28 : 28;

  if (reduce) {
    return (
      <article
        ref={setRef}
        className="protocol-step"
        data-side={side}
        data-active="true"
        data-reached="true"
        role="listitem"
      >
        <span
          className="protocol-step__marker protocol-step__marker--static"
          aria-hidden
        />
        <div className="protocol-step__content">
          <StepBody phase={phase} active animate={false} />
        </div>
      </article>
    );
  }

  return (
    <article
      ref={setRef}
      className="protocol-step"
      data-side={side}
      data-active={active ? "true" : "false"}
      data-reached={reached ? "true" : "false"}
      role="listitem"
      aria-current={active ? "step" : undefined}
    >
      <motion.span
        className="protocol-step__marker"
        aria-hidden
        initial={false}
        animate={{
          x: "-50%",
          y: "-50%",
          scale: !reached ? 0.6 : active ? 1.2 : 1,
          opacity: !reached ? 0.35 : 1,
          backgroundColor: active
            ? "var(--orange-500)"
            : reached
              ? "rgba(87, 173, 181, 0.7)"
              : "rgba(87, 173, 181, 0.35)",
          boxShadow: active
            ? "0 0 0 4px rgba(10, 31, 32, 1), 0 0 16px rgba(255, 106, 19, 0.55)"
            : "0 0 0 4px rgba(10, 31, 32, 1)",
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 16,
          mass: 0.45,
        }}
      />

      <motion.div
        className="protocol-step__content"
        initial={false}
        animate={
          active
            ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
            : {
                opacity: 0.2,
                x: outwardX,
                y: 14,
                filter: "blur(1.5px)",
              }
        }
        transition={{ duration: 0.55, ease: easeOut }}
      >
        <StepBody phase={phase} active={active} animate={active} />
      </motion.div>
    </article>
  );
}

function StepBody({
  phase,
  active,
  animate,
}: {
  phase: Phase;
  active: boolean;
  animate: boolean;
}) {
  return (
    <>
      <motion.span
        className="protocol-step__num"
        initial={false}
        animate={
          active
            ? { scale: 1, color: "var(--orange-500)" }
            : { scale: 0.92, color: "var(--teal-300)" }
        }
        transition={{
          scale: { duration: 0.4, ease: easeOut },
          color: { duration: 0.28, ease: easeOut },
        }}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        {phase.num}
      </motion.span>
      <div className="protocol-step__main">
        <motion.h3
          initial={false}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 8 }}
          transition={{
            duration: 0.45,
            delay: active ? 0.07 : 0,
            ease: easeOut,
          }}
        >
          {phase.title}
        </motion.h3>
        <motion.p
          className="protocol-step__subtitle"
          initial={false}
          animate={
            active
              ? { opacity: 1, y: 0, color: "var(--orange-500)" }
              : { opacity: 0.9, y: 6, color: "var(--teal-300)" }
          }
          transition={{
            duration: 0.4,
            delay: active ? 0.1 : 0,
            ease: easeOut,
          }}
        >
          {phase.subtitle}
        </motion.p>
        <ul>
          {phase.bullets.map((b, bi) =>
            animate ? (
              <motion.li
                key={b}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.14 + bi * 0.08,
                  ease: easeOut,
                }}
              >
                {b}
              </motion.li>
            ) : (
              <li key={b}>{b}</li>
            ),
          )}
        </ul>
      </div>
    </>
  );
}
