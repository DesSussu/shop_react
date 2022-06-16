const productos = [
  {
    id: "1",
    name: "GACHAPIN",
    price: "8",
    photo: "https://i.ibb.co/BTqnKHC/tempura.png",
    stock: 2,
  },
  {
    id: "2",
    name: "GAMBA",
    price: "18",
    photo: "https://i.ibb.co/zG4YZPs/Gachapin.png",
    stock: 3,
  },
  {
    id: "3",
    name: "BANANA",
    price: "13",
    photo: "https://i.ibb.co/WW6rqPB/modelo-Dos.png",
    stock: 9,
  },
];

export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id
        ? productos.find((producto) => producto.id === id)
        : productos;
      console.log(query);
      resolve(query);
    }, 2000);
  });
};
