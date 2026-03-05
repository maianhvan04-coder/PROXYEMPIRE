"use client";

import Image from "next/image";

type Badge = { src: string; alt: string; w: number; h: number };

const BADGES: Badge[] = [
  { src: "/top-performer-summer-white.svg", alt: "SourceForge Top Performer", w: 160, h: 78 },
  { src: "/hero/trustpilot.png", alt: "Trustpilot", w: 260, h: 78 },
  { src: "/EWDCI-trust-seal-logo-1.webp", alt: "EWD Certified", w: 140, h: 78 },
];

export default function MidTrustBadgesBar() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 isolate z-40 -mt-10 pb-1 md:-mt-14 md:pb-2">
      {/* ✅ overlay nền: luôn nằm DƯỚI box */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_35%,#F8F5FB_35%,#F8F5FB_100%)]" />

      {/* ✅ container */}
      <div className="relative z-10 mx-auto w-full max-w-285 px-6">
        {/* ✅ box trắng: thêm border rõ như ảnh 2 */}
        <div className="w-full rounded-2xl bg-white px-10 py-10 border border-black/10 shadow-[0_18px_60px_rgba(19,10,31,0.12)]">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            {BADGES.map((b) => (
              <div key={b.alt} className="relative" style={{ width: b.w, height: b.h }}>
                <Image src={b.src} alt={b.alt} fill className="object-contain" sizes="240px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}