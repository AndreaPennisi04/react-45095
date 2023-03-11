import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";

export default function ItemCount({ stock, onAdd }) {
  const [items, setItems] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdded, setItemAdded] = useState(false);

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

  const addToCart = () => {
    if (itemStock >= items) {
      setItemStock(itemStock - items);
      console.log("You added: " + items + " to your ShoopCart!");
      setItemAdded(true);
      onAdd(items);
    }
  };

  return (
    <Box>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={decreaseStock}>-</Button>
        <Button variant="outlined">{items}</Button>
        <Button onClick={increaseStock}>+</Button>
      </ButtonGroup>
      {itemAdded ? (
        <Button variant="contained" to={"/cart"} sx={{ marginLeft: 5 }}>
          Checkout
        </Button>
      ) : (
        <Button variant="contained" onClick={addToCart} sx={{ marginLeft: 5 }}>
          Add to bag
        </Button>
      )}
    </Box>
  );
}
