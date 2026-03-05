// src/components/ui/client/Home-V1/GeoSpecificContentSection/GeoSpecificContentBlock.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function GeoSpecificContentBlock() {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      {/* LEFT */}
      <div className="max-w-165">
        <h2 className="text-white/95 font-semibold tracking-tight text-[25px] leading-[1.15] md:text-[25px] md:leading-[1.12]">
          Access Geo-Specific Content with Ease
        </h2>

        <p className="mt-5 text-[16px] leading-7 text-white/55">
          With the aid of residential proxies, you can easily skirt past geographical content boundaries which would
          ordinarily prevent you from accessing certain types of content. Whether it’s for ecommerce purposes, MAP
          monitoring, or fare aggregation across different sectors, you can trust ProxyEmpire residential proxies to
          provide you with the data access you need.
        </p>

        <h3 className="mt-10 text-white/95 font-semibold tracking-tight text-[16px] md:text-[16px]">
          Customize Your Proxy Control Experience
        </h3>

        <p className="mt-3 text-[16px] leading-7 text-white/55">
          Whether you’re using the dashboard or backend services, managing your proxies is a breeze. Our residential IPs
          come with an improved public API which allows you to manage your proxies without needing to log into your
          dashboard. Using <span className="font-semibold text-white/75">ProxyEmpire’s Residential Proxy API</span>, you
          can:
        </p>

        <ul className="mt-6 list-disc space-y-3 pl-5 text-[16px] leading-7 text-white/55 marker:text-white/35">
          <li>Create, update or delete sub-users</li>
          <li>Set traffic limits</li>
          <li>Gain access to proxy users’ traffic statistics</li>
        </ul>

        <p className="mt-6 text-[16px] leading-7 text-white/55">
          We’re always working on enhancing our services and you can expect more features to be added to the public
          ProxyEmpire API in the near future.
        </p>

        <h3 className="mt-10 text-white/95 font-semibold tracking-tight text-[16px] md:text-[16px]">
          User-friendly Interface, Supportive Team, and Amazing Results
        </h3>

        <p className="mt-3 text-[16px] leading-7 text-white/55">
          Our mission is to provide you with not just results you want, but the service experience you deserve. If you
          run into any issues or need guidance on how to move forward, our supportive team at ProxyEmpire is always
          eager to help.
        </p>

        <div className="mt-10">
          <Link
            href="/#"
            className={cn(
              "inline-flex items-center justify-center",
              "h-14 min-w-55 px-10",
              "rounded-xl",
              "bg-[#7B86F2] text-white font-semibold text-[18px]",
              "shadow-[0_18px_55px_rgba(0,0,0,0.35)]",
              "transition-transform duration-200 ease-out",
              "hover:-translate-y-0.5 hover:bg-[#8792FF]",
              "active:translate-y-0"
            )}
          >
            Get started
          </Link>
        </div>
      </div>

      {/* RIGHT: Image card */}
      <div className="flex justify-center lg:justify-end">
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
              src="/ResidentialProxies/backconnect-residential-proxies-ProxyEmpire.webp"
              alt="Geo-specific content"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_380px_at_50%_35%,rgba(255,255,255,0.10),transparent_62%)]" />
        </div>
      </div>
    </div>
  );
}