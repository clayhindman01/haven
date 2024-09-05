import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import useWindowDimensions from "../utils/utils";

export default function Header({ isHomepage }) {
  const { height, width } = useWindowDimensions();
  const [screenPosition, setScreenPosition] = useState(0);

  console.log("height", height);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    setScreenPosition(window.pageYOffset);
  };

  const isSecondStyle = () => {
    return screenPosition <= height && isHomepage;
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
      background: isSecondStyle() ? "white" : "#373a47",
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
      background: "rgba(15, 15, 15, 0.3 )",
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
      color: "black",
    },
  };

  useEffect(() => {
    console.log(isHomepage);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        className="header"
        style={
          isSecondStyle()
            ? { backgroundColor: "transparent" }
            : styles.scrollColor
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="/">
            <img
              src="logo.png"
              alt="logo"
              className={isSecondStyle() ? "logoImageSecondStyle" : "logoImage"}
            />
          </a>
          {width > 1000 ? (
            <a
              href="/"
              style={styles.headerLogoText}
              className="headerLogoTextBlack"
            >
              The Haven WNC
            </a>
          ) : null}
        </div>
        {width > 1000 ? (
          <div className="bookNowButton">
            <a href="/booking" className=" whiteText bookNowText">
              Book Now
            </a>
          </div>
        ) : null}
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
        </Menu>
      </div>
    </div>
  );
}
