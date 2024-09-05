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
            Hi! Let us introduce ourselves! Ken & Julie Mallette: Lovers, best
            friends, & business partners for over 25 years - and still going
            strong! ❤️ How do we make it work? By taking time to step away from
            the craziness of life and focus on each other. That is why we want
            to share The Haven with you! When we first stepped onto this
            property, we knew it was special. The gorgeous views coupled with
            total privacy made it the perfect spot to shut out the world for a
            time. The Haven offers everything you need to relax, recharge, and
            reconnect to who and what you love!
            <br />
            <br /> ~ Ken & Julie
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
