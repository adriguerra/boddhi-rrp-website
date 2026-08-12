"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/** Matches site accent (orange-500) for Cal brand CTAs */
const BRAND = "#FF6A13";

type CalInlineProps = {
  calLink: string;
};

export function CalInline({ calLink }: CalInlineProps) {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": BRAND },
          dark: { "cal-brand": BRAND },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="contact__cal">
      <Cal
        namespace="30min"
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "dark",
        }}
      />
    </div>
  );
}
