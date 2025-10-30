import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Kutlerri
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center space-x-1 text-foreground hover:text-accent transition-smooth">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth border border-border">
                <div className="p-2">
                  <Link
                    to="/solutions/catering"
                    className="block px-4 py-3 hover:bg-secondary rounded-md transition-smooth"
                  >
                    <div className="font-medium">B2B Catering Leads</div>
                    <div className="text-sm text-muted-foreground">AI-powered lead generation</div>
                  </Link>
                  <Link
                    to="/solutions/intelligence"
                    className="block px-4 py-3 hover:bg-secondary rounded-md transition-smooth"
                  >
                    <div className="font-medium">Restaurant Intelligence</div>
                    <div className="text-sm text-muted-foreground">Cost & performance analytics</div>
                  </Link>
                  <Link
                    to="/solutions/delivery"
                    className="block px-4 py-3 hover:bg-secondary rounded-md transition-smooth"
                  >
                    <div className="font-medium">Delivery Optimization</div>
                    <div className="text-sm text-muted-foreground">Coming Soon</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/how-it-works"
              className={`${
                isActive("/how-it-works") ? "text-accent" : "text-foreground"
              } hover:text-accent transition-smooth`}
            >
              How It Works
            </Link>
            <Link
              to="/pricing"
              className={`${
                isActive("/pricing") ? "text-accent" : "text-foreground"
              } hover:text-accent transition-smooth`}
            >
              Pricing
            </Link>
            <Link
              to="/resources"
              className={`${
                isActive("/resources") ? "text-accent" : "text-foreground"
              } hover:text-accent transition-smooth`}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-accent" : "text-foreground"
              } hover:text-accent transition-smooth`}
            >
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button variant="cta" size="lg" asChild>
              <Link to="/audit">Get Free Audit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                to="/solutions/catering"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                B2B Catering Leads
              </Link>
              <Link
                to="/solutions/intelligence"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Restaurant Intelligence
              </Link>
              <Link
                to="/solutions/delivery"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Delivery Optimization
              </Link>
              <Link
                to="/how-it-works"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/pricing"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/resources"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </Button>
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/audit" onClick={() => setIsOpen(false)}>
                    Get Free Audit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
