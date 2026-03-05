"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import DownIcon from "./DownIcon";
import type { DropItem } from "./Navbar";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function MegaItem({
  label,
  items,
  footerLabel = "Proxy Pricing",
  footerHref = "/#",
  className,
}: {
  label: string;
  href: string;
  items: DropItem[];
  footerLabel?: string;
  footerHref?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-2",
          "px-0 py-0 rounded-none",
          "bg-transparent hover:bg-transparent",
          "transition-colors",
          "focus:outline-none focus-visible:ring-0",
          className ?? "text-white/85 hover:text-white"
        )}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="whitespace-nowrap">{label}</span>
        <DownIcon
          className={cn(
            "h-4 w-4 opacity-80 text-current transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Panel */}
      <div
        className={cn(
          "absolute left-0 top-full z-50 mt-3",
          "w-90 rounded-2xl bg-white",
          "shadow-[0_30px_80px_rgba(0,0,0,0.25)]",
          "ring-1 ring-black/5",
          "p-3",
          open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1",
          "transition-all duration-150"
        )}
      >
        <ul className="space-y-1">
          {items.map((x) => (
            <li key={x.label}>
              <Link
                href={x.href}
                className={cn(
                  "flex items-center gap-3",
                  "rounded-xl px-3 py-2.5",
                  "text-[#3a2a6a] hover:bg-[#5C3F7F]/10",
                  "transition"
                )}
              >
                <span className="shrink-0">{x.icon}</span>
                <span className="font-semibold">{x.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-2 px-3 pb-1">
          <Link
            href={footerHref}
            className={cn(
              "block",
              "text-[14px] font-semibold",
              "text-[#3a2a6a] hover:text-[#3a2a6a]",
              "transition"
            )}
          >
            {footerLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}