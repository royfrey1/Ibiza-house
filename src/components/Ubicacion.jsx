import React from "react";

const Ubicacion = () => {

    return (
        <section className="bg-ibiza-sand py-20 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-serif text-3xl pb-4 mb-8 uppercase tracking-widest">Nuestra Casa</h2>
                    <p className="text-gray-600 mb-6 font-light">Encuéntranos en el corazón de la ciudad, un espacio diseñado para que vivas la experiencia Ibiza House.</p>
                    <p className="font-medium pt-10 tracking-widest text-xs uppercase">Sobre la avenida Nestor Kirchner, frente a la shell</p>
                    <p className="text-gray-400 text-xs mt-6 uppercase">Lunes a Sábados: 09:00 - 13:30 y 17:00 - 22:00</p>
                </div>
                <div className="md:w-2/3 w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden border border-gray-100 shadow-sm">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224.83225932095894!2d-54.57811502236987!3d-25.62763077043869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1778526835644!5m2!1ses-419!2sar" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>
            </div>
        </section>
    );

};
export default Ubicacion;