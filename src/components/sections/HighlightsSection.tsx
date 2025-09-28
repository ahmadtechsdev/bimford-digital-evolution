import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Leaf, Settings } from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "20-30% Cost Savings",
      description: "Through early clash detection and 5D budgeting optimization"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "With 4D scheduling and optimized construction workflows"
    },
    {
      icon: Leaf,
      title: "Sustainable Results",
      description: "Powered by 6D energy modeling and lifecycle analysis"
    },
    {
      icon: Settings,
      title: "Smarter Operations",
      description: "With 7D digital asset management solutions"
    }
  ];

  return (
    <section className="py-40 bg-gradient-accent relative overflow-hidden">
      {/* Background Enhancement */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Why Choose <span className="gradient-text">BIMFord?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-normal">
            Proven results that drive measurable value for your construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group p-8 text-center border border-border/50 shadow-lg bg-card hover:shadow-brand">
              <div className="relative">
                <div className="mb-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-lg group-hover:bg-primary/20 transition-all duration-300"></div>
                    <div className="relative w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-elegant">
                      <highlight.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base group-hover:text-card-foreground transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;