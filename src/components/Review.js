import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function Review({ text, name, location }) {
  return (
    <div className="reviewContainer">
      <div className="reviewHeader">
        <StarIcon sx={{ color: "gold" }} fontSize="large" />
        <StarIcon sx={{ color: "gold" }} fontSize="large" />
        <StarIcon sx={{ color: "gold" }} fontSize="large" />
        <StarIcon sx={{ color: "gold" }} fontSize="large" />
        <StarIcon sx={{ color: "gold" }} fontSize="large" />
      </div>
      <p>{text}</p>
      <p>
        ~<span className="bold">{name}</span> from{" "}
        <span className="bold">{location}</span>
      </p>
    </div>
  );
}
