import React from "react";
import Header from "../components/Header";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import InnerHTML from "dangerously-set-html-content";

export default function Booking() {
  const bookingWidgetHTML = `<div id="search-widget_IO312PWQ"><script>!function(e,t,a,n,c,r){function s(t){e.console.log("[Guesty Embedded Widget]:",t)}var i,d,l,o,y,m,g,h,p,u;n&&(i=n,d=t.getElementsByTagName("head")[0],(l=t.createElement("link")).rel="stylesheet",l.type="text/css",l.href=i,l.media="all",d.appendChild(l)),o=function(){try{e[a].create(r).catch(function(e){s(e.message)})}catch(e){s(e.message)}},h=!1,y=c,m=function(){h||this.readyState&&"complete"!=this.readyState||(h=!0,o())},(g=t.createElement("script")).type="text/javascript",g.src=y,g.async="true",g.onload=g.onreadystatechange=m,p=g,(u=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,u)}(window,document,"GuestySearchBarWidget","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js",{"siteUrl":"juliemallette.guestybookings.com"});</script></div>`;
  return (
    <>
      <Header activeTab="booking" />
      <div className="container bookingContainer">
        <div className="bookingCon">
          <div className="center tempBookingText">
            These houses are built to optimize your experience at The Haven. Our
            top-notch amenities coupled with breathtaking views, allow you to
            relax in luxury while enjoying the simplicity of nature. Sip one of
            our local wines as you bask in the starlight. Bathe with a view.
            Wake up to your personal view of the mountains as you snuggle in
            bed.
          </div>
          <div className="bookingWidgetContainer">
            <h2>Check Availibility</h2>
            <InnerHTML html={bookingWidgetHTML} />
          </div>
          <Tabs>
            <TabList>
              <Tab>
                <p className="homeText">The Cypress</p>
              </Tab>
              <Tab>
                <p className="homeText">The Spruce</p>
              </Tab>
              <Tab>
                <p className="homeText">VIP Package</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">
                  Relax in the elegant seclusion of our Juniper House. Wake up
                  to your personal view of the mountains.
                </p>

                <div className="center centerPhotos">
                  <Carousel
                    axis="horizontal"
                    autoPlay={true}
                    dynamicHeight={true}
                  >
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-10.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-17.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-18.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-23.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-27.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-28.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-40.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-51.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-60.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-70.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-71.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-76.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-83.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-91.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-91.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-110.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-119.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-146.jpg"
                        className="carouselImage"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">
                  Retreat to the luxurious shade of our Hemlock House. As you
                  take in spectacular views from your doorstep, reconnect to the
                  world and the one you share it with.
                </p>

                <div className="center centerPhotos">
                  <Carousel
                    axis="horizontal"
                    autoPlay={true}
                    dynamicHeight={true}
                  >
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
                <p className="homeText">
                  Upgrade your mountaintop retreat experience by adding on the
                  VIP package:
                </p>
                <ul className="homeText">
                  <li className="vipList">
                    Build your own charcuterie for two
                  </li>
                  <li className="vipList">
                    Bottle of Wine or Sparking Non-Alcoholic Beverage
                  </li>
                  <li className="vipList">S'mores supply kit for two</li>
                  <li className="vipList">$100 off your next stay</li>
                </ul>
                <p className="homeText">
                  Don't miss out, add on the VIP Experience today during
                  checkout!
                </p>
                <div className="center centerPhotos"></div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
}
