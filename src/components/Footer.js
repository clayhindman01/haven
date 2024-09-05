import { Facebook, Instagram, Pinterest, YouTube } from "@mui/icons-material";

import React from "react";

export default function Footer() {
  const iconStyle = { color: "white", padding: "20px", fontSize: "30px" };

  return (
    <div className="row footer-container space-around">
      <div className="address-container">
        <h1 className="footer-text">The Haven WNC</h1>
        <p className="footer-text">2 Prospect Lane, Clyde NC 28722</p>
      </div>

      <div className="social-media-container">
        <a href="https://www.facebook.com/profile.php?id=61552497213693">
          <Facebook sx={iconStyle} />
        </a>

        <a href="https://www.instagram.com/thehaven_wnc/">
          <Instagram sx={iconStyle} />
        </a>

        <a href="https://www.pinterest.com/thehavenwnc/">
          <Pinterest sx={iconStyle} />
        </a>

        <a href="https://www.youtube.com/channel/UCMs9FgtOWORygBcJt70ry6A">
          <YouTube sx={iconStyle} />
        </a>
      </div>
    </div>
  );
}
