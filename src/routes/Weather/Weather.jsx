import { useEffect, useState } from "react";
import './Weather.css'; // Import CSS for styling

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch weather data for both Toronto and Barrie
  const fetchWeather = async () => {
    try {
      const responses = await Promise.all([
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=43.7&longitude=-79.42&current_weather=true&timezone=America%2FToronto`), // Toronto
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=44.4&longitude=-79.7&current_weather=true&timezone=America%2FToronto`)  // Barrie
      ]);
      const data = await Promise.all(responses.map(response => response.json()));

      // Set weather data for both cities
      setWeatherData(data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching weather data");
      setLoading(false);
    }
  };

  // Fetch weather when the component mounts
  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="weather-list">
      {weatherData.map((cityWeather, index) => (
        <div key={index} className="weather-card">
          <h2>Weather in {index === 0 ? "Toronto" : "Barrie"}</h2>
          <p>Condition: {getWeatherCondition(cityWeather.current_weather.weathercode)}</p>
          <p>Temperature: {Math.round(cityWeather.current_weather.temperature)}°C</p>
          <p>Wind Speed: {cityWeather.current_weather.windspeed} km/h</p>
          <p>Wind Direction: {cityWeather.current_weather.winddirection}°</p>
          <p>Humidity: {cityWeather.current_weather.humidity}%</p>
          <p>Time: {new Date(cityWeather.current_weather.time).toLocaleTimeString()}</p>
        </div>
      ))}
    </div>
  );
};

// Function to convert weather code to condition
const getWeatherCondition = (code) => {
  const weatherConditions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    61: "Drizzle: light",
    63: "Drizzle: moderate",
    65: "Drizzle: heavy",
    71: "Rain: light",
    73: "Rain: moderate",
    75: "Rain: heavy",
    80: "Showers: light",
    81: "Showers: moderate",
    82: "Showers: heavy",
    95: "Thunderstorm: light",
    96: "Thunderstorm: moderate",
    99: "Thunderstorm: heavy",
  };

  return weatherConditions[code] || "Unknown";
};

export default Weather;