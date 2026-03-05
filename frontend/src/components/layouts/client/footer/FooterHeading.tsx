// src/components/ui/client/Home-V1/Footer/components/FooterHeading.tsx
import React from "react";

export default function FooterHeading({ children }: { children: React.ReactNode }) {
  return <div className="text-[17px] leading-5.5 font-semibold text-[#2A1238]">{children}</div>;
}