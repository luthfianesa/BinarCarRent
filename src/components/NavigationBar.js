import "./navigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/reducers";
import { handleLogout } from "../redux/actions/authAction";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginToken, setLoginToken] = useState(false);
  // console.log("This is login token", loginToken);

  const state = useSelector((rootReducer) => rootReducer);
  // console.log("This is navigation state", state);

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (!token) {
      setLoginToken(false);
    } else {
      setLoginToken(true);
    }
  }, []);

  const onHandleLogout = () => {
    dispatch(handleLogout());
    setLoginToken(false);
    navigate("/");
  };

  const goHomepage = () => {
    return navigate("/");
  };
  return (
    <div className="navbar-outer-container">
      {["lg"].map((expand) => (
        <Navbar collapseOnSelect key={expand} expand={expand} className="mb-3 navbar-container" fixed="top">
          <Container fluid>
            {/* Using Navbar.Brand only able to click in the top and bottom of the edge to direct to homepage */}
            <Navbar.Brand href="/" className="nav-brand" onClick={goHomepage}></Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Nav.Link href="/">
                    <span>BCR</span>
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="off-canvas-container">
                <Nav className="justify-content-end flex-grow-1  navigationLink navigationList">
                  <Nav.Link href="#ourServices">Our Services</Nav.Link>
                  <Nav.Link href="#whyUs">Why Us</Nav.Link>
                  <Nav.Link href="#testi">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                  {(() => {
                    if (!!state.authReducer.isLogin || loginToken === true) {
                      state.authReducer.isLogin = true;
                      return (
                        <Nav.Link className="nav-logout">
                          <span className="logout-nav" onClick={onHandleLogout}>
                            Logout
                          </span>
                        </Nav.Link>
                      );
                    } else if (!state.authReducer.isLogin || !loginToken) {
                      return (
                        <Nav.Link href="/register" className="nav-register">
                          <span className="register-nav">Register</span>
                        </Nav.Link>
                      );
                    }
                  })()}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavigationBar;
