import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <br />
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <h5 className="text-capitalize"> {props.data.description} </h5>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>
              <span>
                H: <span>{props.data.highest}</span>°C |{" "}
              </span>
              <span>
                L: <span>{props.data.lowest}</span>°C
              </span>
            </li>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind}km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
