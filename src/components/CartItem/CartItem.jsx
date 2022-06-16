import React from "react";
import "../CartItem/CartItem.css";
const CartItem = ({ item, deleteCartById }) => {
  return (
    <article>
      <div className="oneProduct">
        <div className="Photo">
          <img src={item.photo} />
          <div onClick={() => deleteCartById(item.id)} className="delete">
            <button>delete</button>
          </div>
        </div>
        <div className="info">
          <h2>{item.name}</h2>
          <span>{item.price}Euros</span>
          <span>
            <strong>Cantidad:</strong> {item.stock}
          </span>
          <span>
            <strong>Total:</strong> {item.stock * item.price} Euros
          </span>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
