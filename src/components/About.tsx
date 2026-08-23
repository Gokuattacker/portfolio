import { experience, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="w-full px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400">
            About
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A bit about me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-zinc-400">
              I&apos;m a passionate developer based in Guwhati,Assam
              focused on crafting clean, user-centered digital experiences.
              With a strong foundation in both frontend and backend development,
            </p>
            <p className="text-lg leading-relaxed text-zinc-400">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, playing games,travelling to offbeat locations,meeting new people. 
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Problem solver", "Team player", "Fast learner", "Detail oriented"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:border-white/30"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Experience</h3>
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-xl border border-white/10 bg-zinc-950/40 p-6 transition-all hover:border-white/30"
              >
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-white">{job.role}</h4>
                  <span className="text-sm text-zinc-500">{job.period}</span>
                </div>
                <p className="mb-2 text-sm font-medium text-zinc-300">
                  {job.company}
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
