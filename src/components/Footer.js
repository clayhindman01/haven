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
        <h1 className="footer-text">Haven</h1>
        <p className="footer-text">Some Address</p>
        <p className="footer-text">NC</p>
      </div>

      <div className="social-media-container">
        <Twitter color={theme.pa} />
      </div>
    </div>
  );
}
