import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const q = !category
      ? collection(db, "Products")
      : query(collection(db, "Products"), where("category", "==", category));

    getDocs(q).then((snapshot) => {
      setLoading(false);
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [category]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={200}>
        <CircularProgress size={120} />
      </Box>
    );
  }

  return (
    <Grid container sx={{ margin: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h3">{greeting}</Typography>
        <ItemList items={items} />
      </Grid>
    </Grid>
  );
};

export default ItemListContainer;
