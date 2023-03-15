import { Badge } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../assets/cart-shopping-solid.svg";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
  const { totalInCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Badge badgeContent={totalInCart()} color="error" sx={{ cursor: "pointer" }}>
      <img alt="Shopping Cart" src={Cart} style={{ width: "32px" }} onClick={() => navigate("/Cart")} />
    </Badge>
  );
};
export default CartWidget;
