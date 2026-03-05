// src/components/ui/client/Home-V1/FaqSection/FaqSection.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import FaqItem, { type FaqData } from "@/components/ui/Home/FaqItem/FaqItem";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** ✅ Inline link màu tím giống ảnh + không tạo component trong render */
function FaqA({
  href = "/#",
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "font-semibold text-[#A77BFF] transition-colors hover:text-[#8E63FF]",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function FaqSection() {
  const faqs: FaqData[] = useMemo(
    () => [
      {
        q: "What exactly is a residential web proxy?",
        a: (
          <>
            A <FaqA>residential proxy</FaqA> is an IP address assigned by internet service
            providers to home or mobile internet users. When you use a residential proxy
            service, your online traffic gets routed through these{" "}
            <b>residential IP addresses</b> instead of your own IP. This masks your real
            location and identity.
          </>
        ),
      },
      {
        q: "Can residential proxies be used on mobile devices?",
        a: (
          <>
            Yes, residential proxies work on both desktop and mobile devices.
            <br />
            <br />
            Configure your mobile browser or app to route through the proxy IP and port to
            mask your mobile traffic.
          </>
        ),
      },
      {
        q: "What are the benefits of using residential proxies?",
        a: (
          <>
            There are several key benefits to using residential proxies:
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <FaqA>Access websites and apps</FaqA> blocked in your region due to geographic
                restrictions
              </li>
              <li>
                <FaqA>Scrape data from websites</FaqA> without getting flagged as a bot
              </li>
              <li>
                <FaqA>Manage multiple social media</FaqA> accounts from different locations
              </li>
              <li>
                <FaqA>Research geo-targeted information</FaqA> like local pricing and inventory
              </li>
              <li>
                <FaqA>Verify ads and detect ad fraud</FaqA> across different regions
              </li>
            </ul>
          </>
        ),
      },
      {
        q: "What are backbone residential proxies?",
        a: (
          <>
            <b>Backconnect or backbone proxies</b> don’t route your full connection through
            the proxy.
            <br />
            <br />
            Only the actual outbound requests go through the proxy’s IP. This offers faster
            speeds than traditional full-tunnel proxies.
          </>
        ),
      },
      {
        q: "Are residential proxies legal to use?",
        a: (
          <>
            Using residential proxies is completely legal in most <FaqA>countries</FaqA>. You
            simply access the open internet through IP addresses assigned to other users.
            Make sure to comply with website terms of service. Never use proxies for malicious
            activities.
          </>
        ),
      },
      {
        q: "How are residential proxies different from datacenter proxies?",
        a: (
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <FaqA>Residential proxies</FaqA> use IP addresses from{" "}
              <b>actual homes and mobile devices</b>.
            </li>
            <li>
              <FaqA>Datacenter proxies</FaqA> use IPs belonging to{" "}
              <b>servers in data centers</b>.
            </li>
            <li>
              Websites can easily identify and block datacenter proxy traffic, while residential
              proxies appear as normal user traffic.
            </li>
          </ul>
        ),
      },
      {
        q: "What are rotating residential proxies?",
        a: (
          <>
            <FaqA>Rotating residential proxies</FaqA> give you access to a large pool of
            different residential IP addresses.
            <br />
            <br />
            As you make requests, you automatically rotate through the pool so no single IP
            gets overused.
            <br />
            <br />
            This prevents your activities from being tracked and blocked.
          </>
        ),
      },
      {
        q: "How do I get started and buy residential proxies?",
        a: (
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Find a <FaqA>reputable proxy provider</FaqA> with a large, reliable pool of
              residential IPs to buy your proxies.
            </li>
            <li>
              Select rotating or static proxies based on your use case. (get started with the{" "}
              <FaqA>best residential proxies</FaqA>)
            </li>
            <li>Choose location targeting if you need proxies from certain countries/cities.</li>
            <li>
              <FaqA>Integrate proxies into your web scraper, automation tool, or browser.</FaqA>
            </li>
            <li>
              Route your traffic through the IPs using the provided host, port, username, and
              password.
            </li>
          </ul>
        ),
      },
      {
        q: "Should I choose static or rotating residential proxies?",
        a: (
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <FaqA>Static residential proxies (ISP proxies)</FaqA> let you keep using the same
              IP addresses repeatedly. This can be useful if you need to consistently appear
              from one region.
            </li>
            <li>
              <FaqA>Rotating residential proxies</FaqA> are better for scraping large sites,
              managing multiple accounts, and gathering data from many places. The constant IP
              rotation helps evade blocks.
            </li>
          </ul>
        ),
      },
      {
        q: "What should I look for in a proxy provider?",
        a: (
          <>
            Key factors include pool size, geotargeting options, speeds, uptime rating, API
            availability, reasonable pricing, and responsive customer support. Comparing multiple
            providers can help you find the <FaqA>best residential proxy service</FaqA> for your needs.
          </>
        ),
      },
    ],
    []
  );

  /** ✅ mở/đóng độc lập từng item */
  const [openSet, setOpenSet] = useState<Record<number, boolean>>({});

  /** ✅ masonry 2 cột: chia chẵn/lẻ để không trống hàng + không “chảy cột” */
  const left = useMemo(
    () => faqs.map((item, i) => ({ item, i })).filter((x) => x.i % 2 === 0),
    [faqs]
  );
  const right = useMemo(
    () => faqs.map((item, i) => ({ item, i })).filter((x) => x.i % 2 === 1),
    [faqs]
  );

  return (
    <section className={cn("relative w-full overflow-hidden", "-mt-34 md:-mt-36", "py-20 md:py-28")}>
      {/* Background giống ảnh */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "bg-[radial-gradient(80%_70%_at_50%_0%,rgba(170,120,255,0.40)_0%,rgba(0,0,0,0)_55%),radial-gradient(70%_60%_at_50%_110%,rgba(140,80,255,0.18)_0%,rgba(0,0,0,0)_60%),linear-gradient(180deg,#3E1D63_0%,#220A34_55%,#14051F_100%)]"
        )}
      />

      <div className="mx-auto w-full max-w-285 px-6">
        {/* Heading */}
        <h2 className="text-left text-[26px] leading-[1.12] md:text-[26px] md:leading-[1.12] font-semibold tracking-tight text-white/95">
          Frequently Asked Questions About Proxies
        </h2>

        <div className="mt-6 max-w-245 mr-auto space-y-5 text-left">
          <p className="text-[16px] leading-7 text-white/65">
            A <span className="font-semibold text-[#B98BFF]">residential proxy service</span>{" "}
            allows you to route your internet traffic through{" "}
            <span className="font-semibold text-[#B98BFF]">residential IP addresses</span>{" "}
            from around the world. This can help you access websites and content that may be blocked in your own{" "}
            <span className="font-semibold text-[#B98BFF]">country</span>.
          </p>

          <p className="text-[16px] leading-7 text-white/55">Below are some common questions about residential proxies:</p>
        </div>

        {/* ✅ FAQ masonry 2 cột */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
          <div className="flex flex-col gap-7">
            {left.map(({ item, i }) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openSet[i] ?? false}
                onToggle={() => setOpenSet((prev) => ({ ...prev, [i]: !(prev[i] ?? false) }))}
              />
            ))}
          </div>

          <div className="flex flex-col gap-7">
            {right.map(({ item, i }) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openSet[i] ?? false}
                onToggle={() => setOpenSet((prev) => ({ ...prev, [i]: !(prev[i] ?? false) }))}
              />
            ))}
          </div>
        </div>

        {/* Content bên dưới (giữ nguyên của bạn) */}
        <div className="mt-6 max-w-245 mr-auto space-y-5 text-left">
          <p className="text-[16px] leading-7 text-white/65">
            <span className="font-semibold text-[#B98BFF]">Proxies</span> serve as the internet’s invisibility cloak,
            enabling anonymous, secure browsing and accessing localized data.
          </p>

          <p className="mt-6 text-[16px] leading-7 text-white/55">Best options include:</p>

          <ul className="mt-4 space-y-3 text-[16px] leading-7 text-white/55">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
              <span>
                <b className="text-white/75">Residential proxies</b>, derived from real devices, making them trustworthy
                by online services. Ideal for web scraping, social media automation, and market research.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
              <span>
                <b className="text-white/75">Backconnect proxies</b> use a dynamic connection increasing their
                reliability and making them harder to block. It’s ideal for rigorous tasks like web scraping or social
                media automation.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-[16px] leading-7 text-white/55">With proxies, you can:</p>

          <ul className="mt-4 space-y-3 text-[16px] leading-7 text-white/55">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
              <span>
                <b className="text-white/75">Access geo-specific content:</b> Unlock region-specific Netflix shows or
                other platforms.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
              <span>
                <b className="text-white/75">Bypass blocked sites:</b> Gain access to unavailable websites in your region
                such as Facebook.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
              <span>
                <b className="text-white/75">Protect privacy:</b> Conceal your real IP safeguarding your privacy.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
              <span>
                <b className="text-white/75">Scrape websites:</b> Extract data like product prices from Amazon or LinkedIn
                contact info.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/45" />
              <span>
                <b className="text-white/75">Automate tasks:</b> Automate social media posts, email marketing, etc.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-[16px] leading-7 text-white/55">
            For reliable, effective proxies, residential and backconnect proxies are top-tier choices.
          </p>

          {/* ✅ Link cuối (nếu muốn giống ảnh thì dùng FaqA) */}
          <p className="mt-6 text-[16px] leading-7 text-white/55">
            Ready to unlock a whole new world of safe, secure, and effortless browsing? Start your journey with
            ProxyEmpire now, and enjoy the power of top-tier residential and backconnect proxies.{" "}
            <FaqA href="/#">(get started with the best residential proxies)</FaqA>
          </p>
        </div>
      </div>
    </section>
  );
}