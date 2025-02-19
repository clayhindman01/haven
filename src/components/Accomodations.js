import React from "react";
import { Fade } from "react-reveal";
import Review from "./Review";

export default function Accomodations() {
  const reviewData = [
    {
      name: "Gerret",
      location: "Clearwater, FL",
      text: "10/10! Even more beautiful than the pictures!",
    },
    {
      name: "Damien",
      location: "High Point, NC",
      text: "Amazing Stay! Stunning mountain views, comfortable bed, and great amenities. Can't wait to return!",
    },
    {
      name: "Moira",
      location: "Kalamazoo, MI",
      text: "Peaceful and beautiful. Stunning views, great aesthetic, and well-stocked kitchen. A must-visit!",
    },
    {
      name: "Kelly",
      location: "Commack, NY",
      text: "An amazing getaway! One of my favorite places—does not disappoint!",
    },
    {
      name: "Josh",
      location: "Bloomington, IN",
      text: "Breathtaking views and cozy touches. Perfect for a romantic, relaxing escape.",
    },
    {
      name: "Keith",
      location: "Columbus, OH",
      text: "An unforgettable gem! Perfectly private, peaceful, with incredible hospitality. Highly recommended!",
    },
    {
      name: "Gina",
      location: "Cleveland, GA",
      text: "Breathtaking scenery and thoughtful extras like pizza, wine, and s'mores. I wish we could’ve stayed longer!",
    },
    {
      name: "Annabella",
      location: "Miami, FL",
      text: "Beautiful and serene. Spectacular views and cozy vibes—I didn’t want to leave!",
    },
  ];
  return (
    <div className="homeAboutSectionContainer">
      <Fade>
        <p className="homeText textPadding">
          Enjoy a one-of-a-kind experience. Luxuriously immersed in nature, with
          complete privacy, break away from the grind and mundanity of life.{" "}
          <br />
          <br />
          We are more than just your next vacation spot. Come to The Haven and
          leave rejuvenated and refreshed.
        </p>
        <div className="accomodationsSection">
          <div className="accomodationsCabinImageContainerHorizontal">
            <img
              src="wildwood-media-cabin2.jpg"
              className="accomodationsCabinImage"
            ></img>
          </div>

          {/* <Fade> */}
          <div className="accomodationTextContainer">
            <p className="homeText">
              Relax beneath the stars by your private fire pit.
            </p>
          </div>
          {/* </Fade> */}
        </div>

        <div className="accomodationsSection accomodationContainerReversed">
          {/* <Fade> */}
          <div className="accomodationTextContainer accomodationTextContainerReversed">
            <p className="homeText">
              Recharge with the spectacular morning views
            </p>
          </div>
          {/* </Fade> */}
          <div className="accomodationsCabinImageContainerHorizontal">
            <img
              src="wildwood-media-cabin16.jpg"
              className="accomodationsCabinImage accomodationsCabinImageReversed"
            ></img>
          </div>
        </div>

        <div className="accomodationsSection">
          <div className="accomodationsCabinImageContainerHorizontal">
            <img
              src="wildwood-media-lifestyle117.jpg"
              className="accomodationsCabinImage"
            ></img>
          </div>

          {/* <Fade> */}
          <div className="accomodationTextContainer">
            <p className="homeText">Reconnect with what matters most.</p>
          </div>
          {/* </Fade> */}
        </div>
      </Fade>

      {/* <div className="scrollingReviews">
        <Review
          text="10/10! Even more beautiful than the pictures!"
          name="Gerret"
          location="Clearwater, FL"
        />
      </div> */}

      <div className="moving-list-container">
        <div className="moving-list">
          {reviewData.map((item, index) => (
            <Review
              name={item.name}
              location={item.location}
              text={item.text}
              key={index}
              className="moving-list-item"
            />
          ))}
        </div>
      </div>

      <div className="view-accomodations-container">
        <a href="/booking" className="homeText whiteText">
          Book Now!
        </a>
      </div>
    </div>
  );
}
