import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingVenue from "./pages/WeddingVenue";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Home from "./pages/Home";
import Photos from "./pages/Photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/weddingVenue" element={<WeddingVenue />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
