import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          &copy; {year} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
