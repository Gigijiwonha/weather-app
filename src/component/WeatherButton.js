import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  const cityNames = {
    seoul: {
      name: "seoul",
      lat: 37.34,
      lon: 126.59,
    },
    berlin: {
      name: "berlin",
      lat: 52.5,
      lon: 13.4,
    },
    doha: {
      name: "doha",
      lat: 25.3,
      lon: 51.5,
    },
  };

  const changeCity = (cityName) => {
    console.log("change city>>>", cityName.name);
  };

  return (
    <div className="btn-container">
      <Button
        variant="outline-light"
        onClick={() => changeCity(cityNames.seoul)}
      >
        Current Location
      </Button>
      <Button
        variant="outline-light"
        onClick={() => changeCity(cityNames.seoul)}
      >
        Seoul
      </Button>
      <Button
        variant="outline-light"
        onClick={() => changeCity(cityNames.berlin)}
      >
        Berlin
      </Button>
      <Button
        variant="outline-light"
        onClick={() => changeCity(cityNames.doha)}
      >
        Doha
      </Button>
    </div>
  );
};

export default WeatherButton;
