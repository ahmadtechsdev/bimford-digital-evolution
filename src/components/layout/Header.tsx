import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Briefcase, Info, Mail } from "lucide-react";
import bimfordLogo from "@/assets/bimford-logo-colored.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-[44px] w-full bg-background/90 backdrop-blur-xl border-b border-primary/10 z-40 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="transition-all duration-300 hover:scale-105 group">
            <img src={bimfordLogo} alt="BIMFord" className="h-6 md:h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-bold transition-all duration-300 relative group underline-hover ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-3 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="default" size="default" asChild>
              <Link to="/contact" className="font-bold">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-foreground hover:text-primary focus:outline-none transition-all duration-200 p-3 rounded-2xl hover:bg-primary/10">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 border-0">
                <div className="flex flex-col h-full bg-card rounded-r-3xl shadow-2xl">
                  {/* Logo Section */}
                  <div className="p-6 border-b border-border/50">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3">
                      <img src={bimfordLogo} alt="BIMFord" className="h-8 w-auto" />
                    </Link>
                  </div>

                  {/* Navigation Items */}
                  <nav className="flex-1 p-4 space-y-2">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive(item.href)
                              ? 'bg-primary/10 text-primary font-medium shadow-sm'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-base">{item.name}</span>
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Bottom CTA Section */}
                  <div className="p-6 border-t border-border/50 space-y-3">
                    <Button variant="default" size="lg" className="w-full" asChild>
                      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;