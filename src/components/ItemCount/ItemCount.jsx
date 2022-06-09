import { useState } from "react";

function ItemCount({ item, onAdd }) {
  const [count, setCount] = useState(1); // almacenar contador del boton
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("No puedes bajar del límite");
    }
  };
  return (
    <div className="botonesAdd">
      <button
        onClick={sumar}
        className="add"
        disabled={count === item.stock ? true : false}
      >
        +
      </button>

      <div className="contador">{count}</div>

      <button
        onClick={restar}
        className="add"
        disabled={count === 1 ? true : false}
      >
        -
      </button>
      <button
        onClick={() => {
          onAdd(item, count);
        }}
        className="buttonDos"
      >
        Add to cart
      </button>
    </div>
  );
}
export default ItemCount;
