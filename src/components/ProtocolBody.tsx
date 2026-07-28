import Image from "next/image";

/**
 * Anatomical figure — glow only at brain, stomach, and knee,
 * with a soft backglow behind the body.
 */
export function ProtocolBody({ className }: { className?: string }) {
  return (
    <div
      className={["protocol__body-figure", className].filter(Boolean).join(" ")}
      aria-hidden
    >
      <div className="protocol__body-backglow" />

      <Image
        src="/assets/protocol-body.png"
        alt=""
        width={493}
        height={1024}
        className="protocol__body-img"
        sizes="(max-width: 1024px) 220px, 320px"
        priority={false}
      />

      <svg
        className="protocol__body-fx"
        viewBox="0 0 493 1024"
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
          {/* Brain */}
          <circle
            className="protocol__hotspot protocol__hotspot--brain"
            cx="246"
            cy="92"
            r="36"
            fill="url(#hotspotCore)"
          />
          {/* Stomach / lower abdomen */}
          <circle
            className="protocol__hotspot protocol__hotspot--stomach"
            cx="246"
            cy="520"
            r="44"
            fill="url(#hotspotCore)"
          />
          {/* Knee (figure's left / viewer's right) */}
          <circle
            className="protocol__hotspot protocol__hotspot--knee"
            cx="318"
            cy="780"
            r="30"
            fill="url(#hotspotCore)"
          />
        </g>
      </svg>
    </div>
  );
}
