import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-[#0A192F] text-[#E6F1FF] border-b border-[#112240]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#64FFDA]">Abzu Tech</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-[#8892B0] font-medium">
          <a href="#services" className="hover:text-[#64FFDA] transition">Servicios</a>
          <a href="#about" className="hover:text-[#64FFDA] transition">Nosotros</a>
          <a href="#contact" className="hover:text-[#64FFDA] transition">Contacto</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#64FFDA] focus:outline-none"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-2 text-[#8892B0] font-medium">
          <a href="#services" onClick={toggleMenu} className="block hover:text-[#64FFDA]">Servicios</a>
          <a href="#about" onClick={toggleMenu} className="block hover:text-[#64FFDA]">Nosotros</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-[#64FFDA]">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
