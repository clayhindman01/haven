import { Fade } from "react-reveal";
import React from "react";

export default function PhotosTile() {
  return (
    <Fade>
      <div className="photosTileContainer">
        <a href="/photos">
          <img src="cabin.jpg" className="photosTileImage" />
        </a>

        <a href="/photos">
          <img src="cabin.jpg" className="photosTileImage" />
        </a>
        <a href="/photos">
          <img src="cabin.jpg" className="photosTileImage" />
        </a>
      </div>
    </Fade>
  );
}
