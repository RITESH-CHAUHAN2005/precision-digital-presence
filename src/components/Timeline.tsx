import { useEffect, useRef, useState } from "react";

const Timeline = () => {
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

  const milestones = [
    { year: "2007", event: "Company Conceptualized", revenue: "Foundation" },
    { year: "2008-10", event: "Initial Growth", revenue: "₹3 Cr" },
    { year: "2011-15", event: "Expansion Phase", revenue: "₹6 Cr" },
    { year: "2016-20", event: "Rapid Growth", revenue: "₹20 Cr" },
    { year: "2021-25", event: "Industry Leader", revenue: "₹62 Cr" },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Our Journey
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Growth <span className="text-accent">Timeline</span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div
            className={`absolute top-1/2 left-0 right-0 h-1 bg-accent/20 transform -translate-y-1/2 transition-all duration-1000 ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
          <div
            className={`absolute top-1/2 left-0 h-1 bg-accent transform -translate-y-1/2 transition-all duration-1500 ${
              isVisible ? "w-full" : "w-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />

          <div className="grid grid-cols-5 gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                {/* Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? "pb-20" : "pt-20"}`}>
                  <div
                    className={`bg-secondary rounded-xl p-6 card-lift border border-border hover:border-accent/30 ${
                      index % 2 === 0 ? "" : "mt-8"
                    }`}
                  >
                    <p className="font-poppins font-bold text-xl text-accent mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-poppins font-semibold text-foreground mb-2">
                      {milestone.event}
                    </h3>
                    <p className="font-inter text-2xl font-bold text-primary">
                      {milestone.revenue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-accent/20" />
          <div
            className={`absolute left-4 top-0 w-1 bg-accent transition-all duration-1500 ${
              isVisible ? "h-full" : "h-0"
            }`}
          />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative pl-12 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute left-2 top-6 w-5 h-5 bg-accent rounded-full border-4 border-white shadow-lg" />
                <div className="bg-secondary rounded-xl p-6 border border-border">
                  <p className="font-poppins font-bold text-lg text-accent mb-1">
                    {milestone.year}
                  </p>
                  <h3 className="font-poppins font-semibold text-foreground mb-2">
                    {milestone.event}
                  </h3>
                  <p className="font-inter text-xl font-bold text-primary">
                    {milestone.revenue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
