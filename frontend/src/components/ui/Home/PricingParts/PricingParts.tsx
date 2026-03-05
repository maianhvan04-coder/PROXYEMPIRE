"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export type PriceRow = { icon: React.ReactNode; label: string; price: string };
export type MiniCard = { icon: React.ReactNode; title: string; cta: string; href: string };

export const PRICE_ROWS: PriceRow[] = [
  { icon: "🏡", label: "Rotating Residential Proxies", price: "FROM $0.75 PER GB" },
  { icon: "📍", label: "Static Residential Proxies", price: "FROM $3 PER GB" },
  { icon: "📱", label: "Rotating Mobile Proxies", price: "FROM $1.25 PER GB" },
  { icon: "🧩", label: "Dedicated Mobile Proxies", price: "FROM $125 PER M" },
  { icon: "🌐", label: "Rotating Datacenter Proxies", price: "FROM $0.35 PER GB" },
];

export const MINI_CARDS: MiniCard[] = [
  { icon: "📍", title: "30M+ rotating IPs", cta: "See all locations", href: "/#" },
  { icon: "🕘", title: "99.9% uptime.", cta: "Try for $1.97 only!", href: "/#" },
  { icon: "🧑‍💻", title: "24/7 Dedicated Support.", cta: "Contact us", href: "/#" },
  { icon: "💗", title: "Fair Pricing.", cta: "Try for $1.97 only!", href: "/#" },
];

export function PricingCard() {
  return (
    <div
      className={cn(
        "mt-10 overflow-hidden rounded-[14px] bg-white",
        "ring-1 ring-black/5",
        "shadow-[0_24px_70px_rgba(19,10,31,0.10)]"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[420px_1fr]">
        {/* LEFT */}
        <div className="px-10 py-6 md:py-7">
          <div className="flex items-center">
            <Image
              src="/logo-purple-proxyempire-01-01.svg"
              alt="ProxyEmpire"
              width={360}
              height={84}
              className="h-9.5 w-auto md:h-10.5"
              priority={false}
            />
          </div>

          <h3 className="mt-5 text-[20px] font-semibold leading-tight tracking-tight text-[#3A1D55]">
            Our state-of-the-art proxies.
          </h3>

          <p className="mt-3 max-w-90 text-[16px] font-bold leading-[1.75] text-[#777CBC]">
            Experience online freedom with our unrivaled web{" "}
            <span className="font-semibold text-[#2F7BFF]">proxy solutions.</span>
          </p>

          <p className="mt-1 max-w-90 text-[16px] font-bold leading-[1.75] text-[#777CBC]">
            Pioneering in collecting location specific data at scale, our premium,
            ethically-sourced network boasts a vast pool of IPs, expansive location choices, high
            success rate, and versatile pricing. Advance your digital journey with us.
          </p>
        </div>

        {/* RIGHT */}
        <div className="px-8 py-3 md:px-10 md:py-4">
          <ul>
            {PRICE_ROWS.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-6 py-4 border-b border-[#EEEAF2]"
              >
                <div className="flex min-w-0 items-center gap-4">
                  {/* icon trần */}
                  <span className="text-[18px] leading-none">{row.icon}</span>

                  <span className="truncate text-[16px] font-semibold text-[#3A1D55]">
                    {row.label}
                  </span>
                </div>

                <span className="shrink-0 rounded-md bg-[#3E235B] px-4 py-1.5 text-[12px] font-semibold tracking-wide text-white">
                  {row.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MiniCards() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {MINI_CARDS.map((c) => (
        <div
          key={c.title}
          className={cn(
            "rounded-[14px] bg-white",
            "px-6 py-8 text-center",
            "ring-1 ring-black/5",
            "shadow-[0_16px_44px_rgba(19,10,31,0.10)]"
          )}
        >
          <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-[#F3EEFF] text-[16px]">
            {c.icon}
          </div>

          <div className="mt-5 text-[16px] font-semibold text-[#3A1D55]">{c.title}</div>

          <Link
            href={c.href}
            className="mt-3 inline-block text-[14px] font-semibold text-[#7C3AED] hover:opacity-80"
          >
            {c.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}