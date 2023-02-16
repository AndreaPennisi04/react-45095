import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getImagePath } from "../util/getImagePath";
import ItemCount from "./ItemCount";

export default function Item({ item }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          navigate(`/item/${item.id}`);
        }}
      >
        <CardMedia sx={{ height: 140 }} image={getImagePath(item.image)} title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount stock={item.stock} />
      </CardActions>
    </Card>
  );
}
