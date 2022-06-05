import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <div>
        <img src={producto.photo} />
      </div>
      <div>
        <h1>{producto.name}</h1>
        <h2>{producto.categoria}</h2>
        <p>{producto.price}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
