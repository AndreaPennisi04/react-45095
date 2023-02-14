import { Badge } from "@mui/material";
import Cart from "../assets/cart-shopping-solid.svg";
// import { useState } from "react";
// import ".tyle.css";

const CartWidget = () => {
  return (
    <Badge badgeContent={3} color="error">
      <img alt="Shopping Cart" src={Cart} style={{ width: "32px" }} />
    </Badge>
  );
};

// function States() {
//   const [add, setAdd] = useState(0);

//   function shoopingCart() {
//     button === "add" ? setAdd(+1) : setRemove(-1);
//   }

//   const sumar = () => {
//     setAdd(add + 1);
//   };

//   const remove = () => {
//     setRemove(remove - 1);
//   };
// }

// return (
//   <div>
//     <p>
//       <input type="button" onClick={sumar} value="Add" />
//     </p>
//     <p>
//       <input type="button" onClick={remove} value="Add" />
//     </p>
//   </div>
// );
export default CartWidget;
