import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFecth";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../../components/ItemList/itemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]); // Almacenar valores
  //const [producto, setProducto] = useState({});

  const { id } = useParams();

  //esta si que va en el itemListContainer, traemos toda la colección.

  /*useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "items");
    getDocs(queryCollection)
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => console.log("tarea finalizada"));
  }, []);
  console.log(productos);*/
  /*
// esta iria en el itemListContainer 
  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "items", "FhUvNLNikra4RKCkdftZ");
    getDoc(dbQuery).then((resp) =>
      setProducto({ id: resp.id, ...resp.data() })
    );
  }, []);
  ;*/

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
        .then((respuesta) => setProductos(respuesta))
        .catch((err) => console.log(err))
        .finally(() => console.log("tarea finalizada"));
    }
  }, [id]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
