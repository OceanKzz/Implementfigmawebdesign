import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BrandsBar } from "./components/BrandsBar";
import { AboutUs } from "./components/AboutUs";
import { StatisticSection } from "./components/StatisticSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { IndonesiaSection } from "./components/IndonesiaSection";
import { PaymentSolutions } from "./components/PaymentSolutions";
import { ValueSection } from "./components/ValueSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Navbar />
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
