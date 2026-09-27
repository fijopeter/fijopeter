import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <div className="nav-blur sticky top-0 z-10 border-b border-line backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-3.5">
        <div className="font-mono text-[13px] text-ink">
          <strong className="font-semibold">Fijo Peter</strong>
        </div>
        <nav className="hidden gap-5 font-mono text-[12.5px] text-muted sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
}
