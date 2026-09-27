import Reveal from "./Reveal";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" index="04" title="Education & Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        <Reveal>
          <div className="card p-5">
            <h4 className="mb-2 font-mono text-[12px] font-medium text-accent2">education</h4>
            <p className="text-[14px] text-ink">{profile.education.degree}</p>
            <p className="mt-1 text-[12.5px] text-muted">{profile.education.school}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card p-5">
            <h4 className="mb-2 font-mono text-[12px] font-medium text-accent2">
              certifications
            </h4>
            {profile.certifications.map((c) => (
              <p key={c} className="text-[14px] text-ink">
                {c}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
