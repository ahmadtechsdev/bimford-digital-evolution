import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import bimfordLogo from "@/assets/bimford-logo-colored.svg";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={bimfordLogo} alt="BIMFord" className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm">
              Digital transformation partners for the Architecture, Engineering, Construction, and Operations (AECO) industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">BIM Modeling</li>
              <li className="text-muted-foreground">Coordination & Clash Detection</li>
              <li className="text-muted-foreground">Design Management</li>
              <li className="text-muted-foreground">Digital Twin</li>
              <li className="text-muted-foreground">BIM Consulting</li>
              <li className="text-muted-foreground">Operations Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <div>enquiries@bimford.com</div>
                  <div>bimford@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <div>US: +17866363978</div>
                  <div>UK: +44(0)7932448267</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <div>Florida, United States</div>
                  <div>Fulham High Street, London, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 BIMFord. All rights reserved.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex space-x-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;