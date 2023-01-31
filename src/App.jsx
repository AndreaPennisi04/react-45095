import Destacado from "./Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListcontainer";

const App = () => {
  return (
    <div>
      <Destacado />
      <ItemListContainer greeting={"Sailor Moon"} />
      <Footer />
    </div>
  );
};

export default App;
