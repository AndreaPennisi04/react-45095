import Logo from "./Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, ButtonGroup } from "@mui/material";

const MenuNavegacion = () => {
  return (
    <div className="container-fluid ">
      <div className="row my-6">
        <div className="col-md-6 ">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-info text-size: xx-large" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/">
                Catalogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/">
                Contact
              </a>
            </li>
            <li>
              <Button title="Ver carrito">
                <ShoppingCartIcon color="info" />
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-end">
          <Logo />
        </div>
      </div>
    </div>
  );
};
export default MenuNavegacion;
