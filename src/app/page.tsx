import Cover from "./components/cover/cover-section";
import HowItWorks from "./components/how-it-works/HowItWoks";
import DropDownMenu from "./components/cover/dropdown-menu";
import { PriceSection } from "./components/price/price-section";
import CTA from "./components/cta/cta";
import Footer from "./components/footer/footer-section";

export default function Home() {
  return (
    <>
      <Cover />
      <HowItWorks />
      <DropDownMenu />
      <PriceSection />
      <CTA />
      <Footer />
    </>
  );
}
