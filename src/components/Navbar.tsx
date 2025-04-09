import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gold/20 shadow-lg relative">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gold opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold opacity-20"></div>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gold opacity-20"></div>
        <Link to="/" className="flex items-center group">
          <img src="/base_logo_transparent_background.png" alt="Legislar Consultoria" className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/sobre" className="text-charcoal hover:text-gold transition-colors duration-300 font-medium font-bold text-base tracking-wide">
            Sobre
          </Link>
          <Link to="/areas-de-atuacao" className="text-charcoal hover:text-gold transition-colors duration-300 font-medium font-bold text-base tracking-wide">
            Áreas de Atuação
          </Link>
          <Link to="/blog" className="text-charcoal hover:text-gold transition-colors duration-300 font-medium font-bold text-base tracking-wide">
            Blog
          </Link>
          <Link to="/contato" className="text-charcoal hover:text-gold transition-colors duration-300 font-medium font-bold text-base tracking-wide">
            Contato
          </Link>
          <Button className="bg-navy-blue text-white hover:bg-navy-blue/90 transition-all duration-300 shadow-md border border-navy-blue/20 px-6 py-2.5 font-medium text-base">
            Agende uma Consulta
          </Button>
        </div>
      </div>
    </nav>
  );
};