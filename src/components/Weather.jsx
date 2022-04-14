import { useState, useEffect, Fragment } from "react";

import { fetchWeatherData } from "../services";
import { weatherIcons, INIT_WEATHER_DATA } from "../constants";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState(INIT_WEATHER_DATA);
  const [isLoading, setLoading] = useState(true);

  const getCurrentDay = () =>
    new Date().toLocaleDateString("en-US", { weekday: "short" });

  const getTempCentigrade = (temp) => `${Math.floor(temp - 273.15)}°C`;

  useEffect(() => {
    fetchWeatherData().then((res) => {
      const { weather, main } = res.data;

      const data = {
        description: weather[0].description,
        temp_min: main.temp_min,
        temp_max: main.temp_max,
      };

      setWeatherData({ ...weatherData, ...data });
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="weather-widget">
      <div className="day">
        <h2>{getCurrentDay()}</h2>
      </div>
      <div className="condition">
        {isLoading ? (
          <div className="loader">
            <p>Loading...</p>
          </div>
        ) : (
          <img
            src={weatherIcons[weatherData.description]}
            alt="weather-description"
          />
        )}
      </div>
      <div className="min-max-container">
        {isLoading ? (
          <div className="loader">
            <p>Loading...</p>
          </div>
        ) : (
          <Fragment>
            <div className="min-temp">
              <h3>{getTempCentigrade(weatherData.temp_min)}</h3>
            </div>
            <div className="max-temp">
              <h3>{getTempCentigrade(weatherData.temp_max)}</h3>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
