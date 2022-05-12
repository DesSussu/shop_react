import { useEffect, useState } from "react";

const productos = [
  {
    id: "1",
    name: "GACHAPIN",
    price: "8 Euros",
    photo: "/assets/img/modeloDos.png",
  },
  {
    id: "2",
    name: "GAMBA",
    price: "18 Euros",
    photo: "/assets/img/modeloDos.png",
  },
  {
    id: "3",
    name: "BANANA",
    price: "13 Euros",
    photo: "/assets/img/modeloUno.png",
  },
  {
    id: "4",
    name: "GACHAPIN",
    price: "20 Euros",
    photo: "/assets/img/modeloUno.png",
  },
];

const task = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos);
  }, 3000);
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
    <div>
      {
        // con este metodo podemos hacer render de la colección de objetos guardados y los mete en otro array.
        productos.map((prod) => {
          return (
            <div key={prod.id} className="caja">
              <div className="images">
                <img src={prod.photo} />
              </div>
              <div className="nombreProducto">{prod.name}</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default ItemListContainer;
