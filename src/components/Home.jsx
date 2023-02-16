import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { getImagePath } from "../util/getImagePath";

export const Home = (props) => (
  <div className="container-fluid p-0">
    <div
      style={{
        backgroundImage: `url(${getImagePath("portada2.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    ></div>

    <Grid container sx={{ margin: 4 }} direction="row" alignItems="center" justifyContent="center">
      <Grid item container xs={6} alignItems="center" justifyContent="center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={getImagePath("merchandansing/collection.jpg")} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              All movies collection
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Here you can find a selection of the best Sailor Moon movies and also other products.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Story</Button>
            <Button size="small">Products</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item container xs={6} alignItems="center" justifyContent="center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={getImagePath("sailors-guardians/main.png")} title="Sailor Guardians" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              All Sailors Stories
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learn more about the history of each of our sailors scouts.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Story</Button>
            <Button size="small">Products</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </div>
);
