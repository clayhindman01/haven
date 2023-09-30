import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
    <Header isHomepage={true} />
    <div className="container homepageContainer">
      <div className="centerJustify homeheight">
        <p className="homeText">BOOK YOUR STAY WITH US TODAY</p>
        <div className="aboutUsButton">
          <a href="/booking" className="aboutUsText">
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
    </>
    
  );
}
