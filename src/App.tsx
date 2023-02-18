import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Currency from "./components/Currency/Currency";

function App() {
   return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Currency />
        

        <Weather />
      </div>
    </BrowserRouter>
  );
}

export default App;
