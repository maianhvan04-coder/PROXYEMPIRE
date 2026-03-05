"use client";

import React from "react";
import { PricingCard, MiniCards } from "@/components/ui/Home/PricingParts/PricingParts";

export default function PricingShowcase() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F8F5FB] pt-2 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto w-full max-w-285 px-6">
        <h2 className="mt-8 md:mt-10 text-center text-[22px] font-semibold tracking-tight text-[#3A1D55] translate-y-4">
          Flexible Pricing Plan
        </h2>

        <PricingCard />
        <MiniCards />
      </div>
    </section>
  );
}