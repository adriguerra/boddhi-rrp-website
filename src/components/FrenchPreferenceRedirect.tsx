"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "rrpLang";

/** On the English home page, send returning French visitors to /fr. */
export function FrenchPreferenceRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "fr") {
        router.replace("/fr");
      }
    } catch {
      /* ignore */
    }
  }, [router]);

  return null;
}
