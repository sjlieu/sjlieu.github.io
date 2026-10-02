import { useEffect, useRef, useState, type ReactNode } from "react";

import { createTopDockController } from "../shaders/animated-top-dock/topDockController";

// ThreeUI AnimatedTopDock, "sable" variant: the authored markup, classes, and spring
// controller, with this site's sections in place of the demo's placeholder items.
const DOCK_OPTIONS = {
  proximity: 122,
  spring: 0.19,
  damping: 0.7,
  widthGrowth: 17,
  heightGrowth: 16,
  drop: 3.5,
  axis: "x" as const,
  distribute: false,
  lockTrack: false,
};

const SECTIONS: { id: string; label: string; icon: ReactNode }[] = [
  {
    id: "about",
    label: "ABOUT",
    icon: (
      <>
        <circle cx="8" cy="5.4" r="2.6" />
        <path d="M3 13.6c.6-2.7 2.6-4.3 5-4.3s4.4 1.6 5 4.3" />
      </>
    ),
  },
  {
    id: "research",
    label: "RESEARCH",
    icon: (
      <>
        <circle cx="3" cy="8" r="1.5" />
        <circle cx="12.5" cy="3.5" r="1.5" />
        <circle cx="12.5" cy="12.5" r="1.5" />
        <path d="M4.5 7.3 11 4.2M4.5 8.7l6.5 3.1" />
      </>
    ),
  },
  {
    id: "publications",
    label: "PUBLICATIONS",
    icon: (
      <>
        <path d="M4 2.25h5.4L12 4.85v8.9H4z" />
        <path d="M9.25 2.25V5h2.7M6 8h4M6 10.5h4" />
      </>
    ),
  },
  {
    id: "conferences",
    label: "CONFERENCES",
    icon: (
      <>
        <rect x="5.6" y="1.8" width="4.8" height="7.6" rx="2.4" />
        <path d="M3.6 7.6a4.4 4.4 0 0 0 8.8 0M8 12v2.2M5.6 14.2h4.8" />
      </>
    ),
  },
];

// Same three-node constellation as the favicon.
const MARK = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4.5" fill="#070914" />
    <path d="M6.5 16.5 12 7l5.5 7" fill="none" stroke="#E6C879" strokeOpacity="0.6" strokeWidth="1" />
    <circle cx="6.5" cy="16.5" r="1.9" fill="#E6C879" />
    <circle cx="12" cy="7" r="1.9" fill="#E6C879" />
    <circle cx="17.5" cy="14" r="1.9" fill="#E6C879" />
  </svg>
);

/** Tracks which section is under the dock, so its item shows as the current one. */
function useCurrentSection() {
  const [current, setCurrent] = useState<string | null>(null);
  useEffect(() => {
    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        setCurrent(SECTIONS.find((section) => visible.get(section.id))?.id ?? null);
      },
      // A thin band just below the dock decides which section is "current".
      { rootMargin: "-120px 0px -70% 0px" },
    );
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return current;
}

export function SiteDock() {
  const navRef = useRef<HTMLElement>(null);
  const current = useCurrentSection();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;
    return createTopDockController(nav, () => DOCK_OPTIONS);
  }, []);

  return (
    <div className="animated-top-dock-component site-dock">
      <nav
        ref={navRef}
        className="animated-top-dock__nav"
        aria-label="Sections"
        data-dock-state="idle"
        data-dock-max="0.00"
      >
        <a className="animated-top-dock__item animated-top-dock__logo" data-dock-item href="#top" aria-label="Back to top">
          {MARK}
        </a>
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            className="animated-top-dock__item animated-top-dock__link"
            data-dock-item
            href={`#${section.id}`}
            aria-current={current === section.id ? "location" : undefined}
          >
            <span className="animated-top-dock__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16">{section.icon}</svg>
            </span>
            <span>{section.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
