import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import useWindowDimensions from "../utils/utils";

export default function Header() {
  const { height, width } = useWindowDimensions();
  const [screenPosition, setScreenPosition] = useState(0);

  console.log("height", height);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    setScreenPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="header"
        style={
          window.pageYOffset <= height - 250
            ? { backgroundColor: "transparent" }
            : styles.scrollColor
        }
      >
        <div className="logo">
          <p
            style={{ color: "white", margin: 0, fontSize: 22, fontWeight: 400 }}
          >
            Haven Logo Placeholder
          </p>
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
            Cabins
          </a>
          <a id="weddingVenue" className="menu-item" href="/weddingVenue">
            Wedding Venue
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
    background: window.pageYOffset !== "100vh" ? "white" : "#373a47",
    opacity: 0.8,
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: 26,
    width: 26,
  },
  bmCross: {
    background: "white",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "slategray",
    padding: "1.5em 2.5em 0 1em",
    fontSize: "1.5em",
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
    padding: "0 10px 30px 0",
    color: "white",
    textDecoration: "none",
    fontSize: 22,
    fontWeight: 600,
  },
  bmItemHover: {
    color: "black",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  scrollColor: {
    backgroundColor: "white",
    borderTop: "1px solid black",
  },
};
