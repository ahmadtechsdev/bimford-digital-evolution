import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Trophy, Globe } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Building2,
      title: "500+",
      description: "Projects Delivered",
      subtitle: "Across multiple industries"
    },
    {
      icon: Users,
      title: "200+",
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
    <section className="py-32 bg-gradient-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {indicators.map((indicator, index) => (
            <Card key={index} className="group text-center p-10 card-hover bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="mb-6">
                <indicator.icon className="h-14 w-14 mx-auto text-foreground mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-5xl font-bold text-foreground mb-3 gradient-text">{indicator.title}</h3>
                <p className="text-lg font-semibold text-foreground mb-2">{indicator.description}</p>
                <p className="text-sm text-muted-foreground">{indicator.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Industries Served */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-12 text-foreground">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector, index) => (
              <span 
                key={index}
                className="bg-background/90 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-medium text-foreground border border-border/50 hover:shadow-lg hover:bg-background transition-all duration-200 hover:scale-105"
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