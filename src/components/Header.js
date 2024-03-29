import React from "react";
import { Menu } from "@mui/material";

export default function Header({ activeTab }) {
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
      background: "#373a47",
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
      fontSize: 24,
      fontWeight: 400,
      textDecoration: "none",
    },
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <div className="logo">
          <img src="logo.png" alt="logo" className="logoImage" />
          <a
            href="/"
            style={styles.headerLogoText}
            className="headerLogoText"
          >
            Haven North Carolina
          </a>
        </div>
      </div>

      <div className="menuOptions">
        <div className={activeTab === "home" ? "menuItem active" : "menuItem"}>
          <a href="/#" className="">
            Home
          </a>
        </div>

        <div
          className={activeTab === "booking" ? "menuItem active" : "menuItem"}
        >
          <a href="/booking" className="">
            Accomodations
          </a>
        </div>

        <div
          className={activeTab === "photos" ? "menuItem active" : "menuItem"}
        >
          <a href="/photos" className="">
            Photos
          </a>
        </div>

        <div
          className={activeTab === "reviews" ? "menuItem active" : "menuItem"}
        >
          <a href="/reviews" className="">
            Reviews
          </a>
        </div>

        <div
          className={
            activeTab === "meetTheFounders" ? "menuItem active" : "menuItem"
          }
        >
          <a href="/meetTheFounders" className="">
            Meet the Founders
          </a>
        </div>
      </div>
    </div> 
  );
}
