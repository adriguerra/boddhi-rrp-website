import {
  ArrowRight,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
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
          <div className="contact__ctas">
            <a
              className="btn btn--accent btn--lg"
              href={`mailto:${contact.email}`}
            >
              {contact.cta} <ArrowRight size={18} weight="bold" />
            </a>
          </div>
          <div className="contact__info">
            <a href={`mailto:${contact.email}`}>
              <EnvelopeSimple size={20} weight="fill" color="var(--teal-300)" />{" "}
              {contact.email}
            </a>
            <div>
              <MapPin size={20} weight="fill" color="var(--teal-300)" />{" "}
              {contact.location}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
