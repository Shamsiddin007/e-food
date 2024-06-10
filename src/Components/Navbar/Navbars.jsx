
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/public/icon/11.png";
import React, { useEffect, useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import shop from "/public/icon/shop.svg";
import "./Navbar.css";
import ScrollAuto from "../../ScrollAuto/ScrollAuto";

function CollapsibleExample() {
  const [progress, setProgress] = useState(0);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (event) => {
    setTheme(event.target.checked ? "luxury" : "light");
  };

  return (
    <>
      <header>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar collapseOnSelect expand="lg" className="">
          <Container>
            <Navbar.Brand as={Link} to="/"  onClick={() => setProgress(100)}>
              <img className="logo" src={logo} alt="" />
            </Navbar.Brand>
            <div className="box d-flex gap-md-3 gap-sm-2">
                <Nav.Link className="d-inline d-lg-none "  onClick={() => setProgress(100)}>
                  <div className="cart">
                    <Link to="shop">
                      <span className="cart-icon">🛒</span>
                    </Link>
                  </div>
                </Nav.Link>
                <Nav.Link href="#memes" className="d-inline d-lg-none"  onClick={() => setProgress(100)}>
                  <label className="swap swap-rotate">
                    <input
                      onChange={handleToggle}
                      type="checkbox"
                      className="theme-controller"
                      value="synthwave"
                    />

                    <svg
                      className="swap-off fill-current w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                      className="swap-on fill-current w-10 h-10 text-light"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="menyu"  onClick={() => setProgress(100)}>
                  Menyu
                </Nav.Link>
                <Nav.Link as={Link} to="branches"  onClick={() => setProgress(100)}>
                  Branches
                </Nav.Link>
                <Nav.Link as={Link} to="about"  onClick={() => setProgress(100)}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="connection"  onClick={() => setProgress(100)}>
                  Connection
                </Nav.Link>
              </Nav>
              <Nav className="d-flex align-items-center">
                <Nav.Link className="d-none d-lg-block"   onClick={() => setProgress(100)}>
                  <div className="cart">
                    <Link to="shop">
                      <span className="cart-icon">🛒</span>
                    </Link>
                  </div>
                </Nav.Link>
                <Nav.Link href="#memes" className="d-none d-lg-block"  onClick={() => setProgress(100)}>
                  <label className="swap swap-rotate">
                    <input
                      onChange={handleToggle}
                      type="checkbox"
                      className="theme-controller"
                      value="synthwave"
                    />

                    <svg
                      className="swap-off fill-current w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                      className="swap-on fill-current w-10 h-10 text-light"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <ScrollAuto/>
        <Outlet />
      </main>
    </>
  );
}

export default CollapsibleExample;
