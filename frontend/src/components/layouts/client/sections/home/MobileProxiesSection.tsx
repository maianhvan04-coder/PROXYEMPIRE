// src/components/ui/client/Home-V1/MobileProxiesSection/MobileProxiesSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import MobileProxiesContent from "@/components/ui/Home/MobileProxies/MobileProxiesContent";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Props = {
  imageSrc?: string;
  ctaHref?: string;
};

export default function MobileProxiesSection({
  imageSrc = "/ResidentialProxies/ProxyEmpire-provides-all-kinds-of-proxies-including-residential-and-mobile-proxies.webp",
  ctaHref = "/#",
}: Props) {
  return (
    <section className="relative w-full -mt-10 md:-mt-14 py-20 md:py-24">
      <div className="relative mx-auto w-full max-w-285 px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_510px] lg:gap-6">
          {/* LEFT */}
          <MobileProxiesContent ctaHref={ctaHref} />

          {/* RIGHT */}
          <div
            className={cn(
              "relative w-full",
              "aspect-square",
              "justify-self-end",
              "lg:w-127.5",
              "overflow-hidden rounded-[34px]",
              "shadow-[0_40px_120px_rgba(0,0,0,0.35)]",
              "ring-1 ring-white/12"
            )}
          >
            <Image
              src={imageSrc}
              alt="Mobile proxies"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}