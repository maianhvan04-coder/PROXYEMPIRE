import React from "react";
import Image from "next/image";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export type Item = {
  label: string;
  iconSrc?: string;
  iconSize?: number; // ✅ thêm
  fallback?: React.ReactNode;
};

export type Block = {
  title: string;
  ctaText: string;
  ctaHref: string;
  items: Item[];
};

export function IconBox({
  iconSrc,
  alt,
  fallback,
  size = 28,
}: {
  iconSrc?: string;
  alt: string;
  fallback?: React.ReactNode;
  size?: number;
}) {
  return (
    <div className={cn("grid place-items-center", "h-14 w-14 md:h-16 md:w-16")}>
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={alt}
          width={size}
          height={size}
          className="object-contain"
        />
      ) : (
        <div className="grid place-items-center text-[#6E63E6]">{fallback}</div>
      )}
    </div>
  );
}

export const BLOCKS: Block[] = [
  {
    title: "By use case:",
    ctaText: "See all use cases",
    ctaHref: "/#",
    items: [
      { label: "Web Scraping", iconSrc: "/logos/ia_web_page_002-scaled-1.webp", iconSize: 48 },
      { label: "Price Monitoring", iconSrc: "/logos/ia_bulb_002-scaled-1.webp", iconSize: 48 },
      { label: "Sneaker Purchasing", iconSrc: "/logos/ia_gift_box_001-scaled-1.webp", iconSize: 48 },
      { label: "SEO Monitoring", iconSrc: "/logos/ia_magnifier_001-scaled-1.webp", iconSize: 48 },
      { label: "Ad verification", iconSrc: "/logos/IA_CV_Resume_01-scaled-1.webp", iconSize: 48 },
    ],
  },
  {
    title: "With a specific tool:",
    ctaText: "Our integrations",
    ctaHref: "/#",
    items: [
      { label: "Multilogin", iconSrc: "/logos/5687147-1-1.webp", fallback: <span className="font-semibold">M</span> },
      { label: "Dolphin Anty", iconSrc: "/logos/dolphin-anty_199257.webp", fallback: <span className="font-semibold">D</span> },
      { label: "Kameleo", iconSrc: "/logos/kameleo-logo-1-1.webp", fallback: <span className="font-semibold">K</span> },
      { label: "Octobrowser", iconSrc: "/logos/octo-browser.webp", fallback: <span className="font-semibold">O</span> },
      { label: "Gologin", iconSrc: "/logos/unnamed.webp", fallback: <span className="font-semibold">G</span> },
    ],
  },
  {
    title: "By target:",
    ctaText: "See all targets",
    ctaHref: "/#",
    items: [
      { label: "Google", iconSrc: "/logos/Google-proxyempire.svg", fallback: <span className="font-semibold">G</span> },
      { label: "Amazon", iconSrc: "/logos/amazon-scraping-with-proxyempires.svg", fallback: <span className="font-semibold">a</span> },
      { label: "Instagram", iconSrc: "/logos/instagram-proxyempire.svg", fallback: <span className="font-semibold">IG</span> },
      { label: "Reddit", iconSrc: "/logos/reddit-logo-2436.svg", fallback: <span className="font-semibold">R</span> },
      { label: "Twitter", iconSrc: "/logos/Logo_of_Twitter.svg.webp", fallback: <span className="font-semibold">T</span> },
    ],
  },
];