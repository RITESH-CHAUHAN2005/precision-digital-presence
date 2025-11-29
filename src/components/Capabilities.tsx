import { useEffect, useRef, useState } from "react";
import { Factory, Cog, Wrench } from "lucide-react";

const Capabilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      icon: Factory,
      title: "Casting",
      capacity: "Up to 1500 Kg",
      description: "Advanced foundry capabilities with precision casting for complex geometries and various alloys including steel, iron, and specialized metals.",
      features: ["Sand Casting", "Investment Casting", "Die Casting", "Quality Testing"],
    },
    {
      icon: Cog,
      title: "Machining",
      capacity: "CNC Precision",
      description: "State-of-the-art CNC machining centers delivering tight tolerances and superior surface finishes for critical components.",
      features: ["CNC Turning", "CNC Milling", "Grinding", "Threading"],
    },
    {
      icon: Wrench,
      title: "Fabrication & Assembly",
      capacity: "Full Service",
      description: "Complete fabrication and assembly solutions including welding, surface treatment, and final assembly of complex machinery.",
      features: ["Welding", "Heat Treatment", "Surface Coating", "Assembly"],
    },
  ];

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="section-padding bg-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Our Expertise
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Manufacturing <span className="text-accent">Capabilities</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <cap.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-poppins font-bold text-2xl text-white mb-2">
                {cap.title}
              </h3>
              <p className="font-poppins font-semibold text-accent text-lg mb-4">
                {cap.capacity}
              </p>
              <p className="font-inter text-white/80 leading-relaxed mb-6">
                {cap.description}
              </p>
              
              <ul className="space-y-2">
                {cap.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-inter text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
