// import { useState } from 'react';
// import React from 'react';
// import logo from '../public/logoibiza.jpg';
// import { Link } from 'react-router-dom';
// import ProductGrid from './ProdGrid';
// import { supabase } from '../supabase';

// const Men = () => {
//   const [filter, setFilter] = useState('Todos');

//   const categorias = ['Todos', 'Remeras', 'Camisas', 'Pantalones', 'Zapatillas'];

//   return (
//     <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
//       <h1 className="font-serif text-5xl uppercase tracking-[0.3em] text-center mb-16">Men</h1>

//       {/* Navegación de Filtros */}
//       <div className="flex justify-center gap-8 mb-16 border-b border-gray-100 pb-4">
//         {categorias.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={`text-[11px] uppercase tracking-[0.2em] transition-all ${
//               filter === cat ? 'text-black font-bold border-b border-black' : 'text-gray-300 hover:text-gray-600'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* La Grilla que consulta a Supabase */}
//       <ProductGrid category={filter} />
//     </div>
//   );
// };

// export default Men;