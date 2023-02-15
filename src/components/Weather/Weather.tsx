import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";

import React from "react";

export const Weather = () => {
  const [temp, setTemp] = useState();
  const [hum, setHum] = useState();
  const [clouds, setClouds] = useState();
  const [city, setCity] = useState();
  const [wind, setWind] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(lat, lon);

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=46079d357e9a2c65ff03fab0ab51f02c`
        )
        .then((data) => {
          console.log(data);

          const city = data.data.name;
          setCity(city);

          const temp = data.data.main.temp;
          setTemp(temp);

          const hum = data.data.main.humidity;
          setHum(hum);

          const clouds = data.data.weather[0].description;
          setClouds(clouds);

          const wind = data.data.wind.speed;
          setWind(wind);
        });
    });
  });

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontSize: "1.01rem", mt: ".8rem", mb: ".8rem" }}
      >
        Today's weather condition
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.8rem", mt: ".2rem" }}
      >
        Your location: {city}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.8rem", mt: ".2rem" }}
      >
        Temperature: {temp}°C
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.8rem", mt: ".2rem" }}
      >
        Humidity: {hum}%
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.8rem", mt: ".2rem" }}
      >
        Clouds: {clouds}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.8rem", mt: ".2rem" }}
      >
        Wind speed: {wind}m/sec
      </Typography>

      {/* {articles.length !== 0 && <Article article={articles[0]} />} */}
      {/* {articles.length !== 0 &&
            articles.map((el, i) => {
              return <Article article={el} key={i} />;
            })} */}
    </>
  );
};
// )
export default Weather;
