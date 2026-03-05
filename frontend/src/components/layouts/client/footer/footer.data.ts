// src/components/ui/client/Home-V1/Footer/footer.data.ts
export type L = { label: string; href: string };

export const COMPANY: L[] = [
  { label: "Affiliate Program", href: "/#" },
  { label: "All Locations", href: "/#" },
  { label: "All Use Cases", href: "/#" },
  { label: "All Integrations", href: "/#" },
  { label: "All Targets", href: "/#" },
  { label: "Blog", href: "/#" },
  { label: "Knowledge Base", href: "/#" },
  { label: "Proxies by ISP", href: "/#" },
  { label: "Proxy Checker", href: "/#" },
];

export const PROXY_TYPES: L[] = [
  { label: "Rotating Residential Proxies", href: "/#" },
  { label: "Rotating Mobile Proxies", href: "/#" },
  { label: "Unlimited Residential Proxies", href: "/#" },
  { label: "Static Residential Proxies", href: "/#" },
  { label: "Rotating Datacenter Proxies", href: "/#" },
  { label: "Dedicated 4G & 5G Proxies", href: "/#" },
];

export const SCRAPING_TOOLS: L[] = [
  { label: "Scraping API", href: "/#" },
  { label: "Ecommerce Scraping API", href: "/#" },
  { label: "SERP Scraping API", href: "/#" },
  { label: "Social Media Scraping API", href: "/#" },
  { label: "Scraping Use Cases", href: "/#" },
];

export const TOP_LOCATIONS: L[] = [
  { label: "Australia", href: "/#" },
  { label: "Brazil", href: "/#" },
  { label: "Canada", href: "/#" },
  { label: "China Proxies", href: "/#" },
  { label: "France Proxies", href: "/#" },
  { label: "Germany Proxies", href: "/#" },
  { label: "India Proxies", href: "/#" },
  { label: "Spain Proxies", href: "/#" },
  { label: "Turkey Proxies", href: "/#" },
  { label: "UAE Proxies", href: "/#" },
  { label: "UK Proxies", href: "/#" },
  { label: "USA Proxies", href: "/#" },
];

export const SUMMARY = [
  { icon: "🏠", label: "Residential Proxies:", value: "Rotating / Static / Unlimited" },
  { icon: "📱", label: "Mobile Proxies:", value: "Rotating and Dedicated" },
  { icon: "🖥️", label: "Datacenter Proxies:", value: "Rotating" },
  { icon: "🌐", label: "Proxy Locations:", value: "30M+ Proxies - Worldwide coverage" },
  { icon: "🚀", label: "Speed:", value: "High-speed connections" },
] as const;