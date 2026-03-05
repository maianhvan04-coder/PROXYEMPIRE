// src/components/ui/client/Home-V1/ScrapingApiTypesSection/ScrapingApiTypesBlock.tsx
"use client";

import React from "react";

export default function ScrapingApiTypesBlock() {
  return (
    <div className="max-w-280">
      <h2 className="text-white/95 font-semibold tracking-tight text-[25px] leading-[1.15] md:text-[25px] md:leading-[1.12]">
        Types of Residential Proxy Scraping API we offer:
      </h2>

      <p className="mt-7 text-[16px] leading-7 text-white/55">
        We offer three main <span className="font-semibold text-[#B892FF]">Web Scraping API</span> to use with all our{" "}
        <span className="font-semibold text-[#B892FF]">Residential Proxies</span>:
      </p>

      <div className="mt-8 space-y-10 text-[16px] leading-7 text-white/55">
        <p className="m-0">
          <span className="font-semibold text-[#B892FF]">SERP Scraping API:</span>{" "}
          A tool designed for extracting search engine results page (SERP) data, including search rankings, featured
          snippets, and related queries, ideal for SEO monitoring and keyword research.{" "}
          <span className="text-white/50">
            (eg: <span className="italic text-[#B892FF]">Google Scraper API</span>;{" "}
            <span className="italic text-[#B892FF]">Bing Scraper API</span>;{" "}
            <span className="italic text-[#B892FF]">DuckDuckGo Scraper API</span>...)
          </span>
        </p>
        <br />
        <p className="m-0">
          <span className="font-semibold text-[#B892FF]">Social Media Scraping API:</span>{" "}
          This API retrieves data from social networks, such as user profiles, posts, comments, hashtags, and engagement
          analytics, useful for social media analysis and brand monitoring.{" "}
          <span className="text-white/50">
            (eg: <span className="italic text-[#B892FF]">Facebook Scraper API</span>;{" "}
            <span className="italic text-[#B892FF]">Twitter Scraper API</span>;{" "}
            <span className="italic text-[#B892FF]">Instagram Scraper API</span>...)
          </span>
        </p>
        <br />
        <p className="m-0">
          <span className="font-semibold text-[#B892FF]">Ecommerce Scraping API:</span>{" "}
          An interface for automatically gathering product information, pricing, reviews, and more from online retail
          websites, assisting in market research, competitive analysis, and price comparison.{" "}
          <span className="text-white/50">
            (eg: <span className="italic text-[#B892FF]">Amazon Scraper API</span>;{" "}
            <span className="italic text-[#B892FF]">Etsy Scraper API</span>;{" "}
            <span className="italic text-[#B892FF]">Ebay Scraper API</span>...)
          </span>
        </p>
      </div>

      <p className="mt-12 text-[16px] leading-7 text-white/55">
        We cover <span className="font-semibold text-white/75 italic">all scraping use cases</span> that can be done with
        proxies.
      </p>
    </div>
  );
}