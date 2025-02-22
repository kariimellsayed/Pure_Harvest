import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Css/Assets/Images/NavBar/Logo.webp";
import karim from "../../../Css/Assets/Images/NavBar/karim.jpg";
import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useShoppingCart } from "../../../Context/ShopContext";
// import Loginn from "../../../Pages/Auth/LoginAndout/Loginn";

export default function NavBar() {
  const { cartQuantity } = useShoppingCart();
  return (
    <Navbar expand="lg" className="nav" sticky="top">
      <Container className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" loading="lazy" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-na toggle">
          <Nav className="ms-auto">
            <ul className="links d-flex align-items-center justify-content-center gap-4">
              <li>
                <NavLink className="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/dashboard">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/market">
                  Crops market
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/disease">
                  Diagnose disease
                </NavLink>
              </li>

              {/* <li>
                <NavLink className="link" to="/sc">
                  Suitable Crops
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink className="link" to="/sf">
                  Suitable Fertilizer
                </NavLink>
              </li> */}
            </ul>
          </Nav>
          <Nav className="systems ms-auto  d-flex align-items-center gap-4 justify-content-end">
            <div className="icons d-flex align-items-center gap-3">
              <div className="cartshopping">
                {cartQuantity ? <span>{cartQuantity}</span> : ""}
                <NavLink to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </div>
              <NavLink>
                <i className="fa-regular fa-bell"></i>
              </NavLink>
            </div>
            {/* Register */}
            <div className="profile">
              {/* <Loginn /> */}
              <div className="img-contain">
                <img src={karim} alt="profile" loading="lazy" />
                <span>Karim Elsayed</span>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
