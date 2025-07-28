import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#112240] text-[#E6F1FF] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contáctanos</h2>
        <p className="text-[#8892B0] text-lg mb-10">
          ¿Tienes un proyecto o una idea en mente? Completa el formulario y te responderemos pronto.
        </p>

        <form className="space-y-6 text-left">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 bg-[#0A192F] border border-[#8892B0] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
              required
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full px-4 py-3 bg-[#0A192F] border border-[#8892B0] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
              required
            />
          </div>

          <textarea
            placeholder="Tu mensaje"
            rows="5"
            className="w-full px-4 py-3 bg-[#0A192F] border border-[#8892B0] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#64FFDA] text-[#0A192F] font-semibold px-6 py-3 rounded-xl hover:bg-[#52e2c2] transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
