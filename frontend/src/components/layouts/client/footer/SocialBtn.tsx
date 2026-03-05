// src/components/ui/client/Home-V1/Footer/components/SocialBtn.tsx
import React from "react";
import Link from "next/link";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline-flex group">
      <Link
        href={href}
        aria-label={label}
        className={cn(
          "inline-flex items-center justify-center",
          "h-8 w-8 rounded-none",
          "bg-[#F3F4F6]",
          "border-0",
          "text-[#2A1238]",
          "hover:bg-[#E9EBF0]",
          "transition",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1238]/20"
        )}
      >
        {children}
      </Link>

      <span
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-20",
          "-translate-x-1/2",
          "mt-1.5 whitespace-nowrap",
          "rounded-md bg-white text-black",
          "shadow-[0_8px_24px_rgba(0,0,0,0.14)]",
          "px-2 py-0.75 text-[13px] leading-5",
          "opacity-0 translate-y-1",
          "group-hover:opacity-100 group-hover:translate-y-0",
          "group-focus-within:opacity-100 group-focus-within:translate-y-0",
          "transition-all duration-150"
        )}
      >
        {label}
      </span>
    </div>
  );
}