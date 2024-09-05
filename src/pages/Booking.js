import React from "react";
import Header from "../components/Header";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import InnerHTML from "dangerously-set-html-content";

export default function Booking() {
  console.log("testing");
  const bookingWidgetHTML = `<div id="search-widget_IO312PWQ"><script>!function(e,t,a,n,c,r){function s(t){e.console.log("[Guesty Embedded Widget]:",t)}var i,d,l,o,y,m,g,h,p,u;n&&(i=n,d=t.getElementsByTagName("head")[0],(l=t.createElement("link")).rel="stylesheet",l.type="text/css",l.href=i,l.media="all",d.appendChild(l)),o=function(){try{e[a].create(r).catch(function(e){s(e.message)})}catch(e){s(e.message)}},h=!1,y=c,m=function(){h||this.readyState&&"complete"!=this.readyState||(h=!0,o())},(g=t.createElement("script")).type="text/javascript",g.src=y,g.async="true",g.onload=g.onreadystatechange=m,p=g,(u=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,u)}(window,document,"GuestySearchBarWidget","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js",{"siteUrl":"thehavenwnc.guestybookings.com"});</script></div>`;
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
                <p className="homeText">Always Included</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">
                  Relax in the elegant seclusion of our Cypress Villa. Wake up
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
                <p className="homeText bookingText">
                  Retreat to the luxurious shade of our Spruce Villa. As you
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
                      <img
                        src="THE-HAVEN-summer-2024-491.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-493.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-494.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-498.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-544.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-545.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-549.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-550.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-566.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-581.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-584.jpg"
                        className="carouselImage"
                      />
                    </div>
                    <div>
                      <img
                        src="THE-HAVEN-summer-2024-586.jpg"
                        className="carouselImage"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">Always Included with your stay:</p>
                <ul className="homeText">
                  <li className="vipList">Bottle of Wine</li>
                  <li className="vipList">Piza Kit</li>
                  <li className="vipList">Pasta Ingredients</li>
                  <li className="vipList">Breakfast Pastries</li>
                  <li className="vipList">S'mores</li>
                  <li className="vipList">Hot Chocolate</li>
                </ul>

                <p className="homeText">Additional Add Ons:</p>
                <div className="homeText flexCenter">
                  <p style={{ margin: 0 }}>
                    <span style={{ fontWeight: 400 }}>
                      Special Romance Package
                    </span>
                    &nbsp;- $100
                  </p>
                  <p style={{ width: "60%", marginTop: 1 }}>
                    Step into the perfect romantic setting with flower petals
                    and flameless candles around the hot tub and villa and a
                    bottle of bubbly champagne just waiting for you to pop open!
                  </p>
                </div>
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
