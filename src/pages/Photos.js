import React from "react";
import Header from "../components/Header";
import { ReactPhotoCollage } from "react-photo-collage";
import useWindowDimensions from "../utils/utils";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "../App.css";

export default function Photos() {
  const { height, width } = useWindowDimensions();
  const setting = {
    width: width > 1000 ? "60%" : "100vw",
    height:
      width > 1000
        ? ["60vh", "20vh", "40vh", "20vh"]
        : ["25vh", "25vh", "50vh", "25vh"],
    layout: [1, 4, 2, 4],
    photos: [
      { source: "THE-HAVEN-summer-2024-854.jpg" },
      { source: "wildwood-media-cabin52.jpg" },
      { source: "THE-HAVEN-summer-2024-46.jpg" },
      { source: "THE-HAVEN-summer-2024-49.jpg" },
      { source: "THE-HAVEN-summer-2024-115.jpg" },
      { source: "wildwood-media-drone2.jpg" },
      { source: "THE-HAVEN-summer-2024-134.jpg" },
      { source: "THE-HAVEN-summer-2024-135.jpg" },
      { source: "wildwood-media-cabin19.jpg" },
      { source: "wildwood-media-cabin16.jpg" },
      { source: "THE-HAVEN-summer-2024-153.jpg" },
      { source: "wildwood-media-lifestyle26.jpg" },
      { source: "THE-HAVEN-summer-2024-155.jpg" },
      { source: "THE-HAVEN-summer-2024-212.jpg" },
      { source: "wildwood-media-cabin2.jpg" },
      { source: "THE-HAVEN-summer-2024-223.jpg" },
      { source: "THE-HAVEN-summer-2024-227.jpg" },
      { source: "THE-HAVEN-summer-2024-242.jpg" },
      { source: "THE-HAVEN-summer-2024-379.jpg" },
      { source: "THE-HAVEN-summer-2024-381.jpg" },
      { source: "THE-HAVEN-summer-2024-383.jpg" },
      { source: "THE-HAVEN-summer-2024-392.jpg" },
      { source: "THE-HAVEN-summer-2024-396.jpg" },
      { source: "THE-HAVEN-summer-2024-428.jpg" },
      { source: "THE-HAVEN-summer-2024-482.jpg" },
      { source: "THE-HAVEN-summer-2024-489.jpg" },
      { source: "THE-HAVEN-summer-2024-659.jpg" },
      { source: "THE-HAVEN-summer-2024-660.jpg" },
      { source: "THE-HAVEN-summer-2024-679.jpg" },
      { source: "THE-HAVEN-summer-2024-685.jpg" },
      { source: "THE-HAVEN-summer-2024-698.jpg" },
      { source: "THE-HAVEN-summer-2024-705.jpg" },
      { source: "THE-HAVEN-summer-2024-722.jpg" },
      { source: "THE-HAVEN-summer-2024-763.jpg" },
      { source: "THE-HAVEN-summer-2024-792.jpg" },
      { source: "wildwood-media-lifestyle275.jpg" },
      { source: "THE-HAVEN-summer-2024-814.jpg" },
      { source: "THE-HAVEN-summer-2024-816.jpg" },
      { source: "THE-HAVEN-summer-2024-818.jpg" },
    ],
    showNumOfRemainingPhotos: true,
  };
  return (
    <>
      <Header activeTab="photos" />
      <div className="container bookingContainer photoContainer">
        {/* <Carousel className="carouselVideoPlayer" renderIndicator={() => null}>
          <ReactPlayer
            url="DELIVERHighlight.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERVillaWalkthrough.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERCypressWalkthrough.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERAdventure.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERNature.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERRelax.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERRomanceVilla.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERRomanceVariety.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
          <ReactPlayer
            url="DELIVERPizzaMaking.m4v"
            controls={true}
            width="100%"
            height="auto"
          />
        </Carousel> */}

        <ReactPhotoCollage {...setting} />
      </div>
    </>
  );
}
