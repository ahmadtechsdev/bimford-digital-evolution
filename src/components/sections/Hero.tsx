import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBgModern from "@/assets/hero-bg-modern.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-muted rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
              <span className="block text-foreground">Building</span>
              <span className="block gradient-text">Smarter</span>
              <span className="block text-foreground">Managing</span>
              <span className="block gradient-text">Better</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Digital transformation partners for the AECO industry, delivering{" "}
            <span className="text-foreground font-medium">measurable results</span> through innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="group">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </Button>
          </div>
          
          {/* Modern scroll indicator */}
          <div className="flex justify-center">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;