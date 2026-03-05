"use client";

import React from "react";
import WhyChooseBlock from "@/components/ui/Home/WhyChoose/WhyChooseBlock";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function WhyChooseSection() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "bg-transparent",
        // ✅ dịch lên
        "-mt-22 md:-mt-24",
        "py-16 md:py-24"
      )}
    >
      <div className="relative mx-auto w-full max-w-285 px-6">
        <WhyChooseBlock />
      </div>
    </section>
  );
}