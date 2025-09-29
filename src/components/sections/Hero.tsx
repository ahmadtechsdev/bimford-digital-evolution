import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBgModern from "@/assets/hero-bg-modern.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight">
              <span className="gradient-text animate-fade-in">Building Smarter Managing Better</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-20 text-muted-foreground max-w-5xl mx-auto leading-relaxed font-normal animate-fade-in" style={{animationDelay: '0.8s'}}>
            Digital transformation partners for the AECO industry, delivering{" "}
            <span className="text-primary font-medium">measurable results</span> through innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-32 animate-fade-in" style={{animationDelay: '1s'}}>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" className="group">
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/services" className="group">
                Explore Services
                <ArrowRight className="ml-3 h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </Button>
          </div>
          
          {/* Enhanced scroll indicator */}
          <div className="flex justify-center animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="w-8 h-14 border-2 border-primary/40 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-2 h-4 bg-primary rounded-full mt-3 animate-bounce"></div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;