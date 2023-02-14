import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import arrayProducts from "./database/products.json";
import { getImagePath } from "../util/getImagePath";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProducts);
      }, 2000);
    });
    promise.then((answer) => {
      setItems(answer);
    });
  }, []);

  return (
    <Grid container sx={{ margin: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h3">{greeting}</Typography>
        <ItemList items={items} />
        <ItemCount stock={16} />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getImagePath("merchandansing/allMoviesCollection.jpg")}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              All movies collection
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Here you can find a selection of the best Sailor Moon movies and also other related media
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ItemListContainer;
