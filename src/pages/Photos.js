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
        <div className="carouselVideoPlayerContainer">
          <Carousel
            className="carouselVideoPlayer"
            renderIndicator={() => null}
          >
            {/* Highlight */}
            <ReactPlayer
              url="https://youtu.be/gwnzVJiEtdM"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Spruce Walkthrough */}
            <ReactPlayer
              url="https://youtu.be/0DatMY96BEY"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Cypress Walkthrough */}
            <ReactPlayer
              url="https://youtu.be/sSlrz2kKyxE?si=Z3W0EXi8zo4v78xC"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Adventure */}
            <ReactPlayer
              url="https://youtu.be/Qr53f5d0HXU"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Nature */}
            <ReactPlayer
              url="https://youtu.be/9whSt5Ifv2w"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Relax */}
            <ReactPlayer
              url="https://youtu.be/3o5U2TG-Bws"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Romance Villa */}
            <ReactPlayer
              url="https://youtu.be/oDstOO9Pbmk"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Romance Variety */}
            <ReactPlayer
              url="https://youtu.be/qjPQEyP8I5w"
              controls={true}
              width="100%"
              height="100%"
            />
            {/* Pizza Making */}
            <ReactPlayer
              url="https://youtu.be/s9mzSXaZkjY"
              controls={true}
              width="100%"
              height="100%"
            />
          </Carousel>
        </div>

        <ReactPhotoCollage {...setting} />
      </div>
    </>
  );
}
