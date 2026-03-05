// src/components/ui/client/Home-V1/ResidentialProxiesSection/ResidentialProxiesContent.tsx
"use client";

import React from "react";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Props = {
  ctaHref?: string;
};

export default function ResidentialProxiesContent({ ctaHref = "/#" }: Props) {
  return (
    // dịch trái như bạn đang muốn (-ml) nhưng dùng px chuẩn
    <div className="pl-0 lg:-ml-28 xl:-ml-30">
      <h2
        className={cn(
          "max-w-160",
          "text-white",
          "text-[26px] leading-[1.18] md:text-[26px] md:leading-[1.16]",
          "font-semibold tracking-tight"
        )}
      >
        Lightning Fast Residential Proxies,
        <br />
        Available in over 170 Countries.
      </h2>

      <div className="mt-6 max-w-180 space-y-4 text-[16px] leading-7 text-white/50">
        <p>
          ProxyEmpire provides over <span className="text-white/75">30 million</span>{" "}
          <span className="text-[#B9A9FF] underline underline-offset-4">
            rotating residential proxies
          </span>{" "}
          that are ethically sourced, equipped with{" "}
          <span className="text-[#B9A9FF] underline underline-offset-4">
            advanced filtering
          </span>{" "}
          that allows you to target countries, regions, cities, and ISPs.
        </p>

        <p>
          Each residential proxy plan comes with VIP integration support to get you set up in minutes.
          ProxyEmpire supports use cases other proxy partners simply do not.
        </p>

        <p>
          Our residential proxies work well with all standard proxy protocols to ensure that they integrate
          with any software stack you may have.
        </p>

        <p>
          We also offer{" "}
          <span className="text-[#B9A9FF] underline underline-offset-4">
            static residential proxies
          </span>
          , also known as ISP proxies, which allow you to keep using the same IP for a month or longer.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex items-center justify-center",
            "h-12 w-65 rounded-lg",
            "bg-[#797FE5] text-white font-semibold",
            "shadow-[0_22px_60px_rgba(0,0,0,0.35)]",
            "ring-1 ring-white/10",
            "transition hover:brightness-110 active:translate-y-1px"
          )}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}