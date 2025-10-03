import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  children,
}: BentoGridItemProps) => {
  return (
    <GlassCard
      tilt3d
      className={cn(
        "group relative overflow-hidden p-6 hover:border-primary/50 transition-all duration-500",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h3>
        
        {description && (
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>
        )}
        
        {children}
      </div>
    </GlassCard>
  );
};
