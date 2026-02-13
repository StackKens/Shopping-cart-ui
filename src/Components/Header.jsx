import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartConext';
import { useState } from 'react';
const Header = () => {
  const { cart, deleteItem } = useCart();
  const [productDropDown, seProductDropDown] = useState(false);

  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <>
      <button
        onClick={() => seProductDropDown(!productDropDown)}
        className='mt-10 cursor-pointer '
      >
        <FaShoppingCart size={26} />
        {itemCount > 0 && (
          <p className='-mt-8  bg-red-500 rounded-full text-white text-xs'>
            {itemCount}
          </p>
        )}
      </button>

      {productDropDown && (
        <div className=' w-80 px-4 rounded border border-gray-300 mt-7 '>
          <p className='pt-3'>Cart Items</p>

          {cart.length === 0 ? (
            <p className='pt-2  text-neutral-400 text-xs pb-2'>
              Oops. Your cart is empty
            </p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className='flex flex-col  items-start pt-5'>
                  <p className='pt-2  font-bold'>
                    {item.name} (x{item.qty})
                  </p>
                  <span className='font-bold text-orange-400'>
                    Price: ${item.price * item.qty.toFixed(2)}
                  </span>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className='flex flex-start py-4 cursor-pointer hover:text-red-500 transition'
                  >
                    <FaTrash size={20} className='text-red-400 ' />
                    Delete
                  </button>
                  <p className='divide-gray-300 divide-y overflow-y-auto mx-h-60'></p>
                </div>
              ))}
              <h1 className='font-bold mb-3'>Total: {total}</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
