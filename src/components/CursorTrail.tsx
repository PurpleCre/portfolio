import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  opacity: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Create new particle every ~30ms when moving
      const now = Date.now();
      if (now - lastTimeRef.current > 30) {
        createParticle(e.clientX, e.clientY);
        lastTimeRef.current = now;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.2;
      
      particlesRef.current.push({
        x,
        y,
        size: Math.random() * 3 + 1,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        life: 1,
        opacity: 0.6,
      });

      // Limit particles
      if (particlesRef.current.length > 50) {
        particlesRef.current.shift();
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= 0.02;
        particle.opacity = particle.life * 0.6;

        if (particle.life <= 0) return false;

        // Get CSS variable color
        const primaryColor = getComputedStyle(document.documentElement)
          .getPropertyValue("--primary")
          .trim();
        
        // Parse HSL values and create color
        const hslValues = primaryColor.split(" ");
        const h = hslValues[0];
        const s = hslValues[1];
        const l = hslValues[2];

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${h}, ${s}, ${l}, ${particle.opacity})`;
        ctx.fill();

        return true;
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CursorTrail;
