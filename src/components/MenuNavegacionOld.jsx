import Logo from "./Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button } from "@mui/material";

const MenuNavegacionOld = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col">
          <nav className="navbar navbar-expand-lg ">
            <div className="col-md-4 ">
              <Logo />
            </div>
            <div className="col-md-8 text-end">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" aria-current="page" href={"/"}>
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light fs-5" href={"/"}>
                    History
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light fs-5"
                    href={"/"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item fs-5" href={"/"}>
                        Something
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        something
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={"/"}>
                        Something else
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" aria-current="page" href={"/"}>
                    Contact Us
                  </a>
                </li>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-light fs-5" type="submit">
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
export default MenuNavegacionOld;
