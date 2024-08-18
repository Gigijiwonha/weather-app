import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");

  const cities = ["Seoul", "Berlin", "Doha"];
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
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38a63e7b6d9d409e80c797942ae598c0&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data>>>", data);
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38a63e7b6d9d409e80c797942ae598c0&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const handleCurrentLocation = (city) => {
    if (city == "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  useEffect(() => {
    if (city == null) {
      setLoading(true);
      currentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f7ed57" loading={loading} size={150} />
        </div>
      ) : !apiError ? (
        <div className="container">
          <ClipLoader color="#f7ed57" loading={loading} size={150} />
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            selectedCity={city}
            handleCurrentLocation={handleCurrentLocation}
          />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;
