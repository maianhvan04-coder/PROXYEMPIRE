// src/components/ui/client/Home-V1/FeatureComparisonSection/FeatureComparisonCard.tsx
import React from "react";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Row = {
  feature: string;
  pe: React.ReactNode;
  comp: React.ReactNode;
};

/** ✅ Icon luôn dính sát chữ, không bị rơi xuống dòng 1 mình */
function IconText({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <span className="leading-6">
      {children}
      <span aria-hidden className="inline-block whitespace-nowrap align-middle">
        {"\u00A0"}
        <span className="inline-block translate-y-px text-[16px] leading-none">
          {icon}
        </span>
      </span>
    </span>
  );
}

const ROWS: Row[] = [
  {
    feature: "Residential Proxy Network Size",
    pe: <IconText icon="🌍">Over 30M+ IPs spanning 170+ countries</IconText>,
    comp: "Smaller network size and limited global coverage",
  },
  {
    feature: "Security",
    pe: <IconText icon="🔒">Choice between HTTP, HTTPS and SOCKS5 protocols</IconText>,
    comp: "Limited security options",
  },
  {
    feature: "Source of Proxies",
    pe: <IconText icon="✅">Ethically sourced, high-quality proxies</IconText>,
    comp: <IconText icon="❌">Potential usage of low-quality or unethically sourced proxies</IconText>,
  },
  {
    feature: "Targeting Precision",
    pe: <IconText icon="✔️">Country, city, state, ASN / ISP targeting</IconText>,
    comp: <IconText icon="❌">Less precise; extra fees for advanced targeting</IconText>,
  },
  {
    feature: "Integration Ease",
    pe: <IconText icon="🧩">Dev-friendly docs, endpoint generator & public API</IconText>,
    comp: <IconText icon="❌">Compatibility gaps and limited support</IconText>,
  },
  {
    feature: "Hidden Fees",
    pe: <IconText icon="🎯">None – all features included</IconText>,
    comp: <IconText icon="❌">Additional fees for targeting or sessions</IconText>,
  },
  {
    feature: "Concurrent Sessions",
    pe: (
      <span className="inline-flex items-center gap-3">
        <span className="rounded-full bg-[#ECE7FF] px-3 py-1 text-[13px] font-semibold text-[#3B1B63]">
          Unlimited
        </span>
        <span aria-hidden className="inline-block translate-y-px text-[16px] leading-none whitespace-nowrap">
          🚀
        </span>
      </span>
    ),
    comp: <IconText icon="❌">Limited or pay-more tiers</IconText>,
  },
  {
    feature: "Proxy Access",
    pe: <IconText icon="🔁">Single backconnect entry for consistent rotation</IconText>,
    comp: <IconText icon="❌">Fixed proxies → higher ban/CAPTCHA risk</IconText>,
  },
  {
    feature: "Data Usage Management",
    pe: <IconText icon="📊">Detailed dashboard usage statistics</IconText>,
    comp: <IconText icon="❌">Limited visibility</IconText>,
  },
  {
    feature: "Customer Support",
    pe: <IconText icon="🧑‍💼">24/7 chat support + Dedicated AM for Corporate & Enterprise</IconText>,
    comp: <IconText icon="❌">Limited hours, no dedicated AM</IconText>,
  },
  {
    feature: "Chrome Proxy Manager",
    pe: <IconText icon="🧰">Free Chrome extension</IconText>,
    comp: <IconText icon="❌">None or paid add-on</IconText>,
  },
  {
    feature: "Android Proxy Manager",
    pe: <IconText icon="🤖">Free Android app</IconText>,
    comp: <IconText icon="❌">None</IconText>,
  },
  {
    feature: "Use Cases",
    pe: <IconText icon="📝">Review monitoring, ad verification, travel fare aggregation, cybersecurity</IconText>,
    comp: <IconText icon="❌">Narrower applicability</IconText>,
  },
];

