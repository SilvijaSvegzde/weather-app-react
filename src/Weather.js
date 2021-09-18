import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  let [display, setDisplay] = useState(false);
  let [input, setInput] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [highest, setHighest] = useState(null);
  let [lowest, setLowest] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);
  let [country, setCountry] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setDisplay(true);
    setCity(response.data.name);
    setCountry(response.data.sys.country);
    setTemperature(Math.round(response.data.main.temp));
    setHighest(Math.round(response.data.main.temp_max));
    setLowest(Math.round(response.data.main.temp_min));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=46fd4cb2825699c13e293644a9027f76&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function cityInput(event) {
    setInput(event.target.value);
  }

  if (display) {
    return (
      <div>
        <h1>
          {city}, {country}
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
        <div className="container">
          <div className="row">
            <div className="col-6">
              <span className="temperature" id="temperature-value">
                {temperature}
              </span>
              <span className="units"> °C </span>
            </div>
            <div className="col-6">
              <img
                src={icon}
                alt={description}
                className="weather-icon"
                id="icon"
              />
            </div>
          </div>
        </div>

        <h6> {description} </h6>

        <h6 className="description">
          H:<span id="highest">{highest}</span>°C | L:
          <span id="lowest">{lowest}</span>°C
        </h6>
        <h6 className="description">Humidity: {humidity}% </h6>
        <h6 className="description">Wind: {wind}km/h </h6>
      </div>
    );
  } else {
    return (
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
    );
  }
}
