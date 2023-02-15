import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [temp, setTemp] = useState("");

  return (
    <div className="App">
      <Navbar />
      {/* <Location
        setLat={setLat}
        lat={lat}
        setLng={setLng}
        lng={lng}
        temp={temp}
        setTemp={setTemp}
        setData={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        data={""}
      /> */}
      <Weather />
    </div>
  );
}

export default App;
