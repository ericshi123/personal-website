import { FileText } from "lucide-react";

const RESUME_URL = "/resume.pdf";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6 text-center">
      <h2 className="font-playfair text-3xl font-semibold text-[#1C1917] mb-6">Resume</h2>
      <p className="text-[#78716C] mb-8 text-sm">
        Opens as PDF in your browser.
      </p>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#C96A45] hover:bg-[#B85A38] text-white font-medium text-sm transition-colors"
      >
        <FileText size={17} />
        View Resume (PDF)
      </a>
    </section>
  );
}
