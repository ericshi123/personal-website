import { GitHubIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                {project.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-300 border border-blue-700">
                    {project.badge}
                  </span>
                )}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub: ${project.name}`}
                  className="text-slate-400 hover:text-blue-400 transition-colors shrink-0 mt-0.5"
                >
                  <GitHubIcon size={18} />
                </a>
              )}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
