import { weatherIcons } from "../constants";

export const Weather = ({ description, tempMax, tempMin }) => {
  const getCurrentDay = () =>
    new Date().toLocaleDateString("en-US", { weekday: "short" });

  const getTempCentigrade = (temp) => `${Math.floor(temp - 273.15)}°C`;

  return (
    <div className="weather-widget">
      <div className="day">
        <h2>{getCurrentDay()}</h2>
      </div>
      <div className="condition">
        <img src={weatherIcons[description]} alt="weather-description" />
      </div>
      <div className="min-max-container">
        <div className="min-temp">
          <h3>{getTempCentigrade(tempMin)}</h3>
        </div>
        <div className="max-temp">
          <h3>{getTempCentigrade(tempMax)}</h3>
        </div>
      </div>
    </div>
  );
};
