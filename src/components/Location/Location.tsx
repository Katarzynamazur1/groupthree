import React from "react";

interface LocationProps {
  setLat: (value: number) => void;
  lat: number;

  setLng: (value: number) => void;
  lng: number;

  setData: (value: string) => void;
  data: string;
  setTemp: (value: string) => void;
  temp: string;
}

const Location = ({
  setLat,
  setLng,
  data,
  setTemp,
  lat,
  lng,
  temp,
}: LocationProps) => {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lng +
        "&units=metric&appid=46079d357e9a2c65ff03fab0ab51f02c";

      const renderLocalList = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const temp = data.main.temp;

        setTemp(temp);
      };
    });
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>

      <div>Latitude: {lat}</div>
      <div>Longitude: {lng}</div>

      <div>current temperature: {temp}ºC</div>
    </div>
  );
};

export default Location;
