import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Kutlerri
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              We Grow Restaurants — Intelligently.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span>United States</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:hello@kutlerri.com" className="hover:text-accent transition-smooth">
                  hello@kutlerri.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-smooth">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/catering" className="hover:text-accent transition-smooth">
                  B2B Catering Lead Gen
                </Link>
              </li>
              <li>
                <Link to="/solutions/intelligence" className="hover:text-accent transition-smooth">
                  Restaurant Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions/delivery" className="hover:text-accent transition-smooth">
                  Delivery Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-accent transition-smooth">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-accent transition-smooth">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/resources" className="hover:text-accent transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources#case-studies" className="hover:text-accent transition-smooth">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources#calculator" className="hover:text-accent transition-smooth">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kutlerri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
