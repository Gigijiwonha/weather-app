import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const currentLocation = () => {
    console.log("current location");
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("lat,lon>>>", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38a63e7b6d9d409e80c797942ae598c0&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data>>>",data);
    setWeather(data);
  };

  useEffect(() => {
    currentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        <WeatherBox weather = {weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
