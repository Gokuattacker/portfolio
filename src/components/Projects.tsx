"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

type Project = Omit<(typeof projects)[number], "image"> & { image?: string };

function ProjectCard({ project, size = "large", onClick }: { project: Project; size?: "large" | "small"; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const initialMousePos = useRef({ x: 0, y: 0 });

  const tooltipWidth = 300;
  const tooltipHeight = project.image ? 260 : 120;
  const padding = 16;

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => setHovered(false), []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    let left = e.clientX + padding;
    let top = e.clientY - tooltipHeight / 2;

    if (left + tooltipWidth > window.innerWidth - 16) left = e.clientX - tooltipWidth - padding;
    if (top < 8) top = 8;
    if (top + tooltipHeight > window.innerHeight - 8) top = window.innerHeight - tooltipHeight - 8;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }, []);

  let initialLeft = initialMousePos.current.x + padding;
  let initialTop = initialMousePos.current.y - tooltipHeight / 2;

  if (typeof window !== "undefined") {
    if (initialLeft + tooltipWidth > window.innerWidth - 16) initialLeft = initialMousePos.current.x - tooltipWidth - padding;
    if (initialTop < 8) initialTop = 8;
    if (initialTop + tooltipHeight > window.innerHeight - 8) initialTop = window.innerHeight - tooltipHeight - 8;
  }

  return (
    <>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        className={`group relative flex flex-col rounded-xl border border-white/10 bg-zinc-950/40 transition-all hover:border-white/30 hover:bg-white/[0.04] cursor-pointer overflow-hidden`}
      >
        {size === "large" && project.image && (
          <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-64 border-b border-white/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className={`flex w-full items-start justify-between ${size === "large" ? "p-6 sm:p-8" : "p-6"}`}>
          <h3 className={`font-semibold text-white transition-colors group-hover:text-zinc-200 ${size === "large" ? "text-xl" : "text-base"}`}>
            {project.title}
          </h3>
          <div className="flex shrink-0 gap-3 pl-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-zinc-500 transition-colors hover:text-white"
              aria-label={`${project.title} GitHub`}
            >
              <GitHubIcon size={size === "large" ? 20 : 18} />
            </a>
            {/* <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-zinc-500 transition-colors hover:text-white"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={size === "large" ? 20 : 18} />
            </a> */}
          </div>
        </div>
      </article>

      {hovered && (
        <div
          ref={tooltipRef}
          className="pointer-events-none fixed z-40 overflow-hidden rounded-xl border border-white/15 bg-zinc-950 shadow-2xl"
          style={{ width: tooltipWidth, left: initialLeft, top: initialTop }}
        >
          {project.image && (
            <div className="relative h-40 w-full overflow-hidden bg-zinc-950/50">
              <Image src={project.image} alt={project.title} fill sizes="300px" className="object-contain" />
            </div>
          )}
          <div className="p-4">
            <p className="mb-3 text-xs leading-relaxed text-zinc-400">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
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

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-10"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-animate" />

      {/* Modal */}
      <div
        className="modal-animate relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-zinc-900 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Hero image */}
        {project.image && (
          <div className="relative h-64 w-full overflow-hidden rounded-t-2xl sm:h-80">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className={`p-8 sm:p-10 ${!project.image ? "pt-12 sm:pt-14" : ""}`}>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
          <p className="mb-8 text-base leading-relaxed text-zinc-400">{project.description}</p>

          <div className="mb-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-zinc-500">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              <GitHubIcon size={18} />
              View on GitHub
            </a>
            {/* <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              <ExternalLink size={18} />
              Live Demo
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <section id="projects" className="w-full px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400">Projects</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Things I&apos;ve built</h2>
          </div>

          <div className="mb-4 grid gap-4 lg:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} size="large" onClick={() => setActiveProject(project)} />
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.title} project={project} size="small" onClick={() => setActiveProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
