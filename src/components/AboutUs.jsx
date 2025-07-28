import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#0A192F] text-[#E6F1FF] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-[#8892B0] mb-4 text-lg leading-relaxed">
            En <span className="text-[#64FFDA] font-medium">Abzu Tech Development</span> nos apasiona crear soluciones digitales de alto impacto.
            Somos un equipo multidisciplinario que combina diseño, desarrollo e inteligencia artificial para resolver desafíos reales en el mundo digital.
          </p>
          <p className="text-[#8892B0] text-lg leading-relaxed">
            Nuestra misión es ayudarte a construir productos funcionales, intuitivos y escalables que transformen tu visión en tecnología de vanguardia.
          </p>
        </div>

        {/* Optional Illustration or Image */}
        <div className="md:w-1/2">
          <img
            src="/about-illustration.jpg" // Reemplázalo por una ruta local o imagen que quieras usar
            alt="Ilustración de equipo tecnológico"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
