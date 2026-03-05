// src/components/ui/client/Home-V1/ResidentialProxiesSection/ResidentialProxiesSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import ResidentialProxiesContent from "@/components/ui/Home/ResidentialProxies/ResidentialProxiesContent";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Props = {
  imageSrc?: string;
  ctaHref?: string;
};

export default function ResidentialProxiesSection({
  imageSrc = "/ResidentialProxies/Our-Residential-proxies.webp",
  ctaHref = "/#",
}: Props) {
  return (
    <section className="relative w-full mt-0 md:-mt-4 py-20 md:py-24">
      <div className="relative mx-auto w-full max-w-285 px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[640px_1fr] lg:gap-16">
          {/* LEFT: image */}
          <div
            className={cn(
              "relative w-full",
              "max-w-127.5 lg:max-w-127.5",
              "aspect-10/11 lg:aspect-10/11",
              "overflow-hidden rounded-[28px]",
              "shadow-[0_40px_120px_rgba(0,0,0,0.35)]",
              "ring-1 ring-white/15"
            )}
          >
            <Image
              src={imageSrc}
              alt="Residential proxies"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT */}
          <ResidentialProxiesContent ctaHref={ctaHref} />
        </div>
      </div>
    </section>
  );
}