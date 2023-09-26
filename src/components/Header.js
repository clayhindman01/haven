import React from "react";
import { push as Menu } from "react-burger-menu";

export default function Header() {
  return (
    <div>
      <div className="header" style={window.pageYOffset != '100vh'? {backgroundColor: 'transparent'}: null}>
        <div className="logo">
          <p style={{color: "white", margin: 0, fontSize: 22}}>Haven Logo Placeholder</p>
        </div>
      </div>
      <div id="outer-container">
        <Menu
          className="menu"
          styles={styles}
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          width={"fit-content"}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="booking" className="menu-item" href="/booking">
            Booking
          </a>
        </Menu>
      </div>
    </div>
  );
}

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: window.pageYOffset !== '100vh'? "white":"#373a47",
    opacity: 0.8,
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "30px",
    width: "30px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#616665",
    padding: "2.5em 2em 0",
    fontSize: "1.3em",
    flexDirection: "column",
    overflow: "hidden",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
    padding: 10,
    color: 'white',
    textDecoration: 'none',
    fontSize: 20,
    fontWeight: 600,
  },
  bmItemHover: {
    color: "black",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
