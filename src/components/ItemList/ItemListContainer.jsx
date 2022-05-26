import { useEffect, useState } from "react";
import gachapin from "../../assets/img/modeloUno.png";
import Button from "../Button/Button";
//import ItemCount from "../ItemCount/ItemCount";
const productos = [
  {
    id: "1",
    name: "GACHAPIN",
    price: "8 Euros",
    photo: "https://i.ibb.co/BTqnKHC/tempura.png",
  },
  {
    id: "2",
    name: "GAMBA",
    price: "18 Euros",
    photo: "https://i.ibb.co/zG4YZPs/Gachapin.png",
  },
  {
    id: "3",
    name: "BANANA",
    price: "13 Euros",
    photo: "https://i.ibb.co/WW6rqPB/modelo-Dos.png",
  },
  {
    id: "4",
    name: "GACHAPIN",
    price: "20 Euros",
    photo: gachapin,
  },
];

const task = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos);
  }, 2000);
});

function ItemListContainer() {
  const [productos, setProductos] = useState([]); // Almacenar valores

  useEffect(() => {
    task
      .then(
        (x) => setProductos(x) /*aquí guardamos la respuesta una vez capturada*/
      ) // capturar la respuesta. Tener solo una tarea por then.
      .catch((err) => console.log(err)) // capturar los errores de la promesa. Con un solo catch está bien.
      .finally(() => console.log("promesa finalizada")); // aviso de finalizar la tarea.
  }, []); // Para que la acción se ejecute después del return
  console.log(productos);

  return (
    <div className="container">
      {
        // con este metodo podemos hacer render de la colección de objetos guardados y los mete en otro array.
        productos.map((prod) => {
          return (
            <div key={prod.id} className="caja">
              <div className="interior"></div>
              <div className="images">
                <img src={prod.photo} />
              </div>
              <div className="nombreProducto">{prod.name}</div>
              <Button title="+info" color="glitch" />
            </div>
          );
        })
      }
    </div>
  );
}

export default ItemListContainer;
