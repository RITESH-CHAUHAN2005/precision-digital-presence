import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Products from "@/components/Products";
import Capabilities from "@/components/Capabilities";
import Clients from "@/components/Clients";
import Quality from "@/components/Quality";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Leadership />
      <About />
      <CoreValues />
      <Products />
      <Capabilities />
      <Clients />
      <Quality />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
