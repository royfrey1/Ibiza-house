import React from "react";
import imgmen from '../assets/hombre.jpg';
import imgwomen from '../assets/mujer.jpg';
import imgdeco from '../assets/accesorios.jpg';

export const Categorias = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen md:h-[70vh]">
                <CategoryCard title="Mujer" img={imgwomen} />
                <CategoryCard title="Hombre" img={imgmen} />
                <CategoryCard title="Accesorios" img={imgdeco} />
        </div>
  );
}   

const CategoryCard = ({ title, img }) => (
        <div className="relative group overflow-hidden border-r border-ibiza-sand last:border-0">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 z-10" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
            <h3 className="text-white font-serif text-4xl mb-4">{title}</h3>
            <button className="cursor-pointer text-white border-b border-white self-start text-xs uppercase tracking-widest pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más
            </button>
            </div>
            <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        );

export default Categorias;