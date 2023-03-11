import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.productId)) {
      let position = cart.findIncex((x) => x.index === item.index);
      cart[position].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const items = cart.filter((item) => item.productId !== itemId);
    setCart([items]);
  };
  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.productId === itemId);
  };

  const totalCart = () => {
    return cart.reduce((accum, item) => (accum += item.quantity), 0);
  };
  const cartSum = () => {
    return cart.reduce((accum, item) => (accum += item.quantity * item.price), 0);
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalCart, cartSum }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
