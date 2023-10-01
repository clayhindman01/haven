import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import useWindowDimensions from "../utils/utils";

export default function Header({isHomepage}) {
  const { height, width } = useWindowDimensions();
  const [screenPosition, setScreenPosition] = useState(0);

  console.log("height", height);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    setScreenPosition(window.pageYOffset);
  };

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "30px",
      height: "10px",
      right: "20px",
      paddingTop: "10px",
      top: "20px",
    },
    bmBurgerBars: {
      background: screenPosition <= height - 250 && isHomepage ? "white" : "#373a47",
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
      background: "#4b5351",
      padding: "1.5em 1em 0 1em",
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
      background: "rgba(255, 200, 255, 0.07)",
    },
    scrollColor: {
      backgroundColor: "white",
      borderBottom: "1px solid lightgray",
    },
    headerLogoText: {
      margin: 0,
      fontSize: 22,
      fontWeight: 400,
      textDecoration: "none",
    },
  };
  

  useEffect(() => {
    console.log(isHomepage)
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
          screenPosition <= height - 250 && isHomepage
            ? { backgroundColor: "transparent" }
            : styles.scrollColor
        }
      >
        <div className="logo">
          <a
            href="/"
            style={styles.headerLogoText}
            className={screenPosition <= height - 250 && isHomepage ? "headerLogoTextWhite" : "headerLogoTextBlack"}
            >
            Haven Logo Placeholder
          </a>
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
          <a id="booking" className="menu-item" href="/booking">
            Accomodations
          </a>
          <a id="photos" className="menu-item" href="/photos">
            Photos
            </a>
          <a id="about" className="menu-item" href="/about">
            Meet the Founders
          </a>
          <a id="weddingVenue" className="menu-item" href="/weddingVenue">
            Wedding Venue
          </a>
        </Menu>
      </div>
    </div>
  );
}