"use client"
import React, { useEffect, useState } from "react";
// Better get no errors this time
export default function Map() {
  const [location, setLocation] = useState(null);

  
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Astro Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <p className="p-8 bg-secondary text-white cursor-pointer w-[60%] text-center mt-5" onClick={handleLocationClick}>Get Your location</p>

     {location && <div className="mt-5 flex flex-col items-center">
        <p>Location is {location.latitude} {location.longitude} </p>
      </div>
      }
    </div>
  );
}

function RoutingComponent() {
  const map = useMap();

  console.log(L.Routing)
  L.Routing.control({
    waypoints: [
      L.latLng(-15.7741, 35.0319),
      L.latLng(-15.8136, 35.0964),
    ],
    createMarker: function () {
      return null; // Hide the extra markers
    },
  }).addTo(map);

  return null;
}