import { Card, Container, Grid, Typography, Box } from "@mui/material";
import { getImagePath } from "../util/getImagePath";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 10, marginBottom: 10 }}>
      <Card elevation={20}>
        <Grid container>
          <Grid item container xs={6}>
            <img src={getImagePath(item.image)} alt={item.name} />
          </Grid>
          <Grid item container xs={6}>
            <Box margin={4}>
              <Typography variant="h4">{item.name}</Typography>
              <Typography>{item.description}</Typography>
            </Box>
            <Box width={"100%"} marginLeft={4}>
              <Typography variant="h5">£{item.price}</Typography>
            </Box>
            <Box marginLeft={4}>
              <ItemCount product={item} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ItemDetail;
