import React from "react";
import { Fade } from "react-reveal";

export default function Accomodations() {
  return (
    <div className="homeAboutSectionContainer">
      <Fade>
        <p className="homeText textPadding">
          Enjoy a one-of-a-kind experience. Luxuriously immersed in nature, with
          complete privacy, break away from the grind and mundanity of life. We
          are more than just your next vacation spot. Come to The Haven and
          leave rejuvenated and refreshed.
        </p>
        <div className="accomodationsSection">
          <img src="hiking.jpg" className="accomodationsCabinImage"></img>

          <Fade>
            <div className="accomodationTextContainer">
              <p className="homeText">
                Recharge with a hike on one of our many trails.
              </p>
            </div>
          </Fade>
        </div>

        <div className="accomodationsSection">
          <Fade>
            <div className="accomodationTextContainer accomodationTextContainerReversed">
              <p className="homeText">
                Refresh as you bathe in the glow of the sunset.
              </p>
            </div>
          </Fade>

          <img
            src="bath.jpg"
            className="accomodationsCabinImage accomodationsCabinImageReversed"
          ></img>
        </div>

        <div className="accomodationsSection">
          <img src="hammock.jpg" className="accomodationsCabinImage"></img>

          <Fade>
            <div className="accomodationTextContainer">
              <p className="homeText">Reconnect with who matters most.</p>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}
