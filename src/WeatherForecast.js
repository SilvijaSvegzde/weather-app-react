import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(
    function () {
      setLoaded(false);
    },
    [props.coordinates]
  );

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast ">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7 && index > 0) {
              return (
                <div className="col-4 col-md-2 mb-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "46fd4cb2825699c13e293644a9027f76";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
