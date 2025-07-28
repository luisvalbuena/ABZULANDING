import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-[#8892B0] py-10 px-6 border-t border-[#112240]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Nombre */}
        <div className="text-lg font-semibold text-[#64FFDA]">Abzu Tech Development</div>

        {/* Links */}
        <nav className="flex space-x-6 text-sm">
          <a href="#services" className="hover:text-[#64FFDA] transition">Servicios</a>
          <a href="#about" className="hover:text-[#64FFDA] transition">Nosotros</a>
          <a href="#contact" className="hover:text-[#64FFDA] transition">Contacto</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA]">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64FFDA]">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hola@abzutech.com" className="hover:text-[#64FFDA]">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-xs text-[#586178]">
        © {new Date().getFullYear()} Abzu Tech Development. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
