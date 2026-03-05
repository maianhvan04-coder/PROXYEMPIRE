// src/components/ui/client/Home-V1/LargestResidentialSection/LargestResidentialSection.tsx
"use client";

import React from "react";
import LargestResidentialBlock from "@/components/ui/Home/LargestResidential/LargestResidentialBlock";

export default function LargestResidentialSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent -mt-12 md:-mt-16 py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-285 px-6">
        <LargestResidentialBlock />
      </div>
    </section>
  );
}