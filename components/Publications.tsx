import { ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Publications
      </h2>
      <ul className="space-y-8">
        {publications.map((pub) => (
          <li key={pub.title} className="border-l-2 border-blue-500/40 pl-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-white leading-snug">
                {pub.title}
              </h3>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read paper"
                className="text-slate-400 hover:text-blue-400 transition-colors shrink-0 mt-0.5"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-sm text-blue-400/80 mt-1">
              {pub.venue} &middot; {pub.year}
            </p>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              {pub.abstract}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
