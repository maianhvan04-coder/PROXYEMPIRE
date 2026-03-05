// src/components/ui/client/Home-V1/Footer/Footer.tsx
"use client";

import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto w-full max-w-295 px-6 pt-14 pb-10">
        <FooterTop />

        {/* Divider */}
        <div className="mt-8 mx-6 border-t border-[#ECEAF7]" />

        <FooterBottom />
      </div>
    </footer>
  );
}