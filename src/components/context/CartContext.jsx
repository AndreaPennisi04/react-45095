import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartSession = localStorage.getItem("cart");
    if (cartSession) {
      setCart(JSON.parse(cartSession));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    if (isInCart(item.productId)) {
      let position = cart.findIndex((x) => x.productId === item.productId);
      cart[position].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const removeItem = (productId) => {
    const items = cart.filter((item) => item.productId !== productId);
    setCart(items);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.productId === itemId);
  };

  const totalInCart = (productId) => {
    const quantity = cart.reduce(
      (accum, item) => (item.productId === productId || !productId ? (accum += item.quantity) : accum),
      0
    );

    return quantity;
  };

  const cartSum = (productId) => {
    return cart.reduce(
      (accum, item) => (accum += item.productId === productId || !productId ? item.quantity * item.price : 0),
      0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalInCart, cartSum, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
