// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// ✅ Thêm cái này để Next tự render <title> + <meta name="description">
export const metadata: Metadata = {
  title: {
    default: "ProxyEmpire — Mobile & Residential Proxies",
    template: "%s — ProxyEmpire",
  },
  description:
    "High-quality proxies for scraping, automation, SEO, and ad verification. Fast, stable, and easy to integrate.",
  // (tuỳ chọn) nếu có domain thật thì bật để OG URL chuẩn
  // metadataBase: new URL("https://proxyempire.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}