// src/components/ui/Home/NoLimitsContent/NoLimitsContent.tsx
"use client";

import React from "react";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Props = {
  ctaHref?: string;
  ctaText?: string;
};

export default function NoLimitsContent({
  ctaHref = "/#",
  ctaText = "Start your $1.97 Trial",
}: Props) {
  return (
    <div className="w-full lg:-ml-2 xl:-ml-10">
      <h2 className="w-full text-white font-semibold tracking-tight text-[26px] leading-[1.18] md:text-[26px] md:leading-[1.15]">
        A Rotating Proxy Provider With No Limits.
      </h2>

      <div className="mt-6 max-w-180 space-y-4 text-[16px] leading-7 text-white/50">
        <p>
          We are the only backconnect proxy partner to offer{" "}
          <span className="font-semibold text-white/65">rollover data</span>. That means you get to keep the data you
          do not use in a monthly cycle.
        </p>

        <p>
          Enjoy{" "}
          <span className="font-semibold text-white/65">unlimited concurrent connections</span> in any GEO location and
          never again face throttling and IP blocking.
        </p>

        <p>
          Our robust rotating proxy network boast a{" "}
          <span className="font-semibold text-white/65">99.86% uptime</span> and each IP address is tested for quality
          to ensure you are receiving only the best rotating proxies.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex items-center justify-center",
            "h-12 w-[360px] max-w-full rounded-lg",
            "bg-[#797FE5] text-white font-semibold",
            "shadow-[0_22px_60px_rgba(0,0,0,0.35)]",
            "ring-1 ring-white/10",
            "transition hover:brightness-110 active:translate-y-[1px]"
          )}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}