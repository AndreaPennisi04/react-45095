import { Alert, AlertTitle, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProducts from "../json/products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProducts.find((prod) => prod.id === Number(id)));
      }, 2000);
    });
    promise.then((answer) => {
      setLoading(false);
      setItem(answer);
    });
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={200}>
        <CircularProgress size={120} />
      </Box>
    );
  }

  if (!item) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={200}>
        <Alert severity="warning">
          <AlertTitle>Sorry</AlertTitle>
          This item is no longer available
        </Alert>
      </Box>
    );
  }

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
