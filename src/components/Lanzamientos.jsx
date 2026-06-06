import React from "react";


const Lanzamientos = () => {
    return (
        <section className="relative py-32 bg-gradient-to-t from-[#FDFCFB] to-[#E2D1C3] text-center px-4">
                <div className="relative z-20 text-center px-4">
                    <h2 className="font-serif !text-black/85 uppercase tracking-[0.2em] text-3xl mb-4">Únete al Club Ibiza House</h2>
                        <p className="text-gray-500 mb-8 pb-4 italic">Recibe un 15% de descuento en tu primera compra.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input 
                            type="email"
                            placeholder="Tu email aquí" 
                            className="placeholder-gray-600 border-b border-black/60 p-2 focus:outline-none w-full"
                        />
                        <button className="cursor-pointer bg-black text-white px-8 py-2 uppercase text-xs tracking-widest hover:bg-gray-800 transition-all duration-300 scale-100 hover:scale-105">
                            Suscribirme
                        </button>
                    </div>
                </div>        

                    {/* Wave que "entra" a la sección de abajo */}
                    <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path className="drop-shadow-[0_3px_12px_rgba(0,0,0,1)]" fill="#E2D1C3" fill-opacity="1" d="M0,320L12.6,272C25.3,224,51,128,76,117.3C101.1,107,126,181,152,181.3C176.8,181,202,107,227,64C252.6,21,278,11,303,37.3C328.4,64,354,128,379,144C404.2,160,429,128,455,112C480,96,505,96,531,90.7C555.8,85,581,75,606,69.3C631.6,64,657,64,682,74.7C707.4,85,733,107,758,128C783.2,149,808,171,834,170.7C858.9,171,884,149,909,117.3C934.7,85,960,43,985,64C1010.5,85,1036,171,1061,202.7C1086.3,235,1112,213,1137,202.7C1162.1,192,1187,192,1213,165.3C1237.9,139,1263,85,1288,58.7C1313.7,32,1339,32,1364,64C1389.5,96,1415,160,1427,192L1440,224L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path>
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path className="drop-shadow-[0_3px_12px_rgba(0,0,0,1)]" fill="#E2D1C3" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,192C480,171,600,85,720,96C840,107,960,213,1080,240C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>

                    </div>
      </section>
    );
}   

export default Lanzamientos;    