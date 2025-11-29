import { useEffect, useRef, useState } from "react";
import { Shield, Users, Building2, Award } from "lucide-react";
import factoryBg from "@/assets/factory.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustBadges = [
    { icon: Award, label: "ISO 9001:2015", sublabel: "Certified" },
    { icon: Users, label: "87+", sublabel: "Employees" },
    { icon: Building2, label: "14,000", sublabel: "Sq.m Facility" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${factoryBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy-dark/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className={`text-accent font-poppins font-semibold text-lg md:text-xl mb-4 tracking-wider uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Since 2007 • Bawal, Haryana
          </p>
          
          <h1
            className={`font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            WE BUILD{" "}
            <span className="text-accent">THE BEST</span>
          </h1>

          <p
            className={`font-inter text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Precision Engineering Products - Your trusted partner for heavy machinery 
            and automotive parts manufacturing with unmatched quality, precision, and reliability.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="#contact" className="btn-primary pulse-glow">
              Get a Quote
            </a>
            <a href="#capabilities" className="btn-outline">
              Our Capabilities
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="glass-stat rounded-xl p-6 flex items-center gap-4 card-lift"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <badge.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-poppins font-bold text-2xl text-foreground">
                    {badge.label}
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    {badge.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
