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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6 gradient-text">
            Why Choose BIMFord?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proven results that drive measurable value for your construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group p-10 text-center card-hover bg-background border-0 shadow-lg">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <highlight.icon className="h-10 w-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {highlight.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;