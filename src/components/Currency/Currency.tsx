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
  console.log(inCurrency);
  //   setInCurrency(inCurrencyData);

  //   const [finalCash, setFinalCash] = useState(0);
  //   const inResponse = await fetch(
  //     `http://api.nbp.pl/api/exchangerates/rates/a/chf/?`
  //   );
  //   const inData = await inResponse.json();
  //   const outRespone = await fetch(
  //     `http://api.nbp.pl/api/exchangerates/rates/a/usd/?`
  //   );
  //   const outData = await outRespone.json();
  //   const inCurrent = await inData.rates[0].mid;
  //   const outCurrent = await outData.rates[0].mid;
  //   const calculs = await ((100 * inCurrent) / outCurrent);
  //   setFinalCash(calculs);
  return <div>{/* <p>{finalCash}</p> */}</div>;
};

export default Currency;

// const Currency = async () => {
//   //   const [finalCash, setFinalCash] = useState(0);
//   const inCurrencyData: any = document.getElementById("kwotaIn");
//   const outCurrencyData: any = document.getElementById("kwotaOut");
//   const inAmount: any = document.getElementById("kwotaIn");
//   //   const inResponse = await fetch(
//   //     `http://api.nbp.pl/api/exchangerates/rates/a/chf/?`
//   //   );
//   //   const inData = await inResponse.json();
//   //   const outRespone = await fetch(
//   //     `http://api.nbp.pl/api/exchangerates/rates/a/usd/?`
//   //   );
//   //   const outData = await outRespone.json();
//   //   const inCurrent = await inData.rates[0].mid;
//   //   const outCurrent = await outData.rates[0].mid;
//   const finalCash = (inAmount * inCurrencyData) / outCurrencyData;
//   //   setFinalCash(finalCash);
//   return (
//     <div>
//       <input placeholder="kwotaIn" id="kwotaIn"></input>
//       <input placeholder="walutaIn" id="walutaIn"></input>
//       <button>Przelicz</button>
//       <p>{finalCash}</p>
//       <input placeholder="walutaIn" id="walutaIn"></input>
//     </div>
//   );
// };

// export default Currency;
