import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group rounded-xl border border-white/10 bg-zinc-950/40 p-6 transition-all hover:border-white/30 hover:bg-white/[0.02]"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-zinc-400 transition-colors group-hover:border-white/15 group-hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
