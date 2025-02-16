import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import InnerHTML from "dangerously-set-html-content";
import { ReactPhotoCollage } from "react-photo-collage";
import useWindowDimensions from "../utils/utils";

import ShopComponent from "../components/ShopComponent";

export default function Booking() {
  const bookingWidgetHTML = `<div id="search-widget_IO312PWQ"><script>!function(e,t,a,n,c,r){function s(t){e.console.log("[Guesty Embedded Widget]:",t)}var i,d,l,o,y,m,g,h,p,u;n&&(i=n,d=t.getElementsByTagName("head")[0],(l=t.createElement("link")).rel="stylesheet",l.type="text/css",l.href=i,l.media="all",d.appendChild(l)),o=function(){try{e[a].create(r).catch(function(e){s(e.message)})}catch(e){s(e.message)}},h=!1,y=c,m=function(){h||this.readyState&&"complete"!=this.readyState||(h=!0,o())},(g=t.createElement("script")).type="text/javascript",g.src=y,g.async="true",g.onload=g.onreadystatechange=m,p=g,(u=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,u)}(window,document,"GuestySearchBarWidget","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js",{"siteUrl":"thehavenwnc.guestybookings.com"});</script></div>`;

  const { height, width } = useWindowDimensions();

  const setting = {
    width: width > 1000 ? "60%" : "100vw",
    height: width > 1000 ? ["75vh", "20vh"] : ["25vh", "25vh"],
    layout: [1, 4],
    showNumOfRemainingPhotos: true,
  };

  const handleClick = (link) => {
    window.open(link);
  };

  const cypressSetting = {
    ...setting,
    photos: [
      { source: "THE-HAVEN-summer-2024-10.jpg" },
      { source: "THE-HAVEN-summer-2024-17.jpg" },
      { source: "THE-HAVEN-summer-2024-18.jpg" },
      { source: "THE-HAVEN-summer-2024-23.jpg" },
      { source: "THE-HAVEN-summer-2024-27.jpg" },
      { source: "THE-HAVEN-summer-2024-28.jpg" },
      { source: "THE-HAVEN-summer-2024-40.jpg" },
      { source: "THE-HAVEN-summer-2024-51.jpg" },
      { source: "THE-HAVEN-summer-2024-60.jpg" },
      { source: "THE-HAVEN-summer-2024-70.jpg" },
      { source: "THE-HAVEN-summer-2024-71.jpg" },
      { source: "THE-HAVEN-summer-2024-76.jpg" },
      { source: "THE-HAVEN-summer-2024-83.jpg" },
      { source: "THE-HAVEN-summer-2024-91.jpg" },
      { source: "THE-HAVEN-summer-2024-110.jpg" },
      { source: "THE-HAVEN-summer-2024-119.jpg" },
      { source: "THE-HAVEN-summer-2024-146.jpg" },
    ],
  };

  const spruceSetting = {
    ...setting,
    photos: [
      { source: "THE-HAVEN-summer-2024-491.jpg" },
      { source: "THE-HAVEN-summer-2024-493.jpg" },
      { source: "THE-HAVEN-summer-2024-494.jpg" },
      { source: "THE-HAVEN-summer-2024-498.jpg" },
      { source: "THE-HAVEN-summer-2024-544.jpg" },
      { source: "THE-HAVEN-summer-2024-545.jpg" },
      { source: "THE-HAVEN-summer-2024-549.jpg" },
      { source: "THE-HAVEN-summer-2024-550.jpg" },
      { source: "THE-HAVEN-summer-2024-566.jpg" },
      { source: "THE-HAVEN-summer-2024-581.jpg" },
      { source: "THE-HAVEN-summer-2024-584.jpg" },
      { source: "THE-HAVEN-summer-2024-586.jpg" },
    ],
  };

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
                <p className="homeText tab">The Cypress</p>
              </Tab>
              <Tab>
                <p className="homeText tab">The Spruce</p>
              </Tab>
              <Tab>
                <p className="homeText tab">Always Included</p>
              </Tab>
              <Tab>
                <p className="homeText tab">Plan Your Experience</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">
                  Relax in the elegant seclusion of our Cypress Villa. Wake up
                  to your personal view of the mountains.
                </p>

                <div className="center centerPhotos">
                  <ReactPhotoCollage {...cypressSetting} />
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
                  <ReactPhotoCollage {...spruceSetting} />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="center accomodationsBackground">
                <p className="homeText">Always Included with your stay:</p>
                <ul className="homeText">
                  <li className="vipList">Bottle of Wine</li>
                  <li className="vipList">Pizza Kit</li>
                  <li className="vipList">Pasta Ingredients</li>
                  <li className="vipList">Breakfast Pastries</li>
                  <li className="vipList">S'mores</li>
                  <li className="vipList">Hot Chocolate</li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="center accomodationsBackground">
                <div className="flexCenter">
                  {/* <p style={{ margin: 30 }}>
                    <span style={{ fontWeight: 400 }} className="homeText">
                      Special Romance Package
                    </span>
                    &nbsp;- $100
                  </p>
                  <p style={{ width: "60%", marginTop: 1, fontSize: "30px" }}>
                    Step into the perfect romantic setting with flower petals
                    and flameless candles around the hot tub and villa and a
                    bottle of bubbly champagne just waiting for you to pop open!
                  </p> */}
                  <p className="homeText" style={{ fontWeight: 400 }}>
                    Local Info:
                  </p>

                  <ul className="linkList">
                    <li>
                      <p className="linkListText">
                        Discover the vibrant offerings of Haywood County, North
                        Carolina, through{" "}
                        <span
                          onClick={() =>
                            handleClick("https://visithaywood.com/")
                          }
                          className="underline"
                        >
                          Visit Haywood
                        </span>
                        . Explore a variety of shopping destinations, from
                        unique boutiques to charming local shops. Immerse
                        yourself in the rich arts scene by visiting numerous art
                        galleries and theaters, such as the Haywood Arts
                        Regional Theatre (HART), which showcases local talent
                        and cultural heritage. For outdoor enthusiasts, the
                        county boasts scenic hiking trails, picturesque
                        waterfalls, and opportunities for horseback riding.
                        Don't miss the chance to experience live music and
                        entertainment at various venues and festivals throughout
                        the year. Plan your visit to align with local events and
                        festivals to fully experience the community's vibrant
                        spirit.
                      </p>
                    </li>
                    <li>
                      <p className="linkListText">
                        For the latest information on driving conditions, road
                        closures, and openings in North Carolina, visit{" "}
                        <span
                          className="underline"
                          onClick={() => handleClick("https://drivenc.gov")}
                        >
                          drivenc.gov
                        </span>
                        . This official real-time traffic and travel information
                        platform provides details about road closures,
                        accidents, congestion, and work zones.
                      </p>
                    </li>
                    <li>
                      <p className="linkListText">
                        Visit{" "}
                        <span
                          className="underline"
                          onClick={() => handleClick("https://nps.gov/grsm")}
                        >
                          nps.gov/grsm
                        </span>{" "}
                        for everything you need to know about the Great Smoky
                        Mountains National Park. Discover hiking trails, scenic
                        drives, wildlife, historic sites, and tips for planning
                        your visit to America’s most visited national park.
                      </p>
                    </li>
                    <li>
                      <p className="linkListText">
                        Explore{" "}
                        <span
                          className="underline"
                          onClick={() =>
                            handleClick("https://www.blueridgeparkway.org")
                          }
                        >
                          www.blueridgeparkway.org
                        </span>{" "}
                        for everything you need to plan your journey along the
                        Blue Ridge Parkway. Find information on scenic
                        overlooks, hiking trails, attractions, dining, and
                        events along America’s favorite drive.
                      </p>
                    </li>

                    <li>
                      <p className="linkListText">
                        Check out{" "}
                        <span
                          className="underline"
                          onClick={() =>
                            handleClick("https://www.maxpatch.org")
                          }
                        >
                          www.maxpatch.org
                        </span>{" "}
                        for details about the Max Patch Recreation Area. Learn
                        about this picturesque mountain bald, its hiking trails,
                        breathtaking panoramic views, and guidelines for
                        preserving this natural treasure.
                      </p>
                    </li>
                  </ul>

                  <ShopComponent />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
}
