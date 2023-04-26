import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [error, setError] = useState("");

  function handleResponse(response) {
    const { coordinates, temperature, wind, city, time, condition, status } =
      response.data;

    if (status === "not_found") {
      setError("Enter a valid city...");
    } else {
      setWeatherData({
        ready: true,
        coordinates,
        temperature: temperature.current,
        humidity: temperature?.humidity,
        wind: wind.speed,
        city: city,
        date: new Date(time * 1000),
        iconUrl: condition.icon_url,
        description: condition.description,
      });
      setCity("");
      setError("");
    }
  }

  function search() {
    const apiKey = "b1ffa750faa242739962f64fe0t9dod4";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
                value={city}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <p style={{ color: "#f00" }}>&nbsp; {error}</p>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
