import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";
import Currency from "./components/Currency/Currency";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Currency />
      <Weather />
    </div>
  );
}

export default App;
