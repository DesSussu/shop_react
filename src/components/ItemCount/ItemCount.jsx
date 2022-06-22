import { useState } from "react";
import "../ItemCount/itemCount.css";
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
      <div onClick={sumar} className="add">
        <button> + </button>
      </div>
      <div className="contador">{count}</div>
      <div onClick={restar} className="add">
        <button> - </button>
      </div>
      <div className="addcart">
        <button
          onClick={() => {
            onAdd(item, count);
          }}
          className="buttonCart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
