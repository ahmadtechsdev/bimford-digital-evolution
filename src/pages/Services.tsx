import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Layers, 
  GitBranch, 
  Brain, 
  BookOpen, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeService, setActiveService] = useState("modeling");

  const services = {
    modeling: {
      icon: Layers,
      title: "BIM Modeling & Dimensions",
      subtitle: "From 3D to 7D BIM Solutions",
      description: "Our modeling goes beyond simple 3D geometry. We create information-rich, intelligent models that evolve with your project — enabling collaboration, cost efficiency, and long-term asset management.",
      dimensions: [
        { level: "3D BIM", description: "High-precision architectural, structural, and MEP models" },
        { level: "4D BIM", description: "Time-linked models that simulate construction sequencing" },
        { level: "5D BIM", description: "Cost estimation embedded into the design for real-time budget control" },
        { level: "6D BIM", description: "Sustainability analytics, energy simulations, and green building compliance" },
        { level: "7D BIM", description: "Facility and asset management integration for post-construction value" }
      ],
      benefits: [
        "Reduce design errors by up to 40%",
        "Enhanced collaboration across all disciplines",
        "Real-time visibility on schedule and cost impacts",
        "Achieve sustainability targets through early energy modeling"
      ]
    },
    coordination: {
      icon: GitBranch,
      title: "BIM Coordination & Clash Detection",
      subtitle: "Seamless Integration Across Disciplines",
      description: "Poor coordination is the #1 cause of project delays and cost overruns. BIMFord ensures seamless integration across architectural, structural, and MEP disciplines — detecting and resolving clashes virtually before construction begins.",
      features: [
        "Federated model creation in a Common Data Environment (CDE)",
        "Automated clash detection using Navisworks, Solibri, and BIM360",
        "BIM Execution Plan (BEP) creation to align stakeholders",
        "Discipline-wise coordination meetings and reporting"
      ],
      benefits: [
        "Identify conflicts before construction → saving thousands in rework",
        "Reduce RFIs and site change orders",
        "Enable smooth collaboration between consultants, contractors, and subcontractors"
      ]
    },
    digital: {
      icon: Brain,
      title: "Digital Twin & Emerging Technologies",
      subtitle: "The Future of Construction Technology",
      description: "We take BIM into the future by integrating Digital Twins, AI, and immersive technologies — making your projects smarter, more predictive, and easier to operate.",
      innovations: [
        "Digital Twin Development: Real-time monitoring with IoT sensors",
        "AI & Machine Learning: Predictive maintenance, risk detection, and cost forecasting",
        "VR/AR Walkthroughs: Virtual mock-ups for stakeholders before breaking ground",
        "Generative Design: AI-assisted design alternatives for optimal efficiency",
        "Automation: Streamlining repetitive BIM tasks using scripts and custom tools"
      ],
      benefits: [
        "Predict failures before they occur",
        "Optimize energy use and reduce carbon footprint",
        "Deliver immersive client experiences through VR/AR",
        "Faster decision-making with AI-driven insights"
      ]
    },
    consulting: {
      icon: BookOpen,
      title: "BIM Consulting & Implementation",
      subtitle: "Strategic BIM Adoption",
      description: "Adopting BIM isn't just about software — it's about people, processes, and culture. BIMFord helps organizations transition smoothly to a BIM-enabled way of working.",
      services: [
        "BIM adoption strategy and roadmap",
        "Maturity assessment and process audit",
        "Standards development (ISO 19650 compliance)",
        "Training & workshops for project teams",
        "Support in software selection & deployment"
      ],
      benefits: [
        "Smooth BIM adoption with minimal disruption",
        "Skilled teams ready to maximize ROI on BIM investments",
        "Improved project workflows and standardization",
        "Compliance with international BIM standards"
      ]
    },
    operations: {
      icon: Settings,
      title: "Lifecycle & Operations Support",
      subtitle: "Long-term Asset Value",
      description: "Your BIM model is more than a design tool — it's a long-term asset. We help owners and operators leverage BIM for efficient operations, maintenance, and facility management.",
      services: [
        "As-built model creation and handover",
        "7D integration with Facility Management (FM) systems",
        "Renovation and retrofit BIM for existing structures",
        "Maintenance scheduling & asset lifecycle tracking",
        "Energy and performance monitoring"
      ],
      benefits: [
        "Improve operational efficiency and reduce downtime",
        "Extend building life with predictive maintenance",
        "Reduce lifecycle costs through data-driven planning",
        "Simplify handover and warranty tracking"
      ]
    }
  };

  const currentService = services[activeService as keyof typeof services];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Comprehensive BIM solutions that transform how you design, build, and operate. 
                From initial concept to long-term facility management.
              </p>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                <TabsTrigger value="modeling">Modeling</TabsTrigger>
                <TabsTrigger value="coordination">Coordination</TabsTrigger>
                <TabsTrigger value="digital">Digital Twin</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>

              {Object.entries(services).map(([key, service]) => (
                <TabsContent key={key} value={key} className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Service Details */}
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <p className="text-primary font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Service Features */}
                      {'dimensions' in service && (
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-foreground mb-4">BIM Dimensions</h3>
                          <div className="space-y-3">
                            {service.dimensions.map((dimension, index) => (
                              <div key={index} className="border border-border rounded-lg p-4">
                                <h4 className="font-medium text-foreground mb-1">{dimension.level}</h4>
                                <p className="text-sm text-muted-foreground">{dimension.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {'features' in service && (
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-foreground mb-4">What We Deliver</h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {'innovations' in service && (
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-foreground mb-4">Our Innovations</h3>
                          <ul className="space-y-2">
                            {service.innovations.map((innovation, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{innovation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {'services' in service && (
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-foreground mb-4">Our Services</h3>
                          <ul className="space-y-2">
                            {service.services.map((serviceItem, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{serviceItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Benefits Card */}
                    <div>
                      <Card className="mb-6">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <span>Key Benefits</span>
                          </CardTitle>
                          <CardDescription>
                            Real value delivered to our clients
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-primary" />
                            <span>Quality Assurance</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• ISO 19650 Compliant Processes</li>
                            <li>• Industry Best Practices</li>
                            <li>• Quality Control at Every Stage</li>
                            <li>• Experienced Professional Team</li>
                            <li>• Proven Track Record</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how our BIM services can transform your next project. 
                Get a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;