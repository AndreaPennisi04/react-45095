import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import img1 from "../imagenes/merchandansing/allMoviesCollection.jpg";

const ItemListContainer = ({ greeting }) => {
  return (
    <Grid container sx={{ margin: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h3">{greeting}</Typography>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={img1} title="green iguana" />
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
      <Grid item md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={img1} title="green iguana" />
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
      <Grid item md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={img1} title="green iguana" />
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
