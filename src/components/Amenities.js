import React from "react";
import Fade from "react-reveal/Fade";

export default function Amenities() {
  return (
    <div className="amenitiesContainer">
      <Fade>
        <p className=" homeText homeTextAboutTile textCenter">Amenities</p>
        <div className="column spaceEvenly">
          <div className="row spaceEvenly">
            <div className="column center">
              <img src="cabin.jpg" className="amenityIcon" />
              <p className="amenityIconText bold">Amenity 1</p>
            </div>

            <div className="column center">
              <img src="cabin.jpg" className="amenityIcon" />
              <p className="amenityIconText bold">Amenity 2</p>
            </div>
          </div>
          <div className="row spaceEvenly amenityPadding">
            <div className="column center">
              <img src="cabin.jpg" className="amenityIcon" />
              <p className="amenityIconText bold">Amenity 3</p>
            </div>

            <div className="column center">
              <img src="cabin.jpg" className="amenityIcon" />
              <p className="amenityIconText bold">Amenity 4</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
