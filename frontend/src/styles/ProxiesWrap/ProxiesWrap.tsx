// src/components/ui/Home/ProxiesWrap/ProxiesWrap.tsx
"use client";

import React from "react";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function ProxiesWrap({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        // ✅ gradient top -> bottom
        "bg-linear-to-b from-[#4C2876] to-[#1F0823]"
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-130 w-245 -translate-x-1/2 rounded-full bg-white/10 blur-[90px]" />
        <div className="absolute -bottom-52 left-1/3 h-130 w-245 -translate-x-1/2 rounded-full bg-black/20 blur-[120px]" />
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}