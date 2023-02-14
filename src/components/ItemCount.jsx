import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={decreaseStock}>-</Button>

      <ButtonGroup variant="text" aria-label="text button group">
        <Button>{items}</Button>
      </ButtonGroup>
      <Button onClick={increaseStock}>+</Button>
      <Button variant="contained" onClick={onAdd}>
        Add to bag
      </Button>
    </ButtonGroup>
  );
}
