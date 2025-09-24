import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/layout/TopBanner";
import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import HighlightsSection from "@/components/sections/HighlightsSection";
import About from "@/components/sections/About";
import ServicesOverview from "@/components/sections/ServicesOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <main className="pt-28">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustIndicators />
          <HighlightsSection />
          <About />
          <ServicesOverview />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
