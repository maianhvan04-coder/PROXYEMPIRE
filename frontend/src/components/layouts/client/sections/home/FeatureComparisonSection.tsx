// src/components/ui/client/Home-V1/FeatureComparisonSection/FeatureComparisonSection.tsx
"use client";

import React from "react";
import FeatureComparisonCard from "@/components/ui/Home/FeatureComparison/FeatureComparisonCard";

export default function FeatureComparisonSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent -mt-22 md:-mt-24 py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-285 px-6">
        <div className="-mt-10 md:-mt-14">
          <FeatureComparisonCard />
        </div>
      </div>
    </section>
  );
}