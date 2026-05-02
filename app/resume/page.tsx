import { FileText } from "lucide-react";

const RESUME_URL =
  "https://docs.google.com/document/d/1SJltRXkmaw-TK6tXWuOAwc0yLTi_DsDUTRBwwYbxYWM/edit?usp=sharing";

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <FileText size={40} className="text-blue-400 mb-6" />
      <h1 className="text-3xl font-bold text-white mb-3">Resume</h1>
      <p className="text-slate-400 text-sm mb-8 max-w-sm">
        View the full resume in Google Docs — no login required.
      </p>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
      >
        Open Resume
      </a>
      <a
        href="/"
        className="mt-6 text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        ← Back to portfolio
      </a>
    </main>
  );
}
