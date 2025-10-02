import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "slide-in-left" | "slide-in-right" | "scale-in";
}

const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-in-up",
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible ? `animate-${animation} opacity-100` : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
