import React from 'react';
import oferta from '../assets/ofertas.jpg';
import img1 from '../assets/ofertas/abrigo1.jpg';
import img2 from '../assets/ofertas/abrigo2.jpg';
import img3 from '../assets/ofertas/bota1.jpg';
import img4 from '../assets/ofertas/cartera1.jpg';
import img5 from '../assets/ofertas/pantalon1.jpg';

const Ofertas = () => {

  const ofertas = [
    { id: 1, name: "Campera Polar", price: "$50.000", img: img1 },
    { id: 2, name: "Buzo \"Brooklin\"", price: "$25.000", img: img2 },
    { id: 3, name: "Bota estilo coreana", price: "$40.000", img: img3 },
    { id: 4, name: "Cartera mini Bag", price: "$30.000", img: img4 },
    { id: 5, name: "Pantalon oversize mujer", price: "$40.500", img: img5 },
  ];

  return (
    <section className="relative py-28 bg-white">
      <div className="absolute mt-[-1px] top-0 right-0 w-full leading-[0] z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path className='drop-shadow-[0_6px_5px_rgba(0,0,0,0.8)]' fill="#E2D1C3" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,192C480,171,600,85,720,96C840,107,960,213,1080,240C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      <div className="bg-white min-h-screen text-ibiza-dark font-sans">
            
            {/* Hero Section */}
            <header className="relative h-[80vh] mt-[-80px] flex items-center justify-center overflow-hidden">
              <div className=" absolute inset-0 bg-black/20 z-10" />
              <img 
                src={oferta} 
                alt="Ibiza Lifestyle" 
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />
              <div className="relative z-20 text-center text-white px-4">
                <h1 className="font-serif text-5xl md:text-7xl mb-4 PlayFair"><span className='drop-shadow-[0_1.2px_4px_rgba(0,0,0,0.8)]'>OFERTAS IMPERDIBLES!</span></h1>
                <p className="text-lg md:text-xl pb-4 font-light tracking-wide max-w-2xl mx-auto mb-8">
                  Recorre nuestra seccion de ofertas especiales.
                </p>
                <button className="cursor-pointer border border-white bg-ibiza text-white px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-white/30 hover:text-white transition-all duration-300">
                  
                  Ver Ofertas
                </button>
              </div>
            </header>
          </div>
          
          <section className="bg-gradient-to-b from-[#FDFCFB] to-[#E2D1C3] py-0 overflow-hidden">
            <div className="cursor-pointer flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 gap-6">
              {ofertas.map(item => (
                <div key={item.id} className="rounded-lg shadow-xl shadow-black/30 min-w-[280px] md:min-w-[350px] snap-center group">
                  <div className="relative overflow-hidden h-[450px]">
                    <img src={item.img} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <span className="absolute top-4 left-4 bg-black text-white text-[10px] px-3 py-1 uppercase tracking-tighter">Oferta</span>
                  </div>
                  <div className="bg-black text-white pt-4 pb-4 text-center border-t border-2 border-[#E2D1C3] rounded-b-lg">
                    <p className="font-sans text-xs uppercase tracking-widest">{item.name}</p>
                    <p className="font-serif text-lg">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
    </section>
  );
};

export default Ofertas;