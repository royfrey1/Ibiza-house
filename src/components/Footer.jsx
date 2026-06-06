import React from "react";


const Footer = () => {
    return (    
        <footer className="relative bg-gradient-to-b from-[#FDFCFB] to-[#E2D1C3] pt-20 pb-10 border-t border-gray-100">
            
            <div className="absolute left-0 bottom-0 w-full leading-[0] z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path className="drop-shadow-[0_3px_6px_rgba(0,0,0,1)]" fill="#E2D1C3" fill-opacity="1" d="M0,128L48,106.7C96,85,192,43,288,69.3C384,96,480,192,576,245.3C672,299,768,309,864,314.7C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                
            </div>
            
            <div className="relative container mx-auto px-4 flex flex-col items-center">
                <div className="drop-shadow-[0_2px_3px_rgba(0,0,0,1)] font-serif text-3xl text-black tracking-[0.3em] uppercase mb-10">IBIZA HOUSE</div>
                
                <div className="mb-16 flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full max-w-4xl">

                    <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)] glass-card glass-card::before glass-card::after flex flex-col items-center text-center">
                        <h4 className="text-lg uppercase tracking-widest font-bold mb-4">Redes sociales</h4>
                        <ul className="text-sm space-y-2 uppercase tracking-widest text-gray-400">
                            <li><a href="#" className="hover:text-black">Instagram</a></li>
                            <li><a href="#" className="hover:text-black">Facebook</a></li>
                        </ul>
                    </div>

                    <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,1)] glass-card glass-card::before glass-card::after flex flex-col items-center text-center">
                        <h4 className="text-lg uppercase tracking-widest font-bold mb-4">Contactanos</h4>
                        <ul className="text-sm space-y-2 uppercase tracking-widest text-gray-400">
                            <li><a href="#" className="hover:text-black">WhatsApp</a></li>
                            <li><a href="#" className="hover:text-black">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-800">
                    <p>© 2026 Ibiza House. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0 italic">
                        Desarrollado por 
                        <a 
                            href="https://portfolio-royf.vercel.app/"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-bold text-black hover:underline transition-all duration-300 ml-1"
                        >
                            Roy Frey
                        </a>
                    </p>
                </div>
            
            </div> 
        </footer>
    );
};

export default Footer;