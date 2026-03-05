// src/components/ui/Home/NoLimitsSection/NoLimitsSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import NoLimitsContent from "@/components/ui/Home/NoLimitsContent/NoLimitsContent";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Props = {
  imageSrc?: string;
  ctaHref?: string;
};

export default function NoLimitsSection({
  imageSrc = "/ResidentialProxies/Proxies-by-ProxyEmpire-are-fast-and-reliable.webp",
  ctaHref = "/#",
}: Props) {
  return (
    <section className="relative w-full -mt-10 md:-mt-14 py-20 md:py-24">
      <div className="relative mx-auto w-full max-w-285 px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[510px_minmax(0,1fr)] xl:grid-cols-[560px_minmax(0,1fr)] lg:gap-16">
          {/* LEFT: image card */}
          <div
            className={cn(
              "relative w-full",
              "max-w-127.5 lg:max-w-127.5",
              "aspect-square",
              "overflow-hidden rounded-[34px]",
              "shadow-[0_40px_120px_rgba(0,0,0,0.35)]",
              "ring-1 ring-white/12"
            )}
          >
            <Image src={imageSrc} alt="No limits" fill priority className="object-cover object-center" />
          </div>

          {/* RIGHT: content */}
          <NoLimitsContent ctaHref={ctaHref} />
        </div>
      </div>
    </section>
  );
}