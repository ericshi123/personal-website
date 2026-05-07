"use client";
import { ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";
import ParallaxWrapper from "@/components/ParallaxWrapper";

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 max-w-3xl mx-auto">
      <ParallaxWrapper speed={0.1}>
        <h2 className="font-playfair text-3xl font-semibold text-[#1C1917] mb-12 text-center">
          Publications
        </h2>
      </ParallaxWrapper>
      <ul className="space-y-8">
        {publications.map((pub) => (
          <li key={pub.title} className="border-l-2 border-[#C96A45]/40 pl-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-[#1C1917] leading-snug">
                {pub.title}
              </h3>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read paper"
                className="text-[#A8A29E] hover:text-[#C96A45] transition-colors shrink-0 mt-0.5"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-sm text-[#C96A45]/80 mt-1">
              {pub.venue} &middot; {pub.year}
            </p>
            <p className="text-sm text-[#78716C] mt-2 leading-relaxed">
              {pub.abstract}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
