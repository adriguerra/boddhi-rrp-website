import Image from "next/image";

const HOTSPOTS = ["brain", "stomach", "knee"] as const;

/**
 * Anatomical figure — glow emphasis follows the active protocol phase.
 */
export function ProtocolBody({
  className,
  activeIndex = 0,
}: {
  className?: string;
  activeIndex?: number;
}) {
  const phase = Math.min(Math.max(activeIndex, 0), HOTSPOTS.length - 1);

  return (
    <div
      className={["protocol__body-figure", className].filter(Boolean).join(" ")}
      data-phase={phase}
      aria-hidden
    >
      <div className="protocol__body-backglow" />

      <Image
        src="/assets/protocol-body.png"
        alt=""
        width={441}
        height={1024}
        className="protocol__body-img"
        sizes="(max-width: 1024px) 260px, 380px"
        priority={false}
      />

      <svg
        className="protocol__body-fx"
        viewBox="0 0 441 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hotspotCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE8B8" stopOpacity="1" />
            <stop offset="28%" stopColor="#FFB84D" stopOpacity="0.75" />
            <stop offset="62%" stopColor="#FF6A13" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#FF6A13" stopOpacity="0" />
          </radialGradient>
          <filter id="hotspotBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="protocol__hotspots" filter="url(#hotspotBlur)">
          <circle
            className="protocol__hotspot protocol__hotspot--brain"
            data-active={phase === 0 ? "true" : "false"}
            cx="220"
            cy="85"
            r="34"
            fill="url(#hotspotCore)"
          />
          <circle
            className="protocol__hotspot protocol__hotspot--stomach"
            data-active={phase === 1 ? "true" : "false"}
            cx="250"
            cy="547"
            r="42"
            fill="url(#hotspotCore)"
          />
          <circle
            className="protocol__hotspot protocol__hotspot--knee"
            data-active={phase === 2 ? "true" : "false"}
            cx="260"
            cy="760"
            r="28"
            fill="url(#hotspotCore)"
          />
        </g>
      </svg>
    </div>
  );
}
