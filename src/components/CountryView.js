import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CountryView = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setWeatherData(response.data));
  }, []);

  return (
    <>
      <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital[0]}</p>
        <p>area {country.area}</p>
        <h3>languages</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        <h3>Weather in {country.name.common}</h3>
        <p>
          temperature{" "}
          {weatherData !== null
            ? weatherData.main.temp
            : "acquiring weather data"}
          F
        </p>
        {weatherData !== null && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=""
          />
        )}
        <p>
          wind speed{" "}
          {weatherData !== null
            ? weatherData.wind.speed
            : "acquiring weather data"}
          m/h
        </p>
      </>
    </>
  );
};

export default CountryView;
