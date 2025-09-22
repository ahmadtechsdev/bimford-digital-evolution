import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
            Building Smarter.<br />
            Managing Better.<br />
            <span className="text-primary">Delivering Faster.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At BIMFord, we bridge the gap between vision and reality by harnessing the power of 
            Building Information Modeling (BIM), Digital Twins, and AI-driven workflows.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Partner with BIMFord Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-6">Trusted by leading firms worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground/70 text-sm">
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