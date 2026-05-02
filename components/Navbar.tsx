"use client";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Publications", href: "/#publications" },
  { label: "Resume", href: "/#resume" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
        >
          XS
        </a>
        <ul className="flex gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
