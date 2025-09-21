import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const highlights = [
    "20–30% Cost Savings through early clash detection",
    "Faster Project Delivery with 4D scheduling",
    "Sustainable Results with 6D energy modeling",
    "Smarter Operations with 7D digital asset management"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Smarter.<br />
            Managing Better.<br />
            <span className="text-primary-glow">Delivering Faster.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            At BIMFord, we bridge the gap between vision and reality by harnessing the power of 
            Building Information Modeling (BIM), Digital Twins, and AI-driven workflows.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3 text-left">
                <CheckCircle className="h-5 w-5 text-primary-glow mt-1 flex-shrink-0" />
                <span className="text-white/90 text-sm md:text-base">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Partner with BIMFord Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by leading firms worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <span>Commercial Real Estate</span>
              <span>•</span>
              <span>Healthcare Facilities</span>
              <span>•</span>
              <span>Industrial Plants</span>
              <span>•</span>
              <span>Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;