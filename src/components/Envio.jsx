import React from "react";

const Envio = () => {
    return (
        <section className="bg-[#FDFCFB] border-t border-b border-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                    
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-3 text-ibiza-gold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="1" y="3" width="15" height="13"></rect>
                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                <circle cx="18.5" cy="18.5" r="2.5"></circle>
                            </svg>
                        </div>
                        <h3 className="text-[14px] uppercase tracking-[0.3em] font-bold text-black mb-1">Envío Gratis</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">En todas tus compras superiores a $X</p>
                    </div>

                    {/* Divisor visual solo en escritorio */}
                    <div className="hidden md:block h-8 w-[1px] bg-gray-400"></div>
                    
                    
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-3 text-ibiza-gold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 3h5v5"></path>
                                <path d="M4 20L21 3"></path>
                                <path d="M21 16v5h-5"></path>
                                <path d="M15 15l-9 9"></path>
                            </svg>
                        </div>
                        <h3 className="text-[14px] uppercase tracking-[0.3em] font-bold text-black mb-1">Cambio Fácil</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Gratuito por 30 días garantizado</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Envio;