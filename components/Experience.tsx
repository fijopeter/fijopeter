import Reveal from "./Reveal";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <Reveal>
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-1.5">
          <h3 className="font-display text-[18.5px] font-semibold text-ink">
            {profile.employer.name}
          </h3>
          <span className="font-mono text-[12.5px] text-muted">{profile.employer.period}</span>
        </div>
      </Reveal>

      <div className="space-y-4">
        {profile.projects.map((p, i) => (
          <Reveal key={p.name} delay={0.06 * i}>
            <div className="card overflow-hidden">
              <div className="border-b border-line px-4 py-3 font-mono text-[13px] text-muted">
                <span className="text-accent2">type</span>{" "}
                <span className="font-semibold text-ink">{p.name}</span> {"{"}
              </div>
              <div className="space-y-2.5 px-4 py-4">
                <div className="flex gap-2.5">
                  <span className="w-[70px] shrink-0 pt-0.5 font-mono text-[12.5px] text-accent2">
                    stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <span className="w-[70px] shrink-0 pt-0.5 font-mono text-[12.5px] text-accent2">
                    summary:
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-muted">{p.summaryLine}</p>
                </div>

                {p.impact.length > 0 && (
                  <div className="flex gap-2.5">
                    <span className="w-[70px] shrink-0 pt-0.5 font-mono text-[12.5px] text-accent2">
                      impact:
                    </span>
                    <ul className="list-disc space-y-1.5 pl-4 marker:text-accent">
                      {p.impact.map((line) => (
                        <li key={line} className="text-[13.5px] leading-relaxed text-ink">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
