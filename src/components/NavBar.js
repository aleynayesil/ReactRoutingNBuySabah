import React, { useState } from "react";

import { useNavigate } from "react-router";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { ClearAuthState } from "../store/action/auth.action";
import { cardBasketState } from "../store/action/shop.action";
import Basket from "./Basket";
function NavBar() {
  //const [show, setShow] = useState(false);/
  //const handleClose = () => setShow(false);

  const handleShow = () => {
    console.log("tıklandı");
    dispatch(cardBasketState(true));
  };
  // const isAuth = AuthService.isAuthenticated();
  // const user = AuthService.Name();
  const navigate = useNavigate();

  // bu kısımda ise store içerisinde state bağlandık. bunu yapmak için ise useSelector denilen bir hook kullandık. storedan bilgi çekmek için useSelector hook kullanıyoruz.
  const authState = useSelector((store) => store.authState);
  const dispatch = useDispatch();

  // console.log('isAuth', isAuth);

  const logout = () => {
    AuthService.logout((url) => {
      dispatch(ClearAuthState());
      navigate(url);
    });
  };
 // const basketQuantity = useSelector((store) => store.cartState.quantity);
  const cartState = useSelector((store)=>store.cartState.cartItems);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="nav-item nav-link" to="/">
          <Navbar.Brand>Anasayfa</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link className="nav-item nav-link" to="/">
              Anasayfa
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>

            <NavDropdown title="Api" id="collapsible-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/users">
                  Users
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/comments">
                  Comments
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/posts">
                  Posts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/products">
                  Products
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="position-relative">
            {authState.isAuthenticated && (
              <>
                <Link className="nav-item nav-link" to="/profile">
                  {authState?.username}
                </Link>
                <a className="nav-item nav-link" onClick={() => logout()}>
                  Oturumu Kapat
                </a>
                <a onClick={() => handleShow()} className="nav-item nav-link ">{cartState.total}
                  <i class="bi bi-cart4"></i>
                  <span class="position-absolute top-18 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartState.length}
                  </span>
                </a>
                <Basket></Basket>
              </>
            )}
            {!authState.isAuthenticated && (
              <Link className="nav-item nav-link" to="/login">
                Oturum Aç
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
