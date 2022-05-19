const productos = [
  {
    id: "1",
    name: "GACHAPIN",
    price: "8 Euros",
    photo: "https://i.ibb.co/BTqnKHC/tempura.png",
  },
  {
    id: "2",
    name: "GAMBA",
    price: "18 Euros",
    photo: "https://i.ibb.co/zG4YZPs/Gachapin.png",
  },
  {
    id: "3",
    name: "BANANA",
    price: "13 Euros",
    photo: "https://i.ibb.co/WW6rqPB/modelo-Dos.png",
  },
];

export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id
        ? productos.find((producto) => producto.id === id)
        : productos;
      resolve(query);
    }, 2000);
  });
};
