import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, Weight, Building } from "lucide-react";
import teamImg from "@/assets/team.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ year: 0, revenue: 0, production: 0, units: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounter("year", 2007, 2000);
          animateCounter("revenue", 62, 1500);
          animateCounter("production", 100, 1500);
          animateCounter("units", 2, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (key: keyof typeof counts, target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
    }, 16);
  };

  const stats = [
    { icon: Calendar, value: counts.year, label: "Established", suffix: "", prefix: "" },
    { icon: TrendingUp, value: counts.revenue, label: "Revenue (2021-25)", suffix: " Cr", prefix: "₹" },
    { icon: Weight, value: counts.production, label: "Tonnes/Month", suffix: "+", prefix: "" },
    { icon: Building, value: counts.units, label: "Manufacturing Units", suffix: "", prefix: "" },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Engineering Excellence{" "}
              <span className="text-accent">Since 2007</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg card-lift border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-poppins font-bold text-3xl md:text-4xl text-foreground">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </p>
                  <p className="font-inter text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Description Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <img
                src={teamImg}
                alt="Precision Engineering Team"
                className="rounded-2xl shadow-2xl w-full object-cover h-[300px] md:h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                <p className="font-poppins font-bold text-4xl">18+</p>
                <p className="font-inter text-sm">Years of Excellence</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
                Precision Engineering Products is an <strong className="text-foreground">ISO 9001:2015 certified</strong> company 
                specializing in heavy machinery and automotive parts manufacturing. Based in IMT Bawal, Haryana, 
                we operate from a <strong className="text-foreground">14,000 sq.m state-of-the-art facility</strong> with 87+ skilled professionals.
              </p>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Our commitment to <strong className="text-foreground">Quality, Precision, Reliability, and Partnership</strong> has made us 
                a trusted supplier to global industry leaders including FLSmidth, Metso, Tenneco, and Valmet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
