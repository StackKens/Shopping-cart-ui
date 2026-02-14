import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartConext';
import { useState } from 'react';

const Header = () => {
  const { cart, deleteItem } = useCart();
  const [productDropDown, setProductDropDown] = useState(false);

  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className='relative inline-block'>
      {/* Cart Button */}
      <button
        onClick={() => setProductDropDown((prev) => !prev)}
        className='relative mt-10 cursor-pointer'
      >
        <FaShoppingCart size={26} />

        {itemCount > 0 && (
          <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full'>
            {itemCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {productDropDown && (
        <div className='absolute right-0 mt-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50'>
          <div className='p-4 max-h-60 overflow-y-auto'>
            <h2 className='font-bold mb-3'>Cart Items</h2>

            {cart.length === 0 ? (
              <p className='text-sm text-gray-400'>Oops. Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className='flex justify-between items-start mb-4'
                  >
                    <div>
                      <p className='font-semibold'>
                        {item.name} (x{item.qty})
                      </p>
                      <p className='text-sm text-orange-500 font-medium'>
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteItem(item.id)}
                      className='text-red-400 hover:text-red-600 transition'
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                ))}

                <div className='border-t pt-3 mt-2'>
                  <p className='font-bold text-right'>Total: ${total}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
