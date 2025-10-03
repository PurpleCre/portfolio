import { useState, useEffect } from "react";
import { Code } from "lucide-react";

interface TerminalProps {
  lines: string[];
  typingSpeed?: number;
}

const Terminal = ({ lines, typingSpeed = 50 }: TerminalProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = lines[currentLineIndex];
    
    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, currentText]);
        setCurrentText("");
        setCurrentLineIndex(currentLineIndex + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, lines, displayedLines, typingSpeed]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative backdrop-blur-xl bg-[var(--glass-background)] border border-[var(--glass-border)] rounded-xl overflow-hidden shadow-[var(--shadow-lifted)]">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-[var(--glass-border)]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 ml-4 text-xs text-muted-foreground">
            <Code size={14} />
            <span>terminal</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm min-h-[200px]">
          {displayedLines.map((line, i) => (
            <div key={i} className="mb-2">
              <span className="text-primary mr-2">$</span>
              <span className="text-foreground">{line}</span>
            </div>
          ))}
          {currentText && (
            <div className="mb-2">
              <span className="text-primary mr-2">$</span>
              <span className="text-foreground">{currentText}</span>
              {isTyping && (
                <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
