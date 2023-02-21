import React, { useState, useEffect } from "react";

interface GeoLocation {
  lat: number | null;
  lng: number | null;
}

export const Geolocation: React.FC = () => {
  const [geolocation, setGeolocation] = useState<GeoLocation>({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div>
      <p>Latitude: {geolocation.lat}</p>
      <p>Longitude: {geolocation.lng}</p>
    </div>
  );
};
export default Location;
