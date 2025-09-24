import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/layout/TopBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Building,
  Users,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["enquiries@bimford.com", "bimford@gmail.com"],
      description: "Get in touch for project inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["US: +17866363978", "UK: +44(0)7932448267"],
      description: "Mon-Fri 9AM-6PM local time"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Florida, United States", "Fulham High Street, London, UK"],
      description: "Two strategic locations to serve you better"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: ["24 Hours"],
      description: "We respond to all inquiries quickly"
    }
  ];

  const whyChooseUs = [
    {
      icon: Building,
      title: "Proven Experience",
      description: "Successfully delivered 500+ projects across 20+ countries"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified BIM professionals with deep industry knowledge"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick project initiation and efficient delivery timelines"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Ready to transform your project with BIM? Get in touch with our experts 
                for a free consultation and see how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Get a Free Consultation</CardTitle>
                    <CardDescription>
                      Tell us about your project and we'll provide tailored recommendations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="projectType">Project Type</Label>
                          <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="commercial">Commercial Building</SelectItem>
                              <SelectItem value="residential">Residential Complex</SelectItem>
                              <SelectItem value="healthcare">Healthcare Facility</SelectItem>
                              <SelectItem value="industrial">Industrial Plant</SelectItem>
                              <SelectItem value="infrastructure">Infrastructure</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget">Project Budget (USD)</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-100k">Under $100K</SelectItem>
                              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                              <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                              <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                              <SelectItem value="over-5m">Over $5M</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                          required
                        />
                      </div>

                      <Button type="submit" variant="cta" size="lg" className="w-full">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: 'black' }}>Get in Touch</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <info.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                              <div className="space-y-1 mb-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-primary font-medium">{detail}</p>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose BIMFord?</CardTitle>
                    <CardDescription>
                      Join hundreds of satisfied clients worldwide
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {whyChooseUs.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Consultation Benefits */}
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle>Free Consultation Includes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-foreground">Project assessment & recommendations</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-foreground">BIM strategy development</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-foreground">Timeline & budget estimation</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-foreground">Technology recommendations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;