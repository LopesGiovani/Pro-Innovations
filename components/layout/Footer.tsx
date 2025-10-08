import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Construction Services", href: "/services" },
    { name: "Painting Services", href: "/services" },
    { name: "Carpentry Services", href: "/services" },
    { name: "Remodeling Services", href: "/services" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image 
              src="/logo.png" 
              alt="Pro Innovations" 
              width={120}
              height={48}
              className="h-12 mb-4 brightness-0 invert"
              style={{ width: "auto" }}
            />
            <p className="text-background/80 mb-4">
              Building Excellence, Delivering Quality. Professional construction and renovation services in Connecticut.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-background/80">213 mohegan dr, West Hartford, CT 06117, United States</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+18609360377"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  +1 (860) 936-0377
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:Ctproinnovations@gmail.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Ctproinnovations@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-background/80">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Pro Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
