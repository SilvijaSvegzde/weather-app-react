import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentDate.getDay()];
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <h6>
            Last updated: {currentDay}, {hours}:{minutes}
          </h6>
          <br />
          <Weather />
        </div>
        <small>
          <a
            href="https://github.com/SilvijaSvegzde/weather-app-by-Silvija"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Silvija Svegzde
        </small>
      </div>
    </div>
  );
}
