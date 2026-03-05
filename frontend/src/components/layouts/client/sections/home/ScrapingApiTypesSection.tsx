// src/components/ui/client/Home-V1/ScrapingApiTypesSection/ScrapingApiTypesSection.tsx
"use client";

import React from "react";
import ScrapingApiTypesBlock from "@/components/ui/Home/ScrapingApiTypes/ScrapingApiTypesBlock";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function ScrapingApiTypesSection() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "bg-transparent",
        "pt-4 pb-16 md:pt-6 md:pb-24"
      )}
    >
      <div className="relative mx-auto w-full max-w-285 px-6">
        <ScrapingApiTypesBlock />
      </div>
    </section>
  );
}