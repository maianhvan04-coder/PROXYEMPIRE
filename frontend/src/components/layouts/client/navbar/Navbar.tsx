"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MegaItem from "./MegaItem";
import NavLink from "./NavLink";

export type DropItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const PROXY_TYPES: DropItem[] = [
  { label: "Rotating Residential Proxies", href: "/#", icon: <HouseIcon /> },
  { label: "Unlimited Residential Proxies", href: "/#", icon: <InfinityIcon /> },
  { label: "Static Residential Proxies", href: "/#", icon: <PinIcon /> },
  { label: "Rotating Mobile Proxies", href: "/#", icon: <RotateMobileIcon /> },
  { label: "Dedicated Mobile Proxies", href: "/#", icon: <GridMobileIcon /> },
  { label: "Rotating Datacenter Proxies", href: "/#", icon: <GlobeIcon /> },
];

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
  const getScrollTop = () =>
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  const onScroll = () => setScrolled(getScrollTop() > 8);

  onScroll();

  // window scroll
  window.addEventListener("scroll", onScroll, { passive: true });
  // scroll trong các container overflow (capture=true)
  document.addEventListener("scroll", onScroll, { passive: true, capture: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("scroll", onScroll, true);
  };
}, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "relative overflow-visible transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            : "bg-[#5C3F7F]"
        )}
      >

        <div className="relative mx-auto flex h-13.5 max-w-300 items-center px-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0 ml-9 md:ml-10">
            <Image
              src="/logo-purple-proxyempire-01-01.svg"
              alt="ProxyEmpire"
              width={240}
              height={44}
              priority
              className="h-9 w-auto select-none"
              draggable={false}
            />
          </Link>

          {/* NAV */}
          <nav
            className={cn(
              "ml-10 flex flex-1 items-center justify-end gap-6 whitespace-nowrap text-[14px] font-semibold tracking-normal transition-colors duration-300",
              scrolled ? "text-[#2A1238]" : "text-white",
              // bạn đang muốn dịch sang trái xíu thì giảm pr:
              "pr-6"
            )}
          >
            <MegaItem
              label="Proxy types"
              href="/#"
              items={PROXY_TYPES}
              className={scrolled ? "text-[#2A1238]/90 hover:text-[#2A1238]" : "text-white/85 hover:text-white"}
            />

            <NavLink href="/#" className={cn(scrolled ? "text-[#2A1238]" : "text-white")}>
              Pricing
            </NavLink>
            <NavLink href="/#" className={cn(scrolled ? "text-[#2A1238]" : "text-white")}>
              Proxy locations
            </NavLink>
            <NavLink href="/#" className={cn(scrolled ? "text-[#2A1238]" : "text-white")}>
              Use cases
            </NavLink>
            <NavLink href="/#" className={cn(scrolled ? "text-[#2A1238]" : "text-white")}>
              Contact us
            </NavLink>
            <NavLink href="/#" className={cn(scrolled ? "text-[#2A1238]" : "text-white")}>
              Log in
            </NavLink>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4 shrink-0 mr-8">
            <Link
              href="/#"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-6",
                "bg-[#F97794] text-white text-[14px] font-semibold",
                "shadow-[0_10px_18px_rgba(0,0,0,0.18)]",
                "hover:brightness-105 active:brightness-95 transition",
                "whitespace-nowrap"
              )}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Colored icons (giống ảnh) ---------- */

function HouseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M12 3 3 10v2h2v9h6v-6h2v6h6v-9h2v-2L12 3Z" fill="#FF6A3D" />
      <path
        d="M7 21h10v-7a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v7Z"
        fill="#46C16B"
        opacity="0.95"
      />
      <path
        d="M10.5 21v-6.2c0-.7.6-1.3 1.5-1.3s1.5.6 1.5 1.3V21"
        fill="#FFFFFF"
        opacity="0.85"
      />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.5 9.5c2.2 0 4.5 2.5 4.5 2.5s2.3 2.5 4.5 2.5 4-1.6 4-3.5-1.8-3.5-4-3.5-4.5 2.5-4.5 2.5S9.7 9.5 7.5 9.5 3.5 11.1 3.5 13s1.8 3.5 4 3.5"
        stroke="#2D7DFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        fill="#FF4D8D"
        opacity="0.9"
      />
      <circle cx="12" cy="11" r="2" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

function RotateMobileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="#FF8A2A" strokeWidth="2" />
      <path d="M9.2 10.2a5 5 0 0 1 8.2 1.4" stroke="#FF8A2A" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18.5 12.2l-.7-2.6-2.6.8"
        stroke="#FF8A2A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 18h2" stroke="#FF8A2A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GridMobileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="4" width="12" height="16" rx="2" fill="#6A5CFF" opacity="0.18" />
      <rect x="7.5" y="6.5" width="9" height="4" rx="1" fill="#6A5CFF" opacity="0.85" />
      <path
        d="M8.5 12.8h2.2M13.3 12.8h2.2M8.5 15.8h2.2M13.3 15.8h2.2M8.5 18.8h2.2M13.3 18.8h2.2"
        stroke="#6A5CFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#35A7FF" strokeWidth="2" />
      <path d="M3 12h18" stroke="#35A7FF" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"
        stroke="#35A7FF"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}