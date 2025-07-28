import React from "react";
import { Code, Smartphone, Brain } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios modernos, rápidos y seguros adaptados a cualquier dispositivo.",
    icon: <Code size={40} className="text-[#64FFDA]" />,
  },
  {
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas e híbridas con interfaces fluidas y escalables.",
    icon: <Smartphone size={40} className="text-[#64FFDA]" />,
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Soluciones inteligentes que automatizan procesos y optimizan decisiones.",
    icon: <Brain size={40} className="text-[#64FFDA]" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#112240] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0A192F] p-8 rounded-xl shadow-md hover:shadow-lg transition border border-[#1f2e4a]"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#8892B0]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
