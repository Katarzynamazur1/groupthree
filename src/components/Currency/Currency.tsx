import { colors, Table } from "@mui/material";
import axios from "axios";
import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";

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

  const setFirstCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInSelected(event.target.value);
  };

  const setSecondCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOutSelected(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={startAmount}
        onChange={(e) => setStartAmuount(e.target.value)}
      ></input>
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
      = {finalCash.toFixed(2)}
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
    </div>
  );
};

export default Currency;
