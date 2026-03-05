// src/components/ui/client/Home-V1/FaqSection/FaqItem.tsx
"use client";

import React from "react";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export type FaqData = {
  q: string;
  a: React.ReactNode;
};

export default function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: FaqData;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "bg-[#F7F5FF]",
        "shadow-[0_18px_45px_rgba(0,0,0,0.20)]",
        "ring-1 ring-white/60",
        "transition-transform duration-200",
        "hover:-translate-y-px"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={cn(
          "w-full text-left",
          "px-7 py-6",
          "text-[17px] md:text-[17px]",
          "font-semibold tracking-tight",
          "text-[#7A39F0]",
          "outline-none"
        )}
      >
        {item.q}
      </button>

      {/* Answer (animated) */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-7 pb-6 -mt-1 text-[15px] leading-7 text-[#3B1A63]/80">
            {item.a}
          </div>
        </div>
      </div>
    </div>
  );
}