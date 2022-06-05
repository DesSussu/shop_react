import Item from "../item/item";

const ItemList = ({ productos }) => {
  console.log("en el itemlist: ", productos);
  return (
    <div>
      {productos.map((prod) => {
        return <Item key={prod.id} prod={prod} />;
      })}
    </div>
  );
};

export default ItemList;
