import { Mail, MapPin, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="w-full px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s work together
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              Have a project in mind or just want to say hello? I&apos;m always
              open to discussing new opportunities, creative ideas, or ways to
              be part of your vision.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-950/40 p-6 transition-all hover:border-white/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="font-medium text-white">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-950/40 p-6 transition-all hover:border-white/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p className="font-medium text-white">{siteConfig.location}</p>
                </div>
              </div>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-950/40 p-6 transition-all hover:border-white/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  <GitHubIcon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">GitHub</p>
                  <p className="font-medium text-white">github.com</p>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-950/40 p-6 transition-all hover:border-white/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                  <LinkedInIcon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">LinkedIn</p>
                  <p className="font-medium text-white">linkedin.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <FileText size={28} className="text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                View My Resume
              </h3>
              <p className="mb-8 text-zinc-400">
                Get a detailed overview of my experience, skills, and education.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Open Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
