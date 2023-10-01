import React from "react";
import Header from "../components/Header";
import Cabin from "../components/Cabin";

export default function Booking() {
  return (
    <>
    <Header isHomepage={false} />
    <div className="container bookingContainer">
      <div className="center">
        <Cabin cabinOne={true} />
        <Cabin cabinOne={false} />
      </div>
    </div>
    </>
    
  );
}
