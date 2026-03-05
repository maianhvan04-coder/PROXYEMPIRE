// src/components/ui/client/Home-V1/Footer/components/FooterBottom.tsx
import React from "react";
import Image from "next/image";

import FooterLink from "./FooterLink";
import { SUMMARY } from "./footer.data";

export default function FooterBottom() {
  return (
    <div className="mt-2 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
      {/* Bottom left */}
      <div className="max-w-90 pl-8">
        <div className="relative h-9 w-40">
          <Image src="/logo-purple-proxyempire-01-01.svg" alt="ProxyEmpire" fill className="object-contain" />
        </div>

        <div className="mt-5 text-[15px] leading-6.5 text-[#6B63B7]">
          © Copyright 2026 ProxyEmpire.
        </div>

        <div className="mt-6 space-y-1">
          <div>
            <FooterLink href="/#">Privacy Policy</FooterLink>
          </div>
          <div>
            <FooterLink href="/#">Terms of Service</FooterLink>
          </div>
          <div>
            <FooterLink href="/#">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>

      {/* Bottom right summary */}
      <div className="w-full max-w-160 pl-38">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr] md:gap-x-10">
          <div className="space-y-2">
            {SUMMARY.map((it) => (
              <div key={it.label} className="flex items-center gap-3">
                <span className="text-[15px]">{it.icon}</span>
                <span className="text-[15px] leading-6.5 font-medium text-[#6B63B7]">{it.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 md:-ml-37">
            {SUMMARY.map((it) => (
              <div key={it.label} className="text-[15px] leading-6.5 text-[#6B63B7]">
                {it.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}