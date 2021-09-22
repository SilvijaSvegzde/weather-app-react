import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <WeatherApp />
          </div>
          <small>
            <a
              href="https://github.com/SilvijaSvegzde/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://app.netlify.com/sites/wonderful-mirzakhani-944980/overview"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
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
