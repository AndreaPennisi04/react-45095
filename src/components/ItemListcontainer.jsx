import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import arrayProducts from "../json/products.json";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProducts.filter((item) => item.category === category || !category));
      }, 2000);
    });
    promise.then((answer) => {
      setLoading(false);
      setItems(answer);
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
