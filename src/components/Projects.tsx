"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

function ProjectCard({ project, size = "large" }: { project: Project; size?: "large" | "small" }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setHovered(true);
    setCardRect(e.currentTarget.getBoundingClientRect());
  };

  const handleMouseLeave = () => setHovered(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Decide tooltip position: above or below cursor
  const tooltipWidth = 300;
  const tooltipHeight = 260;
  const padding = 16;

  let left = mousePos.x + padding;
  let top = mousePos.y - tooltipHeight / 2;

  // Keep within viewport horizontally
  if (typeof window !== "undefined") {
    if (left + tooltipWidth > window.innerWidth - 16) {
      left = mousePos.x - tooltipWidth - padding;
    }
    if (top < 8) top = 8;
    if (top + tooltipHeight > window.innerHeight - 8) {
      top = window.innerHeight - tooltipHeight - 8;
    }
  }

  return (
    <>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={`group relative flex items-start justify-between rounded-xl border border-white/10 bg-zinc-950/40 transition-all hover:border-white/30 hover:bg-white/[0.04] ${
          size === "large" ? "p-8" : "p-6"
        }`}
      >
        <h3
          className={`font-semibold text-white transition-colors group-hover:text-zinc-200 ${
            size === "large" ? "text-xl" : "text-base"
          }`}
        >
          {project.title}
        </h3>
        <div className="flex shrink-0 gap-3 pl-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label={`${project.title} GitHub`}
          >
            <GitHubIcon size={size === "large" ? 20 : 18} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={size === "large" ? 20 : 18} />
          </a>
        </div>
      </article>

      {/* Hover tooltip — rendered at fixed position relative to viewport */}
      {hovered && (
        <div
          className="pointer-events-none fixed z-50 overflow-hidden rounded-xl border border-white/15 bg-zinc-950 shadow-2xl"
          style={{
            width: tooltipWidth,
            left,
            top,
          }}
        >
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="mb-3 text-xs leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="w-full px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="mb-4 grid gap-4 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} size="large" />
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((project) => (
            <ProjectCard key={project.title} project={project} size="small" />
          ))}
        </div>
      </div>
    </section>
  );
}
