import React, { useState } from "react";

export default function Add() {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("no puedes quitar más");
    }
  };
  return (
    <div>
      <p>{count}</p>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
}
