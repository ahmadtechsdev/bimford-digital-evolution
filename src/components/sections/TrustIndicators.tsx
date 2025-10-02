import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Trophy, Globe } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Building2,
      title: "100+",
      description: "Projects Delivered",
      subtitle: "Across multiple industries"
    },
    {
      icon: Users,
      title: "50+",
      description: "Global Clients",
      subtitle: "Trusted partnerships"
    },
    {
      icon: Trophy,
      title: "99%",
      description: "Success Rate",
      subtitle: "On-time delivery"
    },
    {
      icon: Globe,
      title: "25+",
      description: "Countries",
      subtitle: "Worldwide presence"
    }
  ];

  const sectors = [
    "Commercial Real Estate",
    "Healthcare Facilities", 
    "Industrial Plants",
    "Infrastructure",
    "Educational Institutions",
    "Residential Complexes"
  ];

  return (
    <section className="py-40 bg-gradient-accent relative overflow-hidden">
      {/* Background Enhancement */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {indicators.map((indicator, index) => (
            <Card key={index} className="group text-center p-12 border-0 shadow-xl bg-background/95 backdrop-blur-md hover:bg-gradient-card hover:shadow-brand">
              <div className="relative">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
                  <indicator.icon className="h-16 w-16 mx-auto text-primary mb-8 transition-all duration-300 group-hover:scale-125 group-hover:text-primary/90 relative z-10" />
                </div>
                <h3 className="text-6xl font-black mb-4 gradient-text group-hover:scale-110 transition-transform duration-300">{indicator.title}</h3>
                <p className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{indicator.description}</p>
                <p className="text-sm text-muted-foreground font-medium">{indicator.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Industries Served */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-16 text-foreground">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sectors.map((sector, index) => (
              <span 
                key={index}
                className="bg-background/95 backdrop-blur-md px-10 py-5 rounded-full text-base font-semibold text-foreground border-2 border-primary/20 hover:border-primary hover:shadow-brand hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:text-primary shimmer"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;