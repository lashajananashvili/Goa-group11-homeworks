import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState("Tbilisi");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=YOUR_API_KEY`
      );

      if (!response.ok) {
        throw new Error("Invalid city name!");
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [unit]);

  const handleSearch = () => {
    fetchWeather();
  };

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  const getBackground = () => {
    if (!weather) return "default-bg";
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("cloud")) return "cloudy-bg";
    if (condition.includes("rain")) return "rainy-bg";
    if (condition.includes("clear")) return "sunny-bg";
    return "default-bg";
  };

  return (
    <div className={`weather-container ${getBackground()}`}>
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <h3>{Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}</h3>
          <button onClick={toggleUnit}>
            Convert to {unit === "metric" ? "°F" : "°C"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather;
