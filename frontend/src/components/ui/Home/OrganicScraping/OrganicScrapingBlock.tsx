// src/components/ui/client/Home-V1/OrganicScrapingSection/OrganicScrapingBlock.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function OrganicScrapingBlock() {
  return (
    <div className={cn("grid items-start gap-10 lg:grid-cols-2 lg:gap-14")}>
      {/* LEFT: Image card */}
      <div className="flex justify-center lg:justify-start">
        <div
          className={cn(
            "relative w-full max-w-180",
            "overflow-hidden rounded-[26px]",
            "shadow-[0_30px_120px_rgba(0,0,0,0.55)]",
            "ring-1 ring-white/10"
          )}
        >
          <div className="relative aspect-video w-full">
            <Image
              src="/ResidentialProxies/large-amount-of-premium-residential-IPs-around-the-world.webp"
              alt="Organic scraping"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="mx-auto w-full max-w-160 lg:mx-0">
        <h2
          className={cn(
            "text-white font-semibold tracking-tight",
            "text-[25px] leading-[1.18]",
            "md:text-[25px] md:leading-[1.15]"
          )}
        >
          Imitate an Organic User and Banish
          <br className="hidden md:block" />
          Concerns About Web Scraping
        </h2>

        <div className="mt-6 space-y-5 text-[16px] leading-7 text-white/45 md:text-[16px]">
          <p className="m-0">
            One of the primary uses of any residential IP address is for data scraping of publicly available
            information, including product listings, price indexes, and so on. With ProxyEmpire residential proxies, you
            get to <span className="font-semibold text-white/60">imitate an organic</span> web user, reducing the chances
            of your web scraping activities being flagged as bot-like and earning you blocks from certain websites.
            ProxyEmpire allows you:
          </p>

          <ol className="ml-5 space-y-2 list-decimal marker:text-white/30">
            <li className="font-semibold text-white/45">Effortlessly blend into the crowd of regular internet users</li>
            <li className="font-semibold text-white/45">
              Avoid having your data collection activities misinterpreted as suspicious activity
            </li>
            <li className="font-semibold text-white/45">Enjoy high success rates in terms of data collection</li>
          </ol>
        </div>

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
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}