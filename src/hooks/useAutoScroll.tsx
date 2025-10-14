import { useEffect, useRef, useState } from "react";

interface UseAutoScrollOptions {
  sectionCount: number;
  intervalMs?: number;
  enabled?: boolean;
}

export const useAutoScroll = ({
  sectionCount,
  intervalMs = 8000,
  enabled = true,
}: UseAutoScrollOptions) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(enabled);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastInteractionRef = useRef(Date.now());

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentSection(index);
    }
  };

  const nextSection = () => {
    const next = (currentSection + 1) % sectionCount;
    scrollToSection(next);
  };

  const previousSection = () => {
    const prev = currentSection === 0 ? sectionCount - 1 : currentSection - 1;
    scrollToSection(prev);
  };

  const pauseAutoScroll = () => {
    setIsAutoScrolling(false);
    lastInteractionRef.current = Date.now();
  };

  const resumeAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  useEffect(() => {
    if (!isAutoScrolling) return;

    timeoutRef.current = setTimeout(() => {
      // Resume auto-scroll if no interaction for 10 seconds
      if (Date.now() - lastInteractionRef.current > 10000) {
        nextSection();
      }
    }, intervalMs);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSection, isAutoScrolling, intervalMs]);

  // Handle user scroll
  useEffect(() => {
    const handleScroll = () => {
      pauseAutoScroll();
      
      // Detect which section is in view
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        pauseAutoScroll();
        nextSection();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        pauseAutoScroll();
        previousSection();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection]);

  return {
    currentSection,
    isAutoScrolling,
    scrollToSection,
    nextSection,
    previousSection,
    pauseAutoScroll,
    resumeAutoScroll,
  };
};
