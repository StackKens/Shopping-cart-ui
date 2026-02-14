import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const CartContext = createContext();

// create the provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedItem = localStorage.getItem('cart');
    return JSON.parse(savedItem) || [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      // check if product already exist in cart
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
