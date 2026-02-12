import { useState, useEffect } from 'react';
import ProductCard from './Components/ProductCard';
const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/products');
        if (!res.ok) throw new Error('OOPs Something went Wrong!');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className='text-center p-4'>Loading...</p>;
  if (error) return <p className='text-center p-4 text-red-500'>{error}</p>;

  return (
    <>
      <h1 className='text-2xl text-center p-4 text-neutral-900 font-bold'>
        🛒 Browse Products
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-5'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;
