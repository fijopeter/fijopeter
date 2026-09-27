import Reveal from "./Reveal";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Stack() {
  return (
    <Section id="stack" index="02" title="Stack">
      <div className="space-y-6">
        {profile.stackGroups.map((group, gi) => (
          <Reveal key={group.label} delay={0.05 * gi}>
            <div>
              <h3 className="mb-2.5 font-mono text-[12.5px] font-medium text-muted">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`chip ${
                      group.tag === "fe" ? "chip-fe" : group.tag === "fs" ? "chip-fs" : ""
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
