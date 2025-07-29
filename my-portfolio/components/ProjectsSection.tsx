interface Project {
  name: string;
  description: string;
  details?: string;
  tech: string[];
  contributors?: { name: string; url: string }[];
  repo?: string;
  liveDemo?: string;
  startDate: string;
  endDate: string;
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mt-20 mb-10 max-w-6xl mx-auto scroll-mt-32">
      <h2 className="text-4xl font-bold mb-10 text-[#a47aff] text-center tracking-wide drop-shadow">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="rounded-3xl p-6 bg-gradient-to-br from-[#261a48] via-[#322564] to-[#45347b] shadow-2xl border border-[#45347b] hover:border-[#37f3ff] group transition relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-2 text-[#37f3ff] group-hover:text-[#ff5edd] transition">
              {proj.name}
            </h3>
            <p className="mb-1 text-[#f7e8ff] font-medium">{proj.description}</p>
            {proj.details && (
              <p className="text-sm text-[#aaa0d2] mb-2">{proj.details}</p>
            )}
            <div className="flex flex-wrap gap-2 mb-1">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="inline-block bg-[#8e6ded] text-[#190c32] px-2 py-1 rounded-full text-xs font-semibold border border-[#bc94f8] shadow"
                >
                  {t}
                </span>
              ))}
            </div>
            {proj.contributors?.length ? (
              <div className="mb-1">
                <span className="font-semibold text-[#ff5edd] text-xs">Contributors:</span>
                {proj.contributors.map((c, idx) => (
                  <a
                    key={c.name}
                    href={c.url}
                    className="text-[#37f3ff] hover:text-white underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.name}
                    {idx < (proj.contributors?.length ?? 0) - 1 ? "," : ""}
                  </a>
                ))}
              </div>
            ) : null}
            <div className="mb-2 text-xs text-[#8e71ce]">
              <span>
                {proj.startDate} - {proj.endDate}
              </span>
            </div>
            <div className="flex gap-4 mt-3">
              {proj.repo && proj.repo !== "#" && (
                <a
                  href={proj.repo}
                  className="text-[#37f3ff] underline font-semibold hover:text-[#ff5edd] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {proj.liveDemo && proj.liveDemo !== "#" && (
                <a
                  href={proj.liveDemo}
                  className="text-[#37f3ff] underline font-semibold hover:text-[#ff5edd] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 group-hover:opacity-100 transition">
              <div className="absolute -inset-6 rounded-3xl neon-glow"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
