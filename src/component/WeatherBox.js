import React from "react";
import partlycloudy from "../assets/partlycloudy.png";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weatherBox">
      <div className="weatherBox--infoContainer">
        <div className="weatherBox--currentLocation">Current Location</div>
        <div className="weatherBox--line"> </div>
        <div className="weatherBox--cityName">{weather?.name}</div>
        <h3 className="weatherBox--description">
          {weather?.weather[0].description}
        </h3>
      </div>
      <div className="weatherBox--imgContainer">
        <img
          className="weatherBox--img"
          src={partlycloudy}
          alt="partlycloudy"
        ></img>
        <h2 className="weatherBox--temp">
          {Math.floor(weather?.main.temp)}°C /
          {Math.floor(weather?.main.temp * 1.8 + 32)}°F
        </h2>
      </div>
    </div>
  );
};

export default WeatherBox;
