import { ReactNode, useState, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tilt3d?: boolean;
}

const GlassCard = ({ children, className = "", hover = true, tilt3d = false }: GlassCardProps) => {
  const [transform, setTransform] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt3d || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    if (!tilt3d) return;
    setTransform("");
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative backdrop-blur-xl rounded-2xl border
        bg-[var(--glass-background)] border-[var(--glass-border)]
        shadow-[var(--shadow-card)]
        ${hover ? "hover:shadow-[var(--shadow-lifted)] hover:scale-[1.02] transition-all duration-500" : ""}
        ${tilt3d ? "transition-all duration-300 ease-out" : ""}
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, var(--glass-background), hsl(var(--background) / 0.5))',
        transform: tilt3d ? transform : undefined,
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      {children}
    </div>
  );
};

export default GlassCard;
