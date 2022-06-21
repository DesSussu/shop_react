import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    const newItem = { ...item, qty };

    if (cart.some((product) => product.id === newItem.id)) {
      //devuelve un true si ya existe el producto en el carrito
      const newCart = cart.map((product) => {
        if (product.id === newItem.id) {
          //al recorrer el array, detecta cuál es el producto al que hay que modificarle la cantidad
          product.qty = product.qty + newItem.qty;
        }
        return product;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const deteleCartById = (id) => {
    const newCart = cart.filter((el) => el.id !== id);
    setCart(newCart);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deteleCartById,
        deleteCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
