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
    { 
      name: "FLSmidth", 
      contribution: "56%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/FLSmidth_logo.svg/1200px-FLSmidth_logo.svg.png",
      description: "Global leader in mining and cement industries"
    },
    { 
      name: "Metso", 
      contribution: "29%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Metso_logo.svg/1200px-Metso_logo.svg.png",
      description: "Sustainable technology for mining and aggregates"
    },
    { 
      name: "Tenneco", 
      contribution: "",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tenneco_logo.svg/1200px-Tenneco_logo.svg.png",
      description: "Automotive components and systems"
    },
    { 
      name: "Valmet", 
      contribution: "",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Valmet_logo.svg/1200px-Valmet_logo.svg.png",
      description: "Pulp, paper and energy industries"
    },
  ];

  return (
    <section id="clients" ref={sectionRef} className="section-padding bg-background">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-secondary rounded-2xl p-6 md:p-8 text-center card-lift border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-500 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-16 md:h-20 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-poppins font-bold text-lg md:text-xl text-foreground mb-1">
                {client.name}
              </h3>
              <p className="font-inter text-sm text-muted-foreground mb-2">
                {client.description}
              </p>
              {client.contribution && (
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-inter font-semibold">
                  {client.contribution} Contribution
                </span>
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
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="font-inter text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
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
