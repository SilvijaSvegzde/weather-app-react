import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search(props) {
  let [display, setDisplay] = useState(false);
  let [input, setInput] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setDisplay(true);
    setCity(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=46fd4cb2825699c13e293644a9027f76&units=metric`;
    axios.get(url).then(showWeather);
  }

  function cityInput(event) {
    setInput(event.target.value);
  }

  if (display) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Type a city name"
            onChange={cityInput}
          />
          <input type="Submit" value="Search" onChange={cityInput} />
        </form>
        <img src={icon} alt={description} />

        <h2>{city}</h2>

        <ul>
          <li>Temperature: {temperature}°C </li>
          <li>Description: {description} </li>
          <li>Humidity: {humidity}% </li>
          <li>Wind: {wind}km/h </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Type a city name"
            onChange={cityInput}
          />
          <input type="Submit" value="Search" onChange={cityInput} />
        </form>
      </div>
    );
  }
}
