import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const ProductGrid = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let query = supabase.from('productos').select('*');
      
      if (category !== 'Todos') {
        query = query.eq('categoria', category);
      }

      const { data, error } = await query;
      if (!error) setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  if (loading) return <div className="py-20 text-center font-serif animate-pulse">Cargando colección...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          {/* Imagen con Aspect Ratio Boutique */}
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
            <img 
              src={product.image_url} 
              alt={product.nombre}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Detalle del Producto */}
          <div className="text-center">
            <h3 className="font-serif text-lg uppercase tracking-widest mb-1">{product.nombre}</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">{product.subcategoria}</p>
            <p className="font-bold text-sm">${product.precio.toLocaleString('es-AR')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;