import { CheckCircle, Users, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const approach = [
    {
      step: "Discover",
      description: "Understand your project goals, workflows, and challenges."
    },
    {
      step: "Define", 
      description: "Craft a BIM execution plan tailored to your needs."
    },
    {
      step: "Deliver",
      description: "Deploy models, processes, and standards that drive measurable results."
    },
    {
      step: "Develop",
      description: "Upskill your teams and support your operations beyond project delivery."
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Experience, Local Expertise",
      description: "Projects across multiple geographies with deep local understanding."
    },
    {
      icon: Zap,
      title: "Innovation-driven",
      description: "Leveraging AI, VR/AR, and automation for cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Client-first Philosophy",
      description: "Tailored solutions, not one-size-fits-all approaches."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About BIMFord
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are more than BIM consultants — we are digital transformation partners 
            for the Architecture, Engineering, Construction, and Operations (AECO) industry.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to close the gap between design intent and built reality, 
              BIMFord has grown into a trusted partner for global firms. Our team combines 
              deep AEC domain expertise with cutting-edge technology know-how.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">20–30% Cost Savings through early clash detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Real savings in time, cost, and resources</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Proven impact across global projects</span>
              </div>
            </div>
          </div>
          
          <div className="bg-accent rounded-lg p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">Industries We Serve</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Commercial Real Estate & High-Rise Buildings</li>
              <li>• Healthcare & Institutional Facilities</li>
              <li>• Industrial & Manufacturing Plants</li>
              <li>• Infrastructure (Roads, Bridges, Utilities)</li>
              <li>• Residential Complexes</li>
            </ul>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{step.step}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why BIMFord */}
        <div className="bg-muted rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Why BIMFord?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;