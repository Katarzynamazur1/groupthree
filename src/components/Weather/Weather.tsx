import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";

import React from "react";

const key: string = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;
if (key === undefined) {
  throw new Error(
    "No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY"
  );
}

const keyQuery = `appid=${key}`;

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
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&${keyQuery}`
        )
        .then((data) => {
          console.log(data);

          setCity(data.data.name);
          setTemp(data.data.main.temp);
          setHum(data.data.main.humidity);
          setClouds(data.data.weather[0].description);
          setWind(data.data.wind.speed);
        });
    });
  });

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontSize: "1rem", mt: ".8rem", mb: ".8rem" }}
      >
        Today's weather condition
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.6rem", mt: ".2rem" }}
      >
        Location: {city}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.6rem", mt: ".2rem" }}
      >
        Temperature: {temp}°C
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.6rem", mt: ".2rem" }}
      >
        Humidity: {hum}%
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.6rem", mt: ".2rem" }}
      >
        Clouds: {clouds}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontSize: "0.6rem", mt: ".2rem" }}
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
