import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let now = new Date();

  let allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = now.getDate();
  let month = allMonths[now.getMonth()];
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let weekday = weekdays[now.getDay()];

  let fullDate = `${weekday}, ${month} ${date}, ${hours}:${minutes}`;

  const [city, setCity] = useState(" ");
  const [temperature, setTemperature] = useState(" ");
  const [wind, setWind] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [humidity, setHumidity] = useState(" ");
  const [icon, setIcon] = useState(" ");
  const [message, setMessage] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  let apiKey = "8a869017a9bbe9c440c0fea9e1fa0af6";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setIcon(response.data.weather.icon);
    setMessage(response.data.name);
  }

  function handleSearch(event) {
    event.preventDefault();
    axios.get(url).then(showWeather);
  }

  function showLocalTemp() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiKey = "8a869017a9bbe9c440c0fea9e1fa0af6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div className="Weather">
      <div className="weather-section">
        <ul className="header-cities">
          <li>
            <a href="https://github.com/Franzi1005">Lisbon</a>
          </li>
          <li>
            <a href="https://github.com/Franzi1005">Paris</a>
          </li>
          <li>
            <a href="https://github.com/Franzi1005">Sydney</a>
          </li>
          <li>
            <a href="https://github.com/Franzi1005">San Francisco</a>
          </li>
        </ul>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Type a city..."
            onChange={updateCity}
          ></input>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={showLocalTemp}
          >
            Current
          </button>
        </form>
        <h1>{message}</h1>
        <p>{fullDate} </p>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="weather-data">
                <li>{description}</li>
                <li>Wind: {wind} km/h</li>
                <li>Humidity: {humidity}%</li>
              </ul>
            </div>
            <div className="col">
              {icon}
              <h2>{temperature}°C</h2>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/Franzi1005/react-weather-app-2">
        Open-source code
      </a>{" "}
      by Franziska Schallhorn
    </div>
  );
}
