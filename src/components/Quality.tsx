import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Shield, FileCheck, Award } from "lucide-react";
import isoCertificate from "@/assets/iso-certificate.jpg";

const Quality = () => {
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

  const qualityPoints = [
    "100% incoming material inspection and testing",
    "In-process quality checks at every manufacturing stage",
    "Final inspection with comprehensive documentation",
    "Full traceability from raw material to finished product",
    "Continuous improvement through customer feedback",
    "Regular internal and external audits",
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Certificate Side */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border hover:shadow-accent/20 transition-all duration-500">
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={isoCertificate} 
                    alt="ISO 9001:2015 Certificate" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                </div>
                
                {/* Certificate Content */}
                <div className="p-8 md:p-10 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/30 animate-pulse-slow">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="font-poppins font-bold text-3xl text-foreground mb-2">
                    ISO 9001:2015
                  </h3>
                  <p className="font-inter text-xl text-accent font-semibold mb-4">
                    Certified Company
                  </p>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    Quality Management System certified, demonstrating our commitment to 
                    consistently providing products that meet customer and regulatory requirements.
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>

          {/* Quality Policy Side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3">
              Quality Assurance
            </p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Our Commitment to <span className="text-accent">Excellence</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
              At Precision Engineering Products, quality isn't just a department—it's our culture. 
              Every component we manufacture undergoes rigorous quality checks to ensure it meets 
              the highest industry standards.
            </p>

            <div className="space-y-4">
              {qualityPoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 hover:translate-x-2 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <p className="font-inter text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
