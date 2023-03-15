import { Grid } from "@mui/material";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ flexGrow: 1 }}>
      {items.map((item) => (
        <Grid item xs={4} key={item.productId}>
          <Item item={item}></Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
