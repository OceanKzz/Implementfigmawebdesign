import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { BrandsBar } from "../components/BrandsBar";
import { AboutUs } from "../components/AboutUs";
import { StatisticSection } from "../components/StatisticSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { IndonesiaSection } from "../components/IndonesiaSection";
import { PaymentSolutions } from "../components/PaymentSolutions";
import { ValueSection } from "../components/ValueSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar activeItem="Home" />
      <HeroSection />
      <BrandsBar />
      <AboutUs />
      <StatisticSection />
      <FeaturesSection />
      <IndonesiaSection />
      <PaymentSolutions />
      <ValueSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
