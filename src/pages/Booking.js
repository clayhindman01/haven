import React from "react";
import Header from "../components/Header";
import Cabin from "../components/Cabin";

export default function Booking() {
  return (
    <>
      <Header isHomepage={false} />
      <div className="container bookingContainer">
        <div className="bookingCon">
          <div className="center tempBookingText">
            Online Booking Coming Soon. In the meantime, check us out on AirBnB
            or VRBO or call us at (123)454-6789.
          </div>
        </div>
      </div>
    </>
  );
}
