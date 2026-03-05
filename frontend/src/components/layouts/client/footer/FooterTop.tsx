// src/components/ui/client/Home-V1/Footer/components/FooterTop.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";
import SocialBtn from "./SocialBtn";
import { IconFacebook, IconInstagram, IconLinkedIn, IconTelegram, IconX } from "./icons";
import { COMPANY, PROXY_TYPES, SCRAPING_TOOLS, TOP_LOCATIONS } from "./footer.data";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function FooterTop() {
  return (
    <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-[280px_300px_260px_220px]">
      {/* Col 1 */}
      <div className="pl-7">
        <FooterHeading>ProxyEmpire</FooterHeading>

        <div className="mt-4">
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

        <div className="mt-6 space-y-2">
          <div>
            <FooterLink href="/#">Contact</FooterLink>
          </div>
          <div>
            <FooterLink href="/#">Log in</FooterLink>
          </div>
        </div>

        <div className="mt-8">
          <FooterHeading>Company</FooterHeading>
          <div className="mt-3 space-y-1">
            {COMPANY.map((it) => (
              <div key={it.label}>
                <FooterLink href={it.href}>{it.label}</FooterLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Col 2 */}
      <div>
        <FooterHeading>Proxy Types</FooterHeading>
        <div className="mt-3 space-y-1">
          {PROXY_TYPES.map((it) => (
            <div key={it.label}>
              <FooterLink href={it.href}>{it.label}</FooterLink>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <FooterHeading>Web Scraping Tools</FooterHeading>
          <div className="mt-3 space-y-1">
            {SCRAPING_TOOLS.map((it) => (
              <div key={it.label}>
                <FooterLink href={it.href}>{it.label}</FooterLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Col 3 */}
      <div className="-ml-21">
        <FooterHeading>Top Proxy IP Locations</FooterHeading>
        <div className="mt-3 space-y-1">
          {TOP_LOCATIONS.map((it) => (
            <div key={it.label}>
              <FooterLink href={it.href}>{it.label}</FooterLink>
            </div>
          ))}
        </div>
      </div>

      {/* Col 4 */}
      <div className="lg:pl-2 -ml-37">
        <FooterHeading>Follow</FooterHeading>

        <div className="mt-3 flex items-center gap-2">
          <SocialBtn href="/#" label="Follow on Facebook">
            <IconFacebook />
          </SocialBtn>
          <SocialBtn href="/#" label="Follow on X">
            <IconX />
          </SocialBtn>
          <SocialBtn href="/#" label="Follow on Instagram">
            <IconInstagram />
          </SocialBtn>
          <SocialBtn href="/#" label="Follow on LinkedIn">
            <IconLinkedIn />
          </SocialBtn>
          <SocialBtn href="/#" label="Follow on Telegram">
            <IconTelegram />
          </SocialBtn>
        </div>

        <div className="mt-8">
          <div className="relative h-29.5 w-29.5">
            <Image src="/light-default.svg" alt="SourceForge user reviews" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}