import React, { useState } from "react";
import Header from "../components/Header";
import FadeIn from "react-fade-in";
import Fade from "react-reveal/Fade";
import Accomodations from "../components/Accomodations";
import PhotosTile from "../components/PhotosTile";
import { init } from "@emailjs/browser";
import AboutTile from "../components/AboutTile";
import Amenities from "../components/Amenities";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header activeTab="home" />
      <div className="container homepageContainer">
        <div className="centerJustify homeheight">
          <Fade>
            <p className="text fancyFont">Welcome</p>
          </Fade>
        </div>
      </div>

      <div className="homeAboutSectionCon">
        <Accomodations />

        <Footer />
      </div>
    </>
  );
}
