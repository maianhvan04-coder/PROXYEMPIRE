// src/components/ui/client/Home-V1/UseCasesShowcase/UseCasesShowcaseSection.tsx
"use client";

import Link from "next/link";
import { BLOCKS, IconBox } from "@/components/ui/Home/UseCasesShowcase/UseCasesShowcaseBlocks";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function UseCasesShowcaseSection() {
  return (
    <section
      className={cn(
        "bg-[linear-gradient(180deg,#FBFAFF_0%,#F6F3FF_55%,#F5F1FF_100%)]",
        "py-14 md:py-16"
      )}
    >
      <div className="mx-auto w-full max-w-285 px-6">
        <h2 className="text-center text-[22px] leading-[1.2] md:text-[22px] font-semibold tracking-tight text-[#2E1B46] translate-y-4">
          See How Clients Are Using Our Residential Proxies.
        </h2>

        <div className="mt-10 space-y-7 md:space-y-8">
          {BLOCKS.map((b, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-2xl bg-white",
                "px-6 py-6 md:px-10 md:py-8",
                "shadow-[0_18px_50px_rgba(15,23,42,0.06)]",
                "ring-1 ring-black/5"
              )}
            >
              {/* header */}
              <div className="flex items-center justify-between gap-4">
                <div className="text-[15px] md:text-[15px] font-semibold text-[#6E63E6]">{b.title}</div>

                <Link
                  href={b.ctaHref}
                  className={cn(
                    "inline-flex items-center justify-center",
                    "h-10 px-4 md:px-5",
                    "rounded-lg",
                    "bg-[#6E63E6] text-white",
                    "text-[13px] font-semibold",
                    "shadow-[0_12px_28px_rgba(110,99,230,0.30)]",
                    "ring-1 ring-white/20",
                    "transition",
                    "hover:brightness-110",
                    "active:translate-y-px"
                  )}
                >
                  {b.ctaText}
                </Link>
              </div>

              {/* items */}
              <div className="mt-7 grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-3 md:grid-cols-5 md:gap-x-10">
                {b.items.map((it) => (
                  <div key={it.label} className="flex flex-col items-center text-center">
                    <IconBox
                      iconSrc={it.iconSrc}
                      alt={it.label}
                      fallback={it.fallback}
                      size={it.iconSize ?? 28}
                    />
                    <div className="mt-3 text-[12px] md:text-[12px] font-medium text-[#3A2356]">{it.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}