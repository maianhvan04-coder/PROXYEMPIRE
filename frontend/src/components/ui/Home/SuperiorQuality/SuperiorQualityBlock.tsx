// src/components/ui/client/Home-V1/SuperiorQualitySection/SuperiorQualityBlock.tsx
import React from "react";
import Image from "next/image";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function SuperiorQualityBlock() {
  return (
    <>
      {/* BIG IMAGE */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[28px]",
          "shadow-[0_40px_160px_rgba(0,0,0,0.65)]",
          "ring-1 ring-white/10"
        )}
      >
        <div className="relative aspect-21/12 w-full">
          <Image
            src="/ResidentialProxies/a-lot-of-ip-addresses-from-home-residential-internet-provider-ISP-thanks-to-ProxyEmpire.io_.webp"
            alt="Superior quality residential proxies"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1240px"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_40%,rgba(255,255,255,0.07),rgba(0,0,0,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/35 to-transparent" />
      </div>

      {/* TEXT */}
      <div className="mt-10 md:mt-12 max-w-270">
        <h3 className="text-white/95 font-semibold tracking-tight text-[18px] md:text-[20px]">
          Superior Quality Residential Proxies for Large-Scale Data Collection
        </h3>

        <div className="mt-4 space-y-7 text-[16px] leading-7 text-white/50">
          <p className="m-0">
            <span className="font-semibold text-white/70">Dedicated Account Managers</span>{" "}
            All clients receive essential help via our 24/7 chat support. For our Corporate and Enterprise Residential
            Proxy clients, we designate a Dedicated Account Manager to assist with any issues or requests and guide
            through any challenges.
          </p>

          <p className="m-0">
            <span className="font-semibold text-white/70">Complimentary Proxy Management Tool</span>{" "}
            ProxyEmpire’s proxy management tools are free and compatible with the Chrome browser. Just add and toggle
            between various IPs on the fly with a simple one-click connection. Try ProxyEmpire’s Chrome Extension.
          </p>

          <p className="m-0">
            <span className="font-semibold text-white/70">Patented Technology</span>{" "}
            Our Residential Proxy network is strengthened by patented technology, leveraging an advanced transport
            layer network protocol. This revolutionary technology boosts our network’s speed, dependability, and
            security, offering users an uninterrupted and streamlined data scraping experience.
          </p>

          <h3 className="pt-2 text-white/95 font-semibold tracking-tight text-[18px] md:text-[20px]">
            Companies Enhance their Business with Residential Proxies
          </h3>

          <p className="m-0">
            <span className="font-semibold text-white/70">Review Monitoring</span>{" "}
            Utilize ProxyEmpire’s sturdy and reliable Residential Proxy network to supervise reviews globally, devoid
            of any IP blocks.
          </p>

          <p className="m-0">
            <span className="font-semibold text-white/70">Ad Verification</span>{" "}
            Use rotating residential proxies as an effective tool to examine ad display to varying audiences across the
            globe.
          </p>

          <p className="m-0">
            <span className="font-semibold text-white/70">Travel Fare Aggregation</span>{" "}
            Purchase Residential Proxies, source real-time localized data, and present your customers with only new and
            pertinent travel offers.
          </p>

          <p className="m-0">
            <span className="font-semibold text-white/70">Cybersecurity</span>{" "}
            Residential IPs serve as excellent tools to identify threats, test applications, or monitor websites across
            various locations.
          </p>
        </div>
      </div>
    </>
  );
}