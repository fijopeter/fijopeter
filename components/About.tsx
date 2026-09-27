import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal delay={0.05}>
        <p className="max-w-[64ch] text-[15px] leading-relaxed text-muted">
          I build high-performance interfaces and the APIs behind them. At{" "}
          <b className="font-semibold text-ink">Deloitte</b>, I&apos;ve led a{" "}
          <b className="font-semibold text-ink">single-page checkout</b> that cut a legacy
          4-page flow down by <b className="font-semibold text-ink">75%</b>, shipped an{" "}
          <b className="font-semibold text-ink">AI-powered CVE remediation tool</b> saving the
          team roughly 16 hours a week, and worked across federated{" "}
          <b className="font-semibold text-ink">GraphQL</b> subgraphs on a distributed services
          team. Comfortable owning a feature end-to-end — from user stories through testing and
          production deployment.
        </p>
      </Reveal>
    </Section>
  );
}
