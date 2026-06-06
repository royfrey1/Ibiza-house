import { Link } from 'react-router-dom';

const Proximamente = ({ seccion }) => {
  return (
    <div className="pt-36 pb-24 px-6 min-h-[75vh] flex flex-col items-center justify-center text-center bg-ibiza-sand text-ibiza-dark">
      <div className="max-w-md mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-3">
          Ibiza House — Colección
        </span>
        
        <h1 className="font-serif text-4xl uppercase tracking-[0.2em] mb-6">
          {seccion}
        </h1>
        
        <div className="w-12 h-[1px] bg-black/20 mx-auto mb-6"></div>
        
        <p className="font-sans text-sm tracking-wide text-gray-500 leading-relaxed mb-10">
          Estamos preparando los mejores productos para esta sección. 
          Muy pronto vas a poder disfrutar de nuestra colección exclusiva en la tienda online.
        </p>
        
        <Link 
          to="/" 
          className="inline-block border border-black text-[11px] uppercase tracking-[0.2em] px-8 py-3 m-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default Proximamente;