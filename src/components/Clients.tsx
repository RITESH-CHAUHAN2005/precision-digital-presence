import { useEffect, useRef, useState } from "react";

const Clients = () => {
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

  const clients = [
    { name: "FLSmidth", contribution: "56%" },
    { name: "Metso", contribution: "29%" },
    { name: "Tenneco", contribution: "" },
    { name: "Valmet", contribution: "" },
  ];

  return (
    <section id="clients" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Trusted Partners
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Proudly Serving <span className="text-accent">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-secondary rounded-2xl p-8 md:p-10 text-center card-lift border border-border hover:border-accent/30 transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-foreground mb-2">
                {client.name}
              </h3>
              {client.contribution && (
                <p className="font-inter text-accent font-semibold">
                  {client.contribution} Contribution
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-gradient-to-r from-primary via-primary to-navy-dark rounded-2xl p-8 md:p-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="font-inter text-white/80 mb-6 max-w-2xl mx-auto">
            Experience the Precision difference. We're committed to delivering quality, 
            precision, and reliability in every project we undertake.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
