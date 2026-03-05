// src/components/ui/client/Home-V1/MobileProxiesSection/MobileProxiesContent.tsx
"use client";

import React from "react";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Props = {
  ctaHref?: string;
};

export default function MobileProxiesContent({ ctaHref = "/#" }: Props) {
  return (
    <div className="pr-0 lg:pr-10 ">
      <h3 className="text-white font-semibold tracking-tight text-[25px] md:text-[25px] leading-[1.12]">
        4G Rotating Mobile Proxies.
      </h3>

      <div className="mt-6 max-w-180 space-y-4 text-[16px] leading-7 text-white/50">
        <p>
          ProxyEmpire gives you access to a robust infrastructure of mobile proxies (3G/4G/5G/LTE, and soon 6G
          &amp; 7G) that work well with use cases that involve APP-only platforms.
        </p>

        <p>
          <span className="font-semibold text-white/60">Collect data</span> in new ways designed for mobile and
          never look suspicious when making requests.
        </p>

        <p>
          <span className="text-[#B9A9FF] underline underline-offset-4">
            Rotating mobile proxies
          </span>{" "}
          offer the best connection possible and Proxy Empire provides them in over 170+ countries where you
          can filter down to the mobile carrier level.
        </p>

        <p>
          We also offer{" "}
          <span className="text-[#B9A9FF] underline underline-offset-4">
            dedicated mobile proxies
          </span>{" "}
          with unlimited bandwidth where you are in full control of IP changes and can enjoy the highest proxy
          speeds.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex items-center justify-center",
            "h-12 w-65 rounded-lg",
            "bg-[#797FE5] text-white font-semibold",
            "shadow-[0_22px_60px_rgba(0,0,0,0.35)]",
            "ring-1 ring-white/10",
            "transition hover:brightness-110 active:translate-y-px"
          )}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}