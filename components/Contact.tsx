import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-mono text-[13px] text-accent2">05</span>
            <h2 className="font-display text-[24px] font-semibold tracking-tight text-ink">
              Get in touch
            </h2>
          </div>

          <p className="mb-6 max-w-[60ch] text-[15px] text-muted">
            Open to Frontend and Full Stack roles — remote, hybrid, or on-site.
          </p>

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
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
