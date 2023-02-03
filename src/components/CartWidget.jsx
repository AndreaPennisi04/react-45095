import { Badge } from "@mui/material";
import Cart from "../imagenes/cart-shopping-solid.svg";

const CartWidget = () => {
  return (
    <Badge badgeContent={3} color="error">
      <img alt="Shopping Cart" src={Cart} style={{ width: "32px" }} />
    </Badge>
  );
};
export default CartWidget;
