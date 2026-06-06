import React from "react";
import imgmen from '../assets/ibiza-street.png';

const About = () => {
  return (
    <div className="pt-12 pb-24 px-6 max-w-5xl mx-auto bg-gradient-to-t from-[#FDFCFB] to-[#E2D1C3]">
      
      {/* 1. Encabezado de Sección */}
      <div className="text-center mb-40">
        <span className="text-[12px] uppercase tracking-[0.4em] text-gray-800 block mb-3">
          Nuestra Esencia
        </span>
        <h1 className="font-serif text-5xl uppercase md:text-7xl mb-4 PlayFair drop-shadow-[0_1.2px_4px_rgba(0,0,0,0.8)]">
          Sobre Nosotros
        </h1>
        <div className="w-50 h-[2px] bg-black/20 mx-auto mt-6"></div>
      </div>

      {/* 2. Bloque de Manifiesto / Historia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 mt-12">
        <div className="space-y-6 font-sans text-sm text-gray-600 leading-relaxed tracking-wide">
          <p className="font-serif text-xl text-black leading-snug tracking-normal pb-4">
            Ibiza House nace como un puente entre la frescura del mediterráneo y la sofisticación del diseño atemporal.
          </p>
          <p className="font-sans text-sm text-gray-600 leading-relaxed tracking-wide p-4">
            Creemos en la moda consciente. Nos alejamos de las tendencias masivas y efímeras para enfocarnos en la nobleza de los materiales, priorizando fibras orgánicas, texturas livianas y la caída perfecta del lino.
          </p>
          <p className="font-sans text-sm text-gray-600 leading-relaxed tracking-wide p-2">
            Cada prenda de nuestra colección está pensada para integrarse a tu día a día de forma natural, aportando elegancia sin esfuerzo y una comodidad absoluta en climas cálidos.
          </p>
          
        </div>
        
        {/* Espacio para una imagen conceptual de la marca */}
        <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden shadow-sm">
          <img 
            src={imgmen} 
            alt="Ibiza House Concepto" 
            className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
        <div className="w-50 h-[2px] bg-black/20 mx-auto mt-6"></div>
      {/* 3. Los Pilares de la Marca */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16 text-center">
        <div>
          <h3 className="font-serif text-lg uppercase tracking-widest mb-3 text-black">Fibras Nobles</h3>
          <p className="font-sans text-xs text-gray-500 tracking-wide leading-relaxed">
            Seleccionamos materiales de la más alta calidad, con un fuerte enfoque en el lino y algodones livianos.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg uppercase tracking-widest mb-3 text-black">Diseño Atemporal</h3>
          <p className="font-sans text-xs text-gray-500 tracking-wide leading-relaxed">
            Creamos siluetas que trascienden las temporadas, pensadas para durar años en tu guardarropa.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg uppercase tracking-widest mb-3 text-black">Estilo Relajado</h3>
          <p className="font-sans text-xs text-gray-500 tracking-wide leading-relaxed">
            Inspirados en la filosofía de la comodidad y la elegancia natural para el día y la noche.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;