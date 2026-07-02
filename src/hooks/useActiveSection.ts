"use client";

import { useState, useEffect } from "react";

interface UseActiveSectionOptions {
  offsetRatio?: number;
  behavior?: "navbar" | "sidebar";
}

export function useActiveSection(
  sectionIds: string[],
  options: UseActiveSectionOptions = {},
) {
  const [activeSection, setActiveSection] = useState("");

  const offsetRatio =
    options.offsetRatio ?? (options.behavior === "navbar" ? 0.3 : 0.4);

  const idsKey = sectionIds.join(",");

  useEffect(() => {
    const ids = idsKey.split(",").filter(Boolean);
    let ticking = false;

    const update = () => {
      ticking = false;
      const activationLine = window.innerHeight * offsetRatio;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current = "";
      if (atBottom) {
        current = ids[ids.length - 1] ?? "";
      } else {
        for (const id of ids) {
          const element = document.getElementById(id);
          if (!element) continue;
          if (element.getBoundingClientRect().top <= activationLine) {
            current = id;
          }
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [idsKey, offsetRatio]);

  return activeSection;
}
