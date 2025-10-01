import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const TopBanner = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="fixed top-0 w-full bg-primary text-primary-foreground py-2 text-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>US: +17866363978</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>enquiries@bimford.com</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Florida, US | London, UK</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs opacity-80">Follow us:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.label}
                >
                  <social.icon className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;