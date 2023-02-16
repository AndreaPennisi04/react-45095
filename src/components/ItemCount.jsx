import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";

export default function ItemCount({ stock }) {
  const [items, setItems] = useState(1);
  const [itemStock, setItemStock] = useState(stock);

  const increaseStock = () => {
    if (items < itemStock) {
      setItems(items + 1);
    }
  };

  const decreaseStock = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  };

  const onAdd = () => {
    if (itemStock >= items) {
      setItemStock(itemStock - items);
      setItems(1);
      console.log("You added: " + items + " to your ShoopCart!");
    }
  };

  return (
    <Box>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={decreaseStock}>-</Button>
        <Button variant="outlined">{items}</Button>
        <Button onClick={increaseStock}>+</Button>
      </ButtonGroup>
      <Button variant="contained" onClick={onAdd} sx={{ marginLeft: 5 }}>
        Add to bag
      </Button>
    </Box>
  );
}
