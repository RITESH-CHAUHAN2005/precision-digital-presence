import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import products1 from "@/assets/products-1.jpg";
import products2 from "@/assets/products-2.jpg";
import products3 from "@/assets/products-3.jpg";
import machining from "@/assets/machining.jpg";
import facility from "@/assets/facility.jpg";
import assembly from "@/assets/assembly.jpg";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const products = [
    { name: "Thickener Drive Parts", image: products1 },
    { name: "Filter Press Components", image: products2 },
    { name: "Disc Filter Parts", image: products3 },
    { name: "Slurry Pumps", image: machining },
    { name: "Hydro Cyclones", image: facility },
    { name: "Railway Bogie Wheels", image: assembly },
    { name: "Cone Crusher Parts", image: products1 },
    { name: "Custom Fabrication", image: products2 },
  ];

  return (
    <section id="products" ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-poppins font-semibold text-sm uppercase tracking-wider mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            What We Manufacture
          </p>
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Product <span className="text-accent">Categories</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg card-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-poppins font-bold text-lg text-white mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="font-inter text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Request Product Catalog
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
