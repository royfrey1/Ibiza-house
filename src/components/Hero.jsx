import React from 'react';
import banner from '../assets/banner.jpg';


const Hero = () => {
  return (
    <div id='hero' className="bg-white min-h-screen text-ibiza-dark font-sans">
      
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src={banner} 
          alt="Ibiza Lifestyle" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-4 PlayFair drop-shadow-[0_1.2px_4px_rgba(0,0,0,0.8)]">IBIZA HOUSE</h1>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-8">
            Estilo que trasciende el verano. Moda exclusiva inspirada en la isla blanca.
          </p>
          <button className="cursor-pointer border border-white bg-ibiza text-white mt-8 px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-white/30 hover:text-white transition-all duration-300">
            Explorar Colección
          </button>
        </div>
      </header>
    </div>
  );
};
 
export default Hero;