import { Header } from "./components/Header";
import { HeroSection } from "./components/hero-section";
import { Footer } from "./components/Footer";
import { FeaturesSection } from "./components/features-section";
import { ComponentGrid } from "./components/component-grid";
import { NewsletterSection } from "./components/newsletter-section";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ComponentGrid/>
      <FeaturesSection/>
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}

