import { useContext, useState } from "react";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Alert,
  AlertTitle,
  TextField,
  Box,
  CircularProgress,
} from "@mui/material";
import { getImagePath } from "../util/getImagePath";
import { CartContext } from "./context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container } from "@mui/system";
import { db } from "../Firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useSnackbar } from "notistack";

const Cart = () => {
  const { cart, removeItem, cartSum, clear } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState({});

  const sendOrder = async () => {
    setErrors({});
    if (!email || email.length < 4) {
      setErrors({ email: "Invalid email", ...errors });
      enqueueSnackbar(`You need a valid email`, {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      return;
    }
    const order = {
      buyer: { email },
      items: cart,
      total: cartSum(),
    };

    const newDoc = await addDoc(collection(db, "Orders"), order);

    if (newDoc) {
      clear();
      for (const item of cart) {
        await setDoc(doc(db, "Products", item.id), { stock: item.stock - item.quantity }, { merge: true });
      }
      enqueueSnackbar(`Your order numer is ${newDoc.id}, good luck remembering it :)`, { variant: "success" });
    }
  };

  if (cart.length === 0) {
    return (
      <Container maxWidth="md" sx={{ margin: 10 }}>
        <Alert severity="warning">
          <AlertTitle>No items</AlertTitle>
          The cart is empty
        </Alert>
      </Container>
    );
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={200}>
        <CircularProgress size={120} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 5, marginTop: 5 }}>
      <Typography variant="h3">Checkout</Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error={!!errors.email}
            label="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            helperText={errors.email}
            value={email || ""}
          />
        </div>
      </Box>

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {cart.map((item) => (
          <ListItem
            key={item.productId}
            alignItems="flex-start"
            divider
            secondaryAction={
              <IconButton aria-label="Delete" color="primary" onClick={() => removeItem(item.productId)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={getImagePath(item.image)} sx={{ width: 56, height: 56 }} variant="square" />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              sx={{ marginLeft: 5, marginRight: 5 }}
              secondary={
                <>
                  <strong>{item.category}</strong>
                  {` —  ${item.description}`}
                  <br />
                  <strong>{`Quantity ${item.quantity}  |  Unit price $ ${item.price}  |  Total $ ${cartSum(
                    item.productId
                  )}`}</strong>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Button
        onClick={async () => {
          setLoading(true);
          await sendOrder();
          setLoading(false);
        }}
      >
        Order now
      </Button>
    </Container>
  );
};
export default Cart;
