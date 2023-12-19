import React, { useState } from "react";
import Header from "../components/Header";
import FadeIn from "react-fade-in";
import Fade from "react-reveal/Fade";
import Accomodations from "../components/Accomodations";
import PhotosTile from "../components/PhotosTile";
import { init } from "@emailjs/browser";
import AboutTile from "../components/AboutTile";

export default function Home() {
  const [state, setState] = useState({});

  const handleStateUpdate = (field, value) => {
    setState({
      ...state,
      field,
      value,
    });
  };
  init("user_Q4YWJFQfUGRN7ZrNUUSm3");

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <>
      <Header isHomepage={true} />
      <div className="container homepageContainer">
        <FadeIn transitionDuration={2000}>
          <div className="centerJustify homeheight">
            <div className="homeTextContainer">
              <p className="homeText fancyFont">
                BOOK YOUR STAY WITH US AND EXPERIENCE THE HAVEN
              </p>
              <div className="aboutUsButton">
                <a href="/booking" className="aboutUsText">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="homeAboutSectionCon">
        <Accomodations />
        <PhotosTile />
        <AboutTile />

        <div className="homeAboutSectionContainer">
          <div className="homeAboutSection">
            <Fade>
              <h1 className="homeAboutSectionHeader">Wedding Venue Inquiry</h1>
              <p>
                Tell us about your event and we will reach out to you shortly.
              </p>
              <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={state.name}
                  onChange={(e) => handleStateUpdate("name", e.target.value)}
                />

                <label>Future Spouses Name:</label>
                <input
                  type="text"
                  placeholder="Future Spouses Name"
                  value={state.spouseName}
                  onChange={(e) =>
                    handleStateUpdate("spouseName", e.target.value)
                  }
                />

                <label>Email:</label>
                <input type="text" placeholder="Email" />

                <label>Year and Possible Season of Event:</label>
                <input type="text" placeholder="Year and Season" />

                <label>
                  Any Details About Your Event. The More the Merrier:
                </label>
                <input type="text" placeholder="Details" />
                <div
                  className="homeButton homeButtonText"
                  onClick={handleSubmit}
                >
                  Send
                </div>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
