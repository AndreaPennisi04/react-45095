import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ItemCount({ product }) {
  const { addItem, totalInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const amount = totalInCart(product.productId);
    setQuantity(amount);
    if (amount !== 0) {
      setInCart(true);
    }
  }, [product, totalInCart]);

  const addToCart = () => {
    addItem(product, quantity);
  };

  const changeQuantity = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Box>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button disabled={inCart} onClick={() => changeQuantity(-1)}>
          -
        </Button>
        <Button disabled={inCart} variant="outlined">
          {quantity}
        </Button>
        <Button disabled={inCart} onClick={() => changeQuantity(1)}>
          +
        </Button>
      </ButtonGroup>

      {inCart ? (
        <Button variant="contained" onClick={() => navigate("/Cart")} sx={{ marginLeft: 5 }}>
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
