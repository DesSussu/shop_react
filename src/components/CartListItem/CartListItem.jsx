import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

import "../CartListItem/CartListItem.css";
import {
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

const CartListItem = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const cartContext = useContext(CartContext);
  const { cart, deteleCartById, deleteCart, precioTotal } = cartContext;

  async function generateOrder() {
    let orden = {};
    orden.buyers = { name: name, email: email, phone: phone };
    orden.total = precioTotal();
    orden.items = cart.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.qty;
      return { id, nombre, precio };
    });

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, orden)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => deleteCart());

    const queryCollectionStock = collection(db, "items");

    const queryActulizarStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cart.map((it) => it.id)
      )
    );
    const batch = writeBatch(db);

    await getDocs(queryActulizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock - cart.find((item) => item.id === res.id).qty,
          })
        )
      )
      .finally(() => console.log("actulalizado"));

    batch.commit();
  }
  return (
    <div className="cartContainer">
      {cart ? (
        cart.map((product) => {
          return (
            <CartItem
              key={product.id}
              item={product}
              deleteCartById={deteleCartById}
            />
          );
        })
      ) : (
        <p>cargando </p>
      )}

      <form noValidate autoComplete="off">
        <input
          id="standard-basic"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="standard-basic"
          label="Telephone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          id="standard-basic"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>

      <button onClick={generateOrder}>Realizar compra</button>
      <h2>El precio total es: {precioTotal()}</h2>
      {cart.length ? (
        <button onClick={deleteCart} className="empty">
          Vaciar Carrito
        </button>
      ) : (
        <p className="cartEmpty">No hay productos </p>
      )}
    </div>
  );
};
export default CartListItem;
