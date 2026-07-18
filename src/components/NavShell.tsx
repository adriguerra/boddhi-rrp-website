"use client";

import { useEffect, useState, type ReactNode } from "react";

type NavShellProps = {
  children: ReactNode;
  className?: string;
};

/** Logo-only over the hero; full glass nav after scrolling. */
export function NavShell({ children, className }: NavShellProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "nav",
        scrolled ? "nav--scrolled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </header>
  );
}
