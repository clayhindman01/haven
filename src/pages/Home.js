import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container homepageContainer">
      <Header />
      <div className="center">
        <p className="homeText">BOOK YOUR STAY WITH US TODAY</p>
        <div className="aboutUsButton">
          <a href="/about" className="aboutUsText">
            ABOUT US
          </a>
        </div>
      </div>
    </div>
  );
}
