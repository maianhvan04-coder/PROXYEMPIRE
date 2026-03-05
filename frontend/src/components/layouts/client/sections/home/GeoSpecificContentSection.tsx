// src/components/ui/client/Home-V1/GeoSpecificContentSection/GeoSpecificContentSection.tsx
"use client";

import React from "react";
import GeoSpecificContentBlock from "@/components/ui/Home/GeoSpecific/GeoSpecificContentBlock";

export default function GeoSpecificContentSection() {
  return (
    <section className="relative w-full bg-transparent -mt-12 md:-mt-16">
      <div className="relative mx-auto w-full max-w-285 px-6 py-16 md:py-20 lg:py-24">
        <GeoSpecificContentBlock />
      </div>
    </section>
  );
}