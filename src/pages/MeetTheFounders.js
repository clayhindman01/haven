import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MeetTheFounders() {
  return (
    <>
      <Header activeTab="meetTheFounders" />
      <div className="container bookingContainer">
        <div className="founderCon">
          <img src="founders.png" className="founderImage" />
          <div className="center meetTheFoundersText">
            Welcome to our haven! <br /> We have been married for 25 years, and
            each day has been an adventure. We have trekked parts of nearly
            every National Park, and once we stop in Asia and Africa this Spring
            we will have traveled to every continent! Throughout our travels, we
            realized the most breathtaking moments were just the two of us,
            enjoying the view, all alone. These moments have played a
            significant role in our marriage! By allowing us to step away from
            the chaos of life and the mundanity of routine, it reignites our
            love for each other. We can reconnect in the middle of our
            disconnected world. When we first stepped onto this breathtaking
            acreage, we knew it was something special and we couldn't just keep
            it to ourselves. We hope that as you retreat to The Haven, it will
            be a place for you to experience rejuvenation and reconnection with
            who matters most. <br /> ~ Ken & Julie
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
