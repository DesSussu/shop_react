import { useEffect, useState } from "react";
//import { getFetch } from "../../helpers/getFecth";
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
import "../ItemListContainer/ItemListContainer.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]); // Almacenar valores
  //const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    const queryCollectionFilter = id
      ? query(queryCollection, where("categoria", "==", id))
      : queryCollection;

    getDocs(queryCollectionFilter)
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => console.log("Tarea finalizada en container"));
  }, [id]);

  return (
    <div className="Products">
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
