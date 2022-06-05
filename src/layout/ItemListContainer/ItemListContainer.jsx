import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFecth";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/itemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]); // Almacenar valores

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch()
        .then((respuesta) =>
          setProductos(respuesta.filter((prods) => prods.categoria === id))
        )
        .catch((err) => console.log(err))
        .finally(() => console.log("tarea finalizada"));
    } else {
      getFetch()
        .then((respuesta) => {
          setProductos(respuesta);
          console.log("la respuesta es", respuesta);
        })
        .catch((err) => console.log(err))
        .finally(() => console.log("tarea finalizada"));
    }
  }, [id]);

  return (
    <div>{productos.length > 0 && <ItemList productos={productos} />}</div>
  );
}

export default ItemListContainer;
