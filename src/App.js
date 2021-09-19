import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

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
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <li className="text-center">
              Last updated: {currentDay}, {hours}:{minutes}
            </li>
            <br />
            <Weather />
          </div>
          <small>
            <a
              href="https://github.com/SilvijaSvegzde/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://fervent-lovelace-c70533.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Silvija Svegzde
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
