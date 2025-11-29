import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Casting Services",
    "CNC Machining",
    "Fabrication",
    "Assembly",
    "Quality Testing",
  ];

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Precision Group" className="h-20 w-auto mb-6" />
            <p className="font-inter text-white/70 leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer of heavy machinery and automotive parts. 
              Quality, Precision, Reliability since 2007.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-inter text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-inter text-white/70">info@precisions.co.in</p>
                  <p className="font-inter text-white/70">admin@precisions.co.in</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-inter text-white/70">+91 98125 09301</p>
                  <p className="font-inter text-white/70">+91 97281 59301</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="font-inter text-white/70">
                  IMT Bawal, Rewari<br />
                  Haryana - 123501
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-white/50 text-sm text-center md:text-left">
            © {currentYear} Precision Engineering Products. All rights reserved.
          </p>
          <p className="font-inter text-white/50 text-sm">
            We Build The Best
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
