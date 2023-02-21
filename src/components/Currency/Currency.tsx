import { colors, Table } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Currency = () => {
  const inOptions = [
    { value: "chf", text: "CHF" },
    { value: "usd", text: "USD" },
    { value: "eur", text: "EUR" },
    { value: "gbp", text: "GBP" },
    { value: "jpy", text: "JEN" },
  ];

  const outOptions = [
    { value: "usd", text: "USD" },
    { value: "chf", text: "CHF" },
    { value: "eur", text: "EUR" },
    { value: "gbp", text: "GBP" },
    { value: "jpy", text: "JEN" },
  ];
  const [inSelected, setInSelected] = useState(inOptions[0].value);
  const [outSelected, setOutSelected] = useState(outOptions[0].value);

  const [startAmount, setStartAmuount] = useState("0");

  const [inCurrency, setInCurrency] = useState(0);
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/${inSelected}/?`)
      .then((inCurrencyData) =>
        setInCurrency(inCurrencyData.data.rates[0].mid)
      );
  }, [inOptions]);

  const [outCurrency, setOutCurrency] = useState(0);
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/${outSelected}/?`)
      .then((outCurrencyData) =>
        setOutCurrency(outCurrencyData.data.rates[0].mid)
      );
  }, [outOptions]);

  console.log(inSelected);

  console.log(outSelected);

  const finalCash = (parseInt(startAmount) * inCurrency) / outCurrency;

  return (
    <>
      <span
        style={{
          display: "flex",
          flexWrap: "wrap",

          width: "100%",
          justifyContent: "center",
          marginTop: "50px",
          boxSizing: "border-box",
          padding: "40px",

          fontSize: "1.1rem",

          textAlign: "center",
          color: "rgb(146, 146, 146)",
          margin: "5px",
          height: "15vh",
        }}
      >
        KONWERTER WALUTOWY
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "60vh",
            height: "150px",
          }}
        >
          {/* <span
        style={{
          fontSize: ".6rem",
          width: "40%",
          marginTop: "30px",
          marginBottom: "10px",
          textAlign: "center",
          color: "grey",
        }}
      >
        PODAJ KWOTĘ
      </span> */}

          <input
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: "10px",
              width: "25vh",
              height: "10vh",
              margin: "5px",
            }}
            type="number"
            value={startAmount}
            onChange={(e) => setStartAmuount(e.target.value)}
          ></input>
          {/* <span
        style={{
          fontSize: ".6rem",
          width: "40%",
          marginTop: "20px",
          marginBottom: "10px",
          textAlign: "center",
          color: "grey",
        }}
      >
        WYBIERZ WALUTĘ POCZĄTKOWĄ
      </span> */}
          <select
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: "10px",
              height: "10vh",
              width: "25vh",

              margin: "5px",
            }}
            value={inSelected}
            onChange={(el) => setInSelected(el.target.value)}
          >
            {inOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>

          {/* <span
        style={{
          fontSize: ".6rem",
          marginTop: "20px",
          marginBottom: "10px",
          textAlign: "center",
          color: "grey",
        }}
      >
        WYBIERZ WALUTĘ KOŃCOWĄ
      </span> */}

          <select
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: "10px",
              width: "25vh",
              height: "10vh",
              margin: "5px",
            }}
            value={outSelected}
            onChange={(el) => setOutSelected(el.target.value)}
          >
            {outOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <p
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: "10px",
              width: "25vh",
              fontSize: "1.5rem",
              marginTop: "30px",
              marginBottom: "10px",
              textAlign: "center",
              color: "grey",
              margin: "5px",
              height: "10vh",
            }}
          >
            {finalCash.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Currency;
