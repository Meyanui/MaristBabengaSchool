import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">
              Marist Bilingual Comprehensive College
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Excellence in Catholic education. Building character, knowledge, and faith since our foundation.
            </p>
            <p className="text-sm opacity-90">
              Part of the Marist Brothers global network present in 79 countries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm hover:text-secondary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm hover:text-secondary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/campus-life" className="text-sm hover:text-secondary transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Babenga – Bonaberi, Douala, Cameroon</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+237 677 84 76 34</span>
                  <span>+237 677 08 54 80</span>
                  <span>+237 677 04 38 96</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:principalmaristbabenga@gmail.com" className="hover:text-secondary transition-colors">
                  maristbcc@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Facebook size={16} className="flex-shrink-0" />
                <a href="https://www.facebook.com/maristdouala/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Marist Bilingual Comprehensive College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
