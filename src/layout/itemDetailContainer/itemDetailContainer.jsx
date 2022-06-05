import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFecth";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    getFetch(detalleId)
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