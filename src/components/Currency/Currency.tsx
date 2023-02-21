import { colors } from "@mui/material";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <p
        style={{
          fontWeight: "lighter",
          fontSize: "1.2rem",


          marginTop: "50px",
          textAlign: "center",
          color: "grey",
        }}
      >
        KONWERTER WALUT
      </p>

      <span
        style={{
          fontSize: ".6rem",
          marginTop: "30px",
          marginBottom: "10px",
          textAlign: "center",
          color: "grey",
        }}
      >
        PODAJ KWOTĘ
      </span>
      <input
        type="number"
        value={startAmount}
        onChange={(e) => setStartAmuount(e.target.value)}
      ></input>
      <span
        style={{
          fontSize: ".6rem",
          marginTop: "20px",
          marginBottom: "10px",
          textAlign: "center",
          color: "grey",
        }}
      >
        WYBIERZ WALUTĘ POCZĄTKOWĄ
      </span>
      <select
        value={inSelected}
        onChange={(el) => setInSelected(el.target.value)}
      >
        {inOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <span
        style={{
          fontSize: ".6rem",
          marginTop: "20px",
          marginBottom: "10px",
          textAlign: "center",
          color: "grey",
        }}
      >
        WYBIERZ WALUTĘ KOŃCOWĄ
      </span>

      <select
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
          fontSize: "1.5rem",
          marginTop: "30px",
          marginBottom: "10px",
          textAlign: "center",
          color: "grey",
        }}
      >
        {finalCash.toFixed(2)}
      </p>
    </div>
  );
};

export default Currency;
