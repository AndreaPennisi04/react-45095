import Logo from "./Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button } from "@mui/material";

const MenuNavegacion = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Logo />
            </div>
            <div className="col-md-6 text-end">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link text-light " aria-current="page" href={"/"}>
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href={"/"}>
                    History
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href={"/"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catalogo
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        Something else here
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
                <li>
                  <Button className="text-light justify-content-end" title="Ver carrito">
                    <Badge badgeContent={3} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default MenuNavegacion;
