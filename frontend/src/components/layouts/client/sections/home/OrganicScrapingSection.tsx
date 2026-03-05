// src/components/ui/client/Home-V1/OrganicScrapingSection/OrganicScrapingSection.tsx
"use client";

import React from "react";
import OrganicScrapingBlock from "@/components/ui/Home/OrganicScraping/OrganicScrapingBlock";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function OrganicScrapingSection() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "bg-transparent",
        // ✅ dịch lên
        "mt-0 md:-mt-4",
        "py-16 md:py-24"
      )}
    >
      {/* glow nền nhẹ */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(820px_460px_at_85%_15%,rgba(120,110,255,0.22),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-285 px-6">
        <OrganicScrapingBlock />
      </div>
    </section>
  );
}