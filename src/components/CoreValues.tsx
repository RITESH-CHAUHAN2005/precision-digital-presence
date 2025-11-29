import { useEffect, useRef, useState } from "react";
import { Handshake, Users, Target, Award } from "lucide-react";

const CoreValues = () => {
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

  const values = [
    {
      icon: Handshake,
      title: "Co-operation",
      description: "Working together with clients and partners to achieve shared success through mutual support.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with stakeholders to deliver innovative engineering solutions.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Putting our clients first, understanding their needs, and exceeding their expectations.",
    },
    {
      icon: Award,
      title: "Professional Ethics",
      description: "Maintaining the highest standards of integrity, transparency, and ethical business practices.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Foundation
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Core <span className="text-accent">Values</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-secondary rounded-2xl p-8 text-center card-lift border border-transparent hover:border-accent/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-foreground mb-4">
                {value.title}
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
