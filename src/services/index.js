/* Network invocations for the application */
import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const location = {
  lat: 31.5822,
  lon: 74.3292,
};

export const fetchForecastData = async () =>
  await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
  );
