import React from "react";
import Header from "../components/Header";
import Cabin from "../components/Cabin";

export default function Booking() {
  return (
    <>
      <Header isHomepage={false} />
      <div className="container bookingContainer">
        <div className="bookingCon">
          <div className="center ">
            {/* <Cabin cabinOne={true} />
            <Cabin cabinOne={false} /> */}
            Booking Coming Soon
          </div>
        </div>
      </div>
    </>
  );
}
