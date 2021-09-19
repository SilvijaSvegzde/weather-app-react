import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [input, setInput] = useState(null);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      highest: Math.round(response.data.main.temp_max),
      lowest: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    const apiKey = "46fd4cb2825699c13e293644a9027f76";
    const units = "metric";
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function cityInput(event) {
    setInput(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <h1>
          {weatherData.city}, {weatherData.country}
        </h1>
        <form onSubmit={handleSubmit} id="city-form">
          <div className="input-container">
            <input
              type="Search"
              placeholder="Type a city name"
              onChange={cityInput}
              className="input-field"
              id="city-input"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
        </form>
        <div className="weather-temperature">
          <div className="row">
            <div className="col-6">
              <span className="temperature" id="temperature-value">
                {weatherData.temperature}
              </span>
              <span className="units"> °C </span>
            </div>
            <div className="col-6">
              {" "}
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="icon"
                id="icon"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  Highest: <span id="highest">{weatherData.highest}</span>°C{" "}
                </li>
                <li>
                  Lowest: <span id="lowest">{weatherData.lowest}</span>°C
                </li>
              </ul>
            </div>
            <div className="col-6">
              <li> {weatherData.description} </li>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {weatherData.wind}km/h </li>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    function retrievePosition(position) {
      const apiKey = "46fd4cb2825699c13e293644a9027f76";
      const units = "metric";
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let positionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
      axios.get(positionUrl).then(showWeather);
    }

    navigator.geolocation.getCurrentPosition(retrievePosition);
    return (
      <Loader
        className="text-center"
        type="TailSpin"
        color="#142d4c"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    );
  }
}
