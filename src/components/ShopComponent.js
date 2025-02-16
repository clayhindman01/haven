import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Fade } from "react-reveal";

export default function ShopComponent() {
  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <Fade delay={2000} duration={1000}>
      <div
        className="shop"
        onClick={() => handleClick("https://app.thehost.co/15372/")}
      >
        <ShoppingBagOutlinedIcon
          fontSize="medium"
          sx={{ color: "white" }}
        ></ShoppingBagOutlinedIcon>
      </div>
    </Fade>
  );
}
