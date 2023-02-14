import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getImagePath } from "../util/getImagePath";

export default function Item({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={getImagePath(item.image)} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Story</Button>
        <Button size="small">Product</Button>
      </CardActions>
    </Card>
  );
}
