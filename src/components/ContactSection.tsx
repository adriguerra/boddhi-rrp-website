import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CalendarMock } from "@/components/CalendarMock";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/content";

export function ContactSection({ content }: { content: SiteContent }) {
  const { contact } = content;

  return (
    <section className="section--dark contact" id="contact">
      <div className="contact__inner">
        <Reveal>
          <h2>{contact.title}</h2>
          <p className="contact__tagline">{contact.tagline}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <CalendarMock {...contact.calendar} />
        </Reveal>

        <Reveal delay={0.14}>
          <div className="contact__ctas">
            <a
              className="btn btn--accent btn--lg"
              href={`mailto:${contact.email}`}
            >
              {contact.cta} <ArrowRight size={18} weight="bold" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
