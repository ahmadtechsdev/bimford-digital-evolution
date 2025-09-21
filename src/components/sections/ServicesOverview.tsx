import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, GitBranch, Brain, BookOpen, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Layers,
      title: "BIM Modeling & Dimensions",
      description: "From 3D to 7D BIM - intelligent models that evolve with your project, enabling collaboration, cost efficiency, and long-term asset management.",
      benefits: ["Reduce design errors by 40%", "Real-time budget control", "Sustainability analytics"]
    },
    {
      icon: GitBranch,
      title: "BIM Coordination & Clash Detection",
      description: "Seamless integration across all disciplines. Detect and resolve clashes virtually before construction begins.",
      benefits: ["Prevent budget overruns", "Reduce RFIs", "Smooth collaboration"]
    },
    {
      icon: Brain,
      title: "Digital Twin & Emerging Technologies",
      description: "Take BIM into the future with Digital Twins, AI, and immersive technologies for smarter, more predictive projects.",
      benefits: ["Predict failures early", "Optimize energy use", "Immersive VR/AR experiences"]
    },
    {
      icon: BookOpen,
      title: "BIM Consulting & Implementation",
      description: "Smooth BIM adoption with comprehensive strategy, training, and standards development for your organization.",
      benefits: ["ISO 19650 compliance", "Skilled teams", "Improved workflows"]
    },
    {
      icon: Settings,
      title: "Lifecycle & Operations Support", 
      description: "Leverage BIM for efficient operations, maintenance, and facility management throughout the building lifecycle.",
      benefits: ["Reduce downtime", "Extend building life", "Data-driven planning"]
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive BIM solutions that transform how you design, build, and operate. 
            From initial concept to long-term facility management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-lg p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Projects?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover how our comprehensive BIM services can save you time, reduce costs, 
            and deliver better results on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;