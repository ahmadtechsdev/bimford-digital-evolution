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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose BIMFord?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven results that drive measurable value for your construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;