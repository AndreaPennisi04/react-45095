// import {BrowserRouter,Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import Header from "./components/Header";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0044",
    },
    secondary: {
      main: "#FEDE3B",
    },
  },
});

const App = () => {
  return (
    <CartContextProvider>
      <SnackbarProvider maxSnack={6}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Header />
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route exact path={"/category"} element={<ItemListContainer greeting={"Categories"} />} />
              <Route exact path={"/category/:category"} element={<ItemListContainer greeting={"Categories"} />} />
              <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route exact path={"/cart"} element={<Cart />} />
              <Route path={"/*"} element={<NotFound />} />
            </Routes>
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </CartContextProvider>
  );
};

export default App;
