// src/components/ui/client/Home-V1/SuperiorQualitySection/SuperiorQualitySection.tsx
"use client";

import React from "react";
import SuperiorQualityBlock from "@/components/ui/Home/SuperiorQuality/SuperiorQualityBlock";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function SuperiorQualitySection() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "bg-transparent",
        // ✅ kéo section lên
        "-mt-24 md:-mt-26",
        // padding giữ như bạn đang dùng
        "pt-14 pb-6 md:pt-20 md:pb-8"
      )}
    >
      <div className="relative mx-auto w-full max-w-285 px-6">
        <SuperiorQualityBlock />
      </div>
    </section>
  );
}