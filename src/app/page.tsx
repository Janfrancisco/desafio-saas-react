import Cover from "@/components/cover/cover-section";
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer-section";
import HowItWorks from "@/components/how-it-works/HowItWoks";
import { PriceSection } from "@/components/price/price-section";

export default function Home() {
  return (
    <>
      <Cover />
      <HowItWorks />
      <PriceSection />
      <CTA />
      <Footer />
    </>
  );
}
