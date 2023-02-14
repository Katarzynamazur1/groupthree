import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Location from "./components/Location/Location";

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Location setLat={setLat} lat={lat} setLng={setLng} lng={lng} />
    </div>
  );
}

export default App;
