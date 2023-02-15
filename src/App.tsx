import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;
