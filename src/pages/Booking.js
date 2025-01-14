import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import InnerHTML from "dangerously-set-html-content";
import { ReactPhotoCollage } from "react-photo-collage";
import useWindowDimensions from "../utils/utils";
import axios from "axios";

export default function Booking() {
  const bookingWidgetHTML = `<div id="search-widget_IO312PWQ"><script>!function(e,t,a,n,c,r){function s(t){e.console.log("[Guesty Embedded Widget]:",t)}var i,d,l,o,y,m,g,h,p,u;n&&(i=n,d=t.getElementsByTagName("head")[0],(l=t.createElement("link")).rel="stylesheet",l.type="text/css",l.href=i,l.media="all",d.appendChild(l)),o=function(){try{e[a].create(r).catch(function(e){s(e.message)})}catch(e){s(e.message)}},h=!1,y=c,m=function(){h||this.readyState&&"complete"!=this.readyState||(h=!0,o())},(g=t.createElement("script")).type="text/javascript",g.src=y,g.async="true",g.onload=g.onreadystatechange=m,p=g,(u=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,u)}(window,document,"GuestySearchBarWidget","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.css","https://s3.amazonaws.com/guesty-frontend-production/search-bar-production.js",{"siteUrl":"thehavenwnc.guestybookings.com"});</script></div>`;

  const { height, width } = useWindowDimensions();

  const setting = {
    width: width > 1000 ? "60%" : "100vw",
    height: width > 1000 ? ["75vh", "20vh"] : ["25vh", "25vh"],
    layout: [1, 4],
    showNumOfRemainingPhotos: true,
  };

  const [data, setData] = useState(null);
  const API_KEY = "cc66275139f3a703365d5c0e198fe594";

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?appid=${API_KEY}&lang=en&units=imperial&lat=35.533100&lon=-82.911700`;
    axios.get(url).then((res) => {
      const date = new Date(res.data.current.dt);
      setData({
        forecast: [
          {
            date:
              date.getDate() +
              " " +
              date.toLocaleDateString("en-US", { weekday: "long" }),
            description: "Clear",
            icon: "SVG PATH",
            temperature: { min: "-0", max: "6" },
            wind: "2",
            humidity: 60,
          },
        ],
        current: {
          date:
            date.getDate() +
            " " +
            date.toLocaleDateString("en-US", { weekday: "long" }),
          description: "Clear",
          icon: "SVG PATH",
          temperature: { current: Math.round(res.data.current.temp) },
          wind: res.data.current.wind_speed,
          humidity: res.data.current.humidity,
        },
      });
    });
  }, []);

  const handleClick = () => {
    window.open("https://VisitHaywood.com");
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
                <p className="homeText">The Cypress</p>
              </Tab>
              <Tab>
                <p className="homeText">The Spruce</p>
              </Tab>
              <Tab>
                <p className="homeText">Always Included</p>
              </Tab>
              <Tab>
                <p className="homeText">Enhancements and Info</p>
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
                <div className="homeText flexCenter">
                  <p style={{ margin: 30 }}>
                    <span style={{ fontWeight: 400 }} className="homeText">
                      Special Romance Package
                    </span>
                    &nbsp;- $100
                  </p>
                  <p style={{ width: "60%", marginTop: 1 }}>
                    Step into the perfect romantic setting with flower petals
                    and flameless candles around the hot tub and villa and a
                    bottle of bubbly champagne just waiting for you to pop open!
                  </p>
                  <p className="homeText" style={{ fontWeight: 400 }}>
                    Local Info:
                  </p>
                  <p
                    style={{ width: "60%", marginTop: 1 }}
                    onClick={handleClick}
                  >
                    VisitHaywood.com
                  </p>
                  {data && (
                    <ReactWeather
                      data={data}
                      lang="en"
                      locationLabel="Clyde, NC"
                      unitsLabels={{ temperature: "F", windSpeed: "Mi/h" }}
                      showForcast={false}
                    />
                  )}
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