export default function FeatureComparisonCard() {
  return (
    <>
      {/* CARD TABLE */}
      <div
        className={cn(
          "mx-auto w-full max-w-280",
          "overflow-hidden rounded-[22px]",
          "bg-white",
          "shadow-[0_40px_140px_rgba(0,0,0,0.45)]",
          "ring-1 ring-black/5"
        )}
      >
        {/* Top title bar */}
        <div className="bg-white px-7 py-5">
          <h3 className="text-[16px] font-bold tracking-tight text-[#4B2A68]">
            ProxyEmpire vs Competition – feature comparison
          </h3>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          {/* ✅ fixed layout + col widths để cột 1 rộng như ảnh 2 */}
          <table className="w-full min-w-245 border-collapse table-fixed">
            <colgroup>
              <col className="w-[26%]" />
              <col className="w-[36%]" />
              <col className="w-[38%]" />
            </colgroup>

            <thead>
              <tr className="text-white">
                <th
                  className={cn(
                    "px-7 py-5 text-left text-[15px] font-semibold",
                    "bg-[linear-gradient(90deg,#4A1B72_0%,#370F4F_100%)]"
                  )}
                >
                  Features / Advantages
                </th>

                <th
                  className={cn(
                    "relative px-7 py-5 text-left text-[15px] font-semibold",
                    "bg-[linear-gradient(90deg,#4A1B72_0%,#370F4F_100%)]",
                    "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-black/35",
                    "after:content-[''] after:absolute after:inset-y-0 after:left-px after:w-px after:bg-white/10"
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    ProxyEmpire <span aria-hidden>🏰</span>
                  </span>
                </th>

                <th
                  className={cn(
                    "relative px-7 py-5 text-left text-[15px] font-semibold",
                    "bg-[linear-gradient(90deg,#4A1B72_0%,#370F4F_100%)]",
                    "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-black/35",
                    "after:content-[''] after:absolute after:inset-y-0 after:left-px after:w-px after:bg-white/10"
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    Competition <span aria-hidden>🦄</span>
                  </span>
                </th>
              </tr>
            </thead>

            <tbody className="text-[#3D2B4B]">
              {ROWS.map((r, idx) => (
                <tr key={r.feature} className={cn(idx % 2 === 0 && "bg-[#FBFAFF]")}>
                  <td className="border-t border-[#E9E3F2] px-7 py-5 align-top text-[15px] font-extrabold text-[#3B1B63]">
                    {r.feature}
                  </td>
                  <td className="border-t border-[#E9E3F2] px-7 py-5 align-top text-[15px] text-[#3D2B4B]">
                    {r.pe}
                  </td>
                  <td className="border-t border-[#E9E3F2] px-7 py-5 align-top text-[15px] text-[#3D2B4B]">
                    {r.comp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TEXT BLOCKS BELOW */}
      <div className="mx-auto mt-14 w-full max-w-270">
        <div className="space-y-7 text-[16px] leading-7 text-white/50">
          <div className="space-y-1.5">
            <p className="m-0 font-semibold text-white/70">Effortless Integration for a Smooth Initiation</p>
            <p className="m-0">
              ProxyEmpire’s revolving Residential Proxies are simple to incorporate and manage. Endpoint generator
              User-friendly documentation for developers Integration with third-party software Management of proxy users
              with Public ProxyEmpire API
            </p>
          </div>

          <div className="space-y-1.5">
            <p className="m-0 font-semibold text-white/70">No-Charge Targeting</p>
            <p className="m-0">
              Our Residential Proxy network extends across more than 170 countries and offers country, city, state, and ASN /
              ISP targeting. ProxyEmpire proxies facilitate access to location-specific content without hidden costs.
            </p>
          </div>

          <div className="space-y-1.5">
            <p className="m-0 font-semibold text-white/70">Unrestricted Concurrent Sessions</p>
            <p className="m-0">
              Unlike other proxy services, ProxyEmpire imposes no limit on concurrent sessions. Thus, you can effortlessly
              expand your data collection projects as needed.
            </p>
          </div>

          <div className="space-y-1.5">
            <p className="m-0 font-semibold text-white/70">Single Backconnect Access</p>
            <p className="m-0">
              A single backconnect proxy gives you entry to a continually alternating proxy pool, enabling sessions’ control
              and evading IP prohibitions and CAPTCHAs. Consequently, your scraping projects enjoy an average success rate of
              99.95%.
            </p>
          </div>

          <div className="space-y-1.5">
            <p className="m-0 font-semibold text-white/70">Reliable Residential Proxies</p>
            <p className="m-0">
              Our mission is to offer the best customer experience for our esteemed partners. While results may differ among
              individuals, we strive daily to secure our clients’ trust and support them in achieving success.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="space-y-1.5">
              <p className="m-0 font-semibold text-white/70">Monitor your Data Consumption</p>
              <p className="m-0">
                With the ProxyEmpire dashboard, managing your proxy usage becomes easy. Be assured your data collection
                initiatives will proceed without unexpected interruptions.
              </p>
            </div>

            <ul className="ml-5 list-disc space-y-2 marker:text-white/30">
              <li>Detailed statistics on proxy usage</li>
              <li>Creation and control of sub-users</li>
              <li>Management of proxy subscription</li>
              <li>Whitelisting of IPs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}