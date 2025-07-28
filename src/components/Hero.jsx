import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0A192F] text-[#E6F1FF] py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Soluciones digitales impulsadas por <span className="text-[#64FFDA]">tecnología e inteligencia artificial</span>
          </h1>
          <p className="text-[#8892B0] text-lg mb-8">
            En Abzu Tech transformamos ideas en plataformas innovadoras. Creamos sitios web modernos, apps multiplataforma y soluciones con IA para llevar tu negocio al siguiente nivel.
          </p>
          <a
            href="#contact"
            className="bg-[#64FFDA] text-[#0A192F] px-6 py-3 font-semibold rounded-xl shadow hover:bg-[#52e2c2] transition"
          >
            Solicita una demo
          </a>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="/hero-illustration.jpg" // Reemplaza con la ruta a tu ilustración o imagen
            alt="Ilustración tecnológica"
            className="max-w-md w-full"
          />
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#64FFDA] opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#64FFDA] opacity-10 blur-2xl rounded-full z-0" />
    </section>
  );
};

export default Hero;
