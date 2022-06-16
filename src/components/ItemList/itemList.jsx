import Item from "../item/item";
import "../../layout/ItemListContainer/ItemListContainer.css";

const ItemList = ({ productos }) => {
  console.log("en el itemlist: ", productos);
  return (
    <div className="ProductContainer">
      {productos.map((prod) => {
        return <Item key={prod.id} prod={prod} />;
      })}
    </div>
  );
};

export default ItemList;
