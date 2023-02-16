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
      <div className="footer">
        <table style={{ width: "100%" }} align="center">
          <tbody>
            <tr>
              <td>
                <Typography
                  variant="h6"
                  align="left"
                  sx={{ fontSize: "0.6rem", mt: ".2rem" }}
                >
                  <h1>{city}</h1>
                  <h3> Temp: {temp}°C</h3>
                </Typography>
              </td>
              <td>
                <Typography
                  variant="h6"
                  align="right"
                  sx={{ fontSize: "0.6rem", mt: ".1rem" }}
                >
                  <p> Humidity: {hum}% </p>
                  <p> Clouds: {clouds}</p>
                  <p> Wind: {wind}m/sec</p>
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <Typography
          variant="h6"
          align="center"
          sx={{ fontSize: "0.8rem", mt: ".2rem" }}
        >
          {city}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontSize: "0.6rem", mt: ".2rem" }}
        >
          Temp: {temp}°C Clouds: {clouds}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontSize: "0.6rem", mt: ".2rem" }}
        >
          Humidity: {hum}% Wind: {wind}m/sec
        </Typography> */}
      </div>

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
