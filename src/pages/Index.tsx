import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import HighlightsSection from "@/components/sections/HighlightsSection";
import About from "@/components/sections/About";
import ServicesOverview from "@/components/sections/ServicesOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <HighlightsSection />
        <About />
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
