// src/components/ui/client/Home-V1/LargestResidentialSection/LargestResidentialBlock.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function LargestResidentialBlock() {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      {/* LEFT: Image card */}
      <div className="flex justify-center lg:justify-start">
        <div
          className={cn(
            "relative w-full max-w-170",
            "overflow-hidden rounded-[26px]",
            "shadow-[0_30px_120px_rgba(0,0,0,0.55)]",
            "ring-1 ring-white/10"
          )}
        >
          <div className="relative aspect-video w-full">
            <Image
              src="/ResidentialProxies/internet-data-collection-with-web-scrapping.webp"
              alt="Largest residential proxies"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 680px"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.07),rgba(0,0,0,0)_62%)]" />
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="mx-auto w-full max-w-160 lg:mx-0">
        <h2 className="text-white/95 font-semibold tracking-tight text-[25px] leading-[1.15] md:text-[25px] md:leading-[1.12]">
          Largest Selection of Residential Proxies
        </h2>

        <p className="mt-5 text-[16px] leading-7 text-white/55">
          Choose from our wide collection of ethically sourced,{" "}
          <span className="font-semibold text-white/70">A+ grade</span> proxies pooled from the largest resource in the
          market <span className="font-semibold text-white/70">30M+</span> pool.
        </p>

        <h3 className="mt-8 text-white/95 font-semibold tracking-tight text-[16px] md:text-[16px]">
          Reliable Network with only the Best Infrastructure
        </h3>
        <p className="mt-2 text-[16px] leading-7 text-white/55">
          With a 99.9% uptime backed by a patented solution, we provide you with nothing short of the most reliable
          proxy service in the market.
        </p>

        <h3 className="mt-7 text-white/95 font-semibold tracking-tight text-[18px] md:text-[20px]">
          Swift Response for Uninterrupted Data Collection
        </h3>
        <p className="mt-2 text-[16px] leading-7 text-white/55">
          Our industry-leading response time of 0.6s ensures that your data-gathering exercises are never disturbed.
        </p>

        <p className="mt-8 text-[16px] leading-7 text-white/55">
          At ProxyEmpire, we’re fully committed to ensuring that you have a seamless and successful experience
          conducting your online operations, without any unnecessary hitches or setbacks. So why not start using our
          residential proxy tool today and let us give your digital activities that much-needed boost?
        </p>

        <div className="mt-10 flex justify-center lg:justify-start">
          <Link
            href="/#"
            className={cn(
              "inline-flex items-center justify-center",
              "h-12 px-12 rounded-xl",
              "bg-[#7B82F6] text-white font-semibold",
              "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
              "ring-1 ring-white/10",
              "transition-transform duration-200 ease-out",
              "hover:-translate-y-0.5 hover:bg-[#858CFF]",
              "active:translate-y-0"
            )}
          >
            Start your $1.97 Trial
          </Link>
        </div>
      </div>
    </div>
  );
}