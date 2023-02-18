import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Currency = () => {
  const inCurrenceData = "chf";
  const outCurrenceData = "usd";
  const startAmoutn = 100;
  const [inCurrency, setInCurrency] = useState(0);
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/${inCurrenceData}/?`)
      .then((inCurrencyData) =>
        setInCurrency(inCurrencyData.data.rates[0].mid)
      );
  }, []);
  //   console.log(inCurrency);

  const [outCurrency, setOutCurrency] = useState(0);
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/${outCurrenceData}/?`)
      .then((outCurrencyData) =>
        setOutCurrency(outCurrencyData.data.rates[0].mid)
      );
  }, []);

  //   console.log(inCurrency);
  //   console.log(outCurrency);

  const finalCash = (startAmoutn * inCurrency) / outCurrency;

  return (
    <div>
      <p>
        {startAmoutn} {inCurrenceData}
      </p>
      <p>=</p>
      <p></p>
      <p>
        {finalCash.toFixed(2)} {outCurrenceData}
      </p>
    </div>
  );
};

export default Currency;
