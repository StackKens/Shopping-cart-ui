import ProductCard from './Components/ProductCard';
import { useProducts } from './context/ProductContext';
const App = () => {
  const { products, loading, error } = useProducts();
  return (
    <>
      <h1 className='text-2xl text-center p-4 text-neutral-900 font-bold'>
        🛒 Browse Products
      </h1>
      {loading && <p className='text-center p-3 mx-auto mb-5'>Loading...</p>}
      {error && (
        <p className='text-red-400 text-center p-3 mx-auto mb-5'>
          Oops. An Error occured
        </p>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-5 mt-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;
