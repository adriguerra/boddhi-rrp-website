"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useCallback, useState } from "react";
import { ProtocolSteps } from "@/components/ProtocolSteps";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/content";

type Protocol = SiteContent["protocol"];

export function ProtocolStory({ protocol }: { protocol: Protocol }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onActiveChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <>
      <div className="protocol__layout protocol__layout--zigzag">
        <ProtocolSteps
          phases={protocol.phases}
          activeIndex={activeIndex}
          onActiveChange={onActiveChange}
        />
      </div>

      <Reveal className="protocol__cta">
        <a className="protocol__cta-link" href="#access">
          <span>{protocol.cta}</span>
          <ArrowRight size={18} weight="bold" aria-hidden />
        </a>
      </Reveal>
    </>
  );
}
