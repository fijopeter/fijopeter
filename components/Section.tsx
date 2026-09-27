import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-7 flex items-baseline gap-3">
            <span className="font-mono text-[13px] text-accent2">{index}</span>
            <h2 className="font-display text-[24px] font-semibold tracking-tight text-ink">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
