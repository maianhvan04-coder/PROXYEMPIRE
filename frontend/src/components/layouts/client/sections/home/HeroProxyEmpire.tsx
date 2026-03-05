// src/components/ui/client/Home-V1/HeroProxy/HeroProxy.tsx
"use client";

import HeroProxyGlobe from "@/components/ui/Home/HeroProxy/HeroProxyGlobe";

export default function HeroProxy() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* base: trên -> dưới (#4C2876 -> #1F0823) */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#4C2876] to-[#1F0823]" />

      {/* glow xanh ở top (mềm, không tạo vệt) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1400px_420px_at_55%_0%,rgba(120,170,255,0.16),transparent_62%)]" />

      {/* glow xanh nhỏ hơn để “ăn” nét xanh nhẹ như template */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_220px_at_50%_0%,rgba(90,140,255,0.10),transparent_65%)]" />

      {/* tối nhẹ 2 bên + xuống dưới */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_95%_at_50%_62%,transparent_0%,rgba(0,0,0,0.16)_72%,rgba(0,0,0,0.28)_100%)]" />

      <div className="mx-auto w-full max-w-315 px-6 pt-14 pb-16 md:pt-0 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8">
          {/* LEFT */}
          <div className="max-w-165 pl-13 md:pl-15">
            <h1 className="antialiased text-white font-bold tracking-[-0.03em] text-[22px] leading-[1.18] md:text-[28px] md:leading-[1.14]">
              Collect The Data Your Project Needs
              <br />
              with the Best Residential Proxies
            </h1>

            <p className="mt-2 max-w-140 text-[16px] leading-[1.75] text-[#b8a7d8]">
              Power Your Web Scraping &amp; Data Gathering With Our{" "}
              <span className="text-[#9c7bff] font-medium">Residential Proxies</span>, Mobile
              Proxies (3G/4G/5G/LTE) And Datacenter Proxies.
            </p>

            <p className="mt-3 max-w-140 text-[16px] leading-[1.75] text-[#a997cf]">
              Gain access to proxies in over 170+ countries and 30,000,000+ worldwide clean IP
              Addresses to access any content at scale.
            </p>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-[#7a7cff] px-10 text-[18px] font-semibold text-white shadow-[0_18px_50px_rgba(122,124,255,.35)] ring-1 ring-white/10 transition-transform hover:-translate-y-0.5 hover:bg-[#8486ff] active:translate-y-0"
              >
                Start your $1.97 Trial
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <HeroProxyGlobe />
        </div>
      </div>
    </section>
  );
}