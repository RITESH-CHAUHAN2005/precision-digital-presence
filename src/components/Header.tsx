import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Precision Group Logo" 
            className={`h-14 md:h-16 w-auto transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert"
            }`} 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-inter font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919812509301"
            className={`flex items-center gap-2 font-inter ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 98125 09301
          </a>
          <a href="#contact" className="btn-primary text-sm">
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} size={28} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 font-inter text-foreground hover:bg-secondary hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 py-4 border-t mt-2">
              <a href="#contact" className="btn-primary w-full text-center block">
                Get a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
