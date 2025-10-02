import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  return (
    <div 
      className={`
        relative backdrop-blur-xl rounded-2xl border
        bg-[var(--glass-background)] border-[var(--glass-border)]
        shadow-[var(--shadow-card)]
        ${hover ? "hover:shadow-[var(--shadow-lifted)] hover:scale-[1.02] transition-all duration-500" : ""}
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, var(--glass-background), hsl(var(--background) / 0.5))',
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      {children}
    </div>
  );
};

export default GlassCard;
