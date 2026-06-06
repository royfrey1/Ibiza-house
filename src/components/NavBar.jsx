import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-b from-[#FDFCFB] to-[#E2D1C3] border-b border-gray-600 sticky top-0 z-50">
      {/* Brand Logo as Text */}
      <Link to="/"  className="flex flex-col items-center landing-none">
        <span className="font-serif text-3xl text-black tracking-[0.3em] uppercase">
          Ibiza
        </span>
        <span className="font-sans text-[13px] tracking-[0.5em] uppercase mt-1 ml-1 text-gray-500">
          House
        </span>
      </Link>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-8 uppercase text-xs tracking-widest font-semibold">
          <Link to="/women" className="btn-nav">Mujer</Link>
          <Link to="/men" className="btn-nav">Hombre</Link>
          <Link to="/resort" className="btn-nav">Accesorios</Link>
          <Link to="/about" className="btn-nav">Sobre Nosotros</Link>
        </div>
    </nav>
  );


};

export default Navbar;