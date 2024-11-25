import Cover from "@/components/cover/cover-section";
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer-section";
import HowItWorks from "@/components/how-it-works/howItWoks";
import Price from "@/components/price";

export default function Home() {
  return (
    <>
      <Cover />
      <HowItWorks />
      <Price />
      <CTA />
      <Footer />
    </>
  );
}
