"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useState, type ReactNode } from "react";

type NavShellProps = {
  children: ReactNode;
  className?: string;
  menuLabelOpen?: string;
  menuLabelClose?: string;
  mobilePanel?: ReactNode;
};

/** Sticky nav with scroll state + mobile drawer. */
export function NavShell({
  children,
  className,
  menuLabelOpen = "Open menu",
  menuLabelClose = "Close menu",
  mobilePanel,
}: NavShellProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={[
        "nav",
        scrolled || open ? "nav--scrolled" : "",
        open ? "nav--open" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      {mobilePanel ? (
        <>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? menuLabelClose : menuLabelOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
          <div
            id="nav-mobile"
            className="nav__drawer"
            data-open={open ? "true" : "false"}
            hidden={!open}
          >
            <div
              className="nav__drawer-inner"
              onClick={(e) => {
                const t = e.target as HTMLElement;
                if (t.closest("a")) setOpen(false);
              }}
            >
              {mobilePanel}
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
