"use client";

import { useState, useEffect } from "react";

interface UseActiveSectionOptions {
  threshold?: number;
  rootMargin?: string;
  behavior?: "navbar" | "sidebar";
}

export function useActiveSection(
  sectionIds: string[],
  options: UseActiveSectionOptions = {}
) {
  const [activeSection, setActiveSection] = useState("");

  const threshold =
    options.threshold ?? (options.behavior === "navbar" ? 0 : 0.5);
  const rootMargin =
    options.rootMargin ??
    (options.behavior === "navbar" ? "0px 0px -70% 0px" : "-10% 0px -10% 0px");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold, rootMargin }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      element && observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        element && observer.unobserve(element);
      });
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
}
