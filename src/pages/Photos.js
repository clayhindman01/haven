import React from "react";
import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Photos() {
  return (
    <>
      <Header activeTab="photos" />
      <div className="container bookingContainer photoContainer">
        <div className="center centerPhotos">
          <Carousel axis="horizontal" autoPlay={true} dynamicHeight={true}>
            <div>
              <img src="cabin.jpg" alt="cabin" className="carouselImage" />
            </div>
            <div>
              <img src="cabin.jpg" alt="cabin" className="carouselImage" />
            </div>
            <div>
              <img src="cabin.jpg" alt="cabin" className="carouselImage" />
            </div>
            <div>
              <img src="woods.jpg" alt="cabin" className="carouselImage" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
