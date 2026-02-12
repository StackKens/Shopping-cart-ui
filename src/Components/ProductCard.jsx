const ProductCard = ({ product }) => {
  return (
    <div className=' rounded-lg p-4  border border-gray-200 flex flex-col items-center shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer '>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-48 object-cover rounded-md mb-2'
      />
      <div>
        <h1 className='font-bold text-neutral-900 text-lg '>{product.name}</h1>
        <p className='text-neutral-600 text-sm  mb-2'>{product.description}</p>
        <strong className='text-neutral-900'>
          ${product.price.toFixed(2)}
        </strong>
      </div>
    </div>
  );
};

export default ProductCard;
