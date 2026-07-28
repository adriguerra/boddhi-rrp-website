import { Fragment, type ElementType, type ReactNode } from "react";

type AccentTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
};

/**
 * Renders **accent** spans in orange, and ® / ™ as raised marks.
 */
export function AccentText({
  text,
  as: Tag = "span",
  className,
}: AccentTextProps): ReactNode {
  const withMarks = (chunk: string, keyBase: string) =>
    chunk.split(/(®|™)/g).map((part, i) =>
      part === "®" || part === "™" ? (
        <span key={`${keyBase}-m${i}`} className="mark-reg">
          {part}
        </span>
      ) : (
        <Fragment key={`${keyBase}-t${i}`}>{part}</Fragment>
      ),
    );

  return (
    <Tag className={className}>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <span key={`a${i}`} className="text-accent">
            {withMarks(part, `a${i}`)}
          </span>
        ) : (
          <Fragment key={`p${i}`}>{withMarks(part, `p${i}`)}</Fragment>
        ),
      )}
    </Tag>
  );
}
