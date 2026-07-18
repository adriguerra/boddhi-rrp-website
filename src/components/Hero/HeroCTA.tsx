type HeroCTAProps = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  className?: string;
};

/** Constant CTA pair — does not change between case studies. */
export function HeroCTA({ primary, secondary, className }: HeroCTAProps) {
  return (
    <div className={className}>
      <a className="btn btn--ghost btn--lg" href={secondary.href}>
        {secondary.label}
      </a>
      <a className="btn btn--accent btn--lg" href={primary.href}>
        {primary.label}
      </a>
    </div>
  );
}
