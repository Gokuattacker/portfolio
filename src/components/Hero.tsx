import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-24 pb-16 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Available for work
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>

        <p className="mb-4 text-2xl font-medium text-zinc-300 sm:text-3xl lg:text-4xl">
          {siteConfig.title}
        </p>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
          >
            <Mail size={16} />
            Contact me
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 transition-colors hover:text-white"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
