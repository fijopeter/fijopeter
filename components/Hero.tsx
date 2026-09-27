import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <header className="relative overflow-hidden px-6 pb-10 pt-20 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
      />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-3 font-mono text-[13.5px] text-accent2">// {profile.tagline}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mb-4 font-display text-[42px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[58px]">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-7 max-w-[54ch] text-[16.5px] leading-relaxed text-muted">
            <span className="font-semibold text-ink">{profile.role}</span> — 3+ years building
            scalable web applications with React, Vue, and Node.js, including hands-on work with
            GraphQL federated architectures (Apollo Federation) in production.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2.5">
            <a className="pill pill-primary" href={`mailto:${profile.email}`}>
              ✉ {profile.email}
            </a>
            <a className="pill" href={`tel:${profile.phone}`}>
              ☎ {profile.phoneDisplay}
            </a>
            <a className="pill" href={profile.linkedin} target="_blank" rel="noreferrer">
              in/linkedin
            </a>
            <a className="pill" href={profile.github} target="_blank" rel="noreferrer">
              ⌥ github
            </a>
            <span className="pill cursor-default">{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
