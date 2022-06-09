import React, { useContext } from "react";
import home from "../../assets/img/home.svg";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div>
      <img src={home} alt="" />

      <span> {cart.length}</span>
    </div>
  );
};
export default CartWidget;
