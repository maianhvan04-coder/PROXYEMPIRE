import FaqSection from "@/components/layouts/client/sections/home/FaqSection";
import FeatureComparisonSection from "@/components/layouts/client/sections/home/FeatureComparisonSection";
import GeoSpecificContentSection from "@/components/layouts/client/sections/home/GeoSpecificContentSection";
import HeroProxy from "@/components/layouts/client/sections/home/HeroProxyEmpire";
import LargestResidentialSection from "@/components/layouts/client/sections/home/LargestResidentialSection";
import MidTrustBadgesBar from "@/components/layouts/client/sections/home/MidTrustBadgesBar";
import MobileProxiesSection from "@/components/layouts/client/sections/home/MobileProxiesSection";
import NoLimitsSection from "@/components/layouts/client/sections/home/NoLimitsSection";
import OrganicScrapingSection from "@/components/layouts/client/sections/home/OrganicScrapingSection";
import PricingShowcase from "@/components/layouts/client/sections/home/PricingShowcase";
import ResidentialProxiesSection from "@/components/layouts/client/sections/home/ResidentialProxiesSection";
import ScrapingApiTypesSection from "@/components/layouts/client/sections/home/ScrapingApiTypesSection";
import SuperiorQualitySection from "@/components/layouts/client/sections/home/SuperiorQualitySection";
import UseCasesShowcaseSection from "@/components/layouts/client/sections/home/UseCasesShowcaseSection";
import WhyChooseSection from "@/components/layouts/client/sections/home/WhyChooseSection";
import ProxiesWrap from "@/styles/ProxiesWrap/ProxiesWrap";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#0b0a1a] overflow-x-hidden">
      {/* ✅ container giới hạn */}
      <HeroProxy />
      <div className="mx-auto w-full max-w-285 px-4 sm:px-6 lg:px-0">
        <MidTrustBadgesBar />
        <PricingShowcase />
      </div>
      <ProxiesWrap>
        <ResidentialProxiesSection />
        <MobileProxiesSection />
        <NoLimitsSection />
        <FaqSection />
      </ProxiesWrap>
      <UseCasesShowcaseSection />
      <ProxiesWrap>
        <OrganicScrapingSection />
        <GeoSpecificContentSection />
        <LargestResidentialSection />
        <WhyChooseSection />
        <FeatureComparisonSection />
        <SuperiorQualitySection />
        <ScrapingApiTypesSection />
      </ProxiesWrap>
    </main>
  );
}