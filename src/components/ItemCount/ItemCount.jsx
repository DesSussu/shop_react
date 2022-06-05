import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(0); // almacenar contador del boton
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
    </div>
  );
}
export default ItemCount;
