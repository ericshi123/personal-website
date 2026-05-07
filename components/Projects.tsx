"use client";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import ParallaxWrapper from "@/components/ParallaxWrapper";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <ParallaxWrapper speed={0.1}>
        <h2 className="font-playfair text-3xl font-semibold text-[#1C1917] mb-12 text-center">
          Projects
        </h2>
      </ParallaxWrapper>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white border border-[#E8E2D9] rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-[#1C1917]">
                  {project.name}
                </h3>
                {project.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#FDF3EF] text-[#C96A45] border border-[#F0C9B8]">
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
                  className="text-[#A8A29E] hover:text-[#C96A45] transition-colors shrink-0 mt-0.5"
                >
                  <GitHubIcon size={18} />
                </a>
              )}
            </div>
            <p className="text-[#78716C] text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#F5F0E8] text-[#78716C] border border-[#E8E2D9]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
