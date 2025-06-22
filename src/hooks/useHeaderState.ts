import { useEffect, useState } from "react";

interface HeaderState {
  isScrolled: boolean;
  onLightSection: boolean;
}

export function useHeaderState(scrollThreshold: number = 20, navHeight: number = 80): HeaderState {
  const [isScrolled, setIsScrolled] = useState(false);
  const [onLightSection, setOnLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);

      const sections = document.querySelectorAll<HTMLElement>("[data-section-type]");
      let currentSection: HTMLElement | null = null;

      for (const section of Array.from(sections)) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          currentSection = section;
          break;
        }
      }

      if (currentSection) {
        const type = currentSection.dataset.sectionType;
        setOnLightSection(type === "light");
      }
    };

    // Run on scroll and once on mount
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold, navHeight]);

  return {
    isScrolled,
    onLightSection,
  };
}
