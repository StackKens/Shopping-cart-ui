import { useCart } from '../context/CartConext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className=' rounded-lg p-4  border border-gray-200 flex flex-col shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer '>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-48 object-cover rounded-md mb-2'
      />

      <h1 className='font-bold text-neutral-900 text-lg '>{product.name}</h1>
      <p className='text-neutral-600 text-sm  mb-2'>{product.description}</p>
      <strong className='text-neutral-900'>${product.price.toFixed(2)}</strong>

      <button
        onClick={() => addToCart(product)}
        className='bg-orange-500 px-5 p-3 rounded-lg mt-2 cursor-pointer hover:bg-orange-600 text-white'
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
