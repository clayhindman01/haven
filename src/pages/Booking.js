import React from "react";
import Header from "../components/Header";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Booking() {
  return (
    <>
      <Header activeTab="booking" />
      <div className="container bookingContainer">
        <div className="bookingCon">
          <div className="center tempBookingText">
          These houses are built to optimize your experience at The Haven. Our top-notch amenities
coupled with breathtaking views, allow you to relax in luxury while enjoying the simplicity of
nature. Sip one of our local wines as you bask in the starlight. Bathe with a view. Wake up to
your personal view of the mountains as you snuggle in bed.
          </div>
          <Tabs>
            <TabList>
              <Tab><p className="homeText">Juniper House</p></Tab>
              <Tab>
                <p className="homeText">Hemlock House</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">Relax in the elegant seclusion of our Juniper House. Wake up to your personal
  view of the mountains.</p>

                <div className="center centerPhotos">
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
              
            </TabPanel>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">Retreat to the luxurious shade of our Hemlock House. As you take in
spectacular views from your doorstep, reconnect to the world and the one you share it with.</p>

                <div className="center centerPhotos">
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
              
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
