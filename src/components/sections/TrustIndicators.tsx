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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {indicator.title}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {indicator.description}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {indicator.subtitle}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Sectors */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Trusted by leading firms across industries
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="flex items-center">
                <span className="text-muted-foreground text-sm font-medium px-3 py-1 rounded-full bg-background/50">
                  {sector}
                </span>
                {index < sectors.length - 1 && (
                  <span className="text-muted-foreground/50 mx-2 hidden lg:inline">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;