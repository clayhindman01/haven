import React from "react";
import { Fade } from "react-reveal";

export default function Accomodations() {
  return (
    <div className="homeAboutSectionContainer">
      <Fade>
        <div className="accomodationsSection">
          <img src="cabin.jpg" className="accomodationsCabinImage"></img>

          <div className="accomodationTextContainer">
            <p className="fancyFont homeText">Accomodations</p>
            <div className="horizontalLine" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
              dui, cursus et dolor a, sagittis sagittis tortor. Praesent urna
              sapien, interdum at lectus sit amet, facilisis tristique diam. Sed
              magna velit, dictum eu ligula vel, dictum aliquam neque. Morbi et
              nisi ultricies, efficitur mauris ac, condimentum erat. Ut tempus
              lectus ac porta consectetur. Suspendisse nulla ipsum, volutpat eu
              velit id, volutpat malesuada ipsum. Vestibulum nibh leo,
              scelerisque at dictum id, semper non odio.
            </p>
            <p>
              Etiam semper sodales lacus. Aliquam blandit purus felis, ut
              vulputate nisi volutpat sit amet. Pellentesque egestas nulla eu
              libero condimentum lobortis. Aenean at convallis odio, eget
              porttitor leo. Suspendisse lacinia sem fermentum accumsan
              consectetur. Nullam dictum sapien at nunc varius, vitae dictum leo
              luctus. Etiam in imperdiet sem. Quisque quis rutrum turpis. Fusce
              sodales enim elit, nec lacinia nibh ultricies ac. Vestibulum at
              nisl justo. Suspendisse at malesuada massa, nec ultricies tortor.
              Fusce volutpat massa nec diam lacinia egestas eu ac neque.
              Vestibulum eget nisi ultrices sapien ultricies pulvinar vitae ac
              sapien. Nam nisl leo, mollis quis neque a, finibus imperdiet
              tellus. Cras tempus enim et porttitor hendrerit.
            </p>
            <div className="homeButtonContainer">
              <div className="homeButton">
                <a href="/booking" className="homeButtonText">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
