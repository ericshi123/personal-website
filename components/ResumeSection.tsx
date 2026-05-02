import { FileText } from "lucide-react";

const RESUME_URL =
  "https://docs.google.com/document/d/1SJltRXkmaw-TK6tXWuOAwc0yLTi_DsDUTRBwwYbxYWM/edit?usp=sharing";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
      <p className="text-slate-400 mb-8 text-sm">
        Opens in Google Docs — no download required.
      </p>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
      >
        <FileText size={17} />
        View Resume
      </a>
    </section>
  );
}
