import { Alert, AlertTitle, Box, CircularProgress } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "Products", id)).then((document) => {
      setLoading(false);
      setItem({ id: document.id, ...document.data() });
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
          This item is no longer available.
        </Alert>
      </Box>
    );
  }

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
