import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import CurrentDate from "./CurrentDate";
import "./WeatherApp.css";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [input, setInput] = useState(null);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      highest: Math.round(response.data.main.temp_max),
      lowest: Math.round(response.data.main.temp_min),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
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
      <div className="container">
        <div className="WeatherApp ">
          <CurrentDate date={weatherData.date} />
          <br />
          <form onSubmit={handleSubmit} id="city-form" className="mt-2">
            <div className="row">
              <div className="col-8 col-md-9">
                <input
                  type="Search"
                  placeholder="Enter a city name..."
                  onChange={cityInput}
                  className="form-control"
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
              <div className="col-4 col-md-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-dark w-100"
                />
              </div>
            </div>
          </form>
          <br />
          <WeatherInfo data={weatherData} />
          <br />
          <br />
          <WeatherForecast coordinates={weatherData.coordinates} />
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
      <div>
        <Loader
          className="text-center"
          type="TailSpin"
          color="#142d4c"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
