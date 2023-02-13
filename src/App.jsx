import { createTheme, ThemeProvider } from "@mui/material";
import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

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
    <ThemeProvider theme={theme}>
      <Destacado />
      <ItemListContainer greeting={"Sailor Moon"} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
