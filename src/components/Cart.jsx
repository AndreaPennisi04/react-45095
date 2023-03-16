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
  Grid,
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
  const [form, setForm] = useState({ email: "", givenName: "", familyName: "", phoneNumber: "", comments: "" });
  const [errors, setErrors] = useState({});

  const { email, givenName, familyName, phoneNumber, comments } = form;

  const validField = (fieldName, content) => {
    if (!content || content.length < 4) {
      setErrors((currentError) => ({ [fieldName]: `Invalid ${fieldName}`, ...currentError }));
      enqueueSnackbar(`You need a valid ${fieldName}`, {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      return false;
    }
    return true;
  };

  const sendOrder = async () => {
    let hasErrors = false;
    setErrors({});
    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        const element = form[key];
        hasErrors = !validField(key, element) || hasErrors;
      }
    }
    if (hasErrors) {
      return;
    }
    const order = {
      buyer: form,
      items: cart,
      total: cartSum(),
      timestamp: new Date(),
    };
    try {
      const newDoc = await addDoc(collection(db, "Orders"), order);
      if (newDoc) {
        clear();
        for (const item of cart) {
          await setDoc(doc(db, "Products", item.id), { stock: item.stock - item.quantity }, { merge: true });
        }
        enqueueSnackbar(`Your order numer is ${newDoc.id},remembering it. Thanks for your buy:)`, {
          variant: "success",
        });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar(`Something went wrong while creating the order`, { variant: "error" });
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
      <Grid container justifyContent="center">
        <Grid item md={6} padding={5}>
          <TextField
            error={!!errors.email}
            label="email"
            required
            id="outlined-required"
            onChange={(event) => {
              setForm({ ...form, email: event.target.value });
            }}
            helperText={errors.email}
            value={email || ""}
            fullWidth
            sx={{ marginBottom: 1 }}
          />
          <TextField
            required
            error={!!errors.givenName}
            helperText={errors.givenName}
            id="outlined-required"
            label="Given name"
            value={givenName || ""}
            fullWidth
            sx={{ marginBottom: 1 }}
            onChange={(event) => {
              setForm({ ...form, givenName: event.target.value });
            }}
          />
          <TextField
            required
            error={!!errors.familyName}
            id="outlined-required"
            label="Family name"
            helperText={errors.familyName}
            value={familyName || ""}
            onChange={(event) => {
              setForm({ ...form, familyName: event.target.value });
            }}
            fullWidth
            sx={{ marginBottom: 1 }}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            value={phoneNumber || ""}
            onChange={(event) => {
              setForm({ ...form, phoneNumber: event.target.value });
            }}
            fullWidth
            sx={{ marginBottom: 1 }}
          />
          <TextField
            required
            id="outlined-required"
            label="Comments"
            error={!!errors.comments}
            helperText={errors.comments}
            value={comments || ""}
            onChange={(event) => {
              setForm({ ...form, comments: event.target.value });
            }}
            fullWidth
            sx={{ marginBottom: 1 }}
          />
          <Button
            onClick={async () => {
              setLoading(true);
              await sendOrder();
              setLoading(false);
            }}
            variant="outlined"
            fullWidth
            sx={{ marginRight: 2 }}
          >
            Order now
          </Button>
        </Grid>
        <Grid item md={6} alignItems="start" justifyContent="center">
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
                      <strong>{`Quantity ${item.quantity}  |  Unit price $ ${item.price}  |  Sub-Total $ ${cartSum(
                        item.productId
                      )}`}</strong>
                    </>
                  }
                />
              </ListItem>
            ))}
            <ListItem>
              <strong>Total: </strong>
              <strong>${cartSum()}</strong>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cart;
