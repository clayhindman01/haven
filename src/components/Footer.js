import Twitter from "@mui/icons-material/Twitter";
import { createTheme } from "@mui/material";

import React from "react";

export default function Footer() {
  const theme = createTheme({
    palette: {
      ochre: {
        main: "white",
        light: "#E9DB5D",
        dark: "#A29415",
        contrastText: "#242105",
      },
    },
  });

  return (
    <div className="row footer-container space-around">
      <div className="address-container">
        <h1 className="footer-text">The Haven WNC</h1>
        <p className="footer-text">2 Prospect Lane, Clyde NC 28722</p>
        <p className="footer-text">Clyde NC 28722</p>
      </div>

      <div className="social-media-container">
        <Twitter color="white" />
      </div>
    </div>
  );
}
