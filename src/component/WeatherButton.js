import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({
  cities,
  selectedCity,
  handleCurrentLocation,
}) => {
  return (
    <div className="btn-container">
      <Button
        variant={`${selectedCity == null ? "outline-light" : "light"} `}
        onClick={() => handleCurrentLocation("current")}
      >
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          variant={`${selectedCity == item ? "outline-light" : "light"} `}
          key={index}
          onClick={() => handleCurrentLocation(item)}
        >
          {item}
        </Button>
      ))}
      ;
    </div>
  );
};

export default WeatherButton;
