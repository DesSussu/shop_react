const ItemDetail = ({ producto }) => {
  return (
    <div>
      <div>
        <img src={producto.foto} />
      </div>
      <div>
        <h1>{producto.name}</h1>
        <h2>{producto.categoria}</h2>
        <p>{producto.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
