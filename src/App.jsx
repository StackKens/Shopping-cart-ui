import { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:5000/products');
      try {
        if (!res.ok) throw new Error('OOPs Something went Wrong!');
        const data = await res.json();
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <h1 className='text-2xl text-center p-4 text-neutral-900 font-bold'>
      🛒 Shopping Cart
    </h1>
  );
};

export default App;
