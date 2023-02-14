import { useEffect, useState } from "react";
import arrayProducts from "./json/products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProducts.find((prod) => prod.id === 1));
      }, 2000);
    });
    promise.then((answer) => {
      setItem(answer);
    });
  }, []);

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
