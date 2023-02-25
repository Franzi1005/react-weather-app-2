import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-section">
        <ul className="header-cities">
          <li>
            <a href="">Lisbon</a>
          </li>
          <li>
            <a href="">Paris</a>
          </li>
          <li>
            <a href="">Sydney</a>
          </li>
          <li>
            <a href="">San Francisco</a>
          </li>
        </ul>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Type a city..."
          ></input>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          <button type="button" className="btn btn-success">
            Current
          </button>
        </form>
        <h1>Sydney</h1>
        <p>Saturday, 25.02.2023, 13:38 </p>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="weather-data">
                <li>Clouds</li>
                <li>Wind: 3 km/h</li>
                <li>Precipitation: 76%</li>
              </ul>
            </div>
            <div className="col">
              <img src="rain.png" alt="Weather Image" />
              <h2>21°C</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
