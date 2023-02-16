// import {BrowserRouter,Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import Header from "./components/Header";

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/category"} element={<ItemListContainer greeting={"Categories"} />} />
          <Route path={"/category/:category"} element={<ItemListContainer greeting={"Categories"} />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
