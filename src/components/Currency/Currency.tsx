import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Currency = () => {
  const [inCurrency, setInCurrency] = useState(0);
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/usd/?`)
      .then((inCurrencyData) =>
        setInCurrency(inCurrencyData.data.rates[0].mid)
      );
  }, []);
  //   console.log(inCurrency);

  const [outCurrency, setOutCurrency] = useState(0);
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/chf/?`)
      .then((outCurrencyData) =>
        setOutCurrency(outCurrencyData.data.rates[0].mid)
      );
  }, []);

  //   console.log(inCurrency);
  //   console.log(outCurrency);

  const finalCash = (100 * inCurrency) / outCurrency;

  return (
    <div>
      <p>{inCurrency}</p>
      <p>{outCurrency}</p>
      <p>{finalCash}</p>
    </div>
  );
};

export default Currency;
