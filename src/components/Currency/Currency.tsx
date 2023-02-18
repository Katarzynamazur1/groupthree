import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Currency = () => {
  const [inCurrency, setInCurrency] = useState();
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/usd/?`)
      .then((inCurrencyData) =>
        setInCurrency(inCurrencyData.data.rates[0].mid)
      );
  }, []);
  //   console.log(inCurrency);

  const [outCurrency, setOutCurrency] = useState();
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/chf/?`)
      .then((outCurrencyData) =>
        setOutCurrency(outCurrencyData.data.rates[0].mid)
      );
  }, []);

  //   console.log(inCurrency);
  //   console.log(outCurrency);

  return (
    <div>
      <p>{inCurrency}</p>
      <p>{outCurrency}</p>
    </div>
  );
};

export default Currency;
