import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingVenue from "./pages/WeddingVenue";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import MeetTheFounders from "./pages/MeetTheFounders";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/weddingVenue" element={<WeddingVenue />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<MeetTheFounders />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
