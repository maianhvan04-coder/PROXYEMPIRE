import Link from "next/link";
import React from "react";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2",
        "px-0 py-0 rounded-none",
        "bg-transparent hover:bg-transparent",
        "transition-colors",
        "focus:outline-none focus-visible:ring-0",
        // ✅ Navbar control màu; nếu không truyền thì fallback trắng như cũ
        className ?? "text-white/85 hover:text-white"
      )}
    >
      {children}
    </Link>
  );
}