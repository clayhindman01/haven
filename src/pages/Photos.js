import React from "react";
import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Photos() {
  return (
    <>
      <Header activeTab="photos" />
      <div className="container bookingContainer photoContainer">
        <div className=" centerPhotos">
          <Carousel axis="horizontal" autoPlay={true} dynamicHeight={true}>
            <div>
              <img src="juniper1.gif" className="carouselImage" />
            </div>
            <div>
              <img src="juniper2.jpg" className="carouselImage" />
            </div>
            <div>
              <img src="juniper3.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper4.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper5.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper6.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper7.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper8.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper9.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper10.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper11.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper12.webp" className="carouselImage" />
            </div>
            <div>
              <img src="juniper13.webp" className="carouselImage" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
