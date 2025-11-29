import { useEffect, useRef, useState } from "react";
import ceoImage from "@/assets/ceo.png";
import procurementHeadImage from "@/assets/procurement-head.jpg";

const Leadership = () => {
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

  const leaders = [
    {
      name: "Mr. Satish Kumar",
      role: "Chief Executive Officer",
      image: ceoImage,
      description:
        "With over 25 years of experience in precision engineering and manufacturing, Mr. Satish Kumar leads Precision Group with a vision for excellence and innovation. His strategic leadership has been instrumental in establishing the company as a trusted partner for global industry leaders.",
      expertise: ["Strategic Planning", "Operations Management", "Business Development"],
    },
    {
      name: "Mr. Rakesh Sharma",
      role: "Procurement Head",
      image: procurementHeadImage,
      description:
        "Mr. Rakesh Sharma brings dynamic energy and expertise to our procurement operations. His focus on building strong supplier relationships and optimizing supply chain efficiency ensures we deliver quality products on time, every time.",
      expertise: ["Supply Chain Management", "Vendor Relations", "Cost Optimization"],
    },
  ];

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="section-padding bg-secondary"
    >
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Our Leadership
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Meet the <span className="text-accent">Visionaries</span>
          </h2>
          <p
            className={`font-inter text-muted-foreground mt-4 max-w-2xl mx-auto transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Driven by passion and expertise, our leadership team guides Precision Group 
            towards excellence in every endeavor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`bg-background rounded-2xl overflow-hidden shadow-xl card-lift border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                  <h3 className="font-poppins font-bold text-2xl text-white">
                    {leader.name}
                  </h3>
                  <p className="font-inter text-accent font-semibold">
                    {leader.role}
                  </p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                  {leader.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
