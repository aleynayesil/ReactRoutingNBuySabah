import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Basket from "./Basket";

function Layout() {
  return (
    <Container fluid>
      <NavBar />
      <main style={{ minHeight: "25rem", overflow: "auto" }}>
        <Container>
          <Basket></Basket>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Container>
  );
}
export default Layout;
