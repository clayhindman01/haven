import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Fade from "react-reveal/Fade";
import Accomodations from "../components/Accomodations";
import Footer from "../components/Footer";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import axios from "axios";

export default function Home() {
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
          // icon: "SVG PATH",
          temperature: { current: Math.round(res.data.current.temp) },
          wind: res.data.current.wind_speed,
          humidity: res.data.current.humidity,
        },
      });
    });
  }, []);

  return (
    <>
      <Header activeTab="home" />
      <div className="container homepageContainer"></div>
      {data && (
        <div className="weatherContainer">
          <ReactWeather
            data={data}
            lang="en"
            locationLabel="Clyde, NC"
            unitsLabels={{ temperature: "F", windSpeed: "Mi/h" }}
            showForcast={false}
          />
        </div>
      )}
      <div className="homeAboutSectionCon">
        <Accomodations />

        <Footer />
      </div>
    </>
  );
}
