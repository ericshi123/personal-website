"use client";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Publications", href: "/#publications" },
  { label: "Resume", href: "/#resume" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF8F5]/85 backdrop-blur border-b border-[#E8E2D9]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-semibold text-[#1C1917] hover:text-[#C96A45] transition-colors"
        >
          XS
        </a>
        <ul className="flex gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-[#78716C] hover:text-[#1C1917] transition-colors"
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
