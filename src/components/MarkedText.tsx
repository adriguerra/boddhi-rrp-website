import { Fragment, type ElementType, type ReactNode } from "react";

type MarkedTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  children?: never;
};

/** Renders ® / ™ as a smaller raised mark inside display copy. */
export function MarkedText({
  text,
  as: Tag = "span",
  className,
}: MarkedTextProps): ReactNode {
  return (
    <Tag className={className}>
      {text.split(/(®|™)/g).map((part, i) =>
        part === "®" || part === "™" ? (
          <span key={i} className="mark-reg">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </Tag>
  );
}
