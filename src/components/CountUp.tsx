"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  to: number;
  suffix?: string;
  format?: "comma";
  durationMs?: number;
  className?: string;
};

function formatValue(value: number, format?: "comma") {
  const rounded = Math.round(value);
  if (format === "comma") {
    return rounded.toLocaleString("en-US");
  }
  return String(rounded);
}

export function CountUp({
  to,
  suffix = "",
  format,
  durationMs = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      setValue(to * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, durationMs, reduce]);

  return (
    <span ref={ref} className={className}>
      {formatValue(value, format)}
      {suffix}
    </span>
  );
}
