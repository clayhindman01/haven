import React from "react";
import { push as Menu } from "react-burger-menu";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          {/* TODO: REPLACE WITH LOGO */}
          Haven
        </div>
      </div>
      <div id="outer-container">
        <Menu
          styles={styles}
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
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
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
