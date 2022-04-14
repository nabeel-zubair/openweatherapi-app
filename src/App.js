/* Root component for the application */
import { useEffect, useState } from "react";
import { Weather } from "./components";
import { fetchForecastData } from "./services";

const App = () => {
  const [foreCastData, setForecastData] = useState([]);

  useEffect(() => {
    fetchForecastData().then((res) => {
      const data = res.data.list
        .filter(
          (forecastItem) => forecastItem.dt_txt.includes("18:00:00") // FIltering out the forecast at 6PM for each day
        )
        .map((weatherItem) => {
          const { weather, main } = weatherItem;

          return {
            description: weather[0].description,
            temp_min: main.temp_min,
            temp_max: main.temp_max,
          };
        });
      setForecastData(data);
    });
  }, []);

  return (
    <div className="app">
      {foreCastData?.map((weatherData, index) => (
        <Weather
          key={`weather-widget-${index}`}
          description={weatherData.description}
          tempMax={weatherData.temp_max}
          tempMin={weatherData.temp_min}
        />
      ))}
    </div>
  );
};

export default App;
