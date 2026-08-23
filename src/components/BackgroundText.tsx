"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
  "CSS", "HTML", "Git", "API", "REST", "GraphQL", "SQL",
  "MongoDB", "Tailwind", "Webpack", "Vite", "Docker",
  "Linux", "Bash", "JSON", "async", "await", "useEffect",
  "useState", "fetch", "render", "deploy", "build", "code",
  "function", "const", "let", "import", "export", "module",
  "component", "props", "state", "hook", "router", "server",
  "client", "data", "schema", "query", "mutation", "endpoint",
  "auth", "token", "JWT", "OAuth", "CORS", "env", "config",
  "port", "host", "localhost", "npm", "yarn", "pnpm",
  "interface", "type", "generic", "class", "extends",
  "Promise", "callback", "event", "listener", "DOM",
  "canvas", "SVG", "animation", "transform", "transition",
  "flex", "grid", "responsive", "breakpoint", "mobile",
  "performance", "cache", "lazy", "chunk", "bundle",
  "test", "debug", "lint", "format", "CI/CD", "pipeline",
];

interface WordConfig {
  word: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  offset: number;
  rotate: number;
}

export default function BackgroundText() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wordsRef = useRef<WordConfig[]>([]);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      const count = Math.floor((canvas.width * canvas.height) / 10000);
      wordsRef.current = Array.from({ length: count }, () => ({
        word: WORDS[Math.floor(Math.random() * WORDS.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 12 + Math.random() * 16,
        opacity: 0.07 + Math.random() * 0.010,
        speed: 0.0003 + Math.random() * 0.0004,
        drift: (Math.random() - 0.5) * 0.0003,
        offset: Math.random() * Math.PI * 2,
        rotate: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      wordsRef.current.forEach((w) => {
        const floatY = Math.sin(elapsed * w.speed + w.offset) * 40;
        const floatX = Math.cos(elapsed * w.drift + w.offset) * 25;

        ctx.save();
        ctx.translate(w.x + floatX, w.y + floatY);
        ctx.rotate(w.rotate);
        ctx.font = `${w.size}px "Geist Mono", monospace`;
        ctx.fillStyle = `rgba(255,255,255,${w.opacity})`;
        ctx.fillText(w.word, 0, 0);
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
      }}
    />
  );
}
