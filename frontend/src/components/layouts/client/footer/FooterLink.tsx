// src/components/ui/client/Home-V1/Footer/components/FooterLink.tsx
import React from "react";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[15px] leading-8.5",
        "text-[#6B63B7]",
        "hover:text-[#2A1238]",
        "transition-colors"
      )}
    >
      {children}
    </Link>
  );
}