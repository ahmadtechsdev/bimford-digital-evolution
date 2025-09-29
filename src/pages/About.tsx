import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/layout/TopBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle, 
  Users, 
  Globe, 
  Zap, 
  Target, 
  Award,
  Building,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const approach = [
    {
      step: "Discover",
      icon: Target,
      description: "Understand your project goals, workflows, and challenges.",
      details: "We start by conducting comprehensive assessments of your current processes, identifying pain points, and understanding your specific requirements and objectives."
    },
    {
      step: "Define", 
      icon: Lightbulb,
      description: "Craft a BIM execution plan tailored to your needs.",
      details: "Based on our discovery phase, we develop a customized BIM Execution Plan (BEP) that aligns with your project goals, timeline, and budget constraints."
    },
    {
      step: "Deliver",
      icon: Zap,
      description: "Deploy models, processes, and standards that drive measurable results.",
      details: "Our expert team implements the agreed solutions using industry-leading tools and methodologies, ensuring quality delivery and measurable outcomes."
    },
    {
      step: "Develop",
      icon: TrendingUp,
      description: "Upskill your teams and support your operations beyond project delivery.",
      details: "We provide comprehensive training, ongoing support, and knowledge transfer to ensure your team can independently manage and maintain BIM processes."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-First Philosophy",
      description: "Every solution is tailored to your unique needs, not a one-size-fits-all approach."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "We leverage cutting-edge technologies like AI, VR/AR, and automation to deliver superior results."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 19650 compliant processes and rigorous quality control at every stage."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Projects across multiple geographies with deep local understanding and international standards."
    }
  ];

  const industries = [
    {
      title: "Commercial Real Estate",
      description: "High-rise buildings, office complexes, and mixed-use developments",
      projects: "150+ Projects"
    },
    {
      title: "Healthcare & Institutional",
      description: "Hospitals, educational facilities, and government buildings",
      projects: "80+ Projects"
    },
    {
      title: "Industrial & Manufacturing",
      description: "Production facilities, warehouses, and processing plants",
      projects: "60+ Projects"
    },
    {
      title: "Infrastructure",
      description: "Roads, bridges, utilities, and transportation systems",
      projects: "40+ Projects"
    },
    {
      title: "Residential Complexes",
      description: "Multi-family housing, condominiums, and residential developments",
      projects: "70+ Projects"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Building },
    { number: "20+", label: "Countries Served", icon: Globe },
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "30%", label: "Average Cost Savings", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                About BIMFord
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 leading-relaxed">
                We are more than BIM consultants — we are digital transformation partners 
                for the Architecture, Engineering, Construction, and Operations (AECO) industry.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to close the gap between design intent and built reality, 
                  BIMFord has grown into a trusted partner for global firms. Our journey began 
                  with a simple belief: technology should enhance human expertise, not replace it.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team combines deep AEC domain expertise with cutting-edge technology know-how. 
                  We've witnessed firsthand the challenges that plague construction projects — 
                  cost overruns, schedule delays, coordination issues, and sustainability concerns. 
                  That's why we've dedicated ourselves to developing solutions that address these 
                  fundamental challenges.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Founded on principles of innovation and excellence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Trusted by leading firms worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Proven track record of measurable results</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  To bridge the gap between vision and reality by harnessing the power of 
                  Building Information Modeling (BIM), Digital Twins, and AI-driven workflows.
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A construction industry where every project is delivered on time, within budget, 
                  and exceeds sustainability expectations through intelligent technology integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a collaborative, transparent, and data-driven process that ensures 
                successful project outcomes and long-term value creation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approach.map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.step}</CardTitle>
                        <CardDescription className="text-base">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From commercial high-rises to critical infrastructure, we deliver BIM excellence 
                across diverse sectors and project types.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{industry.projects}</span>
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose BIMFord?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence, innovation, and client success sets us apart 
                in the competitive BIM consulting landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Key Differentiators */}
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What Makes Us Different</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Certified professionals with 10+ years average experience</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
                    <p className="text-sm text-muted-foreground">Average 30% cost savings and 25% faster delivery</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Quality Guaranteed</h4>
                    <p className="text-sm text-muted-foreground">ISO 19650 compliant with rigorous QA processes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Projects?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Join hundreds of satisfied clients who have achieved remarkable results with BIMFord. 
                Let's discuss how we can help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/services">
                    Explore Our Services
                  </Link>
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

export default About;