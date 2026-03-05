// src/components/ui/client/Home-V1/HeroProxy/HeroProxyGlobe.tsx
"use client";

import Image from "next/image";

export default function HeroProxyGlobe() {
  return (
    <div className="relative flex justify-center md:justify-end md:pr-12">
      <div className="pointer-events-none absolute right-0 top-1/2 h-135 w-135 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(120,110,255,.40),transparent_62%)] blur-2xl md:h-145 md:w-145" />

      <div className="relative h-90 w-90 md:h-130 md:w-130">
        <Image
          src="/hero/globe.webp"
          alt="Globe"
          fill
          priority
          className="object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,.55)] filter hue-rotate-95 saturate-[1.45] brightness-[1.05]"
        />
      </div>
    </div>
  );
}