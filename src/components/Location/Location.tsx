import React from "react";

interface LocationProps {
  setLat: (value: number) => void;
  lat: null | number;

  setLng: (value: number) => void;
  lng: null | number;
}

const Location = ({ setLat, setLng, lat, lng }: LocationProps) => {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>

      <div>Latitude: {lat}</div>
      <div>Longitude: {lng}</div>
    </div>
  );
};

export default Location;
