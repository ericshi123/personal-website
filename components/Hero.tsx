import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#FAF8F5] to-[#F5F0E8]"
    >
      <h1 className="font-playfair text-5xl sm:text-6xl font-bold tracking-tight text-[#1C1917] mb-3">
        Xintong Shi
      </h1>
      <p className="text-xl sm:text-2xl text-[#78716C] font-medium mb-4">
        Data Scientist &amp; ML Engineer
      </p>
      <p className="text-base sm:text-lg text-[#A8A29E] max-w-md mb-8">
        Turning complex data into decisions that move the needle — from fraud detection at scale to real-time ML systems.
      </p>
      <div className="flex gap-5">
        <a
          href="https://github.com/ericshi123"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#A8A29E] hover:text-[#C96A45] transition-colors"
        >
          <GitHubIcon size={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/xintong-shi-277763114/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#A8A29E] hover:text-[#C96A45] transition-colors"
        >
          <LinkedInIcon size={26} />
        </a>
      </div>
    </section>
  );
}
