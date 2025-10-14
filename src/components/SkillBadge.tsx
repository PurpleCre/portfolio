import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "accent";
}

const SkillBadge = ({ children, className, variant = "default" }: SkillBadgeProps) => {
  const variants = {
    default: "bg-secondary/50 text-foreground border-border hover:border-primary/50",
    primary: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
    accent: "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default SkillBadge;
