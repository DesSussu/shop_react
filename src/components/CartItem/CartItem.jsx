import React from "react";

const CartItem = ({ item, deleteCartById }) => {
  return (
    <article>
      <div onClick={() => deleteCartById(item.id)}>
        <button>delete</button>
      </div>
      <div>
        <img src={item.photo} />
      </div>
      <h2>{item.name}</h2>
      <span>{item.price}Euros</span>
      <span>
        <strong>Cantidad:</strong> {item.qty}
      </span>
      <span>
        <strong>Total:</strong> ${item.qty * item.price}
      </span>
    </article>
  );
};

export default CartItem;
