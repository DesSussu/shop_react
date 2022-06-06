import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/itemDetail";
import { getFetch } from "../../helpers/getFecth";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getFetch(id)
      .then((respuesta) => setProducto(respuesta))
      .catch((err) => console.log(err))
      .finally(() => console.log("detalle acabado"));
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
