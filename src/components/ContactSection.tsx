import { CalInline } from "@/components/CalInline";
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
          <CalInline calLink={contact.calLink} />
        </Reveal>

        <Reveal delay={0.14}>
          <p className="contact__reach">
            {contact.phoneLabel}{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>
            {" · "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
