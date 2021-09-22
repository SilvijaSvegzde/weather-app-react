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
      <li> {props.data.description} </li>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}% </li>
            <li> Wind: {props.data.wind}km/h </li>
          </ul>
        </div>
      </div>

      <ul>
        <li>
          Highest: <span>{props.data.highest}</span>°C{" "}
        </li>
        <li>
          Lowest: <span>{props.data.lowest}</span>°C
        </li>
      </ul>
    </div>
  );
}
