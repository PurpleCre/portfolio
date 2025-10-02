interface GridPatternProps {
  className?: string;
}

const GridPattern = ({ className = "" }: GridPatternProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(var(--grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default GridPattern;
